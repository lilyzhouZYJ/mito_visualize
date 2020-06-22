import React from 'react';
import ReactDOM from 'react-dom';
import Mtrnr1 from './rRNA/MT-RNR1';
import Mtrnr1Zoom from './rRNA/MT-RNR1-zoom';
import Mtrnr2 from './rRNA/MT-RNR2';
import Mtrnr2Zoom from './rRNA/MT-RNR2-zoom';
import VarInput from './VarInput';
import VarInfo from './VarInfo';
import VarInfoTable from './VarInfoTable';

const saveSvgAsPng = require('save-svg-as-png');

var varX = null;
var varY = null;

class RrnaSVG extends React.Component{

    state = {
        varSubmitted: null,
        varCor: null
    }

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
            // var geneLegend = document.createElementNS('http://www.w3.org/2000/svg','text');
            // if(this.props.gene=="MT-RNR1"){
            //     geneLegend.setAttribute('x','50');
            //     geneLegend.setAttribute('y','30');
            //     geneLegend.setAttribute('font-size','23');
            // } else {
            //     geneLegend.setAttribute('x','100');
            //     geneLegend.setAttribute('y','130');
            //     geneLegend.setAttribute('font-size','50');
            // }
            // geneLegend.setAttribute('font-weight','bold');
            // geneLegend.setAttribute('font-family','sans-serif');
            // geneLegend.setAttribute('text-anchor','start');
            // geneLegend.setAttribute('id','gene-legend');
            // geneLegend.innerHTML = this.props.gene;
            // document.getElementById('rrna-svg-container').appendChild(geneLegend);

            fileName = this.props.gene;
            saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container'), fileName, imageOptions);
            
        } else {
            fileName = this.state.varSubmitted + " [" + this.props.gene + "]" + fileName + '.png';
            saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container-zoom'), fileName, imageOptions);
        }

        
        // document.getElementById('gene-legend').remove();

    };

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
            if(this.props.gene=="MT-RNR1"){
                elementExists.setAttribute('font-size', '9');
            } else {
                elementExists.setAttribute('font-size', '15');
            }
            elementExists.setAttribute('fill', '#000000');
            var origX = parseFloat(elementExists.getAttribute('x'));
            var origY = parseFloat(elementExists.getAttribute('y'));
            elementExists.setAttribute('x',origX);
            elementExists.setAttribute('y',origY);
            elementExists.setAttribute('id','');
            elementExists.innerHTML = elementExists.getAttribute('class')+elementExists.innerHTML.substring(1);
            elementExists.setAttribute('class','');
        }

        //remove preeixsting highlighted background (yellow circle)
        var elementExists = document.getElementById('highlight-background');
        if(elementExists!==null){
            elementExists.remove();
        }

        //remove preexisting rectangle that highlights the region being zoomed in on rrna-svg
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

        //remove outside rectangle around rrna-zoom (the rect has to update based on variant)
        var elementExists = document.getElementById('outside-rect');
        if(elementExists!==null){
            elementExists.remove();
        }

        //remove preexisting highlighted circle (change dots back to lines again)
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
            document.getElementById('rrna-svg-container-zoom').insertBefore(newLine, elementExists);
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
        
        //remove preexisting variant highlight/rectangles/change svg sizes
        this.removeVariantHighlight();
        
        //make new highlight (only on zoom)
        if(variant!==null){

            // //add variant name to svg legend
            // var varLegend = document.createElementNS('http://www.w3.org/2000/svg','text');
            // if(this.props.gene=="MT-RNR1"){
            //     varLegend.setAttribute('x','0');
            //     varLegend.setAttribute('y','70');
            //     varLegend.setAttribute('font-size','27');
            // }
            // varLegend.setAttribute('font-weight','bold');
            // varLegend.setAttribute('font-family','sans-serif');
            // varLegend.setAttribute('text-anchor','start');
            // varLegend.setAttribute('id','var-legend');
            // varLegend.innerHTML = variant;
            // document.getElementById('rrna-svg-container').appendChild(varLegend);

            var allTitle = document.getElementById('rrna-svg-container-zoom').getElementsByTagName('title');
            for(var title of allTitle){
                //changing letter
                if(title.innerHTML==variantCor){
                    var textNode = title.parentElement;
                    textNode.setAttribute('font-weight',"bold");
                    if(this.props.gene=="MT-RNR1"){textNode.setAttribute('font-size',"15");}
                    else {textNode.setAttribute('font-size','19');}
                    textNode.setAttribute('fill',"crimson");
                    textNode.setAttribute('id', 'highlight');
                    textNode.setAttribute('class',textNode.innerHTML[0]);
                    textNode.innerHTML = variant.slice(-1)+textNode.innerHTML.substring(1); 

                    //add circle for background color of highlight
                    var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                    circle.setAttribute('cx',textNode.getAttribute('x'));
                    circle.setAttribute('cy',textNode.getAttribute('y'));
                    if(this.props.gene=="MT-RNR1"){circle.setAttribute('r','9px');}
                    else {circle.setAttribute('r','11px');}
                    circle.setAttribute('fill','yellow');
                    circle.setAttribute('id','highlight-background')
                    document.getElementById('rrna-svg-container-zoom').insertBefore(circle,document.getElementById('rrna-svg-container-zoom').childNodes[0]);
                }
                //changing circle (dot) 
                else if((title.innerHTML.split(',')[0]==variantCor||title.innerHTML.split(',')[1]==variantCor) && title.parentElement.tagName=='line'){
                    var pair = title.innerHTML.split(',');
                    //take out non-Watson Crick pair lines 
                    if(this.props.gene=="MT-RNR1"&&pair.includes('1137')&&pair.includes('1138')){}
                    else if(this.props.gene=="MT-RNR1"&&pair.includes('657')&&pair.includes('658')){}
                    else if(this.props.gene=="MT-RNR1"&&pair.includes('656')&&pair.includes('657')){}
                    else if(this.props.gene=="MT-RNR1"&&pair.includes('687')&&pair.includes('688')){}
                    else if(this.props.gene=="MT-RNR1"&&pair.includes('688')&&pair.includes('689')){}
                    else if(this.props.gene=="MT-RNR1"&&pair.includes('802')&&pair.includes('801')){}
                    else if(this.props.gene=="MT-RNR1"&&pair.includes('801')&&pair.includes('800')){}
                    else if(this.props.gene=="MT-RNR1"&&pair.includes('2452')&&pair.includes('2453')){}
                    else{
                        var origLine = title.parentElement;
                        origLine.setAttribute('id','key');
                        var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                        newCircle.setAttribute('cx',(parseFloat(origLine.getAttribute('x1'))+parseFloat(origLine.getAttribute('x2')))/2);
                        newCircle.setAttribute('cy',(parseFloat(origLine.getAttribute('y1'))+parseFloat(origLine.getAttribute('y2')))/2);
                        if(this.props.gene=="MT-RNR1"){newCircle.setAttribute('r','1.3');}
                        else {newCircle.setAttribute('r','2');}
                        newCircle.setAttribute('fill','crimson');
                        newCircle.setAttribute('class',origLine.getAttribute('x1')+","+origLine.getAttribute('y1')+","+origLine.getAttribute('x2')+","+origLine.getAttribute('y2'));
                        newCircle.setAttribute('id','highlight-circle')
                        newCircle.innerHTML=origLine.innerHTML;
                        document.getElementById('rrna-svg-container-zoom').insertBefore(newCircle, origLine);
                        origLine.remove();
                    }
                }
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

            //x and y coordinates of the variant letter
            varX = parseFloat(textNode.getAttribute('x'));
            varY = parseFloat(textNode.getAttribute('y'));
            
            //add rectangle to mt-rnr to show which part is being zoomed on
            var zoomRect = document.createElementNS('http://www.w3.org/2000/svg','rect');
            if(this.props.gene=="MT-RNR1"){
                zoomRect.setAttribute('x',varX-190);
                zoomRect.setAttribute('y',varY-190);
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

                zoomRect.setAttribute('x',varX-380);
                zoomRect.setAttribute('y',varY-380);
                zoomRect.setAttribute('width','760');
                zoomRect.setAttribute('height','760');
                zoomRect.setAttribute('stroke-width','2px');
            }
            zoomRect.setAttribute('fill','none');
            zoomRect.setAttribute('stroke','black');
            zoomRect.setAttribute('id','highlight-rect');
            document.getElementById('rrna-svg-container').appendChild(zoomRect);

            // //add legend to mt-rnr-zoom
            // var legRect = document.createElementNS('http://www.w3.org/2000/svg','rect');
            // if(this.props.gene=="MT-RNR1"){
            //     legRect.setAttribute('x',varX+180);
            //     legRect.setAttribute('y',varY-220);
            //     legRect.setAttribute('height','40');
            //     legRect.setAttribute('width','70');
            // } else {
            //     legRect.setAttribute('x',varX+680);
            //     legRect.setAttribute('y',varY-400);
            //     legRect.setAttribute('height','60');
            //     legRect.setAttribute('width','80');
            // }
            // legRect.setAttribute('fill','white');
            // document.getElementById('rrna-svg-container-zoom').appendChild(legRect);

            // var legGene = document.createElementNS('http://www.w3.org/2000/svg','text');
            // legGene.innerHTML = this.props.gene;
            // if(this.props.gene=="MT-RNR1"){
            //     legGene.setAttribute('x',varX+183);
            //     legGene.setAttribute('y',varY-175);
            //     legGene.setAttribute('font-size', '12px');
            // }
            // legGene.setAttribute('font-weight','bold');
            // legGene.setAttribute('font','sans-serif');
            // legGene.setAttribute('text-anchor','end');
            // document.getElementById('rrna-svg-container-zoom').appendChild(legGene);

            // if(this.state.varSubmitted!==null){
            //     legGene = document.createElementNS('http://www.w3.org/2000/svg','text');
            //     legGene.innerHTML = this.state.varSubmitted;
            //     legGene.setAttribute('x',varX+183);
            //     legGene.setAttribute('y',varY-163);
            //     legGene.setAttribute('font-size', '9px');
            //     legGene.setAttribute('font-weight','bold');
            //     legGene.setAttribute('font','sans-serif');
            //     legGene.setAttribute('text-anchor','end');
            //     document.getElementById('rrna-svg-container-zoom').appendChild(legGene);
            // }

            //add outside rectangle for mt-rnr-zoom
            var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
            if(this.props.gene=="MT-RNR1"){
                rect.setAttribute('x',varX-190);
                rect.setAttribute('y',varY-190);
                rect.setAttribute('height','380');
                rect.setAttribute('width','380');
                rect.setAttribute('stroke-width','1px');
            } else {
                rect.setAttribute('x',varX-380);
                rect.setAttribute('y',varY-380);
                rect.setAttribute('height','760');
                rect.setAttribute('width','760');
                rect.setAttribute('stroke-width','2px');
            }
            rect.setAttribute('fill','none');
            rect.setAttribute('stroke','black');
            rect.setAttribute('id','outside-rect');
            document.getElementById('rrna-svg-container-zoom').appendChild(rect);
            
            //set viewBox for mt-rnr-zoom
            if(this.props.gene=="MT-RNR1"){var zoom = (varX-190)+" "+(varY-190)+" 380 380";}
            else {var zoom = (varX-380)+" "+(varY-380)+" 760 760";}
            document.getElementById('rrna-svg-container-zoom').setAttribute('viewBox',zoom);

            //add note on the variant highlight
            var varNote = document.createElement('li');
            varNote.innerHTML = "The base and pair type change (if applicable) is shown in red.";
            varNote.setAttribute('id','varNote');
            document.getElementById('notes').appendChild(varNote);

        }
        
    }

    render(){
        
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
    
        return(
            <div id="rrna-svg">
                
                <div id="left-container">
                    <h5>{gene}</h5>
                    {this.state.varSubmitted!==null && 
                        <h6>{this.state.varSubmitted}</h6>
                    }    
                    {this.state.varSubmitted!==null && 
                        <SvgComponentZoom gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor} />
                    }    
                    <SvgComponent gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor}/>
                    <ul id="notes">
                        <li>Note: Thin lines represent Watson-Crick base pairs; dots represent non-Watson-Crick base pairs. Thick lines represent other types of structural interactions.</li>
                        <li>Hovering over each base will display the genomic coordinate.</li>
                    </ul>
                    <button id='download-btn' onClick={this.handleClick}>Download Image (png)</button>
                    {this.state.varSubmitted!==null &&
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
                    }
                </div>
                
                <div id="right-container">
                    <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene}/>
                    {this.state.varSubmitted!==null && 
                        <VarInfoTable variant={this.state.varSubmitted} varCor={this.state.varCor} />
                    }           
                    <VarInfo gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor}/>
                </div>

            </div>
        )
       
    }
}

export default RrnaSVG;
