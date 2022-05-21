import React from 'react';
import { RNA_GENE_COORDINATES } from './params/params.js';

/**
 * Input box for entering variant, found on tRNA and rRNA Variant pages.
 * This component is also responsible for checking input validity and displaying error messages.
 */

class VarInput extends React.Component{

    /* Remove any error messages */
    removeErrorMsg = () => {
        var errExists = document.getElementById('error');
        if(errExists!==null){
            errExists.remove();
        }
    }

    /* Check whether the submitted variant coordinate is within the current gene */
    checkSubmittedCoor = (e) => {
        e.preventDefault();

        // Remove preexisting error messages
        this.removeErrorMsg();

        // Get inputed variant
        var varSubmitted = document.getElementById("var-input").value;

        // Check if the inputed variant follows the correct format
        var validFormat = /^m\.\d+[A,T,C,G]>[A,T,C,G]$/;
        if( !validFormat.test(varSubmitted) ) {    // Incorrect format!
            // Pass empty strings to TrnaSVG (which would then update its state to null)
            this.props.handleVarSubmit('',''); 

            // Show error message
            var errMsgText = document.createTextNode("Wrong input format. Please enter the variant using this format: m.5618A>G.");
            var errMsg = document.createElement('div');
            errMsg.appendChild(errMsgText);
            errMsg.style.fontSize = '20px';
            errMsg.setAttribute('id','error');
            document.getElementById("var-form").appendChild(errMsg);
        } else {    // Correct format!
            var variantCor = varSubmitted.replace(/\D/g, "");       // Extract only the coordinate from variant input
            this.props.handleVarSubmit(varSubmitted,variantCor);    // Submit both variant and var coordinate
        }
    }

    /* Clear variant input box */
    clearVariant = () => {
        // Remove preexisting error messages
        this.removeErrorMsg();
        // Redirect to clear variant info
        window.location.href = '/'+this.props.gene;
    }
    
    render() {
        if(this.props.variant){
            // Remove preexisting error messages
            this.removeErrorMsg();

            document.getElementById('var-input').value = this.props.variant;
        }

        return(
            <div id="var-form">
                <form onSubmit={this.checkSubmittedCoor}>
                    <h5>Enter variant</h5>
                    <label htmlFor="var-input">
                        Format: m.555A&gt;G (single nucleotide variants only) <br />
                        Expected genomic coordinates for {this.props.gene}: {RNA_GENE_COORDINATES[this.props.gene][0]}-{RNA_GENE_COORDINATES[this.props.gene][1]}
                    </label>
                    <input type="text" id="var-input"></input>
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={this.clearVariant.bind(this)}>Clear Variant</button>
                </form>
            </div>
        )

    }
}

export default VarInput;
