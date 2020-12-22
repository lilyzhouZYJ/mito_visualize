import React from 'react';
import { Redirect } from 'react-router-dom';
import GeneDropDown from './GeneDropDown';
import './styles/RnaPages.css';

class VisualizationPage extends React.Component{

    state = {
        geneSubmitted: false,
    }

    handleGeneSubmit = (e) => {
        e.preventDefault();
        this.setState({geneSubmitted:true});
    }
    
    render() {

        if(this.state.geneSubmitted){   //when a gene has been selected, redirect to visualization svg page
            var geneInput = document.getElementById('gene-input').value;
            return(
                <Redirect push to={'./rna-visualization/'+geneInput} />
            );
        }
        else{   //a gene hasn't been selected, show dropdown menu
            return(
                <GeneDropDown rnaType="both" onSubmit={this.handleGeneSubmit}/>
            )
        }

    }
    
}

export default VisualizationPage;

