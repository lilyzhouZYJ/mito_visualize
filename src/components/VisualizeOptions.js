import React from 'react';
import './styles/VisualizeOptions.css';

class VisualizeOptions extends React.Component{
    
    changeChecked = (e) => {
        
        var radio = e.target; 
        console.log(radio.checked);
        if(radio.checked) { radio.checked=false; }
    }

    selectOnlyThis = (e) => {
        var check = e.target;
        var checkboxes = document.getElementsByName(check.name);

        for(var i = 0; i<checkboxes.length; i++){
            if(i!=check.value){
                checkboxes[i].checked=false; 
            }
        }
    }

    render() {

        return(
            <div id="visualize-form">
                <h6>Population frequency:</h6>
                <label>
                    <input type="checkbox" value="0" class="filled-in" name="pop-freq" onClick={this.selectOnlyThis} />
                    <span>gnomAD</span>
                </label>
                <label>
                    <input type="checkbox" value="1" class="filled-in" name="pop-freq" onClick={this.selectOnlyThis} />
                    <span>Mitomap</span>
                </label>

                <h6>Maximum heteroplasmy:</h6>
                <label>
                    <input type='checkbox' class='filled-in' />
                    <span>gnomAD</span>
                </label>

                <h6>Disease association:</h6>
                <p>Mitomap:</p>
                <label>
                    <input type='checkbox' value="0" class='filled-in' name="disease" onClick={this.selectOnlyThis} />
                    <span>Confirmed status</span>
                </label>
                <label>
                    <input type='checkbox' value="1" class='filled-in' name="disease" onClick={this.selectOnlyThis} />
                    <span>Reported status</span>
                </label>
                <p>ClinVar:</p>
                <label>
                    <input type='checkbox' value="2" class='filled-in' name="disease" onClick={this.selectOnlyThis} />
                    <span>Pathogenic & likely pathogenic</span>
                </label>
                <label>
                    <input type='checkbox' value="3" class='filled-in' name="disease" onClick={this.selectOnlyThis} />
                    <span>Variants of uncertain significance</span>
                </label>
                <label>
                    <input type='checkbox' value="4" class='filled-in' name="disease" onClick={this.selectOnlyThis} />
                    <span>Benign & likely benign</span>
                </label>

                <h6>Associated haplogroups:</h6>
                <label>
                    <input type="checkbox" class="filled-in" />
                    <span>Phylotree</span>
                </label>

                <h6>Conservation metrics:</h6>
                <label>
                    <input type='checkbox' value="0" class='filled-in' name="conserv" onClick={this.selectOnlyThis} />
                    <span>PhyloP</span>
                </label>
                <label>
                    <input type='checkbox' value="1" class='filled-in' name="conserv" onClick={this.selectOnlyThis} />
                    <span>PhastCons</span>
                </label>
                

            </div>
        )

    }
    
}

export default VisualizeOptions;
