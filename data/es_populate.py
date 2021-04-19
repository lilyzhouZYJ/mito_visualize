from elasticsearch import Elasticsearch
import gzip
import urllib2
import urllib3
import pprint
import csv
import xlrd
import requests
import time


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
                        "gene": { "type": "text"},
                        "pair_base": { "type": "text"},
                        "pair_coordinate": { "type": "integer"},
                        "pop_freq_gnomad_af_hom": { "type": "float"},
                        "pop_freq_gnomad_ac_hom": { "type": "integer"},
                        "pop_freq_gnomad_af_het": { "type": "float"},
                        "pop_freq_gnomad_ac_het": { "type": "integer"},
                        "pop_freq_mitomap": { "type": "float"},
                        "pop_count_mitomap": { "type": "integer"},
                        "pop_freq_helix_af_hom": { "type": "float"},
                        "pop_freq_helix_counts_hom": { "type": "integer"},
                        "pop_freq_helix_af_het": { "type": "float"},
                        "pop_freq_helix_counts_het": { "type": "integer"},
                        "heteroplasmy_gnomad": { "type": "float"},
                        "heteroplasmy_helix": { "type": "text"},
                        "prediction_mitotip": { "type": "float"},
                        "prediction_mitotip_category": { "type": "text"},
                        "prediction_pon_mt_tRNA": { "type": "float"},
                        "prediction_pon_mt_tRNA_category": { "type": "text"},
                        "prediction_hmtvar": { "type": "float"},
                        "prediction_hmtvar_category": { "type": "text"},
                        "disease_status_mitomap": { "type": "text"},
                        "diseases_mitomap": { "type": "text"},
                        "disease_status_clinvar": { "type": "text"},
                        "diseases_clinvar": { "type": "text"},
                        "clinvar_variant_id": { "type": "text"},
                        "haplogroups": { "type": "text"},
                        "count_haplos": { "type": "integer"},
                        "conserv_phylop": { "type": "float"},
                        "conserv_phastcons": { "type": "float"},
                        "post_transcription_modifications": { "type": "text"},
                        "structural_interaction_hmtvar": { "type": "text"},
                        "domain": { "type": "text"}
                    }
                }
            }
        }

        if not es.indices.exists(index=index_name):
            es.indices.create(index=index_name, body=settings)










def populate_all_rrna_vars(es):

    f = open('mt_rnr1_coor_base.tsv')
    f.readline()

    for row in f:

        info = row.split("\n")[0].split("\t")

        coor = info[0]
        ref = info[1]
        gene_name = ["MT-RNR1"]

        possible_alts = [""]

        if ref is 'A':
            possible_alts = ["T","C","G"]
        if ref is 'T':
            possible_alts = ["A","C","G"]
        if ref is 'C':
            possible_alts = ["A","T","G"]
        if ref is 'G':
            possible_alts = ["A","T","C"]

        for alt in possible_alts:

            var_id = 'm.'+coor+ref+'>'+alt

            data = {
                "var_id": var_id,
                "var_coordinate": coor,
                "var_alt": alt,
                "var_ref": ref,
                "gene": gene_name
            }

            for g in gene_name:
                if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                    es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some mt-rnr1 doc was updated: '+var_id)
                else:
                    es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some mt-rnr1 doc was added:'+var_id)

    f = open('mt_rnr2_coor_base.tsv')
    f.readline()

    for row in f:
        info = row.split("\n")[0].split("\t")

        coor = info[0]
        ref = info[1]
        gene_name = ["MT-RNR2"]

        possible_alts = [""]

        if ref is 'A':
            possible_alts = ["T","C","G"]
        if ref is 'T':
            possible_alts = ["A","C","G"]
        if ref is 'C':
            possible_alts = ["A","T","G"]
        if ref is 'G':
            possible_alts = ["A","T","C"]

        for alt in possible_alts:

            var_id = 'm.'+coor+ref+'>'+alt

            data = {
                "var_id": var_id,
                "var_coordinate": coor,
                "var_alt": alt,
                "var_ref": ref,
                "gene": gene_name
            }

            for g in gene_name:
                if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                    es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some mt-rnr2 doc was updated: '+var_id)
                else:
                    es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some mt-rnr2 doc was added:'+var_id)









# MitoTip in silico scores/categories
def populate_in_silico_mitotip(es):

    f = urllib2.urlopen('https://mitomap.org/downloads/mitotip_scores.txt')

    for line in f:

        if line[0].isdigit():
            info = line.split('\t')

            if info[2] is not ':':
                coor = info[0]
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

                var_id = 'm.'+coor+ref+'>'+alt

                #find index
                gene_name = []
                for gene in geneLoc:
                    if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)
 
                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "gene": gene_name,
                    "prediction_mitotip": score,
                    "prediction_mitotip_category": cat,
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was updated with mitotip prediction data: '+var_id)
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was added with mitotip prediction data: '+var_id)









# HmtVar in silico scores/categories and structural interaction result (first batch)
def populate_hmtvar1(es):

    urllib3.disable_warnings() 

    # use MitoTip file to add HmtVar data
    f = urllib2.urlopen('https://mitomap.org/downloads/mitotip_scores.txt')

    count = 0

    for line in f:

        if count > 2000:
            break

        if line[0].isdigit():
            info = line.split('\t')

            if info[2] is not ':':
                coor = info[0]
                ref = info[1]
                alt = info[2]
                var_id = 'm.'+coor+ref+'>'+alt

                # access HmtVar data from api
                link = "https://www.hmtvar.uniba.it/api/main/mutation/"+ref+coor+alt
                response = requests.get(link, verify=False)

                count = count + 1
                time.sleep(5)
                
                hmtvar_score = response.json()["disease_score"]
                hmtvar_cat = response.json()["pathogenicity"]
                hmtvar_struct = response.json()["Annot"]["strutt_3"]
                if hmtvar_struct=="N": hmtvar_struct = "No"
                elif hmtvar_struct=="Y": hmtvar_struct = "Yes"
                else: hmtvar_struct = "N/A"

                #find index
                gene_name = []
                for gene in geneLoc:
                    if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)
 
                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "gene": gene_name,
                    "prediction_hmtvar": hmtvar_score,
                    "prediction_hmtvar_category": hmtvar_cat,
                    "structural_interaction_hmtvar": hmtvar_struct,
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was updated with hmtvar data: '+var_id+'; count: '+str(count))
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was added with hmtvar data: '+var_id+'; count: '+str(count))








# HmtVar in silico scores/categories and structural interaction result (second batch)
def populate_hmtvar2(es):

    urllib3.disable_warnings() 

    # use MitoTip file to add HmtVar data
    f = urllib2.urlopen('https://mitomap.org/downloads/mitotip_scores.txt')

    count = 0

    for line in f:

        if line[0].isdigit():
            info = line.split('\t')

            if info[2] is not ':':
                
                count = count + 1
                if count <= 2000: 
                    continue
                
                coor = info[0]
                ref = info[1]
                alt = info[2]
                var_id = 'm.'+coor+ref+'>'+alt

                # access HmtVar data from api
                link = "https://www.hmtvar.uniba.it/api/main/mutation/"+ref+coor+alt
                response = requests.get(link, verify=False)
                time.sleep(5)
                
                hmtvar_score = response.json()["disease_score"]
                hmtvar_cat = response.json()["pathogenicity"]
                hmtvar_struct = response.json()["Annot"]["strutt_3"]
                if hmtvar_struct=="N": hmtvar_struct = "No"
                elif hmtvar_struct=="Y": hmtvar_struct = "Yes"
                else: hmtvar_struct = "N/A"

                #find index
                gene_name = []
                for gene in geneLoc:
                    if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)
 
                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "gene": gene_name,
                    "prediction_hmtvar": hmtvar_score,
                    "prediction_hmtvar_category": hmtvar_cat,
                    "structural_interaction_hmtvar": hmtvar_struct,
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was updated with hmtvar data: '+var_id+'; count: '+str(count))
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was added with hmtvar data: '+var_id+'; count: '+str(count))












def populate_in_silico_ponmttrna(es):

    #prediction_pon_mt_trna: in silico score from PON-mt-tRNA
    f = urllib2.urlopen('http://structure.bmc.lu.se/PON-mt-tRNA/download/')

    isJunk = True

    for line in f:
        if line.startswith('Ala'):
            isJunk = False

        if not isJunk:
            info = line.split('\t')

            coor = info[1]
            score = info[5]
            cat = info[4].lower()

            #find index
            gene_name = []
            for gene in geneLoc:
                if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
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

                var_id = 'm.'+coor+ref+'>'+alt

                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "gene": gene_name,
                    "prediction_pon_mt_tRNA": score,
                    "prediction_pon_mt_tRNA_category": cat,
                }

                if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                    es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some doc was updated with pon-mt-trna prediction data: '+var_id)
                else:
                    es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
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
                coor = info[1]
                ref = info[2]
                alt = info[3]
                diseases = info[7]
                status = info[8]
 
                var_id = 'm.'+coor+ref+'>'+alt
                #print(var_id)

                #find index
                gene_name = []
                for gene in geneLoc:
                    if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)

                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "gene": gene_name,
                    "diseases_mitomap": diseases,
                    "disease_status_mitomap": status,
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was updated with mitotip disease data: '+var_id)
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
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
                coor = name[ind1+2:ind2-1]

                if coor.isdigit():
                    ref = name[ind2-1]
                    alt = name[ind2+1]

                    status = info[6]
                    diseases = info[13]
                    varid = info[30].split('\n')[0]
 
                    var_id = 'm.'+coor+ref+'>'+alt
                    #print(var_id)

                    #find index
                    gene_name = []
                    for gene in geneLoc:
                        if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                            gene_name.append(gene)
                    #print(gene_name)

                    data = {
                        "var_id": var_id,
                        "var_coordinate": coor,
                        "var_alt": alt,
                        "var_ref": ref,
                        "gene": gene_name,
                        "diseases_clinvar": diseases,
                        "disease_status_clinvar": status,
                        "clinvar_variant_id": varid
                    }

                    for g in gene_name:
                        if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                            es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                            print('some doc was updated with clinvar disease data: '+var_id)
                        else:
                            es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                            print('some doc was added with clinvar disease data: '+var_id)





#population frequency (mitomap)
def populate_population_freq(es):

    #first part of population frequency (mitomap - disease.cgi)
    f = urllib2.urlopen('https://mitomap.org/cgi-bin/disease.cgi')

    for line in f:

        if line[0].isdigit():
            info = line.split('\t')

            if len(info[2])==1 and len(info[3])==1 and len(info[4])==0 and info[3]!=':':
                coor = info[1]
                ref = info[2]
                alt = info[3]
                count = info[10]
                freq = info[11]
 
                var_id = 'm.'+coor+ref+'>'+alt
                #print(var_id)

                #find index
                gene_name = []
                for gene in geneLoc:
                    if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)

                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "gene": gene_name,
                    "pop_freq_mitomap": freq,
                    "pop_count_mitomap": count
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was updated with mitotip disease data: '+var_id)
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        print('some doc was added with mitotip disease data: '+var_id)

    #the other part of population frequency (mitomap - polymorphisms.cgi.txt)
    f = urllib2.urlopen('https://mitomap.org/cgi-bin/polymorphisms.cgi')

    for line in f:

        if line[0].isdigit():
            info = line.split('\t')
            if len(info[2])==1 and len(info[3])==1 and (info[4]=='tRNA' or info[4]=='rRNA') and info[3] is not ':':
                coor = info[1]
                ref = info[2]
                alt = info[3]
                count = info[6]
                freq = info[7]
 
                var_id = 'm.'+coor+ref+'>'+alt
                #print(var_id)

                #find index
                gene_name = []
                for gene in geneLoc:
                    if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                        gene_name.append(gene)
                #print(gene_name)

                data = {
                    "var_id": var_id,
                    "var_coordinate": coor,
                    "var_alt": alt,
                    "var_ref": ref,
                    "gene": gene_name,
                    "pop_freq_mitomap": freq,
                    "pop_count_mitomap": count
                }

                for g in gene_name:
                    if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                        es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        #print('some more doc was updated with mitotip disease data: '+var_id)
                    else:
                        es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                        #print('some more doc was added with mitotip disease data: '+var_id)






#helix - population frequency + max heteroplasmy (HelixMTdb_20200327.tsv)
def populate_helix(es):

    #population frequency in helix
    f = open('HelixMTdb_20200327.tsv')
    read_tsv = csv.DictReader(f, delimiter="\t")

    for row in read_tsv:
        alleles = row['alleles']
        if len(alleles)==9 and (row['feature']=='rRNA_gene' or row['feature']=='tRNA_gene'):
            coor = row['locus'][5:]
            ref = alleles[2]
            alt = alleles[6]
            var_id = 'm.'+coor+ref+'>'+alt

            af_hom = float(row['AF_hom'])*100
            counts_hom = int(row['counts_hom'])
            af_het = float(row['AF_het'])*100
            counts_het = int(row['counts_het'])

            if counts_hom==0: 
                het = str(float(row['max_ARF'])*100)
            if counts_hom>0:
                het = ">99"
            
            #find index
            gene_name = []
            for gene in geneLoc:
                if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                    gene_name.append(gene)
            #print(gene_name)

            data = {
                "var_id": var_id,
                "var_coordinate": coor,
                "var_alt": alt,
                "var_ref": ref,
                "gene": gene_name,
                "pop_freq_helix_af_hom": af_hom,
                "pop_freq_helix_counts_hom": counts_hom,
                "pop_freq_helix_af_het": af_het,
                "pop_freq_helix_counts_het": counts_het,
                "heteroplasmy_helix": het
            }

            for g in gene_name:
                if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                    es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some more doc was updated with helix population freq + heteroplasmy data: '+var_id)
                else:
                    es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some more doc was added with helix population freq + heteroplasmy data: '+var_id)

        else:
            continue





#haplogroups (phylotree, haplogroups & haplogroup count)
def populate_haplogroup(es):

    f = open('phylo_vars_with_haplo_final.txt','r')
    f.readline()

    for line in f:

        info = line.split('\t')

        coor = info[0][1:-1]
        if coor.isdigit():
            ref = info[0][0]
            alt = info[0][-1]
            haplos = info[1]
            count = info[2]

            var_id = 'm.'+coor+ref+'>'+alt
            #print(var_id)

            #find index
            gene_name = []
            for gene in geneLoc:
                if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                    gene_name.append(gene)
            #print(gene_name)

            data = {
                "var_id": var_id,
                "var_coordinate": coor,
                "var_alt": alt,
                "var_ref": ref,
                "gene": gene_name,
                "haplogroups": haplos,
                "count_haplos": count
            }

            for g in gene_name:
                if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                    es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some doc was updated with haplogroup data: '+var_id)
                else:
                    es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some doc was added with haplogroup data: '+var_id)








# gnomad - population frequency + max heteroplasmy 
# (https://gnomad.broadinstitute.org/downloads#v3-mitochondrial-dna under "chrM sites TSV (reduced annotation)"))
def populate_gnomad(es):

    #population frequency in gnomad
    f = urllib2.urlopen('https://storage.googleapis.com/gnomad-public/release/3.1/vcf/genomes/gnomad.genomes.v3.1.sites.chrM.reduced_annotations.tsv')
    read_tsv = csv.DictReader(f, delimiter="\t")

    for row in read_tsv:
        filters = row['filters']
        ref = row['ref']
        alt = row['alt']

        if filters=='PASS' and len(ref)==1 and len(alt)==1:
            coor = row['position']
            var_id = 'm.'+coor+ref+'>'+alt

            af_hom = float(row['AF_hom'])*100  #show in percentage
            ac_hom = row['AC_hom']
            af_het = float(row['AF_het'])*100  #show in percentage
            ac_het = row['AC_het']

            het = float(row['max_observed_heteroplasmy'])*100  #show in percentage

            #find index
            gene_name = []
            for gene in geneLoc:
                if int(coor)>=geneLoc[gene][0] and int(coor)<=geneLoc[gene][1]:
                    gene_name.append(gene)
            #print(gene_name)

            data = {
                "var_id": var_id,
                "var_coordinate": coor,
                "var_alt": alt,
                "var_ref": ref,
                "gene": gene_name,
                "heteroplasmy_gnomad": het,
                "pop_freq_gnomad_af_hom": af_hom,
                "pop_freq_gnomad_ac_hom": ac_hom,
                "pop_freq_gnomad_af_het": af_het,
                "pop_freq_gnomad_ac_het": ac_het,
            }

            for g in gene_name:
                if es.exists(index=g.lower(), doc_type='_doc', id=var_id):
                    es.update(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some more doc was updated with gnomad population freq + heteroplasmy data: '+var_id)
                else:
                    es.index(index=g.lower(), doc_type='_doc', id=var_id, body={'doc':data})
                    print('some more doc was added with gnomad population freq + heteroplasmy data: '+var_id)

        else:
            continue













# post-transcriptional modifications + domains (mito_RNA_modifications_final_withdomains.xlsx)
def populate_post_transcript(es):

    book = xlrd.open_workbook('mito_RNA_modifications_final_withdomains.xlsx')
    sheet = book.sheets()[0]

    for row in sheet.get_rows():
        if row[0].value=="#CHROM":
            continue
        else:            
            coor = int(row[1].value)

            if row[5].value=="YES":
                modification = row[6].value
            else:
                modification = None

            if not row[7].value=="":
                domain = row[7].value
            else:
                domain = None
            
            #find index
            gene_name = []
            for gene in geneLoc:
                if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                    gene_name.append(gene)
            #print(gene_name)

            q = {
                "script":{
                    "source": "ctx._source.post_transcription_modifications = params.modi; ctx._source.domain = params.dom;",
                    "lang": "painless",
                    "params": {"modi": modification, "dom": domain}
                },
                "query":{
                    "bool":{
                        "must": [
                            {"match":{"var_coordinate": coor}}
                        ]
                    }
                }
            }

            for g in gene_name:
                es.update_by_query(index=g.lower(), doc_type='_doc', body = q)
                print('some doc was updated with post-transcription modifications and domain: '+str(coor))










#conservation metrics (phyloP + PhastCons)
def populate_conserv(es):

    #PhyloP (http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phyloP100way/hg38.100way.phyloP100way/)
    f = gzip.open('chrM.phyloP100way.wigFix.gz', 'rt')
    f.readline()

    coor = 0

    for line in f:

        coor += 1
        score = line

        #find index
        gene_name = []
        for gene in geneLoc:
            if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                gene_name.append(gene)
        #print(gene_name)

        q = {
                "script":{
                    "source": "ctx._source.conserv_phylop = params.score",
                    "lang": "painless",
                    "params": {"score": score}
                },
                "query":{
                    "bool":{
                        "must": [
                            {"match":{"var_coordinate": coor}}
                        ]
                    }
                }
            }

        for g in gene_name:
            es.update_by_query(index=g.lower(), doc_type='_doc', body = q)
            print('some doc was updated with conservation phylop data: '+str(coor))


    #phastCons (http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phastCons100way/hg38.100way.phastCons/)
    f = gzip.open('chrM.phastCons100way.wigFix.gz', 'rt')
    f.readline()

    coor = 0

    for line in f:

        coor += 1
        score = line

        #find index
        gene_name = []
        for gene in geneLoc:
            if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                gene_name.append(gene)
        #print(gene_name)

        q = {
                "script":{
                    "source": "ctx._source.conserv_phastcons = params.score",
                    "lang": "painless",
                    "params": {"score": score}
                },
                "query":{
                    "bool":{
                        "must": [
                            {"match":{"var_coordinate": coor}}
                        ]
                    }
                }
            }

        for g in gene_name:
            es.update_by_query(index=g.lower(), doc_type='_doc', body = q)
            print('some doc was updated with conservation phastcons data: '+str(coor))








# populates information on coordinate and base of the pair
def populate_base_pair(es):

    f = open('base_with_pair.tsv')
    read_tsv = csv.DictReader(f, delimiter="\t")

    for row in read_tsv:
        coor = row['coordinate']
        pair_coor = row['pair_coordinate']
        pair_base = row['pair_base']

        if coor=="" or pair_coor=="":
            continue

        coor = int(coor)
        pair_coor = int(pair_coor)

        #find index
        gene_name = []
        for gene in geneLoc:
            if coor>=geneLoc[gene][0] and coor<=geneLoc[gene][1]:
                gene_name.append(gene)
        #print(gene_name)

        q = {
                "script":{
                    "source": "ctx._source.pair_coordinate = params.pair_coor; ctx._source.pair_base = params.pair_base",
                    "lang": "painless",
                    "params": {"pair_coor": pair_coor, "pair_base": pair_base}
                },
                "query":{
                    "bool":{
                        "must": [
                            {"match":{"var_coordinate": coor}}
                        ]
                    }
                }
            }

        for g in gene_name:
            es.update_by_query(index=g.lower(), doc_type='_doc', body = q)
            print('some doc was updated with pair information: '+str(coor))












    
def test_func(es):

    q = {
            "query":{
                "bool":{
                    "must_not":{
                        "exists": {
                            "field": "pop_freq_mitomap"
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

    for n in range(1,5):
        row = f.readline()
        print(row)

def test(es):

    f = open('mt_rnr1_coor_base.tsv')
    f.readline()

    #for n in range(0,10):
     #   print(sheet.row(n).value)
        #for m in range(0, sheet.row_len(0)):
            #print(sheet.cell(n,m).value)

    n = 0

    for row in f:
        if n<5:
            row = row.split("\n")
            info = row[0].split("\t")
            ref = info[1]
            print(ref+"is ref")
            print(ref=="A")

            n = n+1
        else:
            break

def testapi(es):
    response = requests.get("https://www.hmtvar.uniba.it/api/main/mutation/A8344G", verify=False)
    print(response.json()["pathogenicity"])




if __name__ == '__main__':
	es = connect_elasticsearch()

		#testapi(es)
	
        #create_index(es)
        #populate_all_rrna_vars(es)
        populate_in_silico_mitotip(es)
        populate_in_silico_ponmttrna(es)

        # these two use api - slow
        #populate_hmtvar1(es)
        #populate_hmtvar2(es)

        populate_disease_association(es)
        populate_population_freq(es)
        populate_helix(es)
        populate_haplogroup(es)
        populate_gnomad(es)
        populate_post_transcript(es)
        populate_conserv(es)
        populate_base_pair(es)


        #test_func(es)
        #test_gzip('chrM.phastCons100way.wigFix.gz')
        #test(es)
