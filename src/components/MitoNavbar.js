import React from 'react';
import logo from './images/mitovisualize_logo_white.jpg';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Searchbox from './Searchbox'
import './styles/MitoNavbar.css'

class MitoNavbar extends React.Component{

    render(){
      return(
        <div>
          {/*<Navbar collapseOnSelect expand='lg' className="color-nav" variant="dark">*/}
            <Navbar collapseOnSelect className="color-nav">
              <Navbar.Brand href="/"><img src={logo} className="logo"/></Navbar.Brand>
              <Nav>
                <NavDropdown title="mt-tRNA" id="mt-tRNA-options">
                  <NavDropdown.Item href="/trna-page" id="mt-tRNA-options-a">Variant</NavDropdown.Item>
                  <NavDropdown.Item href="/trna-visualization" id="mt-tRNA-options-b">Gene</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="mt-rRNA" id="mt-rRNA-options">
                  <NavDropdown.Item href="/rrna-page" id="mt-rRNA-options-a">Variant</NavDropdown.Item>
                  <NavDropdown.Item href="/rrna-visualization" id="mt-rRNA-options-b">Gene</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/mtdna" id="mt-DNA-options">mt-DNA</Nav.Link>
                <Searchbox id="nav-search-box" />
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="/about-page" id="mt-about-options">About</Nav.Link>
              </Nav>
          </Navbar>
        </div>
      )
    }
}

export default MitoNavbar;