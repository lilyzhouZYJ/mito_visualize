import React from 'react';

//tRNA-coding genes on the reverse strand
const reverseStrand = ["MT-TQ","MT-TA","MT-TN","MT-TC","MT-TY","MT-TS1","MT-TE","MT-TP"];

class VarInfo extends React.Component{


    render() {

        var variant = this.props.variant;
        var variantCor = this.props.variantCor;

        if(this.props.variant!==null){

            var initLetter = variant[variant.length-3];
            var newLetter = variant[variant.length-1];
        
            //if the gene is on the reverse strand
            if(reverseStrand.includes(this.props.gene)){
                
                if(initLetter=="A"){initLetter="T";}
                else if(initLetter=="T"){initLetter="A";}
                else if(initLetter=="C"){initLetter="G";}
                else{initLetter="C";}

                if(newLetter=="A"){newLetter="T";}
                else if(newLetter=="T"){newLetter="A";}
                else if(newLetter=="C"){newLetter="G";}
                else{newLetter="C";}
                
            }

            return(
                <div id='var-info'>
                    <p>[Placeholder] A homoplasmic variant has been identified in the {this.props.gene} gene. This gene encodes a mitochondrial tRNA (...). This variant is located in the D-stem of the tRNA and is predicted to result in a change from {initLetter} to {newLetter}.</p>
                </div>
            )
        } else {
            return(
                <div id="var-info"></div>
            )
        }
        
    }
    
}

export default VarInfo;

