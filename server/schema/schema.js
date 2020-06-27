const graphql = require('graphql');
const _ = require('lodash');

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

// dummy data
var data = [
    { 
        gene_name: 'MT-TA',
        var_id: 'm.5618A>G',
        information: 'dummy placeholder 5618'
    },
    { 
        gene_name: 'MT-TA',
        var_id: 'm.5620A>G',
        information: 'dummy placeholder 5620'
    }
];

//defining an object type for book
const VarType = new GraphQLObjectType({
    name: 'Variant',
    fields: () => ({    //wrapping fields inside a function so that it would not execute automatically and think that authortype is not defined
        var_id: { type: GraphQLString },
        gene_name: { type: GraphQLString },
        information: { type: GraphQLString },
    })
});

//defining root query - how we initially jump into the graph
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        variant: {
            type: VarType, //the type that we are looking for is BookType
            args: { var_id: {type: GraphQLString}},  //specifies which arguments should go along with the query for 'book'
            resolve(parent, args){
                //code to get data from source (using args.id)
                return _.find(data, { var_id: args.var_id });  //using lodash to look through the books array for a book with id as args.id
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});