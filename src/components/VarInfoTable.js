import React from 'react';

class VarInfoTable extends React.Component{


    render() {
    
        return(
            <table id="var-info-table">
                <tr>
                    <td>Population frequency</td>
                    <td>{this.props.variant}</td>
                </tr>
                <tr>
                    <td>Maximum heteroplasmy in gnomAD</td>
                    <td>placeholder</td>
                </tr>
                <tr>
                    <td>In silico predictions</td>
                    <td>placeholder</td>
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

export default VarInfoTable;

