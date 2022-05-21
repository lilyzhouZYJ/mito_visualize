import React from 'react';
import { TRNA_GENES, RRNA_GENES } from './params/params';
import './styles/GeneDropDown.css';
import M from "materialize-css";

/**
 * Dropdown menu for either tRNA or rRNA encoding genes.
 * The gene type (tRNA/rRNA) is passed in as a prop.
 */

class GeneDropDown extends React.Component{
    
    componentDidMount() {
        // Auto initialize M for Materialize select (dropdown)
        M.AutoInit();
    }

    render() {
        if(this.props.rnaType=="tRNA"){
            return(
                <div id="container">
                    <div id="dropdown-form">
                        <form onSubmit={this.props.onSubmit}>
                            <p>Select a tRNA-coding gene</p>
                            <select id="gene-input" className="input-field col s12" defaultValue={"default"}>
                                <option value="default" disabled>Select a gene</option>
                                {TRNA_GENES.map((trna) =>
                                    <option value={trna} key={trna}>{trna}</option>
                                )}
                            </select>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
        } else if (this.props.rnaType=="rRNA"){
            return(
                <div id="container">
                    <div id="dropdown-form">
                        <form onSubmit={this.props.onSubmit}>
                            <p>Select a rRNA-coding gene</p>
                            <select id="gene-input" className="input-field col s12" defaultValue={"default"}>
                                <option value="default" disabled>Select a gene</option>
                                {RRNA_GENES.map((rrna) =>
                                    <option value={rrna} key={rrna}>{rrna}</option>
                                )}
                            </select>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default GeneDropDown;

