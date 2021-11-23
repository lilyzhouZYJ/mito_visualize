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
                </p><br /><br />

                <div style={{margin:"auto", width:"65%"}}>
                  <p>MitoVisualize is a tool for analysis of variants in human mitochondrial RNAs and DNA.</p>
                  <br />
                  <p>
                    MitoVisualize can be used to:
                  </p>
                  <ul>
                    <li>Analyze a variant in a mitochondrial RNA gene, by visualizing its position in the RNA structure alongside various variant annotations.</li>
                    <li>Visualize data across RNA structures, such as to show all positions with disease-associated variants.</li>
                    <li>Label a base or region in the circular mtDNA, such as to visualize the location of a large deletion.</li>
                  </ul>
                  <p>
                    All visualizations can be easily downloaded as figures for reuse.
                  </p>
                </div>

            </div>
        )
    }
}

export default Home;