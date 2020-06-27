const express = require('express');
const graphqlHTTP = require('express-graphql');//middleware function for express to interact with graphql
const schema = require('./schema/schema');

const app = express();

//when the user goes to this route, express will interact with graphql
app.use('/graphql', graphqlHTTP({
    schema: schema
}))

//the port that the server runs on
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})