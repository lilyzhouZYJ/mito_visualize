const graphql = require('graphql');
//const _ = require('lodash');

import { fetchAllSearchResults } from '../elasticsearch'
import shapeExpression from '../shapeExpression'

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLSchema,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
} = graphql;




const VarType = new GraphQLObjectType({
    name: 'Variant',
    fields: () => ({
	var_id: { type: GraphQLString },
	var_coordinate: { type: GraphQLInt },
	var_alt:{ type: GraphQLString },
	var_ref:{ type: GraphQLString },
	gene:{ type: new GraphQLList(GraphQLString) },
        pair_base: { type: GraphQLString },
        pair_coordinate: { type: GraphQLInt },
        pop_freq_gnomad_af_hom: { type: GraphQLFloat },
        pop_freq_gnomad_ac_hom: { type: GraphQLInt },
        pop_freq_gnomad_af_het: { type: GraphQLFloat },
        pop_freq_gnomad_ac_het: { type: GraphQLInt },
	pop_freq_mitomap:{ type: GraphQLFloat },
	pop_count_mitomap:{ type: GraphQLInt },
	pop_freq_helix_af_hom:{ type: GraphQLFloat },
	pop_freq_helix_counts_hom:{ type: GraphQLInt },
	pop_freq_helix_af_het:{ type: GraphQLFloat },
	pop_freq_helix_counts_het:{ type: GraphQLInt },
	heteroplasmy_gnomad:{ type: GraphQLFloat },
	heteroplasmy_helix:{ type: GraphQLString },
	prediction_mitotip:{ type: GraphQLFloat },
	prediction_mitotip_category:{ type: GraphQLString },
	prediction_pon_mt_tRNA:{ type: GraphQLFloat },
	prediction_pon_mt_tRNA_category:{ type: GraphQLString },
	prediction_hmtvar:{ type: GraphQLFloat },
	prediction_hmtvar_category:{ type: GraphQLString },
	disease_status_mitomap:{ type: GraphQLString },
	diseases_mitomap:{ type: GraphQLString },
	disease_status_clinvar:{ type: GraphQLString },
	diseases_clinvar:{ type: GraphQLString },
	clinvar_variant_id:{ type: GraphQLString },
	haplogroups:{ type: GraphQLString },
	count_haplos: { type: GraphQLInt },
	conserv_phylop:{ type: GraphQLFloat },
	conserv_phastcons:{ type: GraphQLFloat },
	post_transcription_modifications:{ type: GraphQLString },
        structural_interaction_hmtvar:{ type: GraphQLString },
	domain:{ type: GraphQLString },
    })
});





export const fetchVarDetails = async (ctx, var_id) => {

    //console.log('fetching variant details')

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





export const fetchGeneDetails = async (ctx, geneName) => {

    //console.log('fetch gene details');

    const response = await fetchAllSearchResults(ctx.database.elastic, {
        type: '_doc',
        index: geneName.toLowerCase(),
        body: {
            'query' : {
                'match_all': {}
            }
        },
    })

    //console.log(response);
    const data = response.map(shapeExpression())

    return data;

    /*
    const docs = response.hits.hits;
    if(docs[0]){
        const doc = [];
        for(var i = 0; i<docs.length; i++){
            doc.push(docs[i]._source);
        }
        return doc;
    }
    return null;*/
}


/*
export const fetchCoorDetails = async (ctx, var_coordinate) => {

    const response = await ctx.database.elastic.search({
        type: '_doc',
        body: {
            'query' : {
                'match': {'var_coordinate': var_coordinate}
            }
        },
    })

    const docs = response.hits.hits;
    if(docs[0]){
        const doc = [];
        for(var i = 0; i<docs.length; i++){
            doc.push(docs[i]._source);
        }
        return doc;
    }
    return null;

}
*/


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
        },
//        coordinate: {
//            type: new GraphQLList(VarType),
//            args: { var_coordinate: {type: GraphQLInt} },
//            resolve(parent, args, ctx){
//                return fetchCoorDetails(ctx, args.var_coordinate)
//            }
//        }
        gene: {
            type: new GraphQLList(VarType),
            args: { gene: {type: GraphQLString} },
            resolve(parent, args, ctx){
                return fetchGeneDetails(ctx, args.gene)
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQuery
});

export default schema