import React from 'react';
import './styles/VisualizeOptions.css';

import { fetchGeneInfo } from './fetch.js';

var hasHgroup = [];
var hasModi = [];
var diseaseMitomapConfirmed = [];
var diseaseMitomapReported = [];
var diseaseClinvarPatho = [];
var diseaseClinvarUncertain = [];
var diseaseClinvarBenign = [];

class VisualizeOptions extends React.Component{

    state = {
        geneData: {},
    }

      
    componentDidMount() {
        fetchGeneInfo(this.props.gene).then(response => {
            //console.log(response.data.gene)
            this.setState({geneData: response.data.gene});
            console.log(this.state.geneData);
        })
    }
    
    removeOtherCheckboxesOfSameName = (check) => {
        var checkboxes = document.getElementsByName(check.name);
        for(var i = 0; i<checkboxes.length; i++){
            if(checkboxes[i].value !== check.value){
                checkboxes[i].checked=false; 
            }
        }
    }

    removeOtherCheckboxesOfDifferentName = (name) => {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for(var i = 0; i<checkboxes.length; i++){
            if(checkboxes[i].name!==name){
                checkboxes[i].checked = false;
            }
        }
    }

    removeHighlights(){
        var highlights = document.querySelectorAll(".highlight,.disease-mitomap-confirmed,.disease-mitomap-reported,.disease-clinvar-patho,.disease-clinvar-uncertain,.disease-clinvar-benign");
        for(var h of highlights){
            h.removeAttribute('class');
        }
    }


    // clear button
    clearAll(){
        this.removeHighlights();

        // clear all checkboxes
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for(var i = 0; i<checkboxes.length; i++){
            checkboxes[i].checked=false; 
        }

    }






    showHaplogroup = (e) => {

        this.removeHighlights();

        if(e.target.checked){

            // clear all other checkboxes of different categories
            this.removeOtherCheckboxesOfDifferentName(e.target.name); 

            // clear all other checkboxes of the same category
            this.removeOtherCheckboxesOfSameName(e.target);

            if(hasHgroup.length==0){
                hasHgroup = this.state.geneData.filter(dat => dat.haplogroups!==null).map(function(obj){
                    return obj.var_coordinate
                });
            }
    
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && hasHgroup.includes(parseInt(titles[i].innerHTML))){
                    parentElement.setAttribute('class', parentElement.getAttribute('class')+' highlight');
                }
            }
        }

    }

    showModi = (e) => {

        this.removeHighlights();

        if(e.target.checked){

            // clear all other checkboxes of different categories
            this.removeOtherCheckboxesOfDifferentName(e.target.name);

            // clear all other checkboxes of the same category
            this.removeOtherCheckboxesOfSameName(e.target);

            if(hasModi.length==0){
                hasModi = this.state.geneData.filter(dat => dat.post_transcription_modifications!==null).map(function(obj){
                    return obj.var_coordinate
                });
            }
    
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && hasModi.includes(parseInt(titles[i].innerHTML))){
                    parentElement.setAttribute('class', parentElement.getAttribute('class')+' highlight');
                }
            }
        }
    }



    showDiseaseMitomapConfirmed = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var highlights = document.querySelectorAll(".highlight");
        for(var i=0; i<highlights.length; i++){
            highlights[i].removeAttribute('class');
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-mitomap-confirmed");
            for(var i=0; i<highlights.length; i++){
                highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-mitomap-confirmed\b/g, ""));
            }
        } else {
            if(diseaseMitomapConfirmed.length==0){
                diseaseMitomapConfirmed = this.state.geneData.filter(dat => dat.disease_status_mitomap=="Cfrm").map(function(obj){
                    return obj.var_coordinate
                });
            }
            console.log(diseaseMitomapConfirmed);
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && diseaseMitomapConfirmed.includes(parseInt(titles[i].innerHTML))){
                    parentElement.setAttribute('class', 'disease-mitomap-confirmed');
                }
            }
        }
    }

    showDiseaseMitomapReported = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var highlights = document.querySelectorAll(".highlight");
        for(var i=0; i<highlights.length; i++){
            highlights[i].removeAttribute('class');
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-mitomap-reported");
            for(var i=0; i<highlights.length; i++){
                highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-mitomap-reported\b/g, ""));
            }
        } else {
            if(diseaseMitomapReported.length==0){
                diseaseMitomapReported= this.state.geneData.filter(dat => dat.disease_status_mitomap=="Reported").map(function(obj){
                    return obj.var_coordinate
                });
            }
            //console.log(diseaseMitomapReported);
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && diseaseMitomapReported.includes(parseInt(titles[i].innerHTML))){
                    parentElement.setAttribute('class', 'disease-mitomap-reported');
                }
            }
        }
    }

    showDiseaseClinvarPatho = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var highlights = document.querySelectorAll(".highlight");
        for(var i=0; i<highlights.length; i++){
            highlights[i].removeAttribute('class');
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-clinvar-patho");
            for(var i=0; i<highlights.length; i++){
                highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-clinvar-patho\b/g, ""));
            }
        } else {
            if(diseaseClinvarPatho.length==0){
                diseaseClinvarPatho = this.state.geneData.filter(dat => dat.disease_status_clinvar=="Pathogenic"||dat.disease_status_clinvar=="Likely pathogenic").map(function(obj){
                    return obj.var_coordinate
                });
            }
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && diseaseClinvarPatho.includes(parseInt(titles[i].innerHTML))){
                    parentElement.setAttribute('class', 'disease-clinvar-patho');
                }
            }
        }
    }

    showDiseaseClinvarUncertain = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var highlights = document.querySelectorAll(".highlight");
        for(var i=0; i<highlights.length; i++){
            highlights[i].removeAttribute('class');
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-clinvar-uncertain");
            for(var i=0; i<highlights.length; i++){
                highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-clinvar-uncertain\b/g, ""));
            }
        } else {
            if(diseaseClinvarUncertain.length==0){
                diseaseClinvarUncertain = this.state.geneData.filter(dat => dat.disease_status_clinvar=="Uncertain significance").map(function(obj){
                    return obj.var_coordinate
                });
            }
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && diseaseClinvarUncertain.includes(parseInt(titles[i].innerHTML))){
                    parentElement.setAttribute('class', 'disease-clinvar-uncertain');
                }
            }
        }
    }

    showDiseaseClinvarBenign = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var highlights = document.querySelectorAll(".highlight");
        for(var i=0; i<highlights.length; i++){
            highlights[i].removeAttribute('class');
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-clinvar-benign");
            for(var i=0; i<highlights.length; i++){
                highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-clinvar-benign\b/g, ""));
            }
        } else {
            if(diseaseClinvarBenign.length==0){
                diseaseClinvarBenign = this.state.geneData.filter(dat => dat.disease_status_clinvar=="Benign"||dat.disease_status_clinvar=="Likely benign").map(function(obj){
                    return obj.var_coordinate
                });
            }
            console.log(diseaseClinvarBenign);
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && diseaseClinvarBenign.includes(parseInt(titles[i].innerHTML))){
                    parentElement.setAttribute('class', 'disease-clinvar-benign');
                }
            }
        }
    }






    render() {

        if(Object.keys(this.state.geneData).length!==0){      //if the data on the gene has been retrieved
          return(
            <div id="visualize-form">

                <h5>Visualize bases with variants in the selected category, or modifications</h5>

                <h6>Variants associated with disease</h6>
                <p>Mitomap:</p>
                <label>
                    <input name="disease" type="checkbox" onClick={this.showDiseaseMitomapConfirmed} />
                    <span>Confirmed status</span>
                </label><br/>
                <label>
                    <input name="disease" type="checkbox" onClick={this.showDiseaseMitomapReported} />
                    <span>Reported status</span>
                </label>
                <p>Clinvar:</p>
                <label>
                    <input name="disease" type="checkbox" onClick={this.showDiseaseClinvarPatho} />
                    <span>Pathogenic & likely pathogenic</span>
                </label><br/>
                <label>
                    <input name="disease" type="checkbox" onClick={this.showDiseaseClinvarUncertain} />
                    <span>Variants of uncertain significance</span>
                </label><br/>
                <label>
                    <input name="disease" type="checkbox" onClick={this.showDiseaseClinvarBenign} />
                    <span>Benign & likely benign</span>
                </label>

                <h6>Haplogroup-defining variants
                    <div class="help-tip">
                        <p>Mitochondrial haplogroups are groups of variants co-inherited down a maternal line. Haplogroup variants per PhyloTree (Build 17)</p>
                    </div>
                </h6>
                <label>
                    <input name="group1" type="checkbox" value="0" class="filled-in" onClick={this.showHaplogroup} />
                    <span>Show bases with variants</span>
                </label>

                <h6>Modified bases
                    <div class="help-tip">
                        <p>Post-transcriptional modifications can impact mitochondrial RNA function and abundance. Listed tRNA and rRNA modified sites are per <a href='https://pubmed.ncbi.nlm.nih.gov/32859890/'>Suzuki et al 2020</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/30529456/'>Rebelo-Guiomar et al 2019</a>, respectively.</p>
                    </div>
                </h6>
                <label>
                    <input name="group1" type="checkbox" value="1" class="filled-in" onClick={this.showModi} />
                    <span>Show bases with modifications</span>
                </label><br/>

                <button type="reset" onClick={this.clearAll.bind(this)}>Clear</button>





                {/*
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
                */}

                {/*
                <h6>Conservation metrics:</h6>
                <label>
                    <input type='checkbox' value="0" class='filled-in' name="conserv" onClick={this.selectOnlyThis} />
                    <span>PhyloP</span>
                </label>
                <label>
                    <input type='checkbox' value="1" class='filled-in' name="conserv" onClick={this.selectOnlyThis} />
                    <span>PhastCons</span>
                </label>
                */}
                

            </div>
          )
        } else {
            return(
                <p>Loading...</p>
            )
        }

    }
    
}

export default VisualizeOptions;
