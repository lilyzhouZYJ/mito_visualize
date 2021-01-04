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
import VarInput from './VarInput';
import VarInfoTable from './VarInfoTable';
import VarInfo from './VarInfo';
import "./styles/VariantHighlight.css";

//match each gene to its respective component
const tRNAs = {
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
    'MT-TR':Mttr
};

const pairs = {"A":"T", "T":"A", "G":"C", "C":"G"};

//tRNA-coding genes on the reverse strand
const reverseStrand = ["MT-TQ","MT-TA","MT-TN","MT-TC","MT-TY","MT-TS1","MT-TE","MT-TP"];

//download SVG button setup
const saveSvgAsPng = require('save-svg-as-png')
const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: 'white',
  left: 5,
  top: -20,
  height: 390,
  width: 350
}

class TrnaSVG extends React.Component{

    state = {
        varSubmitted: null,
        varCor: null,
        breakWC: false,
        formWC: false,
        pairCoor: null,
    }

    //download svg
    handleClick = () => {
        var fileName;
        if(this.state.varSubmitted==null){
            fileName = this.props.gene;
        } else {
            fileName = this.state.varSubmitted + " [" + this.props.gene + "].png";
        }
        saveSvgAsPng.saveSvgAsPng(document.getElementById('svg-container'), fileName, imageOptions);
    };

    //determine whether WC pairing is formed or disrupted
    getWCStatus = (formWC, breakWC, pairCoor) => {
        this.setState({formWC:formWC,breakWC:breakWC,pairCoor:pairCoor});
    }

    //if new variant information is loading, remove all variant highlights
    isLoading = () => {
        this.removeVariantHighlight();
    }

    componentDidMount(){
        document.getElementById('svg-container').setAttribute("height","500");
        document.getElementById('svg-container').setAttribute("width","500");
        document.getElementById('svg-container').setAttribute("viewBox","0 0 400 400");
    }

    //if a variant is submitted
    handleVarSubmit = (varSubmitted,variantCor) => {
        if(varSubmitted==''&&variantCor==''){
            this.setState({varSubmitted:null,varCor:null});
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

        //remove highlighted letter
        var elementExists = document.getElementById('highlight');
        if(elementExists!==null){
            elementExists.removeAttribute('id');
            elementExists.innerHTML = elementExists.getAttribute('class')+elementExists.innerHTML.substring(1);
            elementExists.removeAttribute('class');
        }

        //remove highlighted background
        var elementExists = document.getElementById('highlight-background');
        if(elementExists!==null){
            elementExists.remove();
        }

        //remove highlighted pairing circle
        var elementExists = document.getElementById('highlight-circle');
        if(elementExists!==null){
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            var location = elementExists.getAttribute('class').split(',');
            newLine.setAttribute('x1',location[0]);
            newLine.setAttribute('y1',location[1]);
            newLine.setAttribute('x2',location[2]);
            newLine.setAttribute('y2',location[3]);
            newLine.innerHTML=elementExists.innerHTML;
            document.getElementById('svg-container').insertBefore(newLine, elementExists);
            elementExists.remove();
        }

        //remove highlighted pairing line
        var elementExists = document.getElementById('highlight-line');
        if(elementExists!==null){
            var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
            var x1 = parseFloat(elementExists.getAttribute('x1'));
            var x2 = parseFloat(elementExists.getAttribute('x2'));
            var y1 = parseFloat(elementExists.getAttribute('y1'));
            var y2 = parseFloat(elementExists.getAttribute('y2'));
            newCircle.setAttribute('cx',(x1+x2)/2);
            newCircle.setAttribute('cy',(y1+y2)/2);
            newCircle.setAttribute('r','2');
            newCircle.innerHTML=elementExists.innerHTML;
            document.getElementById('svg-container').insertBefore(newCircle, elementExists);
            elementExists.remove();
        }

        //remove note on variant highlight
        var noteExists = document.getElementById('varNote');
        if(noteExists!==null){
            noteExists.remove();
        }

    }





    componentDidUpdate(){
        var variant = this.state.varSubmitted;
        var variantCor = this.state.varCor;
        
        //remove preexisting variant highlight
        this.removeVariantHighlight();
        
        //make new highlight
        if(variant!==null){

            //add variant name to svg legend
            var varLegend = document.createElementNS('http://www.w3.org/2000/svg','text');
            varLegend.setAttribute('x','35');
            varLegend.setAttribute('y','55');
            varLegend.setAttribute('id','var-legend');
            varLegend.innerHTML = variant;
            document.getElementById('svg-container').appendChild(varLegend);

            var initLetter = variant[variant.length-3];
            var newLetter = variant[variant.length-1];

            //if the gene is on the reverse strand
            if(reverseStrand.includes(this.props.gene)){
                initLetter = pairs[initLetter];
                newLetter = pairs[newLetter];                
            }

            var origPairing;
            var allTitle = document.getElementById('svg-container').getElementsByTagName('title');
            for(var title of allTitle){

                //get the variant and find its coordinates
                if(title.innerHTML==variantCor){
                    var textNode = title.parentElement;
                    textNode.setAttribute('id', 'highlight');
                    textNode.setAttribute('class',textNode.innerHTML[0]);
                    textNode.innerHTML = newLetter+textNode.innerHTML.substring(1); 
                    var textx = parseFloat(textNode.getAttribute('x'));
                    var texty = parseFloat(textNode.getAttribute('y'));

                    //add circle for background color of highlight
                    var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                    circle.setAttribute('cx',textx);
                    circle.setAttribute('cy',texty);
                    circle.setAttribute('r','9px');
                    circle.setAttribute('id','highlight-background')
                    document.getElementById('svg-container').insertBefore(circle,document.getElementById('svg-container').childNodes[0]);
                }

                //find the pairing
                if((title.innerHTML.split(',')[0]==variantCor||title.innerHTML.split(',')[1]==variantCor)){
                    if(title.parentElement) {origPairing = title.parentElement}
                }

                //get coordinates of the pair
                if(title.innerHTML==this.state.pairCoor){
                    var pairNode = title.parentElement;
                    var pairx = parseFloat(pairNode.getAttribute('x'));
                    var pairy = parseFloat(pairNode.getAttribute('y'));
                }
            }

            //console.log(origPairing);

            if(this.state.breakWC){
                var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                newCircle.setAttribute('cx',(textx+pairx)/2);
                newCircle.setAttribute('cy',(texty+pairy)/2);
                newCircle.setAttribute('r','2');
                newCircle.setAttribute('id','highlight-circle');
                //stores original line coordinates
                newCircle.setAttribute('class',origPairing.getAttribute('x1')+","+origPairing.getAttribute('y1')+","+origPairing.getAttribute('x2')+","+origPairing.getAttribute('y2'));
                newCircle.innerHTML = origPairing.innerHTML;
                document.getElementById('svg-container').insertBefore(newCircle, origPairing);
                origPairing.remove();
            }

            if(this.state.formWC){
                var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
                if(textx==pairx){
                    var x1, x2 = textx;
                    var y1 = (texty+pairy)/2 - 4;
                    var y2 = (texty+pairy)/2 + 4;
                }
                if(texty==pairy){
                    var y1, y2 = texty;
                    var x1 = (textx+pairx)/2 - 4;
                    var x2 = (textx+pairx)/2 + 4;
                }
                newLine.setAttribute('x1',x1);
                newLine.setAttribute('x2',x2);
                newLine.setAttribute('y1',y1);
                newLine.setAttribute('y2',y2);
                newLine.setAttribute('id','highlight-line')
                newLine.innerHTML = origPairing.innerHTML;
                document.getElementById('svg-container').insertBefore(newLine, origPairing);
                origPairing.remove();
            }

            //add note on the variant highlight
            var varNote = document.createElement('li');
            varNote.innerHTML = "The base and pair type change (if applicable) is shown in red.";
            varNote.setAttribute('id','varNote');
            document.getElementById('notes').appendChild(varNote);

        }
        
    }

    render() {

        var gene = this.props.gene;
       
        var SvgComponent = tRNAs[gene];
            return(
                <div id="trna-svg">
                    <div id="left-container">
                        <SvgComponent gene={gene} variant={this.state.varSubmitted} />
                        <ul id="notes">
                            {reverseStrand.includes(gene) &&
                                    <li>Note: {gene} is on the reverse strand.</li>
                            }
                            <li>Lines represent Watson-Crick (WC) base pairs, and dots non-WC pairs.</li>
                            <li>Hovering over each base will display the genomic coordinate.</li>
                        </ul>
                        <button id="download-btn" onClick={this.handleClick}>Download Image (png)</button>
                    </div>
                    <div id="right-container">
                        <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene}/>
                        {this.state.varSubmitted!==null &&
                            <VarInfo gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor} getWCStatus={this.getWCStatus} isLoading={this.isLoading} rnaType="tRNA" />
                        }
                        {this.state.varSubmitted!==null &&
                            <VarInfoTable variant={this.state.varSubmitted} rnaType="tRNA" />
                        }
                    </div>
                </div>
            )
    }
    
}

export default TrnaSVG;

