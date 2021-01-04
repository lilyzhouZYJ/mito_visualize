import React from 'react';
import Mtrnr1 from './rRNA/MT-RNR1';
import Mtrnr2 from './rRNA/MT-RNR2';

import VisualizeOptions from './VisualizeOptions';
import './styles/VisualizeOptions.css';

//match each gene to its respective component
const RNAs = {
    'MT-RNR1': Mtrnr1,
    'MT-RNR2': Mtrnr2
};

class RrnaVisualizationSVG extends React.Component{

    state = {
        varSubmitted: null,
        varCor: null
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
            <div id="rrna-visualization-svg">
                <div id="left-container">
                    <SvgComponent gene={gene} />
                    <ul id="notes">
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

export default RrnaVisualizationSVG;

