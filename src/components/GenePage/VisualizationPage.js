import React from 'react';
import { Redirect } from 'react-router-dom';
import GeneDropDown from '../GeneDropDown';
import '../styles/RnaPages.css';

/**
 * This is the page for 'mitovisualize.org/rna-visualization'.
 * It is responsible for rendering the dropdown menu to select either tRNA or rRNA genes,
 * and it is also responsible for redirecting to either TrnaVisualizationSVG or RrnaVisualizationSVG.
 */

class VisualizationPage extends React.Component{

    state = {
        geneSubmitted: false,
    }

    handleGeneSubmit = (e) => {
        e.preventDefault();
        this.setState({geneSubmitted:true});
    }
    
    render() {
        var rnaType = this.props.rnaType;

        if(this.state.geneSubmitted){   
            // If a gene has been selected, redirect to the Visualization SVG page
            var geneInput = document.getElementById('gene-input').value;
            return(
                <Redirect push to={'./rna-visualization/'+geneInput} />
            );
        } else {   
            // If a gene hasn't been selected, show dropdown menu
            return(
                <GeneDropDown rnaType={rnaType} onSubmit={this.handleGeneSubmit}/>
            )
        }
    }
}

export default VisualizationPage;

