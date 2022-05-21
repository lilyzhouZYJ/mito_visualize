import React from 'react';
import { Redirect } from 'react-router-dom';
import GeneDropDown from '../GeneDropDown';
import "../styles/RnaPages.css";

/**
 * Landing page after selecting either tRNA Variant or rRNA Variant.
 * This component is responsible for displaying dropdown menu to select tRNA or rRNA gene,
 * and after a gene is selected, it is responsible for redirecting to the correct VariantSVG component.
 */

class VariantPage extends React.Component{

    state = {
        geneSubmitted: false,
    }

    handleGeneSubmit = (e) => {
        e.preventDefault();
        this.setState({geneSubmitted:true});
    }
    
    render() {
        if(this.state.geneSubmitted){   
            // If a gene has been selected, redirect to the tRNA SVG page
            var geneInput = document.getElementById('gene-input').value;
            return(
                <Redirect push to={'./'+geneInput} />
            );
        } else {
            // If a gene hasn't been selected, show dropdown menu to select gene
            return(
                <GeneDropDown rnaType={this.props.rnaType} onSubmit={this.handleGeneSubmit}/>
            )
        }
    }
}

export default VariantPage;

