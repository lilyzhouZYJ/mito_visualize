import React from 'react';
import { Redirect } from 'react-router-dom';
import GeneDropDown from './GeneDropDown';
import "./styles/RnaPages.css";

class RrnaPage extends React.Component{

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
                <GeneDropDown rnaType="rRNA" onSubmit={this.handleGeneSubmit}/>
            )
        }
    }
}

export default RrnaPage;

