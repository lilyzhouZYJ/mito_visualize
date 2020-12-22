import React from 'react';
import { fetchVarInfo } from './fetch.js'

class VarInfoTable extends React.Component{

    state = {
        varData: null,
        loadError: null,
    }

    loadData(){
        this.setState({loadError:null, varData:null});
        fetchVarInfo(this.props.variant).then(response => {
            //console.log(response)
            var varData = response.data.variant;
            if(!varData) {this.setState({loadError: "Variant not found"});}
            else {this.setState({loadError:null, varData:varData});}
            //console.log(this.state.varData);
        })
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        var newVar = this.props.variant;
        if(newVar !== prevProps.variant){
            this.loadData();
        }
    }

    checkboxChanged = () => {
        if(document.getElementById('expanded').checked){
            document.getElementById('expanded-label').innerHTML = 'Show more';
        } else {
            document.getElementById('expanded-label').innerHTML = 'Show less';
        }
    }    

    render() {   
    
        var variant = this.props.variant;  
        var data = this.state.varData;
        var loadError = this.state.loadError; 

        if(data){

            var haplo = data.haplogroups==null? "None" : data.haplogroups;
           
            var posttrans = data.post_transcription_modifications;
            var posttransLink = this.props.rnaType=="tRNA" ? "https://pubmed.ncbi.nlm.nih.gov/32859890/" : "https://pubmed.ncbi.nlm.nih.gov/30529456/"

            var mitomapLink = 'https://mitomap.org/cgi-bin/search_allele?variant='+variant.substring(2);
            var clinvarLink = data.clinvar_variant_id==null ? '' : 'https://www.ncbi.nlm.nih.gov/clinvar/variation/' + data.clinvar_variant_id;
            var gnomadLink = 'https://gnomad.broadinstitute.org/variant/M-'+data.var_coordinate+'-'+data.var_ref+'-'+data.var_alt+"?dataset=gnomad_r3";
            
            return(
                <table id="var-info-table">
                    <tbody>
                        <tr>
                            <td class='left-col'>Population frequency<br/>& (allele count)
                                <div class="help-tip">
                                    <p>For gnomAD and HelixMTdb, frequency and counts are shown for homoplasmic ('hom') and heteroplasmic ('het') variants separately.<br/>
                                       - <a href="https://gnomad.broadinstitute.org/" target="_blank">gnomAD</a>: variants identified from whole genome sequencing data, excluding individuals known to have severe pediatric disease.<br/>
                                       - <a href="https://www.mitomap.org/foswiki/bin/view/MITOMAP/GBFreqInfo" target="_blank">MITOMAP</a>: variants present in GenBank sequence data, may include individuals with disease. <br/>
                                       - <a href="https://www.helix.com/pages/mitochondrial-variant-database" target="_blank">HelixMTdb</a>: variants identified from saliva samples sequenced by Helix's proprietary exome including mtDNA, disease status unknown.</p>
                                </div>
                            </td>
                            <td>gnomAD: <a href={gnomadLink} target="_blank">{data.pop_freq_gnomad_af_hom!==null ?
                                             "hom - "+data.pop_freq_gnomad_af_hom.toPrecision(3)+"% ("+data.pop_freq_gnomad_ac_hom+") / het - "+data.pop_freq_gnomad_af_het.toPrecision(3)+"% ("+data.pop_freq_gnomad_ac_het+")"
                                             : "0% (0)"
                                        }</a><br/>
                                MITOMAP: <a href={mitomapLink} target="_blank">{data.pop_freq_mitomap!==null ? 
                                             data.pop_freq_mitomap+"% ("+data.pop_count_mitomap+")"
                                             : "0% (0)"
                                         }</a><br/>
                                <a href='https://www.helix.com/pages/mitochondrial-variant-database' target="_blank">HelixMTdb</a>: {data.pop_freq_helix_af_hom!==null ? 
                                            'hom - '+data.pop_freq_helix_af_hom.toPrecision(3)+'% ('+data.pop_freq_helix_counts_hom+') / het - '+data.pop_freq_helix_af_het.toPrecision(3)+'% ('+data.pop_freq_helix_counts_het+')'
                                             : "0% (0)"
                                         }
                            </td>
                        </tr>
                        <tr>
                            <td class='left-col'>Maximum heteroplasmy
                                <div class="help-tip">
                                    <p>Range 0-100%; heteroplasmy information not available from MITOMAP</p>
                                </div>
                            </td>
                            <td>gnomAD: <a href={gnomadLink} target="_blank">{data.heteroplasmy_gnomad!==null ?
                                            data.heteroplasmy_gnomad.toPrecision(3)+"%"
                                            : "0%"
                                        }</a><br/>
                                <a href='https://www.helix.com/pages/mitochondrial-variant-database' target="_blank">HelixMTdb</a>: 
                                         {data.heteroplasmy_helix==null && " 0%"}
                                         {data.heteroplasmy_helix!==null && data.heteroplasmy_helix!==">99" && " "+parseFloat(data.heteroplasmy_helix).toPrecision(3)+"%"}
                                         {data.heteroplasmy_helix==">99" && " "+data.heteroplasmy_helix+"%"}
                            </td>
                        </tr>
                        {this.props.rnaType=="tRNA" &&
                            <tr>
                                <td class='left-col'>In silico predictions<br/>(score & interpretation)</td>
                                <td><a href='https://www.mitomap.org/MITOMAP/MitoTipScores' target="_blank">MitoTip</a>{': '+(Math.round(data.prediction_mitotip*10)/10).toFixed(1)+" - "+data.prediction_mitotip_category}<br/><a href='http://structure.bmc.lu.se/PON-mt-tRNA/about.html/' target="_blank">PON-mt-tRNA</a>{': '+(Math.round(data.prediction_pon_mt_tRNA*10)/10).toFixed(1)+" - "+data.prediction_pon_mt_tRNA_category}</td>
                            </tr>
                        }
                        <tr>
                            {(data.disease_status_clinvar!==null || data.disease_status_mitomap!==null)
                                ? <td class='left-col'>Disease association status</td>
                                : <td class='left-col'>Disease association</td>
                            }
                            <td>
                                MitoMap: <a href={mitomapLink} target="_blank">
                                             {data.disease_status_mitomap==null && "None"}
                                             {data.disease_status_mitomap!==null && data.disease_status_mitomap=="Cfrm" && "Confirmed"}
                                             {data.disease_status_mitomap!== null && data.disease_status_mitomap!=="Cfrm" && data.disease_status_mitomap}
                                         </a>
                                {' / ClinVar: '}{data.disease_status_clinvar!==null ?
                                                    <a href={clinvarLink} target="_blank">{data.disease_status_clinvar}</a>
                                                    : "None"
                                                }
                                <br/>
                                {(data.disease_status_clinvar!==null || data.disease_status_mitomap!==null) &&
                                    <i style={{fontSize: "13px", color:'gray'}}>Click hyperlink for status & phenotype information</i>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td class='left-col'>Associated haplogroups<br/>& (count)
                                <div class="help-tip">
                                    <p>Mitochondrial haplogroups are groups of variants co-inherited down a maternal line. Haplogroup variants per PhyloTree (Build 17)</p>
                                </div>
                            </td>
                            <td>{haplo.length>57 
                                    ? <div>
                                         <input type="checkbox" id="expanded"/>
                                         <p><span><a href='https://www.phylotree.org/' target="_blank">Phylotree</a>: {haplo}</span> ({data.count_haplos})</p>
                                         <label id="expanded-label" for="expanded" role="button" onClick={this.checkboxChanged}>Show more</label>
                                      </div>
                                    : <p><a href='https://www.phylotree.org/' target="_blank">Phylotree</a>: {haplo+' ('+data.count_haplos+')'}</p>
                                }
                            </td>
                        </tr>
                         <tr>
                            <td class='left-col'>Conservation metrics
                                <div class="help-tip">
                                    <p>Measures of nucleotide conservation in 100 vertebrate species. <a href="http://compgen.cshl.edu/phast/resources.php" target="_blank">PhyloP scores</a> evaluate conservation at each base, and do not incorporate conservation at neighboring sites. <a href="http://compgen.cshl.edu/phast/resources.php" target="_blank">PhastCons scores</a> are the probability that the base belongs to a conserved multibase element.</p>
                                </div>
                            </td>
                            <td><a href='https://genome.ucsc.edu/cgi-bin/hgTrackUi?db=hg19&g=cons100way#TRACK_HTML' target="_blank">PhyloP</a> (basewise): {(Math.round(data.conserv_phylop*100)/100).toFixed(2)} / <a href='https://genome.ucsc.edu/cgi-bin/hgTrackUi?db=hg19&g=cons100way#TRACK_HTML' target="_blank">PhastCons</a> (element): {(Math.round(data.conserv_phastcons*100)/100).toFixed(2)}<br/>
                                <i style={{fontSize: "13px", color:'gray'}}>PhyloP: &gt; 0 conserved, &lt; 0 fast-evolving; range -20-10</i><br/>
                                <i style={{fontSize: "13px", color:'gray'}}>PhastCons: probability of negative selection; range 0-1</i></td>
                        </tr>
                        <tr>
                            <td class='left-col'>Post-transcriptionally modified position?
                                <div class="help-tip">
                                    <p>Post-transcriptional modifications can impact mitochondrial RNA function and abundance. Listed tRNA and rRNA modified sites are per <a href='https://pubmed.ncbi.nlm.nih.gov/32859890/' target="_blank">Suzuki et al 2020</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/30529456/' target="_blank">Rebelo-Guiomar et al 2019</a>, respectively.</p>
                                </div>
                            </td>
                            <td>
                                {posttrans==null && "No"}
                                {posttrans!==null && posttrans.indexOf("N")>=0 && <p><a href={posttransLink}>Yes ({posttrans.substring(0,posttrans.indexOf("N")+1)}<sup>{posttrans.charAt(posttrans.indexOf("N")+1)}</sup>{posttrans.substring(posttrans.indexOf("N")+2)})</a></p>}
                                {posttrans!==null && posttrans.indexOf("N")==-1 && <p><a href={posttransLink}>Yes ({posttrans})</a></p>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
        } else if(loadError){
            return <p></p>
        } else {
            return <p></p>;
        }
    }
    
}

export default VarInfoTable;

/* apollo
export default graphql(getVarInfoQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.variant
            }
        }
    }
})(VarInfoTable);
*/

