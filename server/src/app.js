//const express = require('express');
//const graphqlHTTP = require('express-graphql');//middleware function for express to interact with graphql
//const schema = require('./schema/schema');
const cors = require('cors');//allows for cross-origin requests

//const elasticsearch = require('elasticsearch');


import elasticsearch from 'elasticsearch';
import graphqlHTTP from 'express-graphql';
import express from 'express';
import schema from './schema/schema';


const app = express();

//allow cross-origin requests
app.use(cors());

;(async () => {
    try {
        const elastic = new elasticsearch.Client({
            apiVersion: '5.6',
            host: 'http://localhost:9200'
        })

        //bind express with graphql
        app.use('/graphql', graphqlHTTP({
            schema: schema,
            graphiql: true,
            context:{
                database:{
                    elastic
                },
            },
        }));

        //the port that the server runs on
        app.listen(4000, () => {
            console.log('now listening for requests on port 4000');
        });
    } catch (error) {
        console.log(error)
    }
})()