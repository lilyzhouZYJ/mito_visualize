import React from 'react';
import './styles/VisualizeOptions.css';
import loadGif from './images/loading.gif';

import { fetchGeneInfo } from './fetch.js';

var hasHgroup = [];
var hasModi = [];  //modified bases
var hasFolding = []; //involved in tRNA folding (HmtVar)
var diseaseMitomapConfirmed = [];
var diseaseMitomapReported = [];
var diseaseClinvarPatho = [];
var diseaseClinvarUncertain = [];
var diseaseClinvarBenign = [];
var hetGnomad = {}; //maximum heteroplasmy (GnomAD)
var hetHelix = {}; //maximum heteroplasmy (HelixMTdb)

class VisualizeOptions extends React.Component{

    state = {
        geneData: {},
    }

      
    componentDidMount() {
        //reset
        hasHgroup = [];
        hasModi = [];
        hasFolding = []
        diseaseMitomapConfirmed = [];
        diseaseMitomapReported = [];
        diseaseClinvarPatho = [];
        diseaseClinvarUncertain = []; 
        diseaseClinvarBenign = [];
        hetGnomad = {};
        hetHelix = {};

        fetchGeneInfo(this.props.gene).then(response => {
            //console.log(response.data.gene)
            this.setState({geneData: response.data.gene});
            //console.log(this.state.geneData);
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
        var highlights = document.querySelectorAll(".hgroup, .other, .disease, .het");
        for(var h of highlights){
            h.removeAttribute('class');
            h.style.fill = '';
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





    //bases associated with haplogroups
    showHaplogroup = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not in the Other category
        var otherHighlights = document.querySelectorAll(".disease, .other, .het");
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }


        if(!e.target.checked){
            var highlights = document.querySelectorAll(".hgroup");
            for(var i=0; i<highlights.length; i++){
                //highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bhgroup\b/g, ""));
                highlights[i].classList.remove("hgroup");
            }
        } else {

            if(hasHgroup.length==0){
                hasHgroup = this.state.geneData.filter(dat => dat.haplogroups!==null).map(function(obj){
                    return obj.var_coordinate
                });
            }
            //console.log(hasHgroup);
    
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && hasHgroup.includes(parseInt(titles[i].innerHTML))){
                    parentElement.setAttribute('class', 'hgroup');
                }
            }
        }

    }



    //has modified bases
    showModi = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not in the Other category
        var otherHighlights = document.querySelectorAll(".hgroup, .disease, .het");
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }


        if(!e.target.checked){
            var highlights = document.querySelectorAll(".other-modified");
            for(var i=0; i<highlights.length; i++){
                //highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bother-modified\b/g, ""));
                highlights[i].classList.remove("other-modified");
            }
        } else {

            if(hasModi.length==0){
                hasModi = this.state.geneData.filter(dat => dat.post_transcription_modifications!==null).map(function(obj){
                    return obj.var_coordinate
                });
                //console.log(hasModi);
            }
    
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && hasModi.includes(parseInt(titles[i].innerHTML))){
                    //parentElement.setAttribute('class', parentElement.getAttribute('class')+' other-modified other');
                    parentElement.classList.add('other-modified');
                    parentElement.classList.add('other');
                }
            }
        }
    }



    //involved in tRNA folding (HmtVar)
    showFolding = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not in the Other category
        var otherHighlights = document.querySelectorAll(".hgroup, .disease, .het");
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }



        if(!e.target.checked){
            var highlights = document.querySelectorAll(".other-folding");
            for(var i=0; i<highlights.length; i++){
                //highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bother-folding\b/g, ""));
                highlights[i].classList.remove("other-folding");
            }
        } else {

            if(hasFolding.length==0){
                hasFolding = this.state.geneData.filter(dat => dat.structural_interaction_hmtvar=="Yes").map(function(obj){
                    return obj.var_coordinate
                });
                //console.log(hasFolding);
            }
    
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && hasFolding.includes(parseInt(titles[i].innerHTML))){
                    //parentElement.setAttribute('class', parentElement.getAttribute('class')+' other-folding other');
                    parentElement.classList.add('other-folding');
                    parentElement.classList.add('other');
                }
            }
        }
    }




    showDiseaseMitomapConfirmed = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var otherHighlights = document.querySelectorAll(".hgroup, .other, .het");
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-mitomap-confirmed");
            for(var i=0; i<highlights.length; i++){
                //highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-mitomap-confirmed\b/g, ""));
                highlights[i].classList.remove("disease-mitomap-confirmed");
            }
        } else {
            if(diseaseMitomapConfirmed.length==0){
                diseaseMitomapConfirmed = this.state.geneData.filter(dat => dat.disease_status_mitomap=="Cfrm").map(function(obj){
                    return obj.var_coordinate
                });
            }
            //console.log(diseaseMitomapConfirmed);
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && diseaseMitomapConfirmed.includes(parseInt(titles[i].innerHTML))){
                    //parentElement.setAttribute('class', parentElement.getAttribute('class')+' disease-mitomap-confirmed');
                    parentElement.classList.add('disease-mitomap-confirmed');
                    parentElement.classList.add('disease');
                }
            }
        }
    }

    showDiseaseMitomapReported = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var otherHighlights = document.querySelectorAll(".hgroup, .other, .het");
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-mitomap-reported");
            for(var i=0; i<highlights.length; i++){
                //highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-mitomap-reported\b/g, ""));
                highlights[i].classList.remove("disease-mitomap-reported");
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
                    //parentElement.setAttribute('class', 'disease-mitomap-reported');
                    parentElement.classList.add('disease-mitomap-reported');
                    parentElement.classList.add('disease');
                }
            }
        }
    }

    showDiseaseClinvarPatho = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var otherHighlights = document.querySelectorAll(".hgroup, .other, .het");
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-clinvar-patho");
            for(var i=0; i<highlights.length; i++){
                //highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-clinvar-patho\b/g, ""));
                highlights[i].classList.remove("disease-clinvar-patho");
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
                    //parentElement.setAttribute('class', 'disease-clinvar-patho');
                    parentElement.classList.add('disease-clinvar-patho');
                    parentElement.classList.add('disease');
                }
            }
        }
    }

    showDiseaseClinvarUncertain = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var otherHighlights = document.querySelectorAll(".hgroup, .other, .het");
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-clinvar-uncertain");
            for(var i=0; i<highlights.length; i++){
                //highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-clinvar-uncertain\b/g, ""));
                highlights[i].classList.remove("disease-clinvar-uncertain");
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
                    //parentElement.setAttribute('class', 'disease-clinvar-uncertain');
                    parentElement.classList.add('disease-clinvar-uncertain');
                    parentElement.classList.add('disease');
                }
            }
        }
    }

    showDiseaseClinvarBenign = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not disease association
        var otherHighlights = document.querySelectorAll(".hgroup, .other, .het");
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".disease-clinvar-benign");
            for(var i=0; i<highlights.length; i++){
                //highlights[i].setAttribute('class', highlights[i].getAttribute('class').replace(/\bdisease-clinvar-benign\b/g, ""));
                highlights[i].classList.remove("disease-clinvar-benign");
            }
        } else {
            if(diseaseClinvarBenign.length==0){
                diseaseClinvarBenign = this.state.geneData.filter(dat => dat.disease_status_clinvar=="Benign"||dat.disease_status_clinvar=="Likely benign").map(function(obj){
                    return obj.var_coordinate
                });
            }
            //console.log(diseaseClinvarBenign);
            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                if(parentElement.tagName=="text" && diseaseClinvarBenign.includes(parseInt(titles[i].innerHTML))){
                    //parentElement.setAttribute('class', 'disease-clinvar-benign');
                    parentElement.classList.add('disease-clinvar-benign');
                    parentElement.classList.add('disease');
                }
            }
        }
    }






    showHetGnomad = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".het-gnomad");
            for(var i=0; i<highlights.length; i++){
                highlights[i].classList.remove("het-gnomad");
                highlights[i].style.fill = '';
            }
        } else {
            if(Object.keys(hetGnomad).length == 0){
                this.state.geneData.filter(dat => dat.heteroplasmy_gnomad!==null).map(function(obj){
                    hetGnomad[obj.var_coordinate] = obj.heteroplasmy_gnomad
                })
            }
            //console.log(Object.keys(hetGnomad));
          
            var coors = Object.keys(hetGnomad).map(function(obj){
                return parseInt(obj)
            })
            //console.log(coors);

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    var opacity = (100-hetGnomad[coor]) * 0.8 + 20;
                    parentElement.style.fill = 'rgb(250, 0, 0, '+opacity+'%)';
                    //parentElement.setAttribute('fill', 'rgb(250, 0, 0, '+opacity+'%)' );
                    parentElement.classList.add('het-gnomad');
                    parentElement.classList.add('het');
                }
            }
        }

    }


    showHetHelix = (e) => {

        console.log('show het helix');

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(!e.target.checked){
            var highlights = document.querySelectorAll(".het-helix");
            for(var i=0; i<highlights.length; i++){
                highlights[i].classList.remove("het-helix");
                highlights[i].style.fill = '';
            }
        } else {
            //console.log("helix has been checked");
            if(Object.keys(hetHelix).length == 0){
                this.state.geneData.filter(dat => dat.heteroplasmy_helix!==null).map(function(obj){
                    if(obj.heteroplasmy_helix == ">99") {
                        hetHelix[obj.var_coordinate] = 99;
                    } else {
                        hetHelix[obj.var_coordinate] = parseInt(obj.heteroplasmy_helix);
                    }
                })
            }
            //console.log(hetHelix);
          
            var coors = Object.keys(hetHelix).map(function(obj){
                return parseInt(obj)
            })

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    var opacity = (100-hetHelix[coor]) * 0.8 + 20;
                    parentElement.style.fill = 'rgb(250, 0, 0, '+opacity+'%)';
                    parentElement.classList.add('het-helix');
                    parentElement.classList.add('het');
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

                <h6>Maximum heteroplasmy</h6>
                <label>
                    <input name="hetGnomad" type="checkbox" value="0" class="filled-in" onClick={this.showHetGnomad} />
                    <span>GnomAD</span>
                </label><br/>
                <label>
                    <input name="hetHelix" type="checkbox" value="0" class="filled-in" onClick={this.showHetHelix} />
                    <span>HelixMTdb</span>
                </label>

                <h6>Other</h6>
                <label>
                    <input name="other" type="checkbox" value="0" class="filled-in" onClick={this.showModi} />
                    <span>Show bases with modifications</span>
                    <div class="help-tip">
                        <p>Post-transcriptional modifications can impact mitochondrial RNA function and abundance. Listed tRNA and rRNA modified sites are per <a href='https://pubmed.ncbi.nlm.nih.gov/32859890/' target="_blank">Suzuki et al 2020</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/30529456/' target="_blank">Rebelo-Guiomar et al 2019</a>, respectively.</p>
                    </div>
                </label><br/>
                {this.props.rnaType == "tRNA" &&
                    <label>
                        <input name="other" type="checkbox" value="1" class="filled-in" onClick={this.showFolding} />
                        <span>Show bases involved in tRNA folding (HmtVar)</span>
                        <div class="help-tip">
                            <p>Base interactions enable folding and formation of the tertiary (3D) tRNA structure; annotations from <a href="https://www.hmtvar.uniba.it/" target="_blank">HmtVar</a>.</p>
                        </div>
                    </label>
                 }<br/>


                <button type="reset" onClick={this.clearAll.bind(this)}>Clear</button>

                <p>Note that only one group (disease, haplogroups, heteroplasmy or other) can be visualized at a time.</p>                

            </div>
          )
        } else {
            return(
                <img src={loadGif} alt="Loading..." width="150px" height="75px" />
            )
        }

    }
    
}

export default VisualizeOptions;
