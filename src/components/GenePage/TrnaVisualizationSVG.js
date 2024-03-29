import React from 'react';

/**
 * Displays SVGs for tRNA genes and visualization options.
 */

import Mtta from '../TrnaSVGs/MT-TA';
import Mttt from '../TrnaSVGs/MT-TT';
import Mtty from '../TrnaSVGs/MT-TY';
import Mttw from '../TrnaSVGs/MT-TW';
import Mttv from '../TrnaSVGs/MT-TV';
import Mtts1 from '../TrnaSVGs/MT-TS1';
import Mtts2 from '../TrnaSVGs/MT-TS2';
import Mttp from '../TrnaSVGs/MT-TP';
import Mttf from '../TrnaSVGs/MT-TF';
import Mttk from '../TrnaSVGs/MT-TK';
import Mttl1 from '../TrnaSVGs/MT-TL1';
import Mttl2 from '../TrnaSVGs/MT-TL2';
import Mtti from '../TrnaSVGs/MT-TI';
import Mtth from '../TrnaSVGs/MT-TH';
import Mttg from '../TrnaSVGs/MT-TG';
import Mttq from '../TrnaSVGs/MT-TQ';
import Mtte from '../TrnaSVGs/MT-TE';
import Mttc from '../TrnaSVGs/MT-TC';
import Mttd from '../TrnaSVGs/MT-TD';
import Mttn from '../TrnaSVGs/MT-TN';
import Mttm from '../TrnaSVGs/MT-TM';
import Mttr from '../TrnaSVGs/MT-TR';

import VisualizeOptions from './VisualizeOptions';
import Citation from '../Citation';
import { GENES_REVERSE_STRAND } from '../params/params';
import '../styles/VisualizeOptions.css';

// Match each gene to its respective component
const RNAs = {
    'MT-TA': Mtta,
    'MT-TT': Mttt,
    'MT-TW': Mttw,
    'MT-TY': Mtty,
    'MT-TV': Mttv,
    'MT-TS1': Mtts1,
    'MT-TS2': Mtts2,
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
    'MT-TR': Mttr,
};

// Download image button setup
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

    // Download image
    handleClick = () => {
        var fileName;
        var imageOptions;

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
                <div id="right-container">
                    <VisualizeOptions gene={gene} rnaType={rnaType} />
                </div>
            </div>
        )
    }   
}

export default TrnaVisualizationSVG;

