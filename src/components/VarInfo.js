import React from 'react';
import { fetchVarInfo } from './fetch.js'

//tRNA-coding genes on the reverse strand
const reverseStrand = ["MT-TQ","MT-TA","MT-TN","MT-TC","MT-TY","MT-TS1","MT-TE","MT-TP"];

class VarInfo extends React.Component{

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

    componentDidUpdate(prevProps){
        var newVar = this.props.variant;
        if(newVar !== prevProps.variant){
            this.loadData();
        }
    }


    render() {

        var variant = this.props.variant;
        var variantCor = this.props.variantCor;

        const { varData, loadError } = this.state;

        var breakWC = this.props.breakWC;

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

        if(varData){

            var dom = varData.domain;
            console.log(breakWC);
 
            return(
                <div id='var-info'>
                    {dom!==null && !breakWC && 
                       <div>
                           This variant in the {this.props.gene} gene results in a {initLetter}>{newLetter} change in the {dom} domain of the {this.props.rnaType}.
                           <div className="help-tip">
                               <p>Structural domains are per <a href="https://pubmed.ncbi.nlm.nih.gov/17585048/">Putz et al 2007</a>, following the tRNA numbering conversion table on <a href="http://mamit-trna.u-strasbg.fr/Summary.asp">Mamit-tRNA</a>.</p>
                           </div>
                       </div>
                    }
                    {dom!==null && breakWC && <p>This variant in the {this.props.gene} gene results in a {initLetter}>{newLetter} change in the {dom} domain of the {this.props.rnaType}, disrupting a Watson-Crick base pairing.</p>}
                    {dom==null && <p>This variant in the {this.props.gene} gene results in a {initLetter}>{newLetter} change in the {this.props.rnaType}.</p>}
                </div>
            ) 
         } else if(loadError) {
             return <p>{loadError}</p>
         } else {
             return <p>Loading...</p>
         }
    }
    
}

export default VarInfo;

