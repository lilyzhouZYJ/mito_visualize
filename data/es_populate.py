from elasticsearch import Elasticsearch
import gzip

dummyData = [
    {
        "gene_name": "MT-TA",
		"var_id": "m.5618A>G",
		"var_coordinate": 5618,
		"var_alt": "A",
		"var_ref": "G",
		"freq_gnomad": "0.1",
		"freq_mitomap": "0.2",
		"heteroplasmy": "0.3",
		"prediction_mitotip": "0.4",
		"prediction_pon_mt_tRNA": "0.5",
		"status_mitomap": "placeholder",
		"status_clinvar": "placeholder",
		"conservation": "placeholder",
		"post_transcription_modifications": "placeholder"
    },
    {
        "gene_name": "MT-TA",
		"var_id": "m.5620T>C",
		"var_coordinate": 5620,
		"var_alt": "T",
		"var_ref": "C",
		"freq_gnomad": "0.1",
		"freq_mitomap": "0.2",
		"heteroplasmy": "0.3",
		"prediction_mitotip": "0.4",
		"prediction_pon_mt_tRNA": "0.5",
		"status_mitomap": "placeholder",
		"status_clinvar": "placeholder",
		"conservation": "placeholder",
		"post_transcription_modifications": "placeholder"
    },
    {
        "gene_name": "MT-TC",
		"var_id": "m.5800G>T",
		"var_coordinate": 5800,
		"var_alt": "G",
		"var_ref": "T",
		"freq_gnomad": "0.1",
		"freq_mitomap": "0.2",
		"heteroplasmy": "0.3",
		"prediction_mitotip": "0.4",
		"prediction_pon_mt_tRNA": "0.5",
		"status_mitomap": "placeholder",
		"status_clinvar": "placeholder",
		"conservation": "placeholder",
		"post_transcription_modifications": "placeholder"
    }]




def connect_elasticsearch():
    es = Elasticsearch([{'host': 'localhost', 'port': 9200}])

    if es.ping():
        print('Yay Connect')
    else:
        print('Awww it could not connect!')
	
    return es



def create_index(es):
   
    for element in dummyData:

        index_name = element.get('gene_name').lower()
        
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
                        "prediction_pon_mt_tRNA": { "type": "float"},
                        "status_mitomap": { "type": "text"},
                        "status_clinvar": { "type": "text"},
                        "conservation": { "type": "text"},
                        "post_transcription_modifications": { "type": "text"},

                    }
                }
            }
        }

        if not es.indices.exists(index=index_name):
            es.indices.create(index=index_name, body=settings)




def populate_data(es):

    for element in dummyData:

        index_name = element.get('gene_name').lower()
        doc_id = element.get('var_id')

        data = {
            "gene_name": element.get('gene_name'),
            "var_id": element.get('var_id'),
            "var_coordinate": element.get('var_coordinate'),
            "var_alt": element.get('var_alt'),
            "var_ref": element.get('var_ref'),
            "freq_gnomad": element.get('freq_gnomad'),
            "freq_mitomap": element.get('freq_mitomap'),
            "heteroplasmy": element.get('heteroplasmy'),
            "prediction_mitotip": element.get('prediction_mitotip'),
            "prediction_pon_mt_tRNA": element.get('prediction_pon_mt_tRNA'),
            "status_mitomap": element.get('status_mitomap'),
            "status_clinvar": element.get('status_clinvar'),
            "conservation": element.get('conservation'),
            "post_transcription_modifications": element.get('post_transcription_modifications'),
        }

        print('some data added')
        es.index(index=index_name, doc_type='_doc', id=doc_id, body=data)






if __name__ == '__main__':
	es = connect_elasticsearch()
	#create_transcript_expression_index(es)	
	#populate_transcript_data('full.ncbiRef.Gene.counts.txt.gz',es)
	
	create_index(es)
	populate_data(es)
