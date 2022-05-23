import React from 'react';
import { fetchVarInfo, fetchCoorInfo } from '../fetch.js';
import { GENES_REVERSE_STRAND } from '../params/params.js';

/* Import components */
import Citation from '../Citation.js';
import VarInput from '../VarInput.js';
import VarInfoTable from '../VarInfoTable.js';
import VarInfo from '../VarInfo.js';

/* Import tRNA SVG components */
import Mtta from '../TrnaSVGs/MT-TA.js';
import Mttt from '../TrnaSVGs/MT-TT.js';
import Mtty from '../TrnaSVGs/MT-TY.js';
import Mttw from '../TrnaSVGs/MT-TW.js';
import Mttv from '../TrnaSVGs/MT-TV.js';
import Mtts1 from '../TrnaSVGs/MT-TS1.js';
import Mtts2 from '../TrnaSVGs/MT-TS2.js';
import Mttp from '../TrnaSVGs/MT-TP.js';
import Mttf from '../TrnaSVGs/MT-TF.js';
import Mttk from '../TrnaSVGs/MT-TK.js';
import Mttl1 from '../TrnaSVGs/MT-TL1.js';
import Mttl2 from '../TrnaSVGs/MT-TL2.js';
import Mtti from '../TrnaSVGs/MT-TI.js';
import Mtth from '../TrnaSVGs/MT-TH.js';
import Mttg from '../TrnaSVGs/MT-TG.js';
import Mttq from '../TrnaSVGs/MT-TQ.js';
import Mtte from '../TrnaSVGs/MT-TE.js';
import Mttc from '../TrnaSVGs/MT-TC.js';
import Mttd from '../TrnaSVGs/MT-TD.js';
import Mttn from '../TrnaSVGs/MT-TN.js';
import Mttm from '../TrnaSVGs/MT-TM.js';
import Mttr from '../TrnaSVGs/MT-TR.js';

/* Import rRNA SVG components */
import Mtrnr1 from '../RrnaSVGs/MT-RNR1';
import Mtrnr1Zoom from '../RrnaSVGs/MT-RNR1-zoom';
import Mtrnr2 from '../RrnaSVGs/MT-RNR2';
import Mtrnr2Zoom from '../RrnaSVGs/MT-RNR2-zoom';

/* Styling */
import '../styles/VariantHighlight.css';
import '../styles/VisualizeOptions.css';

// Image download setup
const saveSvgAsPng = require('save-svg-as-png');

// Match each gene to its respective component
const tRNAs = {
    'MT-TA': Mtta,
    'MT-TT': Mttt,
    'MT-TW': Mttw,
    'MT-TY': Mtty,
    'MT-TV': Mttv,
    'MT-TS1':Mtts1,
    'MT-TS2':Mtts2,
    'MT-TP': Mttp,
    'MT-TF': Mttf,
    'MT-TK': Mttk,
    'MT-TL1': Mttl1,
    'MT-TL2': Mttl2,
    'MT-TI': Mtti,
    'MT-TH': Mtth,
    'MT-TG': Mttg,
    'MT-TQ': Mttq,
    'MT-TE': Mtte,
    'MT-TC': Mttc,
    'MT-TD': Mttd,
    'MT-TN': Mttn,
    'MT-TM': Mttm,
    'MT-TR': Mttr
};

// rRNA styling setup
var varX = null;
var varY = null;

// Base pairs
const pairs = {"A":"T", "T":"A", "G":"C", "C":"G"};

class VariantSVGPage extends React.Component{

    state = {
        varSubmitted: null,
        varCor: null,
        varData: null,
        loadError: null,
        initLetter: null,
        newLetter: null,
        breakWC: false,
        formWC: false,
        pairCoor: null,
        svg_id: null        // svg component id
    }

    /* Handle image download */
    handleImageDownload = () => {
        var fileName;
        var filePrefix;

        // Set up image options
        var imageOptions = this.props.rnaType == "rRNA" 
                                ? this.setUpRrnaImageOptions() 
                                : this.setUpTrnaImageOptions();

        // Set up file name
        if(this.state.varSubmitted==null){  // no variant; just gene name
            filePrefix = this.props.gene;
        } else {                            // show variant name in file name
            filePrefix = this.state.varSubmitted + " [" + this.props.gene + "]";
        }

        // Set up file type
        if(document.getElementById('jpeg').checked){
            imageOptions = { ...imageOptions, encoderType: 'image/jpeg'}            
            fileName = filePrefix + ".jpeg"
        }
        else if(document.getElementById('webp').checked){
            imageOptions = { ...imageOptions, encoderType: 'image/webp'}                        
            fileName = filePrefix + ".webp"
        }
        else{
            imageOptions = { ...imageOptions, encoderType: 'image/png'}                        
            fileName = filePrefix + ".png"
        }

        // Perform downloading
        if(this.props.rnaType == "rRNA") {  // download rRNA image
            this.downloadRrnaImage(fileName, imageOptions);
        } else {                            // downnload tRNA image
            saveSvgAsPng.saveSvgAsPng(document.getElementById('svg-container'), 
                                        fileName, 
                                        imageOptions);
        }
    }

    /* Set up image download options for tRNA */
    setUpTrnaImageOptions = () => {
        return {
            scale: 5,
            encoderOptions: 1,
            backgroundColor: 'white',
            left: 5,
            top: -20,
            height: 380,
            width: 350
        };
    }

    /* Set up image download options for rRNA */
    setUpRrnaImageOptions = () => {
        var imageOptions;

        if (document.getElementById('full-or-zoomed-in-buttons') == null 
            || document.getElementById('zoomed-out').checked) {
            // If there is no "select full vs. zoomed-in image" option,
            // or if user chooses to download full image, then download full image.
            
            if(this.props.gene=="MT-RNR1"){             // MT-RNR1 scaling
                imageOptions = {
                    scale: 9,
                    encoderOptions: 1,
                    backgroundColor: 'white',
                    left: 5,
                    top: 5,
                    width: 950,
                    height: 1000
                }
            } else {                                    // MT-RNR2 scaling
                imageOptions = {
                    scale: 4,
                    encoderOptions: 1,
                    backgroundColor: 'white',
                    left: 110,
                    top: 40,
                    width: 2830,
                    height: 1954
                }
            }
        } else {
            // Download zoomed-in image
            if(this.props.gene=="MT-RNR1"){             // MT-RNR1 scaling
                imageOptions = {
                    scale: 9,
                    encoderOptions: 1,
                    backgroundColor: 'white',
                    left: varX-190,
                    top: varY-190,
                    width: 380,
                    height: 380
                }
                fileName = "-zoomed-in"
            } else {                                    // MT-RNR2 scaling
                imageOptions = {
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

        return imageOptions;        
    }

    /* Download image for rRNA */
    downloadRrnaImage = (fileName, imageOptions) => {
        if(document.getElementById('full-or-zoomed-in-buttons')==null 
            || document.getElementById('zoomed-out').checked 
            || this.state.varSubmitted==null){
            // download full image
            saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container'), fileName, imageOptions);
        }
        else{
            // download zoomed in image
            saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container-zoom'), fileName, imageOptions);                
        }
    }

    // Download variant data as table
    // https://stackoverflow.com/questions/27013963/write-to-csv-file-locally-with-html5
    downloadVarClick = () => {
        const {varData, varCor} = this.state;
        const varDataKeys = Object.keys(varData);

        var header = varDataKeys[0];
        var data_row = varData[varDataKeys[0]];
        var i;
        const sep = '\t';
        const re = 'pop|heteroplasmy|count';
        const re2 = 'pair';

        for(i = 1; i < varDataKeys.length; i++){
            if(varDataKeys[i].match(re2)){
                continue;
            } else if (varData[varDataKeys[i]] !== null){
                header += sep + varDataKeys[i];
                data_row += sep + varData[varDataKeys[i]];
            } else {
                header += sep + varDataKeys[i];
                
                if(varDataKeys[i].match(re)){
                    data_row += sep + '0';
                } else if (varDataKeys[i] == 'post_transcription_modifications'){
                    data_row += sep + 'No';
                } else {
                    data_row += sep + 'NA';
                }                
            }
        }

        var fileName = `m_${varData.var_coordinate}_${varData.var_ref}_${varData.var_alt}.tsv`
        var data = header + '\n' + data_row + '\n'

        // Idea taken from: https://github.com/exupero/saveSvgAsPng in out$.download function
        var exportLink = document.createElement('a');
        var uri = 'data:text/csv;base64,' + window.btoa(data)

        exportLink.setAttribute('href', uri);
        exportLink.setAttribute('download', fileName);
        document.body.appendChild(exportLink);

        exportLink.onclick = () => requestAnimationFrame(() => URL.revokeObjectURL(uri));
        exportLink.click();
        document.body.removeChild(exportLink);
    };

    /* Fetch variant data */
    loadData = (variant, varCoor) => {

        // Reset states
        this.setState({loadError:null, varData:null});

        // Fetch variant info
        fetchVarInfo(variant).then(response => {
            var varData = response.data.variant;

            if(!varData) {  // null response
                fetchCoorInfo(varCoor).then(response2 => {
                    if(response2){
                        // fetch correct var_ref and display error
                        var var_ref = response2.data.coordinate[0].var_ref;
                        this.setState({loadError: "Expected "+var_ref+" at position m."+varCoor});
                    }
                })
            } else {
                var initLetter = variant[variant.length-3];
                var newLetter = variant[variant.length-1];

                // If the gene is on the reverse strand
                if(GENES_REVERSE_STRAND.includes(this.props.gene)){ 
                    initLetter = pairs[initLetter];
                    newLetter = pairs[newLetter];
                }

                var pairBase = varData.pair_base;
                var pairCoor = varData.pair_coordinate;
                var formWC = false;
                var breakWC = false;
                if(pairs[newLetter]==pairBase) { formWC = true }
                if(pairs[initLetter]==pairBase && pairs[newLetter]!==pairBase) { breakWC = true }

                // Update states
                this.setState({loadError:null, varData:varData, initLetter:initLetter, newLetter:newLetter, formWC:formWC, breakWC:breakWC, pairCoor:pairCoor});
            }
        })
    }

    /* Handles the submission of a variant */
    handleVarSubmit = (varSubmitted, variantCor) => {
        if(varSubmitted == '' && variantCor == '') {
            this.setState({ varSubmitted: null, varCor: null, varData: null, loadError: null });
        } else {
            const VARIANT_ID_REGEX = /^m\.([0-9]+)([acgt]+)>([acgt]+)$/i;
            const match = VARIANT_ID_REGEX.exec(varSubmitted);

            var variantId = "m-"+match[1]+"-"+match[2]+"-"+match[3];
            window.location.href = '/variant/'+variantId;
        }
    }

    /* Remove preexisting variant highlight */
    removeVariantHighlight() {
        // Get SVG component id
        var svg_id;
        if(this.props.rnaType == "rRNA"){
            svg_id = 'rrna-svg-container';
        } else {
            svg_id = 'svg-container';
        }

        // Remove variant name in svg legend
        var legExists = document.getElementById('var-legend');
        if(legExists !== null){
            legExists.remove();
        }

        // Remove highlighted letter
        var elementExists = document.getElementById('highlight');
        if(elementExists !== null){
            elementExists.removeAttribute('id');
            if(this.props.gene == "MT-RNR1"){
                elementExists.setAttribute('font-size', '9');
            } else if (this.props.gene == "MT-RNR2"){
                elementExists.setAttribute('font-size', '15');
            }
            elementExists.innerHTML = elementExists.getAttribute('class') 
                                        + elementExists.innerHTML.substring(1);
            elementExists.removeAttribute('class');
        }

        // Remove highlighted background (yellow circle behind a base)
        var elementExists = document.getElementById('highlight-background');
        if(elementExists !== null){
            elementExists.remove();
        }

        // Remove highlighted pairing circle (change dots back to lines again)
        var elementExists = document.getElementById('highlight-circle');
        if(elementExists !== null){
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            var location = elementExists.getAttribute('class').split(',');
            newLine.setAttribute('x1',location[0]);
            newLine.setAttribute('y1',location[1]);
            newLine.setAttribute('x2',location[2]);
            newLine.setAttribute('y2',location[3]);
            newLine.innerHTML=elementExists.innerHTML;
            document.getElementById(svg_id).insertBefore(newLine, elementExists);
            elementExists.remove();
        }

        // Remove highlighted pairing line (change line to dot)
        var elementExists = document.getElementById('highlight-line');
        if(elementExists!==null){
            var newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
            var x1 = parseFloat(elementExists.getAttribute('x1'));
            var x2 = parseFloat(elementExists.getAttribute('x2'));
            var y1 = parseFloat(elementExists.getAttribute('y1'));
            var y2 = parseFloat(elementExists.getAttribute('y2'));
            newCircle.setAttribute('cx', (x1+x2)/2);
            newCircle.setAttribute('cy', (y1+y2)/2);
            if(this.props.gene == "MT-RNR1") {
                newCircle.setAttribute('r','1.3');
            } else {
                newCircle.setAttribute('r','2');
            }
            newCircle.innerHTML=elementExists.innerHTML;

            if(this.rnaType == "rRNA"){
                document.getElementById('rrna-svg-container-zoom').insertBefore(newCircle, elementExists);
            } else {
                document.getElementById(svg-id).insertBefore(newCircle, elementExists);
            }

            elementExists.remove();
        }

        // Remove note on variant highlight
        var noteExists = document.getElementById('varNote');
        if(noteExists!==null){
            noteExists.remove();
        }

        /* rRNA specific */

        if(this.rnaType == "rRNA"){
            // Remove rectangle that highlights the region being zoomed in on rrna-svg
            var elementExists = document.getElementById('highlight-rect');
            if(elementExists!==null){
                elementExists.remove();
            }

            // Make rrna-svg big again and remove the rectangle around it
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

            // Remove outside rectangle around rrna-zoom
            var elementExists = document.getElementById('outside-rect');
            if(elementExists!==null){
                elementExists.remove();
            }
        }

    }

    componentDidMount(){
        // If variant has already been passed as prop
        if(this.props.variant){
            var variant = this.props.variant;
            var varCoor = variant.replace(/\D/g, "");

            this.setState({varSubmitted: variant, varCor: varCoor});
            this.loadData(variant, varCoor);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.variant !== prevProps.variant){
            var variant = this.props.variant;
            var varCoor = variant.replace(/\D/g, "");
            this.loadData(variant, varCoor);
            this.setState({varSubmitted: variant, varCor: varCoor});
        }

        // Remove preexisting variant highlight
        this.removeVariantHighlight();
        
        // Make new highlight
        if(this.state.varData){
            this.props.rnaType == "tRNA" ? this.addTrnaHighlights() 
                                    : this.addRrnaHighlights();
        }
    }

    addTrnaHighlights = () => {
        var variant = this.state.varSubmitted;
        var variantCor = this.state.varCor;

        // Add variant name to legend
        var varLegend = document.createElementNS('http://www.w3.org/2000/svg','text');
        varLegend.setAttribute('x','35');
        varLegend.setAttribute('y','55');
        varLegend.setAttribute('id','var-legend');
        varLegend.innerHTML = variant;
        document.getElementById('svg-container').appendChild(varLegend);

        var initLetter = this.state.initLetter;
        var newLetter = this.state.newLetter;

        var origPairing;
        var allTitle = document.getElementById('svg-container').getElementsByTagName('title');

        for(var title of allTitle){

            // Get the variant and find its coordinates
            if(title.innerHTML==variantCor){
                var textNode = title.parentElement;
                textNode.setAttribute('id', 'highlight');
                textNode.setAttribute('class',textNode.innerHTML[0]);
                textNode.innerHTML = newLetter+textNode.innerHTML.substring(1); 
                var textx = parseFloat(textNode.getAttribute('x'));
                var texty = parseFloat(textNode.getAttribute('y'));

                // Add circle for background color of highlight
                var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                circle.setAttribute('cx',textx);
                circle.setAttribute('cy',texty);
                circle.setAttribute('r','9px');
                circle.setAttribute('id','highlight-background')
                document.getElementById('svg-container').insertBefore(circle,document.getElementById('svg-container').childNodes[0]);
            }

            // Find the pairing
            if((title.innerHTML.split(',')[0]==variantCor||title.innerHTML.split(',')[1]==variantCor)){
                if(title.parentElement) {origPairing = title.parentElement}
            }

            // Get coordinates of the pair
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
            newCircle.setAttribute('r','2');
            newCircle.setAttribute('id','highlight-circle');
            // Stores original line coordinates
            newCircle.setAttribute('class',origPairing.getAttribute('x1')+","+origPairing.getAttribute('y1')+","+origPairing.getAttribute('x2')+","+origPairing.getAttribute('y2'));
            newCircle.innerHTML = origPairing.innerHTML;
            document.getElementById('svg-container').insertBefore(newCircle, origPairing);
            origPairing.remove();
        }

        if(this.state.formWC){
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            if(textx==pairx){
                var x1 = textx, x2 = textx;
                var y1 = (texty+pairy)/2 - 4;
                var y2 = (texty+pairy)/2 + 4;
            }
            if(texty==pairy){
                var y1 = texty, y2 = texty;
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

        // Add note on the variant highlight
        var varNote = document.createElement('li');
        varNote.innerHTML = "The base and pair type change (if applicable) is shown in red.";
        varNote.setAttribute('id','varNote');
        document.getElementById('notes').appendChild(varNote);
    }

    addRrnaHighlights = () => {
        var variantCor = this.state.varCor;

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

    render() {
        const gene = this.props.gene;
        const { varSubmitted, varData, loadError, initLetter, newLetter, breakWC, formWC } = this.state;
        
        /* Render tRNA */
        if(this.props.rnaType == 'tRNA'){
            const SvgComponent = tRNAs[gene];
            return(
                <div id="trna-svg">
                    <div id="left-container">
                        <SvgComponent />
                        <ul id="notes">
                            {GENES_REVERSE_STRAND.includes(gene) &&
                                    <li>Note: {gene} is on the reverse strand.</li>
                            }
                            <li>Lines represent Watson-Crick (WC) base pairs, and dots non-WC pairs.</li>
                            <li>Hovering over each base will display the genomic coordinate.</li>
                            <li>2D cloverleaf tRNA structures are per <a href="https://pubmed.ncbi.nlm.nih.gov/17585048/" target="_blank">Putz et al</a> as shown on <a href="http://mamit-trna.u-strasbg.fr/human.asp" target="_blank">Mamit-tRNA</a>.</li>
                        </ul>

                        <div id="select-image-type" style={{display: "flex", alignItems: "center"}}>
                            <div id="radio-button-area" style={{paddingRight: "25px"}}>
                                <label>
                                    <input type='radio' name="image-type" id="png" class="with-gap" checked />
                                    <span>PNG</span>
                                </label>
                                <br />
                                <label>
                                    <input type='radio' name="image-type" id="jpeg" class="with-gap"/>
                                    <span>JPEG</span>
                                </label>
                                <br />
                                <label>
                                    <input type='radio' name="image-type" id="webp" class="with-gap"/>
                                    <span>WEBP</span>
                                </label>
                            </div>
                            
                            <button id='download-btn' onClick={this.handleImageDownload}>Download Image</button>
                        </div>                            

                        <Citation />
                    </div>

                    {varData ?
                        <div id="right-container">
                            <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene} variant={this.props.variant}/>
                            <VarInfo variant={varSubmitted} gene={gene} dom={varData.domain} rnaType="tRNA" initLetter={initLetter} newLetter={newLetter} breakWC={breakWC} formWC={formWC} />
                            <VarInfoTable variant={varSubmitted} varData={varData} rnaType="tRNA" />
                            <button id='download-btn' onClick={this.downloadVarClick}>Download Variant Data</button>
                            <br />
                            <i style={{fontSize: "13px", color:'gray'}}>See <a href="/about-page">About page</a> regarding format and key</i>
                            <br /><br /><br />
                        </div>
                    : loadError ?
                        <div id="right-container">
                            <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene}/>
                            <VarInfo loadError={loadError} />
                        </div>
                    : 
                        <div id="right-container">
                            <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene}/>
                            {this.state.varSubmitted!==null &&
                                <VarInfo loading="Loading..."/>
                            }
                        </div>
                    }
                    
                </div>
            )
        } 
        
        /* Render rRNA */
        else {
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
                        {varData && <h6>{this.state.varSubmitted}</h6>}

                        {varData && <SvgComponentZoom gene={gene} variant={this.state.varSubmitted} variantCor={this.state.varCor} />}
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

                            <div id="select-image-type" style={{display: "flex", alignItems: "center"}}>
                                <div id="image-type-buttons" style={{paddingRight: "25px"}}>
                                    <label>
                                        <input type='radio' name="image-type" id="png" class="with-gap" checked />
                                        <span>PNG</span>
                                    </label>
                                    <br />
                                    <label>
                                        <input type='radio' name="image-type" id="jpeg" class="with-gap"/>
                                        <span>JPEG</span>
                                    </label>
                                    <br />
                                    <label>
                                        <input type='radio' name="image-type" id="webp" class="with-gap"/>
                                        <span>WEBP</span>
                                    </label>
                                </div>
                                
                                {varData && 
                                    <div id="full-or-zoomed-in-buttons" style={{paddingRight: "25px"}}>
                                        <label>
                                            <input type='radio' name="download" id="zoomed-out" class="with-gap" checked/>
                                            <span>Full image</span>
                                        </label>
                                        <br />
                                        <label>
                                            <input type='radio' name="download" id="zoomed-in" class="with-gap"/>
                                            <span>Zoomed-in image</span>
                                        </label>
                                    </div>
                                }
                                
                                <button id='download-btn' onClick={this.handleClick}>Download Image</button>
                            </div>                            

                            <Citation />
                        </div>
                    </div> 

                    {varData ?
                        <div id="right-container">
                            <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene} variant={this.props.variant}/>
                            <VarInfo variant={varSubmitted} gene={gene} dom={varData.dom} rnaType="rRNA" initLetter={initLetter} newLetter={newLetter} breakWC={breakWC} formWC={formWC} />
                            <VarInfoTable variant={varSubmitted} varData={varData} rnaType="rRNA" />
                            <button id='download-btn' onClick={this.downloadVarClick}>Download Variant Data</button>
                            <br />
                            <i style={{fontSize: "13px", color:'gray'}}>See <a href="/about-page">About page</a> regarding format and key</i>
                            <br /><br /><br />
                        </div>
                    : loadError ?
                        <div id="right-container">
                            <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene} />
                            <VarInfo loadError={loadError} />
                        </div>
                    : 
                        <div id="right-container">
                            <VarInput handleVarSubmit={this.handleVarSubmit} gene={gene} />
                            {this.state.varSubmitted!==null &&
                                <VarInfo loading="Loading..."/>
                            }
                        </div>
                    }
                </div>
            )
        }
    }
}

export default VariantSVGPage;

