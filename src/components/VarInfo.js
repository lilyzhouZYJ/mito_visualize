import React from 'react';
import { fetchVarInfo } from './fetch.js'

//tRNA-coding genes on the reverse strand
const reverseStrand = ["MT-TQ","MT-TA","MT-TN","MT-TC","MT-TY","MT-TS1","MT-TE","MT-TP"];

const pairs = {"A":"T", "T":"A", "C":"G", "G":"C"};

var formWC, breakWC, pairCoor;

class VarInfo extends React.Component{

    state = {
        varData: null,
        loadError: null,
        initLetter: null,
        newLetter: null,
        formWC: false,
        breakWC: false,
    }

    loadData(){
        this.setState({loadError:null, varData:null});
        var variant = this.props.variant
        fetchVarInfo(variant).then(response => {
            //console.log(response)
            var varData = response.data.variant;
            if(!varData) {this.setState({loadError: "Variant not found"});}
            else {
                var initLetter = variant[variant.length-3];
                var newLetter = variant[variant.length-1];
                //if the gene is on the reverse strand
                if(reverseStrand.includes(this.props.gene)){ 
                    initLetter = pairs[initLetter];
                    newLetter = pairs[newLetter];
                }

                var pairBase = varData.pair_base;
                var pairCoor = varData.pair_coordinate;
                var formWC = false;
                var breakWC = false;
                if(pairs[newLetter]==pairBase) { formWC = true }
                if(pairs[initLetter]==pairBase && pairs[newLetter]!==pairBase) { breakWC = true }
                this.props.getWCStatus(formWC, breakWC, varData.pair_coordinate);

                this.setState({loadError:null, varData:varData, initLetter:initLetter, newLetter:newLetter, formWC:formWC, breakWC:breakWC});
            }
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

        const { varData, loadError, initLetter, newLetter, formWC, breakWC } = this.state;

        if(varData){
            var dom = varData.domain;
            var wc = formWC ? ', creating a Watson-Crick base pairing' :
                     breakWC ? ', disrupting a Watson-Crick base pairing' :
                     '';

            return(
                <div id='var-info'>
                    {dom!==null ?
                       <div>
                           This variant in the {this.props.gene} gene results in a {initLetter}>{newLetter} change in the {dom} domain of the {this.props.rnaType}{wc}.
                           <div className="help-tip">
                               <p>Structural domains are per <a href="https://pubmed.ncbi.nlm.nih.gov/17585048/">Putz et al 2007</a>, following the tRNA numbering conversion table on <a href="http://mamit-trna.u-strasbg.fr/Summary.asp">Mamit-tRNA</a>.</p>
                           </div>
                       </div>
                       : <p>This variant in the {this.props.gene} gene results in a {initLetter}>{newLetter} change in the {this.props.rnaType}{wc}.</p>
                    }
                </div>
            ) 
         } else if(loadError) {
             return <p>{loadError}</p>
         } else {
             this.props.isLoading();
             return <p>Loading...</p>
         }
    }
    
}

export default VarInfo;

