import React from 'react';
import loadGif from './images/loading.gif';

class VarInfo extends React.Component{

    render() {

        var loadError = this.props.loadError;
        var loading = this.props.loading;

        if(!loadError && !loading){
            var { variant, gene, dom, rnaType, initLetter, newLetter, breakWC, formWC } = this.props;
            var wc = formWC ? ', creating a Watson-Crick base pairing' :
                     breakWC ? ', disrupting a Watson-Crick base pairing' :
                     '';

            return(
                <div id='var-info'>
                    {dom!==null ?
                       <div>
                           This variant in the {this.props.gene} gene results in a {initLetter}>{newLetter} change in the {dom} domain of the {this.props.rnaType}{wc}.
                           <div className="help-tip">
                               <p>Structural domains are per <a href="https://pubmed.ncbi.nlm.nih.gov/17585048/" target="_blank">Putz et al 2007</a>, following the tRNA numbering conversion table on <a href="http://mamit-trna.u-strasbg.fr/Summary.asp" target="_blank">Mamit-tRNA</a>.</p>
                           </div>
                       </div>
                       : <p>This variant in the {this.props.gene} gene results in a {initLetter}>{newLetter} change in the {this.props.rnaType}{wc}.</p>
                    }
                </div>
            ) 
         } else if(loadError) {
             return <p>{loadError}</p>
         } else {
             return <img src={loadGif} alt="Loading..." width="150px" height="75px" />
         }
    }
    
}

export default VarInfo;

