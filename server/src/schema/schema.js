const graphql = require('graphql');
//const _ = require('lodash');

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLSchema,
    GraphQLFloat,
    GraphQLInt,
} = graphql;

const VarType = new GraphQLObjectType({
    name: 'Variant',
    fields: () => ({
	var_id: { type: GraphQLString },
	var_coordinate: { type: GraphQLString },
	var_alt:{ type: GraphQLString },
	var_ref:{ type: GraphQLString },
	freq_gnomad:{ type: GraphQLFloat },
	freq_mitomap:{ type: GraphQLFloat },
	heteroplasmy:{ type: GraphQLFloat },
	prediction_mitotip:{ type: GraphQLFloat },
	prediction_mitotip_category:{ type: GraphQLString },
	prediction_pon_mt_tRNA:{ type: GraphQLFloat },
	prediction_pon_mt_tRNA_category:{ type: GraphQLString },
	disease_status_mitomap:{ type: GraphQLString },
	diseases_mitomap:{ type: GraphQLString },
	diseases_clinvar:{ type: GraphQLString },
	conservation:{ type: GraphQLString },
	post_transcription_modifications:{ type: GraphQLString },
    })
});



export const fetchVarDetails = async (ctx, var_id) => {

    const response = await ctx.database.elastic.search({
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