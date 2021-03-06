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
const imageOptions = {
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
        fileName = this.props.gene;
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
                    <button id="download-btn" onClick={this.handleClick}>Download Image (png)</button>
                    <p id="citation-note">If you use MitoVisualize in your paper please cite XXX</p>
                </div>
                <div id="right-container">
                    <VisualizeOptions gene={gene} rnaType={rnaType} />
                </div>
            </div>
        )
    }
    
}

export default TrnaVisualizationSVG;

