import React from 'react';
import { Redirect } from 'react-router-dom';
import GeneDropDown from './GeneDropDown';
import './styles/RnaPages.css';

//can delete this??
//list of all valid gene names
const components = [
    'MT-TA',
    'MT-TT',
    'MT-TW',
    'MT-TY',
    'MT-TV',
    'MT-TS1',
    'MT-TS2',
    'MT-TP',
    'MT-TF',
    'MT-TK',
    'MT-TL1',
    'MT-TL2',
    'MT-TI',
    'MT-TH',
    'MT-TG',
    'MT-TQ',
    'MT-TE',
    'MT-TC',
    'MT-TD',
    'MT-TN',
    'MT-TM',
    'MT-TR'];

class TrnaPage extends React.Component{

    state = {
        geneSubmitted: false,
    }

    handleGeneSubmit = (e) => {
        e.preventDefault();
        this.setState({geneSubmitted:true});
    }
    
    render() {

        if(this.state.geneSubmitted){   //when a gene has been selected, redirect to trna svg page
            var geneInput = document.getElementById('gene-input').value;
            if(components.includes(geneInput)){
                return(
                    <Redirect push to={'./'+geneInput} />
                );
            }
            // else{
            //     return(
            //         <Redirect push to={'./variant/'+mitoInput} />
            //     );
            // }
        }
        else{   //a gene hasn't been selected, show dropdown menu
            return(
                <GeneDropDown rnaType="tRNA" onSubmit={this.handleGeneSubmit}/>
            )
        }

    }
    
}

export default TrnaPage;

