See http://mitovisualize.org/.

## Dependencies

- [Create React App](https://github.com/facebook/create-react-app)
- [Node.js](https://nodejs.org/)
- [Elasticsearch](https://www.elastic.co/)
- [GraphQL](https://graphql.org/)

## Populate database

    cd mito_visualize/server
    python es_populate.py

## Run

Elasticsearch:

    cd elasticsearch-6.4.0
    ./start_elasticsearch.sh

Server:
    
    cd mito_visualize/server
    ./start.sh

Front End:
    
    cd mito_visualize
    npm start

## Updates

    cd mito_visualize
    ./build.sh