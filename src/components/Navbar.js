import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './styles/Navbar.css'

// Import Materialize
import M from "materialize-css";

class Navbar extends React.Component{

    componentDidMount() {
        // initiates dropdown-trigger for Materialize
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {hover: true, coverTrigger: false});
    }

    componentDidUpdate() {
        // initiates dropdown-trigger for Materialize
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {hover: true, coverTrigger: false});
    }

    render(){
      return(
        <div>
          <ul id='dropdown1' class='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li><a href="#!">three</a></li>
          </ul>

          <nav>
              <div className="nav-wrapper">
                  <a href="#!" className="brand-logo">Logo</a>
                  <ul className="right hide-on-med-and-down">
                      <li><Link to="/">About</Link></li>
                      <li><a class='dropdown-trigger' href='#!' data-target='dropdown1'>Drop Me!</a></li>
                      <li><NavLink to="/trna-page">tRNA Page</NavLink></li>
                      <li><NavLink to="/rrna-page">rRNA Page</NavLink></li>
                      <li><NavLink to="/mt-dna">mt-DNA</NavLink></li>
                      <li><NavLink to="/rna-visualization">RNA Visualization</NavLink></li>
                  </ul>
              </div>
          </nav>
        </div>
      )
    }
}

export default Navbar;