const graphql = require('graphql');
//const _ = require('lodash');

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLSchema,
    GraphQLFloat,
    GraphQLInt,
} = graphql;

/*
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
*/



const VarType = new GraphQLObjectType({
    name: 'Variant',
    fields: () => ({
        gene_name: { type: GraphQLString },
	var_id: { type: GraphQLString },
	var_coordinate: { type: GraphQLString },
	var_alt:{ type: GraphQLString },
	var_ref:{ type: GraphQLString },
	freq_gnomad:{ type: GraphQLFloat },
	freq_mitomap:{ type: GraphQLFloat },
	heteroplasmy:{ type: GraphQLFloat },
	prediction_mitotip:{ type: GraphQLFloat },
	prediction_pon_mt_tRNA:{ type: GraphQLFloat },
	status_mitomap:{ type: GraphQLString },
	status_clinvar:{ type: GraphQLString },
	conservation:{ type: GraphQLString },
	post_transcription_modifications:{ type: GraphQLString },
    })
});



export const fetchVarDetails = async (ctx, var_id) => {

    const response = await ctx.database.elastic.search({
        //index: gene_name.toLowerCase(),
        type: '_doc',
        size: 1,
        body: {
            query : {
                query_string: {
                    default_field: 'var_id',
                    query: var_id
                }
            }
        },
    })

    const doc = response.hits.hits[0]
    //console.log(doc)

    return doc ? doc._source : null // eslint-disable-line no-underscore-dangle
}



//defining root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        variant: {
            type: VarType,
            args: { var_id: {type: GraphQLString}},
            resolve(parent, args, ctx){
                return fetchVarDetails(ctx, args.var_id)
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQuery
});

export default schema