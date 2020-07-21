import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

import { fetchVarInfo } from './fetch.js'

/*apollo
//construct the query
const getVarInfoQuery = gql`
    query($var_id:String!){
        variant(var_id:$var_id){
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
    }
`;
*/

class VarInfoTable extends React.Component{

    state = {
        varData: null,
        isLoadingData: false,
        loadError: null,
    }

    componentDidMount() {
        fetchVarInfo(this.props.variant).then(response => {
            console.log(response)
            const varData = response.data.variant;
            this.setState({varData: varData});
            //console.log(this.state.varData);
        })
    }

    componentDidUpdate() {
        fetchVarInfo(this.props.variant).then(response => {
            console.log(response)
            const varData = response.data.variant;
            this.setState({varData: varData});
            //console.log(this.state.varData);
        })
    }

    render() {   
    
        var variant = this.props.variant;        
        var data = this.state.varData;        

        if(data!==null){

            var freqMitomap = data.freq_mitomap==null ? 0 : data.freq_mitomap;
            var diseasesMitomap = data.diseases_mitomap==null ? "None listed" : data.diseases_mitomap;
            var diseaseStatusMitomap = data.disease_status_mitomap==null ? "None listed" : data.disease_status_mitomap;
            
            return(
                <table id="var-info-table">
                    <tr>
                        <td class='left-col'>Population frequency</td>
                        <td>{'gnomAD: '+data.freq_gnomad+' / '}<a href={'https://mitomap.org/cgi-bin/search_allele?variant='+variant.substring(2)}>MitoMap</a>{': '+freqMitomap}</td>
                    </tr>
                    <tr>
                        <td class='left-col'>Maximum heteroplasmy in gnomAD</td>
                        <td>{data.heteroplasmy}</td>
                    </tr>
                    {this.props.rnaType=="tRNA" &&
                        <tr>
                            <td class='left-col'>In silico predictions<br/>(score & interpretation)</td>
                            <td><a href='https://www.mitomap.org/MITOMAP/MitoTipScores'>MitoTip</a>{': '+(Math.round(data.prediction_mitotip*10)/10).toFixed(1)+" - "+data.prediction_mitotip_category}<br/><a href='http://structure.bmc.lu.se/PON-mt-tRNA/about.html/'>PON-mt-tRNA</a>{': '+(Math.round(data.prediction_pon_mt_tRNA*10)/10).toFixed(1)+" - "+data.prediction_pon_mt_tRNA_category}</td>
                        </tr>
                    }
                    <tr>
                        <td class='left-col'>Disease associations</td>
                        <td><a href={'https://mitomap.org/cgi-bin/search_allele?variant='+variant.substring(2)}>MitoMap</a>{': '+diseaseStatusMitomap+' / ClinVar: '+data.diseases_clinvar}</td>
                    </tr>
                    <tr>
                        <td class='left-col'>Status in Phylotree</td>
                        <td>placeholder</td>
                    </tr>
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

