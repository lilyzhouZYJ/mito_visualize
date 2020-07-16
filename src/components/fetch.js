//import fetch from 'graphql-fetch'
var fetch = require('graphql-fetch')('http://34.92.100.56:4000/graphql')

export const fetchVarInfo = varId => {
    const argument = `var_id: "${varId}"`

    const query = `{
       variant(${argument}){
            var_id,
            var_coordinate,
            var_alt,
            var_ref,
            freq_gnomad,
            freq_mitomap,
            heteroplasmy,
            prediction_mitotip,
            prediction_mitotip_category,
            prediction_pon_mt_tRNA,
            prediction_pon_mt_tRNA_category,
            disease_status_mitomap,
            diseases_mitomap,
            diseases_clinvar,
            conservation,
            post_transcription_modifications
       }
    }`

    //console.log(query)
    //return fetch(process.env.GNOMAD_API_URL)(query)
    //console.log(fetch(query));
    return fetch(query)
}