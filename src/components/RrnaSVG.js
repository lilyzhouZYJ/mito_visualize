import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { fetchVarInfo, fetchCoorInfo } from './fetch.js'

import Mtrnr1 from './rRNA/MT-RNR1';
import Mtrnr1Zoom from './rRNA/MT-RNR1-zoom';
import Mtrnr2 from './rRNA/MT-RNR2';
import Mtrnr2Zoom from './rRNA/MT-RNR2-zoom';
import VarInput from './VarInput';
import VarInfo from './VarInfo';
import VarInfoTable from './VarInfoTable';

import "./styles/VariantHighlight.css";
import './styles/VisualizeOptions.css';

const saveSvgAsPng = require('save-svg-as-png');

var varX = null;
var varY = null;

const pairs = {"A":"T", "T":"A", "G":"C", "C":"G"};

class RrnaSVG extends React.Component{

    state = {
        varSubmitted: null,
        varCor: null,
        varData: null,
        loadError: null,
        initLetter: null,
        newLetetr: null,
        breakWC: false,
        formWC: false,
        pairCoor: null,
    }


    //download svg
    handleClick = () => {
        var fileName = "";

        if(this.props.gene=="MT-RNR1"){
            if(document.getElementById('select-download')==null||document.getElementById('zoomed-out').checked){  //if the user chooses to download full image
                var imageOptions = {
                    scale: 9,
                    encoderOptions: 1,
                    backgroundColor: 'white',
                    left: 5,
                    top: 10,
                    width: 950,
                    height: 1000
                }
            } else {    //if the user chooses to download zoomed-in image
                var imageOptions = {
                    scale: 9,
                    encoderOptions: 1,
                    backgroundColor: 'white',
                    left: varX-190,
                    top: varY-190,
                    width: 380,
                    height: 380
                }

                fileName = "-zoomed-in"

            }
        } else {
            if(document.getElementById('select-download')==null||document.getElementById('zoomed-out').checked){
                var imageOptions = {
                    scale: 4,
                    encoderOptions: 1,
                    backgroundColor: 'white',
                    left: 100,
                    top: 30,
                    width: 2880,
                    height: 1974
                }
            } else {
                var imageOptions = {
                    scale: 4,
                    encoderOptions: 1,
                    backgroundColor: 'white',
                    left: varX-380,
                    top: varY-380,
                    width: 760,
                    height: 760
                }

                fileName = '-zoomed-in';

            }
        }
        
        if(this.state.varSubmitted==null){
            fileName = this.props.gene;
            saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container'), fileName, imageOptions);
        } else {
            fileName = this.state.varSubmitted + " [" + this.props.gene + "]" + fileName + '.png';
            saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container-zoom'), fileName, imageOptions);
        }

        // document.getElementById('gene-legend').remove();
    };



    loadData = (variant, varCoor) => {

        this.setState({loadError:null, varData:null});

        fetchVarInfo(variant).then(response => {
            //console.log(response)
            var varData = response.data.variant;

            if(!varData) {
                fetchCoorInfo(varCoor).then(response2 => {
                    if(response2){
                        var var_ref = response2.data.coordinate[0].var_ref;
                        this.setState({loadError: "Expected "+var_ref+" at position m."+varCoor});
                    }
                })

            } else {
                var initLetter = variant[variant.length-3];
                var newLetter = variant[variant.length-1];

                var pairBase = varData.pair_base;
                var pairCoor = varData.pair_coordinate;
                var formWC = false;
                var breakWC = false;
                if(pairs[newLetter]==pairBase) { formWC = true }
                if(pairs[initLetter]==pairBase && pairs[newLetter]!==pairBase) { breakWC = true }

                this.setState({loadError:null, varData:varData, initLetter:initLetter, newLetter:newLetter, formWC:formWC, breakWC:breakWC, pairCoor:pairCoor});
            }
            //console.log(this.state.varData);
        })
    }


    //if a variant is submitted
    handleVarSubmit = (varSubmitted,variantCor) => {

        if(varSubmitted==''&&variantCor==''){
            this.setState({varSubmitted:null,varCor:null, varData:null, loadError:null})
        }
        else{

            const VARIANT_ID_REGEX = /^m\.([0-9]+)([acgt]+)>([acgt]+)$/i
            const match = VARIANT_ID_REGEX.exec(varSubmitted)

            var variantId = "m-"+match[1]+"-"+match[2]+"-"+match[3]
            // console.log("In handleVarSubmit: "+varSubmitted+" variantId: "+variantId)

            window.location.href = '/variant/'+variantId;

        }
        /*
        if(varSubmitted==''&&variantCor==''){
            this.setState({varSubmitted:null,varCor:null, varData:null, loadError:null})
        } else {
            if(varSubmitted !== this.state.varSubmitted){
                this.setState({varSubmitted:varSubmitted,varCor:variantCor});  
                this.loadData(varSubmitted, variantCor);
            }
        }
        */
        /*
        return(
            <Redirect push to={'./variant/'+variantId} />
        )
        */
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
            if(this.props.gene=="MT-RNR1"){
                elementExists.setAttribute('font-size', '9');
            } else {
                elementExists.setAttribute('font-size', '15');
            }
            elementExists.innerHTML = elementExists.getAttribute('class')+elementExists.innerHTML.substring(1);
            elementExists.removeAttribute('class');
        }

        //remove highlighted background (yellow circle)
        var elementExists = document.getElementById('highlight-background');
        if(elementExists!==null){
            elementExists.remove();
        }

        //remove rectangle that highlights the region being zoomed in on rrna-svg
        var elementExists = document.getElementById('highlight-rect');
        if(elementExists!==null){
            elementExists.remove();
        }

        //make rrna-svg big again and remove the rectangle around it
        if(this.props.gene=="MT-RNR1"){
            document.getElementById('rrna-svg-container').setAttribute('height','650');
            document.getElementById('rrna-svg-container').setAttribute('width','650');
        } else {
            document.getElementById('rrna-svg-container').setAttribute('height','450');
            document.getElementById('rrna-svg-container').setAttribute('width','650');
        }
        var elementExists = document.getElementById('small-rect');
        if(elementExists!==null){
            elementExists.remove();
        }

        //remove outside rectangle around rrna-zoom
        var elementExists = document.getElementById('outside-rect');
        if(elementExists!==null){
            elementExists.remove();
        }

        //remove highlighted pairing circle (change dots back to lines again)
        var elementExists = document.getElementById('highlight-circle');
        if(elementExists!==null){
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            var location = elementExists.getAttribute('class').split(',');
            newLine.setAttribute('x1',location[0]);
            newLine.setAttribute('y1',location[1]);
            newLine.setAttribute('x2',location[2]);
            newLine.setAttribute('y2',location[3]);
            newLine.innerHTML=elementExists.innerHTML;
            document.getElementById('rrna-svg-container-zoom').insertBefore(newLine, elementExists);
            elementExists.remove();
        }

        //remove highlighted pairing line (change line back to dot)
        var elementExists = document.getElementById('highlight-line');
        if(elementExists!==null){
            var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
            var x1 = parseFloat(elementExists.getAttribute('x1'));
            var x2 = parseFloat(elementExists.getAttribute('x2'));
            var y1 = parseFloat(elementExists.getAttribute('y1'));
            var y2 = parseFloat(elementExists.getAttribute('y2'));
            newCircle.setAttribute('cx',(x1+x2)/2);
            newCircle.setAttribute('cy',(y1+y2)/2);
            if(this.props.gene=="MT-RNR1"){ newCircle.setAttribute('r','1.3'); }
            else { newCircle.setAttribute('r','2'); }
            newCircle.innerHTML=elementExists.innerHTML;
            document.getElementById('rrna-svg-container-zoom').insertBefore(newCircle, elementExists);
            elementExists.remove();
        }

        //remove note on variant highlight
        var noteExists = document.getElementById('varNote');
        if(noteExists!==null){
            noteExists.remove();
        }

    }



	componentDidMount(){

		// if variant has already been passed as prop
		if(this.props.variant){
			var variant = this.props.variant;
			var varCoor = variant.replace(/\D/g, "");

            this.loadData(variant, varCoor);
			this.setState({varSubmitted: variant, varCor: varCoor});
		}

	}





    componentDidUpdate(prevProps){

        if(this.props.variant !== prevProps.variant){
            var variant = this.props.variant
            var varCoor = variant.replace(/\D/g, "");

            var variantCor = varCoor;

            this.state.varData = null
            // console.log("setting varData to null")

            this.loadData(variant, varCoor);
            this.setState({varSubmitted: variant, varCor: varCoor});

        }
        else{
            var variant = this.state.varSubmitted;
            var variantCor = this.state.varCor;            

        }

        
        //remove preexisting variant highlight/rectangles/change svg sizes
        this.removeVariantHighlight();
        
        //make new highlight (only on zoom)
        if(this.state.varData){

            var initLetter = this.state.initLetter;
            var newLetter = this.state.newLetter;

            var origPairing;
            var allTitle = document.getElementById('rrna-svg-container-zoom').getElementsByTagName('title');

            for(var title of allTitle){

                //get the variant and find its coordinates
                if(title.innerHTML==variantCor){
                    var textNode = title.parentElement;
                    textNode.setAttribute('id', 'highlight');
                    if(this.props.gene=="MT-RNR1"){ textNode.setAttribute('font-size',"15"); }
                    else { textNode.setAttribute('font-size','19'); }
                    textNode.setAttribute('class',textNode.innerHTML[0]);
                    textNode.innerHTML = newLetter+textNode.innerHTML.substring(1); 
                    var textx = parseFloat(textNode.getAttribute('x'));
                    var texty = parseFloat(textNode.getAttribute('y'));
                    varX = textx;
                    varY = texty;

                    //add circle for background color of highlight
                    var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                    circle.setAttribute('cx',textx);
                    circle.setAttribute('cy',texty);
                    if(this.props.gene=="MT-RNR1"){ circle.setAttribute('r','9px'); }
                    else { circle.setAttribute('r','11px'); }
                    circle.setAttribute('id','highlight-background')
                    document.getElementById('rrna-svg-container-zoom').insertBefore(circle,document.getElementById('rrna-svg-container-zoom').childNodes[0]);
                }

                //find the pairing
                if((title.innerHTML.split(',')[0]==variantCor||title.innerHTML.split(',')[1]==variantCor)){
                    if(title.parentElement) {origPairing = title.parentElement; }
                }

                //get coordinates of the pair
                if(title.innerHTML==this.state.pairCoor){
                    var pairNode = title.parentElement;
                    var pairx = parseFloat(pairNode.getAttribute('x'));
                    var pairy = parseFloat(pairNode.getAttribute('y'));
                }
            }

            if(this.state.breakWC){
                var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                newCircle.setAttribute('cx',(textx+pairx)/2);
                newCircle.setAttribute('cy',(texty+pairy)/2);
                if(this.props.gene=="MT-RNR1"){ newCircle.setAttribute('r','1.3'); }
                else { newCircle.setAttribute('r','2'); }
                newCircle.setAttribute('id','highlight-circle');
                //stores original line coordinates
                newCircle.setAttribute('class',origPairing.getAttribute('x1')+","+origPairing.getAttribute('y1')+","+origPairing.getAttribute('x2')+","+origPairing.getAttribute('y2'));
                newCircle.innerHTML = origPairing.innerHTML;
                document.getElementById('rrna-svg-container-zoom').insertBefore(newCircle, origPairing);
                origPairing.remove();
            }

            if(this.state.formWC){
                var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
                var x1, x2, y1, y2;
                if(textx==pairx){
                    x1 = textx;
                    x2 = textx;
                    y1 = (texty+pairy)/2 - 4;
                    y2 = (texty+pairy)/2 + 4;
                }
                else if(texty==pairy){
                    y1 = texty;
                    y2 = texty;
                    x1 = (textx+pairx)/2 - 4;
                    x2 = (textx+pairx)/2 + 4;
                } 
                else{ //for diagonal pairs (in rRNAs)
                    var middle_x = parseFloat((textx+pairx)/2);
                    var length_x = Math.abs(parseFloat((textx+pairx)/3));

                    var middle_y = parseFloat((texty+pairy)/2);
                    var length_y = Math.abs(parseFloat((texty+pairy)/3));

                    if(textx > pairx && texty < pairy){
                        x1 = textx - length_x;
                        y1 = texty + length_y;

                        x2 = textx + length_x; 
                        y2 = texty - length_y;
                    }

                    else if (textx < pairx && texty < pairy){
                        x1 = textx + length_x;
                        y1 = texty + length_y;

                        x2 = pairx - length_x; 
                        y2 = pairy - length_y;
                    } 

                    else if (textx > pairx && texty > pairy){
                        x1 = textx - length_x;
                        y1 = texty - length_y;

                        x2 = pairx + length_x; 
                        y2 = pairy + length_y;
                    }

                    else if (textx < pairx && texty > pairy){
                        x1 = textx + length_x; 
                        y1 = texty - length_y;

                        x2 = pairx - length_x; 
                        y2 = pairy + length_y;
                    }

                }

                newLine.setAttribute('x1',x1);
                newLine.setAttribute('x2',x2);
                newLine.setAttribute('y1',y1);
                newLine.setAttribute('y2',y2);
                newLine.setAttribute('id','highlight-line')
                newLine.innerHTML = origPairing.innerHTML;
                document.getElementById('rrna-svg-container-zoom').insertBefore(newLine, origPairing);
                origPairing.remove();
            }

            //make rrna-svg smaller and add rectangle around it
            if(this.props.gene=="MT-RNR1"){
                document.getElementById('rrna-svg-container').setAttribute('height','200');
                document.getElementById('rrna-svg-container').setAttribute('width','200');
                var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
                rect.setAttribute('x','-12.5');
                rect.setAttribute('y','2.5');
                rect.setAttribute('height','1007.5');
                rect.setAttribute('width','1007.5');
                rect.setAttribute('stroke-width','5px');
            } else {
                document.getElementById('rrna-svg-container').setAttribute('height','200');
                document.getElementById('rrna-svg-container').setAttribute('width','289');
                var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
                rect.setAttribute('x','103');
                rect.setAttribute('y','35');
                rect.setAttribute('height','1965');
                rect.setAttribute('width','2844');
                rect.setAttribute('stroke-width','8px');
            }
            rect.setAttribute('fill','none');
            rect.setAttribute('stroke','black');
            rect.setAttribute('id','small-rect');
            document.getElementById('rrna-svg-container').appendChild(rect);

            /* textx and texty are defined above as the x and y coordinates of the variant letter */
            
            //add rectangle to mt-rnr to show which part is being zoomed on
            var zoomRect = document.createElementNS('http://www.w3.org/2000/svg','rect');
            if(this.props.gene=="MT-RNR1"){
                zoomRect.setAttribute('x',textx-190);
                zoomRect.setAttribute('y',texty-190);
                zoomRect.setAttribute('width','380');
                zoomRect.setAttribute('height','380');
                zoomRect.setAttribute('stroke-width','1px');
            } else {
                // if(varX-380<100){
                //     zoomRect.setAttribute('x',100);
                // } else if(varX+380>2850){
                //     zoomRect.setAttribute('x',2850-760);
                // } else {
                //     zoomRect.setAttribute('x',varX-380);
                // }
                
                // if(varY-380<30){
                //     zoomRect.setAttribute('y',30);
                // } else if(varY+380>1974){
                //     zoomRect.setAttribute('y',1974-760);
                // } else {
                //     zoomRect.setAttribute('y',varY-380);
                // }

                zoomRect.setAttribute('x',textx-380);
                zoomRect.setAttribute('y',texty-380);
                zoomRect.setAttribute('width','760');
                zoomRect.setAttribute('height','760');
                zoomRect.setAttribute('stroke-width','2px');
            }
            zoomRect.setAttribute('fill','none');
            zoomRect.setAttribute('stroke','black');
            zoomRect.setAttribute('id','highlight-rect');
            document.getElementById('rrna-svg-container').appendChild(zoomRect);

            //add outside rectangle for mt-rnr-zoom
            var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
            if(this.props.gene=="MT-RNR1"){
                rect.setAttribute('x',textx-190);
                rect.setAttribute('y',texty-190);
                rect.setAttribute('height','380');
                rect.setAttribute('width','380');
                rect.setAttribute('stroke-width','1px');
            } else {
                rect.setAttribute('x',textx-380);
                rect.setAttribute('y',texty-380);
                rect.setAttribute('height','760');
                rect.setAttribute('width','760');
                rect.setAttribute('stroke-width','2px');
            }
            rect.setAttribute('fill','none');
            rect.setAttribute('stroke','black');
            rect.setAttribute('id','outside-rect');
            document.getElementById('rrna-svg-container-zoom').appendChild(rect);
            
            //set viewBox for mt-rnr-zoom
            if(this.props.gene=="MT-RNR1"){var zoom = (textx-190)+" "+(texty-190)+" 380 380";}
            else {var zoom = (textx-380)+" "+(texty-380)+" 760 760";}
            document.getElementById('rrna-svg-container-zoom').setAttribute('viewBox',zoom);

            //add note on the variant highlight
            var varNote = document.createElement('li');
            varNote.innerHTML = "The base and pair type change (if applicable) is shown in red.";
            varNote.setAttribute('id','varNote');
            document.getElementById('notes').appendChild(varNote);

        }
        
    }

    render(){
        
        const { varSubmitted, varCor, varData, loadError, initLetter, newLetter, breakWC, formWC, pairCoor } = this.state;

        var gene = this.props.gene;

        var SvgComponent;
        var SvgComponentZoom;

        if(gene=="MT-RNR1"){
            SvgComponent = Mtrnr1;
            SvgComponentZoom = Mtrnr1Zoom;
        } else {
            SvgComponent = Mtrnr2;
            SvgComponentZoom = Mtrnr2Zoom;
        }
    
        if(varData){
            return(
                <div id="rrna-svg">   
                    <div id="left-container">
                        <h5>{gene}</h5>
                        <h6>{this.state.varSubmitted}</h6>
                        <SvgComponentZoom gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor} />
                        <SvgComponent gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor}/>
                        <div id="bottom-section">
                            <ul id="notes">
                                <li>Note: Thin lines represent Watson-Crick base pairs; dots represent non-Watson-Crick base pairs. Thick lines represent other types of structural interactions.</li>
                                <li>Hovering over each base will display the genomic coordinate.</li>
                                {gene=="MT-RNR1" ? 
                                    <li>2D rRNA structure is per <a href="https://pubmed.ncbi.nlm.nih.gov/25838379/" target="_blank">Amunts, Brown et al 2015</a>.</li>
                                    : <li>2D rRNA structure is per <a href="https://pubmed.ncbi.nlm.nih.gov/25278503/" target="_blank">Brown, Amunts et al 2014</a>.</li>
                                }
                            </ul>
                            <button id='download-btn' onClick={this.handleClick}>Download Image (png)</button>
                            <div id="select-download">
                                <p>
                                    <label>
                                        <input type='radio' name="download" id="zoomed-out" class="with-gap" checked/>
                                        <span>Download full image</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type='radio' name="download" id="zoomed-in" class="with-gap"/>
                                        <span>Download zoomed-in image</span>
                                    </label>
                                </p>
                            </div>   
                            <p id="citation-note">If you use MitoVisualize, please cite "Lake NJ, Zhou L, Xu J, Lek M. 2021. MitoVisualize: A resource for analysis of variants in human mitochondrial RNAs and DNA. bioRxiv <a href="https://www.biorxiv.org/content/10.1101/2021.12.04.470997v1" target="_blank">doi: 10.1101/2021.12.04.470997</a>".</p>
                        </div>
                    </div>    
                    <div id="right-container">
                        <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene} variant={this.props.variant}/>
                        <VarInfo variant={varSubmitted} gene={gene} dom={varData.dom} rnaType="rRNA" initLetter={initLetter} newLetter={newLetter} breakWC={breakWC} formWC={formWC} />
                        <VarInfoTable variant={varSubmitted} varData={varData} rnaType="rRNA" />
                    </div>
                </div>
            )
        } else if (loadError){
            return(
                <div id="rrna-svg">   
                    <div id="left-container">
                        <h5>{gene}</h5>
                        <SvgComponent gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor}/>
                        <div id="bottom-section">
                            <ul id="notes">
                                <li>Note: Thin lines represent Watson-Crick base pairs; dots represent non-Watson-Crick base pairs. Thick lines represent other types of structural interactions.</li>
                                <li>Hovering over each base will display the genomic coordinate.</li>
                                {gene=="MT-RNR1" ? 
                                    <li>2D rRNA structure is per <a href="https://pubmed.ncbi.nlm.nih.gov/25838379/" target="_blank">Amunts, Brown et al 2015</a>.</li>
                                    : <li>2D rRNA structure is per <a href="https://pubmed.ncbi.nlm.nih.gov/25278503/" target="_blank">Brown, Amunts et al 2014</a>.</li>
                                }
                            </ul>
                            <button id='download-btn' onClick={this.handleClick}>Download Image (png)</button>
                            <p id="citation-note">If you use MitoVisualize, please cite "Lake NJ, Zhou L, Xu J, Lek M. 2021. MitoVisualize: A resource for analysis of variants in human mitochondrial RNAs and DNA. bioRxiv <a href="https://www.biorxiv.org/content/10.1101/2021.12.04.470997v1" target="_blank">doi: 10.1101/2021.12.04.470997</a>".</p>
                        </div>
                    </div>    
                    <div id="right-container">
                        <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene}/>
                        <VarInfo loadError={loadError} />
                    </div>
                </div>
            )
        } else {
            return(
                <div id="rrna-svg">   
                    <div id="left-container">
                        <h5>{gene}</h5>
                        <SvgComponent gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor}/>
                        <div id="bottom-section">
                            <ul id="notes">
                                <li>Note: Thin lines represent Watson-Crick base pairs; dots represent non-Watson-Crick base pairs. Thick lines represent other types of structural interactions.</li>
                                <li>Hovering over each base will display the genomic coordinate.</li>
                                {gene=="MT-RNR1" ? 
                                    <li>2D rRNA structure is per <a href="https://pubmed.ncbi.nlm.nih.gov/25838379/" target="_blank">Amunts, Brown et al 2015</a>.</li>
                                    : <li>2D rRNA structure is per <a href="https://pubmed.ncbi.nlm.nih.gov/25278503/" target="_blank">Brown, Amunts et al 2014</a>.</li>
                                }
                            </ul>
                            <button id='download-btn' onClick={this.handleClick}>Download Image (png)</button>
                            <p id="citation-note">If you use MitoVisualize, please cite "Lake NJ, Zhou L, Xu J, Lek M. 2021. MitoVisualize: A resource for analysis of variants in human mitochondrial RNAs and DNA. bioRxiv <a href="https://www.biorxiv.org/content/10.1101/2021.12.04.470997v1" target="_blank">doi: 10.1101/2021.12.04.470997</a>".</p>
                        </div>    
                    </div>
                    <div id="right-container">
                        <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene}/>
                        {this.state.varSubmitted!==null &&
                            <VarInfo loading="Loading..." />
                        }
                    </div>
                </div>
            )

        }
    }
}

export default RrnaSVG;
