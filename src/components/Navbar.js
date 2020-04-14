import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './styles/Navbar.css'

const Navbar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <a href="/" className="brand-logo">Logo</a>
                <ul className="right">
                    <li><Link to="/">About</Link></li>
                    <li><NavLink to="/rna-page">RNA Page</NavLink></li>
                    <li><NavLink to="/gene-tool">Gene Tool</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;