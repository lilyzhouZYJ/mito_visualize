import React from 'react';

/**
 * Displays SVGs for rRNA genes and visualization options.
 */

import Mtrnr1 from '../RrnaSVGs/MT-RNR1';
import Mtrnr2 from '../RrnaSVGs/MT-RNR2';
import VisualizeOptions from './VisualizeOptions';
import Citation from '../Citation';
import '../styles/VisualizeOptions.css';

const saveSvgAsPng = require('save-svg-as-png');

// Match each gene to its respective component
const RNAs = {
    'MT-RNR1': Mtrnr1,
    'MT-RNR2': Mtrnr2
};

class RrnaVisualizationSVG extends React.Component{

    componentDidMount(){
        // Adjust container for MT-RNR2
        if(this.props.gene=="MT-RNR2"){
            document.getElementById('rrna-svg-container').setAttribute("height","650");
            document.getElementById('rrna-svg-container').setAttribute("width","800");

            // make sure svg does not overlap with right container
            document.getElementById('left-container').style.minWidth = "800px";
        }
    }

    // Download svg
    handleClick = () => {
        var fileName = "";

        if(document.getElementById('jpeg').checked){

            var imageOptions = {
                backgroundColor: 'white',
                encoderType: 'image/jpeg',
                encoderOptions: 1,
            }
            
            fileName = this.props.gene + ".jpeg"

        }
        else if(document.getElementById('webp').checked){

            var imageOptions = {
                backgroundColor: 'white',
                encoderType: 'image/webp',
                encoderOptions: 1,
            }
            
            fileName = this.props.gene + ".webp"
        }

        else{

            var imageOptions = {
                backgroundColor: 'white',
                encoderType: 'image/png',
                encoderOptions: 1
            }

            fileName = this.props.gene + ".png"

        }

        if(this.props.gene == "MT-RNR1"){
            //Previously scale: 9
            //width: 950,height: 1000
            saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container'), fileName, {...imageOptions, scale: 4 });
        }
        else{
            //Previously scale: 4
            saveSvgAsPng.saveSvgAsPng(document.getElementById('rrna-svg-container'), fileName, {...imageOptions, scale: 2 });
        }
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
                </div>
                <div id="right-container">
                    <VisualizeOptions gene={gene} rnaType={rnaType} />
                </div>
            </div>
        )
    }
    
}

export default RrnaVisualizationSVG;

