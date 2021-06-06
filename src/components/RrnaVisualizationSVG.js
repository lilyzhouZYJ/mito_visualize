import React from 'react';
import Mtrnr1 from './rRNA/MT-RNR1';
import Mtrnr2 from './rRNA/MT-RNR2';

import VisualizeOptions from './VisualizeOptions';
import './styles/VisualizeOptions.css';

const saveSvgAsPng = require('save-svg-as-png');

//match each gene to its respective component
const RNAs = {
    'MT-RNR1': Mtrnr1,
    'MT-RNR2': Mtrnr2
};

class RrnaVisualizationSVG extends React.Component{

    componentDidMount(){
        if(this.props.gene=="MT-RNR2"){
            document.getElementById('rrna-svg-container').setAttribute("height","650");
            document.getElementById('rrna-svg-container').setAttribute("width","800");

            // for svg to not overlap with right container
            document.getElementById('left-container').style.minWidth = "800px";
        }
    }


    //download svg
    handleClick = () => {
        var fileName = "";

        if(this.props.gene=="MT-RNR1"){
            var imageOptions = {
                scale: 9,
                encoderOptions: 1,
                backgroundColor: 'white',
                left: 5,
                top: 10,
                width: 950,
                height: 1000
            }
        } else {
            var imageOptions = {
                scale: 4,
                encoderOptions: 1,
                backgroundColor: 'white',
                left: 100,
                top: 30,
                width: 2880,
                height: 1974
            }
        }
        
        fileName = this.props.gene;
        saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container'), fileName, imageOptions);
    };

    render() {

        var gene = this.props.gene;
        var rnaType = this.props.rnaType;
       
        var SvgComponent = RNAs[gene];

        return(
            <div id="rrna-visualization-svg">
                <div id="left-container">
                    <h5>{gene}</h5>
                    <SvgComponent gene={gene} />
                    <div id="bottom-section">
                        <ul id="notes">
                            <li>Lines represent Watson-Crick (WC) base pairs, and dots non-WC pairs.</li>
                            <li>Hovering over each base will display the genomic coordinate.</li>
                            {gene=="MT-RNR1" ? 
                                <li>2D rRNA structure is per <a href="https://pubmed.ncbi.nlm.nih.gov/25838379/" target="_blank">Amunts, Brown et al 2015</a>.</li>
                                : <li>2D rRNA structure is per <a href="https://pubmed.ncbi.nlm.nih.gov/25278503/" target="_blank">Brown, Amunts et al 2014</a>.</li>
                            }
                        </ul>
                        <button id='download-btn' onClick={this.handleClick}>Download Image (png)</button>
                        <p id="citation-note">If you use MitoVisualize in your paper please cite XXX</p>
                    </div>
                </div>
                <div id="right-container">
                    <VisualizeOptions gene={gene} rnaType={rnaType} />
                </div>
            </div>
        )
    }
    
}

export default RrnaVisualizationSVG;

