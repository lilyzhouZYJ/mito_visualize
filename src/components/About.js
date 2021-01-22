import React from 'react';
import logo from './images/mitovisualize_logo.jpg';

import './styles/About.css';

class About extends React.Component {

    render(){
        return(
            <div id="about-page" className="container">
                <img src={logo} alt="logo" />
                <p>Information</p>
            </div>
        )
    }
}

export default About;