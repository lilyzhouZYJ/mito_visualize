import React from 'react';
import { RNA_GENE_COORDINATES } from './params/params.js';

class VarInput extends React.Component{

    //check whether the variant coordinate is within the current gene
    checkSubmit = (e) => {
        e.preventDefault();

        //remove preexisting error message
        var errExists = document.getElementById('error');
        if(errExists!==null){
            errExists.remove();
        }

        //get inputed variant
        var varSubmitted = document.getElementById("var-input").value;

        var validFormat = /^m\.\d+[A,T,C,G]>[A,T,C,G]$/;//correct input format

        //checks if the user input follows the correct format
        if(!validFormat.test(varSubmitted)){//if the user input format is wrong, show error message
            
            this.props.handleVarSubmit('','');  //pass empty strings to TrnaSVG (which would then update state to null)
            
            var errMsgText = document.createTextNode("Wrong input format. Please enter the variant using this format: m.5618A>G.");
            var errMsg = document.createElement('div');
            errMsg.appendChild(errMsgText);
            errMsg.style.fontSize = '20px';
            errMsg.setAttribute('id','error');
            document.getElementById("var-form").appendChild(errMsg);
        } 
        else{
            var variantCor = varSubmitted.replace(/\D/g, "");//coordinate only
            this.props.handleVarSubmit(varSubmitted,variantCor);
        }
        /*
        else {
            var variantCor = varSubmitted.replace(/\D/g, "");//coordinate only

            //if the variant is in current gene
            if(variantCor>=loc[this.props.gene][0]&&variantCor<=loc[this.props.gene][1]){   
                this.props.handleVarSubmit(varSubmitted,variantCor);
            }

            //if the variant is not in current gene
            else if(variantCor!==''&&!(variantCor>=loc[this.props.gene][0]&&variantCor<=loc[this.props.gene][1])){
                
                this.props.handleVarSubmit('','');  //pass empty strings to TrnaSVG (which would then update state to null)

                //if the variant is in one of the overlapping regions
                if(variantCor>=4329&&variantCor<=4331){
                    var link1 = document.createElement('a');
                    link1.href = '/MT-TI';
                    link1.style.textDecoration = 'underline';
                    var geneLink1 = document.createTextNode("MT-TI");
                    link1.appendChild(geneLink1);

                    var link2 = document.createElement('a');
                    link2.href = '/MT-TQ';
                    link2.style.textDecoration = 'underline';
                    var geneLink2 = document.createTextNode("MT-TQ");
                    link2.appendChild(geneLink2);

                    var errMsgText = document.createTextNode("This coordinate is in ");
                    var errMsg = document.createElement('div');
                    errMsg.appendChild(errMsgText);
                    errMsg.appendChild(link1);
                    var errMsgText2 = document.createTextNode(" and ");
                    errMsg.appendChild(errMsgText2);
                    errMsg.appendChild(link2);
                    errMsg.style.fontSize = '20px';
                    errMsg.setAttribute('id','error');
                    document.getElementById("var-form").appendChild(errMsg);
                } else if(variantCor==5826){
                    var link1 = document.createElement('a');
                    link1.href = '/MT-TC';
                    link1.style.textDecoration = 'underline';
                    var geneLink1 = document.createTextNode("MT-TC");
                    link1.appendChild(geneLink1);

                    var link2 = document.createElement('a');
                    link2.href = '/MT-TY';
                    link2.style.textDecoration = 'underline';
                    var geneLink2 = document.createTextNode("MT-TY");
                    link2.appendChild(geneLink2);

                    var errMsgText = document.createTextNode("This coordinate is in ");
                    var errMsg = document.createElement('div');
                    errMsg.appendChild(errMsgText);
                    errMsg.appendChild(link1);
                    var errMsgText2 = document.createTextNode(" and ");
                    errMsg.appendChild(errMsgText2);
                    errMsg.appendChild(link2);
                    errMsg.style.fontSize = '20px';
                    errMsg.setAttribute('id','error');
                    document.getElementById("var-form").appendChild(errMsg);
                }
                
                //if not in one of the overlapping regions
                else {

                    //find the gene that the variant is in
                    var newGene = null;
                    for(var key in loc){
                        if(variantCor>=loc[key][0]&&variantCor<=loc[key][1]){
                            newGene = key;
                        }
                    }

                    //if the variant is in another RNA coding gene, display that gene
                    if(newGene!==null){ 
                        var link = document.createElement('a');
                        link.href = '/'+newGene;
                        link.style.textDecoration = 'underline';
                        var geneLink = document.createTextNode(newGene);
                        link.appendChild(geneLink);
                        var errMsgText = document.createTextNode("This coordinate is in ");
                        var errMsg = document.createElement('div');
                        errMsg.appendChild(errMsgText);
                        errMsg.appendChild(link);
                        errMsg.style.fontSize = '20px';
                        errMsg.setAttribute('id','error');
                        document.getElementById("var-form").appendChild(errMsg);
                    } 
                    //if the variant is not in any RNA coding gene
                    else{
                        var errMsgText = document.createTextNode("Error, not in any RNA coding gene");
                        var errMsg = document.createElement('div');
                        errMsg.appendChild(errMsgText);
                        errMsg.style.fontSize = '20px';
                        errMsg.setAttribute('id','error');
                        document.getElementById("var-form").appendChild(errMsg);
                    }

                }
            }
        }*/
        
    }

    clearVariant = () => {

        //remove preexisting error
        var errExists = document.getElementById('error');
        if(errExists!==null){
            errExists.remove();
        }

        //pass empty string back to TrnaSVG/RrnaSVG so that its state could update and thus removes VarInfoTable
        //this.props.handleVarSubmit('','');

        window.location.href = '/'+this.props.gene

    }
    
    render() {

        if(this.props.variant){
            var errExists = document.getElementById('error');
            if(errExists!==null){
                errExists.remove();
            }
            document.getElementById('var-input').value = this.props.variant;
        }

        return(
            <div id="var-form">
                <form onSubmit={this.checkSubmit}>
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
