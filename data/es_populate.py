from elasticsearch import Elasticsearch
import gzip

dummyData = [
    {
        "gene_name": "MT-TA",
        "var_id": "m.5618A>G",
        "information": "hi this is some information"
    },
    {
        "gene_name": "MT-TC",
        "var_id": "m.5800A>C",
        "information": "hi this is some more information"
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
                        "var_id": { "type": "text"},
                        "information": {"type": "text"}
                    }
                }
            }
        }

        es.indices.create(index=index_name, body=settings)




def populate_data(es):

    for element in dummyData:

        index_name = element.get('gene_name').lower()
        doc_id = element.get('var_id')

        data = {
            "gene_name": element.get('gene_name'),
            "var_id": element.get('var_id'),
            "information": element.get('information')
        }

        print('some data added')
        es.index(index=index_name, doc_type='_doc', id=doc_id, body=data)






if __name__ == '__main__':
	es = connect_elasticsearch()
	#create_transcript_expression_index(es)	
	#populate_transcript_data('full.ncbiRef.Gene.counts.txt.gz',es)
	
	#create_index(es)
	populate_data(es)
