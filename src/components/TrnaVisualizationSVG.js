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

//download SVG button setup
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

class TrnaVisualizationSVG extends React.Component{

    //download svg
    handleClick = () => {
        var fileName;
        //fileName = this.props.gene;
        var imageOptions

        if(document.getElementById('jpeg').checked){
            imageOptions = { ...defaultImageOptions, encoderType: 'image/jpeg'}            
            fileName = this.props.gene + ".jpeg"
        }
        else if(document.getElementById('webp').checked){
            imageOptions = { ...defaultImageOptions, encoderType: 'image/webp'}                        
            fileName = this.props.gene + ".webp"
        }

        else{
            imageOptions = { ...defaultImageOptions, encoderType: 'image/png'}                        
            fileName = this.props.gene + ".png"
        }



        saveSvgAsPng.saveSvgAsPng(document.getElementById('svg-container'), fileName, imageOptions);
    };

    componentDidMount(){
        document.getElementById('svg-container').setAttribute("height","500");
        document.getElementById('svg-container').setAttribute("width","500");
        document.getElementById('svg-container').setAttribute("viewBox","0 0 400 400");
    }

    render() {

        var gene = this.props.gene;
        var rnaType = this.props.rnaType;
       
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
                    
                    <p id="citation-note">If you use MitoVisualize, please cite "Lake NJ, Zhou L, Xu J, Lek M. 2021. MitoVisualize: A resource for analysis of variants in human mitochondrial RNAs and DNA. bioRxiv <a href="https://www.biorxiv.org/content/10.1101/2021.12.04.470997v1" target="_blank">doi: 10.1101/2021.12.04.470997</a>".</p>
                </div>
                <div id="right-container">
                    <VisualizeOptions gene={gene} rnaType={rnaType} />
                </div>
            </div>
        )
    }
    
}

export default TrnaVisualizationSVG;

