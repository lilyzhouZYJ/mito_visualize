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

//tRNA-coding genes on the reverse strand
const reverseStrand = ["MT-TQ","MT-TA","MT-TN","MT-TC","MT-TY","MT-TS1","MT-TE","MT-TP"];

const saveSvgAsPng = require('save-svg-as-png')

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: 'yellow',
  left: 5,
  top: -20,
  height: 390,
  width: 350
}

class TrnaSVG extends React.Component{

    state = {
        varSubmitted: null,
        varCor: null
    }

    handleClick = () => {

        var fileName;
        if(this.state.varSubmitted==null){
            fileName = this.props.gene;
        } else {
            fileName = this.state.varSubmitted + " [" + this.props.gene + "].png";
        }

        saveSvgAsPng.saveSvgAsPng(document.getElementById('svg-container'), fileName, imageOptions);
    };

    //second version
    // handleClick = () => {
    //     var svg = document.querySelector('#svg-container');
    //     var data = (new XMLSerializer()).serializeToString(svg);
    //     // We can just create a canvas element inline so you don't even need one on the DOM. Cool!
    //     var canvas = document.createElement('canvas');
    //     Canvg.canvg(canvas, data, {
    //     renderCallback: function() {
    //         canvas.toBlob(function(blob) {
    //             download('MyImageName.png', blob);
    //         });
    //     }
    //     });
    // }

    

    componentDidMount(){
        document.getElementById('svg-container').setAttribute("height","500");
        document.getElementById('svg-container').setAttribute("width","500");
        document.getElementById('svg-container').setAttribute("viewBox","0 0 400 400");

        //https://jsgao0.wordpress.com/2016/06/02/export-svg-as-png-using-canvg-js-and-canvas/
        // document.getElementById('downloadBtn').onclick = function() { // Bind click event on download button.
        //     var element = document.getElementById('svg-container'); // Get SVG element.
        //     SVG2PNG(element, function(canvas) { // Arguments: SVG element, callback function.
        //       var base64 = canvas.toDataURL("image/png"); // toDataURL return DataURI as Base64 format.
        //       generateLink('SVG2PNG-01.png', base64).click(); // Trigger the Link is made by Link Generator and download.
        //     });
        //   }
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
            varLegend.setAttribute('font-size','12');
            varLegend.setAttribute('font-weight','bold');
            varLegend.setAttribute('font-family','sans-serif');
            varLegend.setAttribute('text-anchor','start');
            varLegend.setAttribute('id','var-legend');
            varLegend.innerHTML = variant;
            document.getElementById('svg-container').appendChild(varLegend);

            //if the gene is on the reverse strand
            if(reverseStrand.includes(this.props.gene)){
                var initLetter = variant[variant.length-3];
                var newLetter = variant[variant.length-1];
                if(initLetter=="A"){initLetter="T";}
                else if(initLetter=="T"){initLetter="A";}
                else if(initLetter=="C"){initLetter="G";}
                else{initLetter="C";}

                if(newLetter=="A"){newLetter="T";}
                else if(newLetter=="T"){newLetter="A";}
                else if(newLetter=="C"){newLetter="G";}
                else{newLetter="C";}
                
                variant = "m."+variantCor+initLetter+">"+newLetter;
            }

            var allTitle = document.getElementById('svg-container').getElementsByTagName('title');
            for(var title of allTitle){
                //changing letter
                if(title.innerHTML==variantCor){
                    var textNode = title.parentElement;
                    textNode.setAttribute('font-weight',"bold");
                    textNode.setAttribute('font-size',"15");
                    textNode.setAttribute('fill',"crimson");
                    textNode.setAttribute('id', 'highlight');
                    textNode.setAttribute('class',textNode.innerHTML[0]);
                    textNode.innerHTML = variant.slice(-1)+textNode.innerHTML.substring(1); 

                    //add circle for background color of highlight
                    var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                    circle.setAttribute('cx',textNode.getAttribute('x'));
                    circle.setAttribute('cy',textNode.getAttribute('y'));
                    circle.setAttribute('r','9px');
                    circle.setAttribute('fill','yellow');
                    circle.setAttribute('id','highlight-background')
                    document.getElementById('svg-container').insertBefore(circle,document.getElementById('svg-container').childNodes[0]);
                }
                //changing circle (dot) 
                else if((title.innerHTML.split(',')[0]==variantCor||title.innerHTML.split(',')[1]==variantCor) && title.parentElement.tagName=='line'){
                    var origLine = title.parentElement;
                    origLine.setAttribute('id','key');
                    var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                    newCircle.setAttribute('cx',(parseFloat(origLine.getAttribute('x1'))+parseFloat(origLine.getAttribute('x2')))/2);
                    newCircle.setAttribute('cy',(parseFloat(origLine.getAttribute('y1'))+parseFloat(origLine.getAttribute('y2')))/2);
                    newCircle.setAttribute('r','2');
                    newCircle.setAttribute('fill','crimson');
                    newCircle.setAttribute('class',origLine.getAttribute('x1')+","+origLine.getAttribute('y1')+","+origLine.getAttribute('x2')+","+origLine.getAttribute('y2'));
                    newCircle.setAttribute('id','highlight-circle')
                    newCircle.innerHTML=origLine.innerHTML;
                    document.getElementById('svg-container').insertBefore(newCircle, origLine);
                    origLine.remove();
                }
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
                            <VarInfoTable variant={this.state.varSubmitted} rnaType="tRNA" />
                        }
                        <VarInfo gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor}/>
                    </div>
                </div>
            )
    }
    
}

export default TrnaSVG;

