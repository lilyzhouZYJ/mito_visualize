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

class RrnaSVG extends React.Component{

    state = {
        varSubmitted: null,
        varCor: null
    }

    handleClick = () => {
        if(this.props.gene=="MT-RNR1"){
            var imageOptions = {
                scale: 5,
                encoderOptions: 1,
                backgroundColor: 'yellow',
                left: 20,
                width: 1000,
                height: 1050
            }
        } else {
            var imageOptions = {
                scale: 2.8,
                encoderOptions: 1,
                backgroundColor: 'white',
                left: 100,
                top: 30,
                width: 2880,
                height: 1974
            }
        }
        saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container'), 'shapes.png', imageOptions);
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
    }

    componentDidUpdate(){
        var variant = this.state.varSubmitted;
        var variantCor = this.state.varCor;
        
        //remove preexisting variant highlight/rectangles/change svg sizes
        this.removeVariantHighlight();
        
        //make new highlight (only on zoom)
        if(variant!==null){

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
                rect.setAttribute('x','0');
                rect.setAttribute('y','0');
                rect.setAttribute('height','1000');
                rect.setAttribute('width','1000');
            } else {
                document.getElementById('rrna-svg-container').setAttribute('height','200');
                document.getElementById('rrna-svg-container').setAttribute('width','289');
                var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
                rect.setAttribute('x','100');
                rect.setAttribute('y','30');
                rect.setAttribute('height','1974');
                rect.setAttribute('width','2850');
            }
            rect.setAttribute('fill','none');
            rect.setAttribute('stroke-width','10px');
            rect.setAttribute('stroke','black');
            rect.setAttribute('id','small-rect');
            document.getElementById('rrna-svg-container').appendChild(rect);

            //x and y coordinates of the variant letter
            var varX = parseFloat(textNode.getAttribute('x'));
            var varY = parseFloat(textNode.getAttribute('y'));
            
            //add rectangle to mt-rnr to show which part is being zoomed on
            var zoomRect = document.createElementNS('http://www.w3.org/2000/svg','rect');
            if(this.props.gene=="MT-RNR1"){
                zoomRect.setAttribute('x',varX-190);
                zoomRect.setAttribute('y',varY-190);
                zoomRect.setAttribute('width','380');
                zoomRect.setAttribute('height','380');
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
            }
            zoomRect.setAttribute('fill','none');
            zoomRect.setAttribute('strokeWidth','1px');
            zoomRect.setAttribute('stroke','black');
            zoomRect.setAttribute('id','highlight-rect');
            document.getElementById('rrna-svg-container').appendChild(zoomRect);

            //add outside rectangle for mt-rnr-zoom
            var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
            if(this.props.gene=="MT-RNR1"){
                rect.setAttribute('x',varX-190);
                rect.setAttribute('y',varY-190);
                rect.setAttribute('height','380');
                rect.setAttribute('width','380');
            } else {
                rect.setAttribute('x',varX-380);
                rect.setAttribute('y',varY-380);
                rect.setAttribute('height','760');
                rect.setAttribute('width','760');
            }
            rect.setAttribute('fill','none');
            rect.setAttribute('strokeWidth','1px');
            rect.setAttribute('stroke','black');
            rect.setAttribute('id','outside-rect');
            document.getElementById('rrna-svg-container-zoom').appendChild(rect);
            
            //set viewBox for mt-rnr-zoom
            if(this.props.gene=="MT-RNR1"){var zoom = (varX-190)+" "+(varY-190)+" 380 380";}
            else {var zoom = (varX-380)+" "+(varY-380)+" 760 760";}
            document.getElementById('rrna-svg-container-zoom').setAttribute('viewBox',zoom);

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
                
                {this.state.varSubmitted!==null && 
                    <SvgComponentZoom gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor} />
                }    
                <SvgComponent gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor}/>
                <button id='download-btn' onClick={this.handleClick}>Download Image</button>
                <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene}/>
                {this.state.varSubmitted!==null && 
                    <VarInfoTable variant={this.state.varSubmitted} varCor={this.state.varCor} />
                }           
                <VarInfo gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor}/>
                
            </div>
        )
       
    }
}

export default RrnaSVG;
