const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//dummy data
var books = [
    {name: 'Name of the Wind', genre:'Fantasy',id:'1'},
    {name: 'The Final Empire', genre:'Fantasy',id:'2'},
    {name: 'The Long Earth', genre:'Sci-Fi',id:'3'}
];

//defining an object type
const BookType = new GraphQLObjectType({
    name: 'Book',
    field: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

//defining root query - how we initially jump into the graph
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType, //the type that we are looking for is BookType
            args: { id: {type: GraphQLString}},  //specifies which arguments should go along with the query for 'book'
            resolve(parent, args){
                //code to get data from source (using args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});