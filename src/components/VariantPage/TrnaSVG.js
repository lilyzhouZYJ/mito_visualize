import React from 'react';
import { fetchVarInfo, fetchCoorInfo } from '../fetch.js';
import { GENES_REVERSE_STRAND } from '../params/params.js';
import Citation from '../Citation.js';
import VarInput from '../VarInput.js';
import VarInfoTable from '../VarInfoTable.js';
import VarInfo from '../VarInfo.js';
import '../styles/VisualizeOptions.css';

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

// Base pairs
const pairs = {"A":"T", "T":"A", "G":"C", "C":"G"};

// Download image setup
const saveSvgAsPng = require('save-svg-as-png')
const defaultImageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: 'white',
    left: 5,
    top: -20,
    height: 380,
    width: 350
}


class TrnaSVG extends React.Component{

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
    }

    // Download image
    handleClick = () => {
        var fileName;
        var filePrefix;
        var imageOptions;

        if(this.state.varSubmitted==null){
            filePrefix = this.props.gene;
        } else {
            filePrefix = this.state.varSubmitted + " [" + this.props.gene + "]";
        }

        if(document.getElementById('jpeg').checked){
            imageOptions = { ...defaultImageOptions, encoderType: 'image/jpeg'}            
            fileName = filePrefix + ".jpeg"
        }
        else if(document.getElementById('webp').checked){
            imageOptions = { ...defaultImageOptions, encoderType: 'image/webp'}                        
            fileName = filePrefix + ".webp"
        }
        else{
            imageOptions = { ...defaultImageOptions, encoderType: 'image/png'}                        
            fileName = filePrefix + ".png"
        }

        saveSvgAsPng.saveSvgAsPng(document.getElementById('svg-container'), fileName, imageOptions);
    };


    // Download var data as table
    // https://stackoverflow.com/questions/27013963/write-to-csv-file-locally-with-html5
    downloadVarClick = () => {
        const {varData, varCor} = this.state
        const varDataKeys = Object.keys(varData)

        var header = varDataKeys[0]
        var data_row = varData[varDataKeys[0]]
        var i
        const sep = '\t'
        const re = 'pop|heteroplasmy|count'
        const re2 = 'pair'

        for(i = 1; i < varDataKeys.length; i++){
            if(varDataKeys[i].match(re2)){
                continue
            }
            else if(varData[varDataKeys[i]] !== null){
                header += sep + varDataKeys[i]
                data_row += sep + varData[varDataKeys[i]]
            }
            else{
                header += sep + varDataKeys[i]
                
                if(varDataKeys[i].match(re)){
                    data_row += sep + '0'
                }
                else if(varDataKeys[i] == 'post_transcription_modifications'){
                    data_row += sep + 'No'
                }
                else{
                    data_row += sep + 'NA'
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

    loadData = (variant, varCoor) => {

        this.setState({loadError:null, varData:null});

        fetchVarInfo(variant).then(response => {
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
                // if the gene is on the reverse strand
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

                this.setState({loadError:null, varData:varData, initLetter:initLetter, newLetter:newLetter, formWC:formWC, breakWC:breakWC, pairCoor:pairCoor});
            }
        })
    }

    componentDidMount(){
        // if variant has already been passed as prop
        if(this.props.variant){
            var variant = this.props.variant;
            var varCoor = variant.replace(/\D/g, "");

            this.setState({varSubmitted: variant, varCor: varCoor});
            this.loadData(variant, varCoor);
        }
    }

    // If a variant is submitted
    handleVarSubmit = (varSubmitted,variantCor) => {
        if(varSubmitted==''&&variantCor==''){
            this.setState({varSubmitted:null,varCor:null, varData:null, loadError:null})
        } else {
            const VARIANT_ID_REGEX = /^m\.([0-9]+)([acgt]+)>([acgt]+)$/i
            const match = VARIANT_ID_REGEX.exec(varSubmitted)

            var variantId = "m-"+match[1]+"-"+match[2]+"-"+match[3]

            window.location.href = '/variant/'+variantId;
        }
    }

    // Remove preexisting variant highlight
    removeVariantHighlight() {
        // remove variant name in svg legend
        var legExists = document.getElementById('var-legend');
        if(legExists!==null){
            legExists.remove();
        }

        // remove highlighted letter
        var elementExists = document.getElementById('highlight');
        if(elementExists!==null){
            elementExists.removeAttribute('id');
            elementExists.innerHTML = elementExists.getAttribute('class')+elementExists.innerHTML.substring(1);
            elementExists.removeAttribute('class');
        }

        // remove highlighted background
        var elementExists = document.getElementById('highlight-background');
        if(elementExists!==null){
            elementExists.remove();
        }

        // remove highlighted pairing circle
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

        // remove highlighted pairing line
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

        // remove note on variant highlight
        var noteExists = document.getElementById('varNote');
        if(noteExists!==null){
            noteExists.remove();
        }

    }





    componentDidUpdate(prevProps){
        if(this.props.variant !== prevProps.variant){
            var variant = this.props.variant
            var varCoor = variant.replace(/\D/g, "");

            this.loadData(variant, varCoor);
            this.setState({varSubmitted: variant, varCor: varCoor});

        }
        else{
            var variant = this.state.varSubmitted;
        }

        var variantCor = this.state.varCor;            

        //remove preexisting variant highlight
        this.removeVariantHighlight();
        
        //make new highlight
        if(this.state.varData){

            //add variant name to svg legend
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

            //add note on the variant highlight
            var varNote = document.createElement('li');
            varNote.innerHTML = "The base and pair type change (if applicable) is shown in red.";
            varNote.setAttribute('id','varNote');
            document.getElementById('notes').appendChild(varNote);
        }
    }

    render() {
        const gene = this.props.gene;
        const { varSubmitted, varData, loadError, initLetter, newLetter, breakWC, formWC } = this.state;
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
                        
                        <button id='download-btn' onClick={this.handleClick}>Download Image</button>
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
}

export default TrnaSVG;

