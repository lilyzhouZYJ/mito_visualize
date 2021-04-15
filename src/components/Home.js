import React from 'react';
import logo from './images/mitovisualize_logo.jpg';
import Searchbox from './Searchbox'
import Link from './Link'

import './styles/About.css';

class Home extends React.Component {

    render(){
        return(
            <div id="about-page" className="container">
                <img src={logo} alt="logo" />
                <p style={{textAlign: "center"}}>

                <Searchbox width="40%" /><br />
                <br />

                Examples - Gene:{' '}
                <Link to="/rna-visualization/MT-TA">
                  MT-TA
                </Link>
                , Variant:{' '}
                <Link to="/variant/m-5762-A-G">
                  m.5762A>G
                </Link>
                <br /><br />
                A tool to visualize the effects of mtDNA variants. MitoVisualize displays information and generates figures for variants and genes of interest 
                in the human mitochondrial DNA (mtDNA), specifically for RNA and mtDNA structures. 
                </p>

            </div>
        )
    }
}

export default Home;