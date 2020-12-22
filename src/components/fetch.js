//import fetch from 'graphql-fetch'
var fetch = require('graphql-fetch')('http://35.215.159.153:4000/graphql')



export const fetchVarInfo = varId => {

    const argument = `var_id: "${varId}"`

    const query = `{
       variant(${argument}){
            var_id,
            var_coordinate,
            var_alt,
            var_ref,
            gene,
            pair_base,
            pair_coordinate,
            pop_freq_gnomad_af_hom,
            pop_freq_gnomad_ac_hom,
            pop_freq_gnomad_af_het,
            pop_freq_gnomad_ac_het,
            pop_freq_mitomap,
            pop_freq_helix_af_hom,
            pop_freq_helix_counts_hom,
            pop_freq_helix_af_het,
            pop_freq_helix_counts_het,
            pop_count_mitomap,
            heteroplasmy_gnomad,
            heteroplasmy_helix,
            prediction_mitotip,
            prediction_mitotip_category,
            prediction_pon_mt_tRNA,
            prediction_pon_mt_tRNA_category,
            prediction_hmtvar,
            prediction_hmtvar_category,
            disease_status_mitomap,
            diseases_mitomap,
            disease_status_clinvar,
            diseases_clinvar,
            clinvar_variant_id,
            haplogroups,
            count_haplos,
            conserv_phylop,
            conserv_phastcons,
            post_transcription_modifications,
            domain
       }
    }`

    //console.log(query)
    //return fetch(process.env.GNOMAD_API_URL)(query)
    //console.log(fetch(query));
    return fetch(query)
}





export const fetchGeneInfo = geneName => {

    //console.log('fetchgeneinfo in fetch')
    const argument = `gene: "${geneName}"`

    const query = `{
       gene(${argument}){
            var_id,
            var_coordinate,
            var_alt,
            var_ref,
            gene,
            pair_base,
            pair_coordinate,
            pop_freq_gnomad_af_hom,
            pop_freq_gnomad_ac_hom,
            pop_freq_gnomad_af_het,
            pop_freq_gnomad_ac_het,
            pop_freq_mitomap,
            pop_count_mitomap,
            pop_freq_helix_af_hom,
            pop_freq_helix_counts_hom,
            pop_freq_helix_af_het,
            pop_freq_helix_counts_het,
            heteroplasmy_gnomad,
            heteroplasmy_helix,
            prediction_mitotip,
            prediction_mitotip_category,
            prediction_pon_mt_tRNA,
            prediction_pon_mt_tRNA_category,
            prediction_hmtvar,
            prediction_hmtvar_category,
            disease_status_mitomap,
            diseases_mitomap,
            disease_status_clinvar,
            diseases_clinvar,
            clinvar_variant_id,
            haplogroups,
            count_haplos,
            conserv_phylop,
            conserv_phastcons,
            post_transcription_modifications,
            domain
       }
    }`

    //console.log(query)
    //return fetch(process.env.GNOMAD_API_URL)(query)
    //console.log(fetch(query));
    return fetch(query)
}


/*
export const fetchCoorInfo = varCoor => {
    const argument = `var_coordinate: ${varCoor}`

    const query = `{
       coordinate(${argument}){
            var_id,
            var_coordinate,
            var_alt,
            var_ref,
            gene,
            pair_base,
            pair_coordinate,
            pop_freq_gnomad_af_hom,
            pop_freq_gnomad_ac_hom,
            pop_freq_gnomad_af_het,
            pop_freq_gnomad_ac_het,
            pop_freq_mitomap,
            pop_count_mitomap,
            pop_freq_helix_af_hom,
            pop_freq_helix_counts_hom,
            pop_freq_helix_af_het,
            pop_freq_helix_counts_het,
            heteroplasmy_gnomad,
            heteroplasmy_helix,
            prediction_mitotip,
            prediction_mitotip_category,
            prediction_pon_mt_tRNA,
            prediction_pon_mt_tRNA_category,
            prediction_hmtvar,
            prediction_hmtvar_category,
            disease_status_mitomap,
            diseases_mitomap,
            disease_status_clinvar,
            diseases_clinvar,
            clinvar_variant_id,
            haplogroups,
            count_haplos,
            conserv_phylop,
            conserv_phastcons,
            post_transcription_modifications,
            domain
       }
    }`

    return fetch(query)
}
*/