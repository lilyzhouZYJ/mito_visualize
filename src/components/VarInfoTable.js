import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

//construct the query
const getVarInfoQuery = gql`
    query($id:ID){
        variant(id:$id){
            gene_name
            var_id
            information
        }
    }
`

//HOW TO SEARCH SPECIFICALLY FOR A VARIANT RATHER THAN LISTING ALL?

class VarInfoTable extends React.Component{

    // //display fetched gene name
    // displayGeneName(){
    //     var data = this.props.data;
    //     if(!data.loading){
    //         return (
    //             <td>{data.variant.gene_name}</td>
    //         )
    //     }
    // }

    // //display fetched information
    // displayInformation(){
    //     var data = this.props.data;
    //     if(!data.loading){
    //         return (
    //             <td>{data.variant.information}</td>
    //         )
    //     }
    // }

    render() {
    
        console.log(this.props);
        return(
            <table id="var-info-table">
                <tr>
                    <td>Population frequency</td>
                    <td>{this.props.variant}</td>
                </tr>
                <tr>
                    <td>Maximum heteroplasmy in gnomAD</td>
                    {/* <td>{this.displayGeneName()}</td> */}
                </tr>
                <tr>
                    <td>In silico predictions</td>
                    {/* <td>{this.displayInformation}</td> */}
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
        
    }
    
}

export default graphql(getVarInfoQuery)(VarInfoTable);

