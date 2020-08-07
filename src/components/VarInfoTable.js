import React from 'react';
//import {gql} from 'apollo-boost';
//import {graphql} from 'react-apollo';

import { fetchVarInfo } from './fetch.js'

class VarInfoTable extends React.Component{

    state = {
        varData: null,
        isLoadingData: false,
        loadError: null,
    }

    componentDidMount() {
        fetchVarInfo(this.props.variant).then(response => {
            //console.log(response)
            const varData = response.data.variant;
            this.setState({varData: varData});
            //console.log(this.state.varData);
        })
    }

    componentDidUpdate() {
        fetchVarInfo(this.props.variant).then(response => {
            //console.log(response)
            const varData = response.data.variant;
            this.setState({varData: varData});
            //console.log(this.state.varData);
        })
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

        if(data!==null){

            //var freqMitomap = data.freq_mitomap==null ? 0 : data.freq_mitomap;
            //var countMitomap = data.count_mitomap==null ? 0 : data.count_mitomap;
            //var diseasesMitomap = data.diseases_mitomap==null ? "None listed" : data.diseases_mitomap;
            //var diseaseStatusMitomap = data.disease_status_mitomap==null ? "None listed" : data.disease_status_mitomap;
            //var diseasesClinvar = data.diseases_clinvar==null ? "None listed" : data.diseases_mitomap;
            //var diseaseStatusClinvar = data.disease_status_clinvar==null ? "None listed" : data.disease_status_clinvar;

            var haplo = data.haplogroups==null? "None" : data.haplogroups;

            var mitomapLink = 'https://mitomap.org/cgi-bin/search_allele?variant='+variant.substring(2);
            var clinvarLink = data.clinvar_variant_id==null ? '' : 'https://www.ncbi.nlm.nih.gov/clinvar/variation/' + data.clinvar_variant_id;
            
            return(
                <table id="var-info-table">
                    <tbody>
                        <tr>
                            <td class='left-col'>Population frequency<br/>& (allele count)</td>
                            <td>gnomAD: <i>Coming soon!</i><br/>
                                MitoMap: {data.freq_mitomap!==null ? 
                                             <a href={mitomapLink}>{data.freq_mitomap}% ({data.count_mitomap})</a>
                                             : "0 (0)"
                                         }
                            </td>
                        </tr>
                        <tr>
                            <td class='left-col'>Maximum heteroplasmy</td>
                            <td>gnomAD: <i>Coming soon!</i></td>
                        </tr>
                        {this.props.rnaType=="tRNA" &&
                            <tr>
                                <td class='left-col'>In silico predictions<br/>(score & interpretation)</td>
                                <td><a href='https://www.mitomap.org/MITOMAP/MitoTipScores'>MitoTip</a>{': '+(Math.round(data.prediction_mitotip*10)/10).toFixed(1)+" - "+data.prediction_mitotip_category}<br/><a href='http://structure.bmc.lu.se/PON-mt-tRNA/about.html/'>PON-mt-tRNA</a>{': '+(Math.round(data.prediction_pon_mt_tRNA*10)/10).toFixed(1)+" - "+data.prediction_pon_mt_tRNA_category}</td>
                            </tr>
                        }
                        <tr>
                            {(data.disease_status_clinvar!==null || data.disease_status_mitomap!==null)
                                ? <td class='left-col'>Disease association status</td>
                                : <td class='left-col'>Disease association</td>
                            }
                            <td>
                                MitoMap: {data.disease_status_mitomap!==null ? 
                                             <a href={mitomapLink}>{data.disease_status_mitomap}</a>
                                             : "None"
                                         }
                                {' / ClinVar: '}{data.disease_status_clinvar!==null ?
                                                    <a href={clinvarLink}>{data.disease_status_clinvar}</a>
                                                    : "None"
                                                }
                                <br/>
                                {(data.disease_status_clinvar!==null || data.disease_status_mitomap!==null) &&
                                    <i style={{fontSize: "13px", color:'gray'}}>Click hyperlink for status & phenotype information</i>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td class='left-col'>Associated haplogroups<br/>& (count)</td>
                            <td>{haplo.length>57 
                                    ? <div>
                                         <input type="checkbox" id="expanded"/>
                                         <p><span><a href='https://www.phylotree.org/'>Phylotree</a>: {haplo}</span> ({data.count_haplos})</p>
                                         <label id="expanded-label" for="expanded" role="button" onClick={this.checkboxChanged}>Show more</label>
                                      </div>
                                    : <p><a href='https://www.phylotree.org/'>Phylotree</a>: {haplo+' ('+data.count_haplos+')'}</p>
                                }
                            </td>
                        </tr>
                         <tr>
                            <td class='left-col'>Conservation metrics
                                <div class="help-tip">
                                    <p>Measures of nucleotide conservation in 100 vertebrate species. PhyloP: sites predicted as conserved have positive scores, those predicted as fast-evolving have negative scores (range -20-10). PhastCons: probability of negative selection (range 0-1).</p>
                                </div>
                            </td>
                            <td><a href='https://genome.ucsc.edu/cgi-bin/hgTrackUi?db=hg19&g=cons100way#TRACK_HTML'>PhyloP</a>: {(Math.round(data.conserv_phylop*100)/100).toFixed(2)} / <a href='https://genome.ucsc.edu/cgi-bin/hgTrackUi?db=hg19&g=cons100way#TRACK_HTML'>PhastCons</a>: {(Math.round(data.conserv_phastcons*100)/100).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            )
        } else {
            return (<p>Loading...</p>);
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

