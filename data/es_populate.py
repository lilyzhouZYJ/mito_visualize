from elasticsearch import Elasticsearch
import gzip
import urllib2
import pprint

geneLoc = {
    'MT-TF': [577,647],
    'MT-RNR1': [648,1601],
    'MT-TV':  [1602,1670],
    'MT-RNR2':[1671, 3229],
    'MT-TL1':[3230, 3304],
    'MT-TI':[4263,4331],
    'MT-TQ':[4329,4400],
    'MT-TM':[4402,4469],
    'MT-TW':[5512,5579],
    'MT-TA':[5587,5655],
    'MT-TN':[5657,5729],
    'MT-TC':[5761,5826],
    'MT-TY':[5826,5891],
    'MT-TS1':[7446,7514],
    'MT-TD':[7518,7585],
    'MT-TK':[8295,8364],
    'MT-TG':[9991,10058],
    'MT-TR':[10405,10469],
    'MT-TH':[12138,12206],
    'MT-TS2': [12207,12265],
    'MT-TL2': [12266,12336],
    'MT-TE': [14674,14742],
    'MT-TT': [15888,15953],
    'MT-TP': [15956,16023],
}

reverseStrand = ["MT-TQ","MT-TA","MT-TN","MT-TC","MT-TY","MT-TS1","MT-TE","MT-TP"];



def connect_elasticsearch():
    es = Elasticsearch([{'host': 'localhost', 'port': 9200}])

    if es.ping():
        print('Yay Connect')
    else:
        print('Awww it could not connect!')
	
    return es



def create_index(es):

    for gene in geneLoc:

        index_name = gene.lower()
        
        settings = {
            "settings": {
                "number_of_shards": 1,
                "number_of_replicas": 0
            },
            "mappings": {
                "_doc": {
                    "properties": {
                        "gene_name": { "type": "text"},
                        "var_id": { "type": "keyword"},
                        "var_coordinate": { "type": "integer"},
                        "var_alt": { "type": "text"},
                        "var_ref": { "type": "text"},
                        "freq_gnomad": { "type": "float"},
                        "freq_mitomap": { "type": "float"},
                        "heteroplasmy": { "type": "float"},
                        "prediction_mitotip": { "type": "float"},
                        "prediction_mitotip_category": { "type": "text"},
                        "prediction_pon_mt_tRNA": { "type": "float"},
                        "prediction_pon_mt_tRNA_category": { "type": "text"},
                        "disease_status_mitomap": { "type": "text"},
                        "diseases_mitomap": { "type": "text"},
                        "disease_status_clinvar": { "type": "text"},
                        "diseases_clinvar": { "type": "text"},
                        "clinvar_variant_id": { "type": "integer"},
                        "conservation": { "type": "text"},
                        "post_transcription_modifications": { "type": "text"},

                    }
                }
            }
        }

        if not es.indices.exists(index=index_name):
            es.indices.create(index=index_name, body=settings)




def populate_in_silico(es):

    #prediction_mitotip: in silico scores from MitoTip
    #f = open('mitotip_scores.txt','r')
    f = urllib2.urlopen('https://mitomap.org/downloads/mitotip_scores.txt')

    for line in f:

        if line[0].isdigit():
            info = line.split('\t')

            if info[2] is not ':':
                coor = int(info[0])
                ref = info[1]
                alt = info[2]
                score = float(info[3])
                if score>16.25:
                    cat = 'likely pathogenic'
                elif score<=16.25 and score>12.66:
                    cat = 'possibly pathogenic'
                elif score<=12.66 and score>8.44:
                    cat = 'possibly benign'
                else:
                    cat = 'likely benign'
                #print(cat)

                var_id = 'm.'+info[0]+ref+'>'+alt
                #print(var_id)

                #find index
                gene_name = []
                for gene in geneLoc:
                    if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)
 
                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "prediction_mitotip": score,
                    "prediction_mitotip_category": cat
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was updated with mitotip prediction data: '+var_id)
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body=data)
                        print('some doc was added with mitotip prediction data: '+var_id)

    #prediction_pon_mt_trna: in silico score from PON-mt-tRNA
    f = urllib2.urlopen('http://structure.bmc.lu.se/PON-mt-tRNA/download/')

    isJunk = True

    for line in f:
        if line.startswith('Ala'):
            isJunk = False

        if not isJunk:
            info = line.split('\t')

            coor = int(info[1])
            score = float(info[5])
            cat = info[4].lower()

            #find index
            gene_name = []
            for gene in geneLoc:
                if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                    gene_name.append(gene)
            #print(gene_name)

            for g in gene_name:
                if g in reverseStrand:
                    if info[2] is 'A':
                        ref = 'T'
                    elif info[2] is 'T':
                        ref = 'A'
                    elif info[2] is 'C':
                        ref = 'G'
                    elif info[2] is 'G':
                        ref = 'C'

                    if info[3] is 'A':
                        alt = 'T'
                    elif info[3] is 'T':
                        alt = 'A'
                    elif info[3] is 'C':
                        alt = 'G'
                    elif info[3] is 'G':
                        alt = 'C'
                else:
                    ref = info[2]
                    alt = info[3]

                var_id = 'm.'+info[1]+ref+'>'+alt

                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "prediction_pon_mt_tRNA": score,
                    "prediction_pon_mt_tRNA_category": cat,
                }

                if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                    es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some doc was updated with pon-mt-trna prediction data: '+var_id)
                else:
                    es.index(index=g.lower(), doc_type='_doc', id=var_id, body=data)
                    print('some doc was added with pon-mt-trna prediction data: '+var_id)

                #if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                #    print("deleted stuff")
                #    es.delete(index=g.lower(), doc_type='_doc', id=var_id)





#disease association 
def populate_disease_association(es):

    #mitomap, disease.cgi, "status" and "disease"
    f = urllib2.urlopen('https://mitomap.org/cgi-bin/disease.cgi')

    for line in f:

        if line[0].isdigit():
            info = line.split('\t')

            if len(info[2])==1 and len(info[3])==1 and len(info[4])==0 and info[3]!=':':
                coor = int(info[1])
                ref = info[2]
                alt = info[3]
                diseases = info[7]
                status = info[8]
 
                var_id = 'm.'+info[1]+ref+'>'+alt
                #print(var_id)

                #find index
                gene_name = []
                for gene in geneLoc:
                    if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)

                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "diseases_mitomap": diseases,
                    "disease_status_mitomap": status,
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was updated with mitotip disease data: '+var_id)
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body=data)
                        print('some doc was added with mitotip disease data: '+var_id)

    #clinvar, variant_summary.txt.gz, "ClinicalSignificance" and "PhenotypeList"
    f = gzip.open('variant_summary.txt.gz', 'rt')

    for line in f:
    #for n in range(1,5000):
    #    line = f.readline()

        if line[0].isdigit():
            #print(line)
            info = line.split('\t')
            name = info[2]

            if info[1]=="single nucleotide variant" and 'm.' in name and '>' in name:
                #print(line)
                ind1 = name.index('m.')
                ind2 = name.index('>')
                coorStr = name[ind1+2:ind2-1]

                if coorStr.isdigit():
                    coorInt = int(coorStr)
                    ref = name[ind2-1]
                    alt = name[ind2+1]

                    status = info[6]
                    diseases = info[13]
                    varid = info[30].split('\n')[0]
 
                    var_id = 'm.'+coorStr+ref+'>'+alt
                    #print(var_id)

                    #find index
                    gene_name = []
                    for gene in geneLoc:
                        if coorInt>=geneLoc[gene][0] and coorInt<=geneLoc[gene][1]:
                            gene_name.append(gene)
                    #print(gene_name)

                    data = {
                        "var_id": var_id,
                        "var_coordinate": coorInt,
                        "var_alt": alt,
                        "var_ref": ref,
                        "diseases_clinvar": diseases,
                        "disease_status_clinvar": status,
                        "clinvar_variant_id": varid
                    }

                    for g in gene_name:
                        if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                            es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                            print('some doc was updated with clinvar disease data: '+var_id)
                        else:
                            es.index(index=g.lower(), doc_type='_doc', id=var_id, body=data)
                            print('some doc was added with clinvar disease data: '+var_id)





#population frequency (mitomap)
def populate_population_freq(es):

    #part of population frequency (mitomap - disease.cgi)
    f = urllib2.urlopen('https://mitomap.org/cgi-bin/disease.cgi')

    for line in f:

        if line[0].isdigit():
            info = line.split('\t')

            if len(info[2])==1 and len(info[3])==1 and len(info[4])==0 and info[3]!=':':
                coor = int(info[1])
                ref = info[2]
                alt = info[3]
                freq = info[11]
 
                var_id = 'm.'+info[1]+ref+'>'+alt
                #print(var_id)

                #find index
                gene_name = []
                for gene in geneLoc:
                    if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)

                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "freq_mitomap": freq
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was updated with mitotip disease data: '+var_id)
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body=data)
                        print('some doc was added with mitotip disease data: '+var_id)

    #the other part of population frequency (mitomap - polymorphisms.cgi.txt)
    f = urllib2.urlopen('https://mitomap.org/cgi-bin/polymorphisms.cgi')

    for line in f:

        if line[0].isdigit():
            info = line.split('\t')
            if len(info[2])==1 and len(info[3])==1 and (info[4]=='tRNA' or info[4]=='rRNA') and info[3] is not ':':
                coor = int(info[1])
                ref = info[2]
                alt = info[3]
                freq = info[7]
 
                var_id = 'm.'+info[1]+ref+'>'+alt
                #print(var_id)

                #find index
                gene_name = []
                for gene in geneLoc:
                    if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)

                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "freq_mitomap": freq
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        #print('some more doc was updated with mitotip disease data: '+var_id)
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body=data)
                        #print('some more doc was added with mitotip disease data: '+var_id)





    
def test_func(es):

    q = {
            "query":{
                "bool":{
                    "must_not":{
                        "exists": {
                            "field": "freq_mitomap"
                        }
                    }
                }
            }
        }

    indices = []
    result = es.search(index='mt-ta', doc_type='_doc', body=q)
    for hit in result['hits']['hits']:
        indices.append(hit['_id'])
    print(indices)

def test_gzip(file):
    f = gzip.open(file, 'rt')

    for n in range(1,3):
        row = f.readline().split('\t')
        print(row)

if __name__ == '__main__':
	es = connect_elasticsearch()
	
	#create_index(es)
        #populate_in_silico(es)
        populate_disease_association(es)
        #populate_population_freq(es)
        #test_func(es)
        #test_gzip('variant_summary.txt.gz')
