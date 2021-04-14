import React from 'react';
import logo from './images/mitovisualize_logo.jpg';
import Searchbox from './Searchbox'

import './styles/About.css';

class Home extends React.Component {

    render(){
        return(
            <div id="about-page" className="container">
                <img src={logo} alt="logo" />
                <br /><br /><br /><br />
                <p style={{textAlign: "center"}}>
                <Searchbox width="60%" /><br />
                A tool to visualize the effects of mtDNA variants. <br /><br />
                MitoVisualize displays information and generates figures for variants and genes of interest 
                in the human mitochondrial DNA (mtDNA), specifically for RNA and mtDNA structures. 
                </p>

            </div>
        )
    }
}

export default Home;