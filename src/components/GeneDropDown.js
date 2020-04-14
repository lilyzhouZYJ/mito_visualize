import React from 'react';

// Import Materialize
import M from "materialize-css";

class GeneDropDown extends React.Component{
    
    componentDidMount() {
        // Auto initialize M for Materialize select (dropdown)
        M.AutoInit();
    }

    render() {

        return(
            <div id="container">
                <div id="submit-form">
                    <form onSubmit={this.props.onSubmit}>
                        <label htmlFor="gene-input">Label</label>
                        <select id="gene-input" className="input-field col s12">
                            <option value="" disabled selected>Select a gene</option>
                            <option value="MT-TA">MT-TA</option>
                            <option value="MT-TC">MT-TC</option>
                            <option value="MT-TD">MT-TD</option>
                            <option value="MT-TE">MT-TE</option>
                            <option value="MT-TF">MT-TF</option>
                            <option value="MT-TG">MT-TG</option>
                            <option value="MT-TH">MT-TH</option>
                            <option value="MT-TI">MT-TI</option>
                            <option value="MT-TK">MT-TK</option>
                            <option value="MT-TL1">MT-TL1</option>
                            <option value="MT-TL2">MT-TL2</option>
                            <option value="MT-TM">MT-TM</option>
                            <option value="MT-TN">MT-TN</option>
                            <option value="MT-TP">MT-TP</option>
                            <option value="MT-TQ">MT-TQ</option>
                            <option value="MT-TR">MT-TR</option>
                            <option value="MT-TS1">MT-TS1</option>
                            <option value="MT-TS2">MT-TS2</option>
                            <option value="MT-TT">MT-TT</option>
                            <option value="MT-TV">MT-TV</option>
                            <option value="MT-TW">MT-TW</option>
                            <option value="MT-TY">MT-TY</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    
}

export default GeneDropDown;

