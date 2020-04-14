import React from 'react';
import { Redirect } from 'react-router-dom';
import GeneDropDown from './GeneDropDown';

// Import Materialize
import M from "materialize-css";

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

class RnaPage extends React.Component{

    state = {
        geneSubmitted: false,
        varSubmitted: false
    }

    handleGeneSubmit = (e) => {
        e.preventDefault();
        this.setState({geneSubmitted:true});
    }
    
    componentDidMount() {
        // Auto initialize M for Materialize select (dropdown)
        M.AutoInit();
    }

    render() {

        if(this.state.geneSubmitted){
            var geneInput = document.getElementById('gene-input').value;
            if(components.includes(geneInput)){
                return(
                    <Redirect push to={'./gene/'+geneInput} />
                );
            }
            // else{
            //     return(
            //         <Redirect push to={'./variant/'+mitoInput} />
            //     );
            // }
        }
        else{
            return(
                <GeneDropDown onSubmit={this.handleGeneSubmit}/>
            )
        }

    }
    
}

export default RnaPage;

