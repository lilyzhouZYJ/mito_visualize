import React from 'react';
import Mtta from './tRNA/MT-TA';
import Mttt from './tRNA/MT-TT';
import Mtty from './tRNA/MT-TY';
import Mttw from './tRNA/MT-TW';
import Mttv from './tRNA/MT-TV';
import Mtts1 from './tRNA/MT-TS1';
import Mtts2 from './tRNA/MT-TS2';
import Mttp from './tRNA/MT-TP';
import Mttf from './tRNA/MT-TF';
import Mttk from './tRNA/MT-TK';
import Mttl1 from './tRNA/MT-TL1';
import Mttl2 from './tRNA/MT-TL2';
import Mtti from './tRNA/MT-TI';
import Mtth from './tRNA/MT-TH';
import Mttg from './tRNA/MT-TG';
import Mttq from './tRNA/MT-TQ';
import Mtte from './tRNA/MT-TE';
import Mttc from './tRNA/MT-TC';
import Mttd from './tRNA/MT-TD';
import Mttn from './tRNA/MT-TN';
import Mttm from './tRNA/MT-TM';
import Mttr from './tRNA/MT-TR';

import VisualizeOptions from './VisualizeOptions';
import './styles/VisualizeOptions.css';

//match each gene to its respective component
const RNAs = {
    'MT-TA': Mtta,
    'MT-TT': Mttt,
    'MT-TW': Mttw,
    'MT-TY': Mtty,
    'MT-TV': Mttv,
    'MT-TS1':Mtts1,
    'MT-TS2':Mtts2,
    'MT-TP':Mttp,
    'MT-TF':Mttf,
    'MT-TK':Mttk,
    'MT-TL1':Mttl1,
    'MT-TL2':Mttl2,
    'MT-TI':Mtti,
    'MT-TH':Mtth,
    'MT-TG':Mttg,
    'MT-TQ':Mttq,
    'MT-TE':Mtte,
    'MT-TC':Mttc,
    'MT-TD':Mttd,
    'MT-TN':Mttn,
    'MT-TM':Mttm,
    'MT-TR':Mttr,
};

//genes on the reverse strand
const reverseStrand = ["MT-TQ","MT-TA","MT-TN","MT-TC","MT-TY","MT-TS1","MT-TE","MT-TP"];

class TrnaVisualizationSVG extends React.Component{

    state = {
        varSubmitted: null,
        varCor: null
    }

    componentDidMount(){
        document.getElementById('svg-container').setAttribute("height","500");
        document.getElementById('svg-container').setAttribute("width","500");
        document.getElementById('svg-container').setAttribute("viewBox","0 0 400 400");
    }

    handleVarSubmit = (varSubmitted,variantCor) => {
        if(varSubmitted==''&&variantCor==''){
            this.setState({varSubmitted:null,varCor:null})
        } else {
            this.setState({varSubmitted:varSubmitted,varCor:variantCor});  
        }
    }

    //remove preexisting variant highlight
    removeVariantHighlight() {

        //remove variant name in svg legend
        var legExists = document.getElementById('var-legend');
        if(legExists!==null){
            legExists.remove();
        }

        //remove preeixsting highlighted letter
        var elementExists = document.getElementById('highlight');
        if(elementExists!==null){
            elementExists.setAttribute('font-weight',"normal");
            elementExists.setAttribute('font-size', '12');
            elementExists.setAttribute('fill', '#000000');
            var origX = parseFloat(elementExists.getAttribute('x'));
            var origY = parseFloat(elementExists.getAttribute('y'));
            elementExists.setAttribute('x',origX);
            elementExists.setAttribute('y',origY);
            elementExists.setAttribute('id','');
            elementExists.innerHTML = elementExists.getAttribute('class')+elementExists.innerHTML.substring(1);
            elementExists.setAttribute('class','');
        }

        //remove preeixsting highlighted background
        var elementExists = document.getElementById('highlight-background');
        if(elementExists!==null){
            elementExists.remove();
        }

        //remove preexisting highlighted circle
        var elementExists = document.getElementById('highlight-circle');
        if(elementExists!==null){
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            var location = elementExists.getAttribute('class').split(',');
            newLine.setAttribute('x1',location[0]);
            newLine.setAttribute('y1',location[1]);
            newLine.setAttribute('x2',location[2]);
            newLine.setAttribute('y2',location[3]);
            newLine.setAttribute('stroke',"#000000");
            newLine.setAttribute('stroke-width',"1");
            newLine.setAttribute('stroke-linecap',"round");
            newLine.innerHTML=elementExists.innerHTML;
            document.getElementById('svg-container').insertBefore(newLine, elementExists);
            elementExists.remove();
        }

        //remove note on variant highlight
        var noteExists = document.getElementById('varNote');
        if(noteExists!==null){
            noteExists.remove();
        }

    }

    render() {

        var gene = this.props.gene;
       
        var SvgComponent = RNAs[gene];

        return(
            <div id="trna-visualization-svg">
                <div id="left-container">
                    <SvgComponent gene={gene} />
                    <ul id="notes">
                        {reverseStrand.includes(gene) &&
                            <li>Note: {gene} is on the reverse strand.</li>
                        }
                        <li>Lines represent Watson-Crick (WC) base pairs, and dots non-WC pairs.</li>
                        <li>Hovering over each base will display the genomic coordinate.</li>
                    </ul>
                </div>
                <div id="right-container">
                    <VisualizeOptions gene={gene} />
                </div>
            </div>
        )
    }
    
}

export default TrnaVisualizationSVG;

