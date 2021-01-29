const shapeExpression = () => {

    //console.log("In function")

    return esHit => {
        // eslint-disable-next-line no-underscore-dangle
        const geneData = esHit._source
        //console.log(geneData)
    
	return {
	    var_id: geneData.var_id,
            var_coordinate: geneData.var_coordinate,
            var_alt: geneData.var_alt,
            var_ref: geneData.var_ref,
            gene: geneData.gene,
            pair_base: geneData.pair_base,
            pair_coordinate: geneData.pair_coordinate,
            pop_freq_gnomad_af_hom: geneData.pop_freq_gnomad_af_hom,
            pop_freq_gnomad_ac_hom: geneData.pop_freq_gnomad_ac_hom,
            pop_freq_gnomad_af_het: geneData.pop_freq_gnomad_af_het,
            pop_freq_gnomad_ac_het: geneData.pop_freq_gnomad_ac_het,
            pop_freq_mitomap: geneData.pop_freq_mitomap,
            pop_count_mitomap: geneData.pop_count_mitomap,
            pop_freq_helix_af_hom: geneData.pop_freq_helix_af_hom,
            pop_freq_helix_counts_hom: geneData.pop_freq_helix_counts_hom,
            pop_freq_helix_af_het: geneData.pop_freq_helix_af_het,
            pop_freq_helix_counts_het: geneData.pop_freq_helix_counts_het,
            heteroplasmy_gnomad: geneData.heteroplasmy_gnomad,
            heteroplasmy_helix: geneData.heteroplasmy_helix,
            prediction_mitotip: geneData.prediction_mitotip,
            prediction_mitotip_category: geneData.prediction_mitotip_category,
            prediction_pon_mt_tRNA: geneData.prediction_pon_mt_tRNA,
            prediction_pon_mt_tRNA_category: geneData.prediction_pon_mt_tRNA_category,
            prediction_hmtvar: geneData.prediction_hmtvar,
            prediction_hmtvar_category: geneData.prediction_hmtvar_category,
            disease_status_mitomap: geneData.disease_status_mitomap,
            diseases_mitomap: geneData.diseases_mitomap,
            disease_status_clinvar: geneData.disease_status_clinvar,
            diseases_clinvar: geneData.diseases_clinvar,
            clinvar_variant_id: geneData.clinvar_variant_id,
            haplogroups: geneData.haplogroups,
            count_haplos: geneData.count_haplos,
            conserv_phylop: geneData.conserv_phylop,
            conserv_phastcons: geneData.conserv_phastcons,
            post_transcription_modifications: geneData.post_transcription_modifications,
            structural_interaction_hmtvar: geneData.structural_interaction_hmtvar,
            domain: geneData.domain
	}
    }

}

export default shapeExpression