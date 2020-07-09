import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

import { fetchVarInfo } from './fetch.js'

/*apollo
//construct the query
const getVarInfoQuery = gql`
    query($var_id:String!){
        variant(var_id:$var_id){
            gene_name,
            var_id,
            var_coordinate,
            var_alt,
            var_ref,
            freq_gnomad,
            freq_mitomap,
            heteroplasmy,
            prediction_mitotip,
            prediction_pon_mt_tRNA,
            status_mitomap,
            status_clinvar,
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
            const varData = response.data.variant;
            this.setState({varData: varData});
            //console.log(this.state.varData);
        })
    }

    componentDidUpdate() {
        fetchVarInfo(this.props.variant).then(response => {
            console.log(this.props.variant);
            const varData = response.data.variant;
            console.log(varData);
            this.setState({varData: varData});
            //console.log(this.state.varData);
        })
    }

    render() {   
    
        //console.log(this.props);
        //if(!this.props.data.loading){
        
        var data = this.state.varData;
        if(data!==null){
            return(
                <table id="var-info-table">
                    <tr>
                        <td>Population frequency</td>
                        <td>{this.props.variant}</td>
                    </tr>
                    <tr>
                        <td>Maximum heteroplasmy in gnomAD</td>
                        <td>{data.heteroplasmy}</td>
                    </tr>
                    <tr>
                        <td>In silico predictions</td>
                        <td>{data.prediction_mitotip+" "+data.prediction_pon_mt_tRNA}</td>
                    </tr>
                    <tr>
                        <td>Status in Mitomap</td>
                        <td>placeholder</td>
                    </tr>
                    <tr>
                        <td>Status in Phylotree</td>
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

