import React from 'react';
import './styles/VisualizeOptions.css';
import loadGif from './images/loading.gif';
// image from: https://gifimage.net/loading-text-gif-14/

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
var popGnomadHom = {}; //population frequency (gnomAD Hom)
var popGnomadHet = {}; //population frequency (gnomAD Het)
var popMitomap = {}; //population frequency (MITOMAP)
var popHelixHom = {}; //population frequency (HelixMTdb Hom)
var popHelixHet = {}; //population frequency (HelixMTdb Het)
var conservPhyloP = {};  //conservation metrics (PhyloP)
var conservPhastCons = {};  //conservation metrics (PhastCons)

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
        popGnomadHom = {};
        popGnomadHet = {};
        popMitomap = {};
        popHelixHom = {};
        popHelixHet = {};
        conservPhyloP = {};
        conservPhastCons = {};

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

    removeHighlightsOfDifferentCategory = (currentCat) => {

        var allCategories = ['.disease', '.other', '.het', '.pop', '.conserv', '.hgroup'];
        var ind = allCategories.indexOf(currentCat);
        allCategories.splice(ind, 1);
        var otherHighlights = document.querySelectorAll(allCategories.join(", "));
        for(var i=0; i<otherHighlights.length; i++){
            otherHighlights[i].removeAttribute('class');
            otherHighlights[i].style.fill = '';
        }

        //remove any gradient legend
        var legend = document.querySelectorAll(".gradient-legend");
        for(var l of legend){
            l.remove();
        }

    }


    removeHighlights(){
        var highlights = document.querySelectorAll(".hgroup, .other, .disease, .het, .pop, .conserv");
        for(var h of highlights){
            h.removeAttribute('class');
            h.style.fill = '';
        }

        //remove any gradient legend
        console.log("removeHighlights()");
        var legend = document.querySelectorAll(".gradient-legend");
        for(var l of legend){
            console.log("something is removed");
            l.remove();
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





    createGradientLegend = (topcolor, bottomcolor, toplabel, bottomlabel) => {

        var multiplier = 1;
        var xShift = 0;
        if(this.props.gene == "MT-RNR2"){ multiplier = 4; xShift = 100; }
        if(this.props.gene == "MT-RNR1"){ multiplier = 2; }

        var stop1 = document.createElementNS('http://www.w3.org/2000/svg','stop');
        stop1.setAttribute("offset","0%");
        stop1.setAttribute("stop-color", topcolor);

        var stop2 = document.createElementNS('http://www.w3.org/2000/svg','stop');
        stop2.setAttribute("offset","100%");
        stop2.setAttribute("stop-color", bottomcolor);

        var linearGrad = document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
        linearGrad.setAttribute("id", "gradient");
        linearGrad.setAttribute("class", "gradient-legend");
        linearGrad.setAttribute("gradientTransform", "rotate(90)");
        linearGrad.appendChild(stop1);
        linearGrad.appendChild(stop2);

        var defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
        defs.appendChild(linearGrad);

        var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute("id","gradient-rect");
        rect.setAttribute("class","gradient-legend");
        rect.setAttribute("x", 35+xShift);
        rect.setAttribute("y", 60);
        rect.setAttribute("width", 20*multiplier);
        rect.setAttribute("height", 70*multiplier);
        rect.setAttribute("fill","url('#gradient')");
        if(document.getElementById("svg-container")){
            var svgnode = document.getElementById("svg-container"); 
        } else {
            var svgnode = document.getElementById("rrna-svg-container"); 
        }
        svgnode.insertBefore(defs, svgnode.childNodes[svgnode.childNodes.length-1]);
        svgnode.insertBefore(rect, svgnode.childNodes[svgnode.childNodes.length-1]);


        //create the labels
        console.log(toplabel);
        var topLabel = document.createTextNode(toplabel);
        var topNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        topNode.appendChild(topLabel);
        topNode.setAttribute('x', (35+xShift) + 22*multiplier);
        topNode.setAttribute('y', 60);
        topNode.setAttribute('class', 'gradient-legend');
        topNode.setAttribute('alignment-baseline', 'central');
        topNode.setAttribute('font-size', 12*multiplier+"px");
        topNode.style.textAnchor = 'start';
        topNode.style.fill = topcolor;
        svgnode.appendChild(topNode);

        var bottomLabel = document.createTextNode(bottomlabel);
        var bottomNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        bottomNode.appendChild(bottomLabel);
        bottomNode.setAttribute('x', (35+xShift) + 22*multiplier);
        bottomNode.setAttribute('y', 60 + 70*multiplier);
        bottomNode.setAttribute('class', 'gradient-legend');
        bottomNode.setAttribute('color', bottomcolor);
        bottomNode.setAttribute('alignment-baseline', 'central');
        bottomNode.setAttribute('font-size', 12*multiplier+"px");
        bottomNode.style.textAnchor = 'start';
        bottomNode.style.fill = bottomcolor;
        svgnode.appendChild(bottomNode);

    }



    // creates color gradient 
    // for population frequency
    // thresholdColor = color for > 1
    createPopGradientLegend = (thresholdColor, topcolor, bottomcolor, toplabel, bottomlabel) => {

        var multiplier = 1;
        var xShift = 0;
        if(this.props.gene == "MT-RNR2"){ multiplier = 4; xShift = 100; }
        if(this.props.gene == "MT-RNR1"){ multiplier = 2; }

        /* creates square for thresholdColor only */
        var square = document.createElementNS('http://www.w3.org/2000/svg','rect');
        square.setAttribute("id","gradient-square");
        square.setAttribute("class","gradient-legend");
        square.setAttribute("x", 35+xShift);
        square.setAttribute("y", 60);
        square.setAttribute("width", 20*multiplier);
        square.setAttribute("height", 20*multiplier);
        square.setAttribute("fill", thresholdColor);
        if(document.getElementById("svg-container")){
            var svgnode = document.getElementById("svg-container"); 
        } else {
            var svgnode = document.getElementById("rrna-svg-container"); 
        }
        svgnode.insertBefore(square, svgnode.childNodes[svgnode.childNodes.length-1]);

        var thresholdLabel = document.createTextNode(">1%");
        var thresholdNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        thresholdNode.appendChild(thresholdLabel);
        thresholdNode.setAttribute('x', (35+xShift) + 22*multiplier);
        thresholdNode.setAttribute('y', 60 + 10*multiplier);
        thresholdNode.setAttribute('class', 'gradient-legend');
        thresholdNode.setAttribute('alignment-baseline', 'central');
        thresholdNode.setAttribute('font-size', 12*multiplier+"px");
        thresholdNode.style.textAnchor = 'start';
        thresholdNode.style.fill = thresholdColor;
        svgnode.appendChild(thresholdNode);


        /* rest of the gradient */

        var stop1 = document.createElementNS('http://www.w3.org/2000/svg','stop');
        stop1.setAttribute("offset","0%");
        stop1.setAttribute("stop-color", topcolor);

        var stop2 = document.createElementNS('http://www.w3.org/2000/svg','stop');
        stop2.setAttribute("offset","100%");
        stop2.setAttribute("stop-color", bottomcolor);

        var linearGrad = document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
        linearGrad.setAttribute("id", "gradient");
        linearGrad.setAttribute("class", "gradient-legend");
        linearGrad.setAttribute("gradientTransform", "rotate(90)");
        linearGrad.appendChild(stop1);
        linearGrad.appendChild(stop2);

        var defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
        defs.appendChild(linearGrad);

        var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute("id","gradient-rect");
        rect.setAttribute("class","gradient-legend");
        rect.setAttribute("x", 35+xShift);
        rect.setAttribute("y", 60 + 25*multiplier);
        rect.setAttribute("width", 20*multiplier);
        rect.setAttribute("height", 70*multiplier);
        rect.setAttribute("fill","url('#gradient')");
        svgnode.insertBefore(defs, svgnode.childNodes[svgnode.childNodes.length-1]);
        svgnode.insertBefore(rect, svgnode.childNodes[svgnode.childNodes.length-1]);

        //create the labels
        var topLabel = document.createTextNode(toplabel);
        var topNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        topNode.appendChild(topLabel);
        topNode.setAttribute('x', (35+xShift) + 22*multiplier);
        topNode.setAttribute('y', 60 + 30*multiplier);
        topNode.setAttribute('class', 'gradient-legend');
        topNode.setAttribute('alignment-baseline', 'central');
        topNode.setAttribute('font-size', 12*multiplier+"px");
        topNode.style.textAnchor = 'start';
        topNode.style.fill = topcolor;
        svgnode.appendChild(topNode);

        var bottomLabel = document.createTextNode(bottomlabel);
        var bottomNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        bottomNode.appendChild(bottomLabel);
        bottomNode.setAttribute('x', (35+xShift) + 22*multiplier);
        bottomNode.setAttribute('y', 60 + 95*multiplier);
        bottomNode.setAttribute('class', 'gradient-legend');
        bottomNode.setAttribute('color', bottomcolor);
        bottomNode.setAttribute('alignment-baseline', 'central');
        bottomNode.setAttribute('font-size', 12*multiplier+"px");
        bottomNode.style.textAnchor = 'start';
        bottomNode.style.fill = bottomcolor;
        svgnode.appendChild(bottomNode);


    }




    //
    // TESTING!!!
    //

    // creates color gradient (NON LINEAR)
    // for population frequency
    // thresholdColor = color for > 1
    createPopGradientLegendNonLinear = (thresholdcolor, topcolor, midcolor, bottomcolor, toplabel, bottomlabel) => {

        var multiplier = 1;
        var xShift = 0;
        if(this.props.gene == "MT-RNR2"){ multiplier = 4; xShift = 100; }
        if(this.props.gene == "MT-RNR1"){ multiplier = 2; }

        /* creates square for thresholdColor only */
        var square = document.createElementNS('http://www.w3.org/2000/svg','rect');
        square.setAttribute("id","gradient-square");
        square.setAttribute("class","gradient-legend");
        square.setAttribute("x", 35+xShift);
        square.setAttribute("y", 60);
        square.setAttribute("width", 20*multiplier);
        square.setAttribute("height", 20*multiplier);
        square.setAttribute("fill", thresholdcolor);
        if(document.getElementById("svg-container")){
            var svgnode = document.getElementById("svg-container"); 
        } else {
            var svgnode = document.getElementById("rrna-svg-container"); 
        }
        svgnode.insertBefore(square, svgnode.childNodes[svgnode.childNodes.length-1]);

        var thresholdLabel = document.createTextNode(">1%");
        var thresholdNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        thresholdNode.appendChild(thresholdLabel);
        thresholdNode.setAttribute('x', (35+xShift) + 22*multiplier);
        thresholdNode.setAttribute('y', 60 + 10*multiplier);
        thresholdNode.setAttribute('class', 'gradient-legend');
        thresholdNode.setAttribute('alignment-baseline', 'central');
        thresholdNode.setAttribute('font-size', 12*multiplier+"px");
        thresholdNode.style.textAnchor = 'start';
        thresholdNode.style.fill = thresholdcolor;
        svgnode.appendChild(thresholdNode);


        /* rest of the gradient */

        var stop1 = document.createElementNS('http://www.w3.org/2000/svg','stop');
        stop1.setAttribute("offset","0%");
        stop1.setAttribute("stop-color", topcolor);

        var stop2 = document.createElementNS('http://www.w3.org/2000/svg','stop');
        stop2.setAttribute("offset","50%");
        stop2.setAttribute("stop-color", midcolor);

        var stop3 = document.createElementNS('http://www.w3.org/2000/svg','stop');
        stop3.setAttribute("offset","100%");
        stop3.setAttribute("stop-color", bottomcolor);

        var linearGrad = document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
        linearGrad.setAttribute("id", "gradient");
        linearGrad.setAttribute("class", "gradient-legend");
        linearGrad.setAttribute("gradientTransform", "rotate(90)");
        linearGrad.appendChild(stop1);
        linearGrad.appendChild(stop2);
        linearGrad.appendChild(stop3);

        var defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
        defs.appendChild(linearGrad);

        var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute("id","gradient-rect");
        rect.setAttribute("class","gradient-legend");
        rect.setAttribute("x", 35+xShift);
        rect.setAttribute("y", 60 + 25*multiplier);
        rect.setAttribute("width", 20*multiplier);
        rect.setAttribute("height", 70*multiplier);
        rect.setAttribute("fill","url('#gradient')");
        svgnode.insertBefore(defs, svgnode.childNodes[svgnode.childNodes.length-1]);
        svgnode.insertBefore(rect, svgnode.childNodes[svgnode.childNodes.length-1]);

        //create the labels
        var topLabel = document.createTextNode(toplabel);
        var topNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        topNode.appendChild(topLabel);
        topNode.setAttribute('x', (35+xShift) + 22*multiplier);
        topNode.setAttribute('y', 60 + 30*multiplier);
        topNode.setAttribute('class', 'gradient-legend');
        topNode.setAttribute('alignment-baseline', 'central');
        topNode.setAttribute('font-size', 12*multiplier+"px");
        topNode.style.textAnchor = 'start';
        topNode.style.fill = topcolor;
        svgnode.appendChild(topNode);

        var bottomLabel = document.createTextNode(bottomlabel);
        var bottomNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        bottomNode.appendChild(bottomLabel);
        bottomNode.setAttribute('x', (35+xShift) + 22*multiplier);
        bottomNode.setAttribute('y', 60 + 95*multiplier);
        bottomNode.setAttribute('class', 'gradient-legend');
        bottomNode.setAttribute('color', bottomcolor);
        bottomNode.setAttribute('alignment-baseline', 'central');
        bottomNode.setAttribute('font-size', 12*multiplier+"px");
        bottomNode.style.textAnchor = 'start';
        bottomNode.style.fill = bottomcolor;
        svgnode.appendChild(bottomNode);


    }












    //bases associated with haplogroups
    showHaplogroup = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove highlights that are not in the hgroup category
        this.removeHighlightsOfDifferentCategory('.hgroup');

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
        this.removeHighlightsOfDifferentCategory('.other');

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
        this.removeHighlightsOfDifferentCategory('.other');


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
        this.removeHighlightsOfDifferentCategory('.disease');

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
        this.removeHighlightsOfDifferentCategory('.disease');

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
        this.removeHighlightsOfDifferentCategory('.disease');

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
        this.removeHighlightsOfDifferentCategory('.disease');

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
        this.removeHighlightsOfDifferentCategory('.disease');

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
                    parentElement.classList.add('disease-clinvar-benign');
                    parentElement.classList.add('disease');
                }
            }
        }
    }





    showPopGnomadHom = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){
            
            if(Object.keys(popGnomadHom).length == 0){
                this.state.geneData.filter(dat => dat.pop_freq_gnomad_af_hom!==null&&dat.pop_freq_gnomad_af_hom!==0).map(function(obj){
                    if(popGnomadHom[obj.var_coordinate]){
                        popGnomadHom[obj.var_coordinate] = popGnomadHom[obj.var_coordinate] + obj.pop_freq_gnomad_af_hom;
                    } else {
                        popGnomadHom[obj.var_coordinate] = obj.pop_freq_gnomad_af_hom;
                    }
                })
            }
            //console.log(popGnomadHom);
          
            var coors = Object.keys(popGnomadHom).map(function(obj){
                return parseInt(obj)
            })
            //console.log(coors);

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    if(popGnomadHom[coor] > 1) {
                        parentElement.style.fill = 'rgb(250, 220, 50, 0.7)';
                    } else {
                        var red = 140 + popGnomadHom[coor]*110;
                        var green = 0 + popGnomadHom[coor]*220;
                        var blue = 0 + popGnomadHom[coor] * 50;
                        parentElement.style.fill = 'rgb('+red+', '+green+', '+blue+')';
                    }
                    parentElement.classList.add('pop-gnomad-hom');
                    parentElement.classList.add('pop');
                }
            }

            this.createPopGradientLegend('rgb(250, 220, 50, 0.7)', 'rgb(250, 220, 50)', 'rgb(140, 0, 0)', "1%", "0%");

        }

    }


    showPopGnomadHet = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){
            
            if(Object.keys(popGnomadHet).length == 0){
                this.state.geneData.filter(dat => dat.pop_freq_gnomad_af_het!==null&&dat.pop_freq_gnomad_af_het!==0).map(function(obj){
                    if(popGnomadHet[obj.var_coordinate]){
                        popGnomadHet[obj.var_coordinate] = popGnomadHet[obj.var_coordinate] + obj.pop_freq_gnomad_af_het;
                    } else {
                        popGnomadHet[obj.var_coordinate] = obj.pop_freq_gnomad_af_het;
                    }
                })
            }
            //console.log(popGnomadHet);
          
            var coors = Object.keys(popGnomadHet).map(function(obj){
                return parseInt(obj)
            })
            //console.log(coors);

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    if(popGnomadHet[coor] > 1) {
                        parentElement.style.fill = 'rgb(250, 220, 50, 0.7)';
                    } else {
                        var red = 140 + popGnomadHet[coor]*110;
                        var green = 0 + popGnomadHet[coor]*220;
                        var blue = 0 + popGnomadHet[coor] * 50;
                        parentElement.style.fill = 'rgb('+red+', '+green+', '+blue+')';
                    }
                    parentElement.classList.add('pop-gnomad-het');
                    parentElement.classList.add('pop');
                }
            }

            this.createPopGradientLegend('rgb(250, 220, 50, 0.7)', 'rgb(250, 220, 50)', 'rgb(140, 0, 0)', "1%", "0%");

        }

    }


    showPopMitomap = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){
            
            if(Object.keys(popMitomap).length == 0){
                this.state.geneData.filter(dat => dat.pop_freq_mitomap!==null&&dat.pop_freq_mitomap!==0).map(function(obj){
                    if(popMitomap[obj.var_coordinate]){
                        popMitomap[obj.var_coordinate] = popMitomap[obj.var_coordinate] + obj.pop_freq_mitomap;
                    } else {
                        popMitomap[obj.var_coordinate] = obj.pop_freq_mitomap;
                    }
                })
            }
            console.log(popMitomap);
          
            var coors = Object.keys(popMitomap).map(function(obj){
                return parseInt(obj)
            })
            //console.log(coors);

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    if(popMitomap[coor] > 1) {
                        parentElement.style.fill = 'rgb(250, 220, 50, 0.7)';
                    } else {
                        var red = 140 + popMitomap[coor]*110;
                        var green = 0 + popMitomap[coor]*220;
                        var blue = 0 + popMitomap[coor] * 50;
                        parentElement.style.fill = 'rgb('+red+', '+green+', '+blue+')';
                    }
                    parentElement.classList.add('pop-mitomap');
                    parentElement.classList.add('pop');
                }
            }

            this.createPopGradientLegend('rgb(250, 220, 50, 0.7)', 'rgb(250, 220, 50)', 'rgb(140, 0, 0)', "1%", "0%");

        }

    }

    
    showPopHelixHom = (e) => {

        console.log("in showPopHelixHom");

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){
            
            if(Object.keys(popHelixHom).length == 0){
                this.state.geneData.filter(dat => dat.pop_freq_helix_af_hom!==null&&dat.pop_freq_helix_af_hom!==0).map(function(obj){
                    if(popHelixHom[obj.var_coordinate]){
                        popHelixHom[obj.var_coordinate] = popHelixHom[obj.var_coordinate] + obj.pop_freq_helix_af_hom;
                    } else {
                        popHelixHom[obj.var_coordinate] = obj.pop_freq_helix_af_hom;
                    }
                })
            }
            console.log(popHelixHom);
          
            var coors = Object.keys(popHelixHom).map(function(obj){
                return parseInt(obj)
            })
            //console.log(coors);

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    if(popHelixHom[coor] > 1) {
                        parentElement.style.fill = 'rgb(250, 220, 50, 0.7)';
                    } else {
                        var red = 140 + popHelixHom[coor]*110;
                        var green = 0 + popHelixHom[coor]*220;
                        var blue = 0 + popHelixHom[coor] * 50;
                        parentElement.style.fill = 'rgb('+red+', '+green+', '+blue+')';
                    }
                    parentElement.classList.add('pop-helix-hom');
                    parentElement.classList.add('pop');
                }
            }

            this.createPopGradientLegend('rgb(250, 220, 50, 0.7)', 'rgb(250, 220, 50)', 'rgb(140, 0, 0)', "1%", "0%");

        }

    }



    showPopHelixHet = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){
            
            if(Object.keys(popHelixHet).length == 0){
                this.state.geneData.filter(dat => dat.pop_freq_helix_af_het!==null&&dat.pop_freq_helix_af_het!==0).map(function(obj){
                    if(popHelixHet[obj.var_coordinate]){
                        popHelixHet[obj.var_coordinate] = popHelixHet[obj.var_coordinate] + obj.pop_freq_helix_af_het;
                    } else {
                        popHelixHet[obj.var_coordinate] = obj.pop_freq_helix_af_het;
                    }
                })
            }
            console.log(popHelixHet);
          
            var coors = Object.keys(popHelixHet).map(function(obj){
                return parseInt(obj)
            })
            //console.log(coors);

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    if(popHelixHet[coor] > 1) {
                        parentElement.style.fill = 'rgb(250, 220, 50, 0.7)';
                    } else {
                        var red = 140 + popHelixHet[coor]*110;
                        var green = 0 + popHelixHet[coor]*220;
                        var blue = 0 + popHelixHet[coor] * 50;
                        parentElement.style.fill = 'rgb('+red+', '+green+', '+blue+')';
                    }
                    parentElement.classList.add('pop-helix-het');
                    parentElement.classList.add('pop');
                }
            }

            this.createPopGradientLegend('rgb(250, 220, 50, 0.7)', 'rgb(250, 220, 50)', 'rgb(140, 0, 0)', "1%", "0%");

        }

    }











    showHetGnomad = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){

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
                    var opacity = ((100-hetGnomad[coor]) * 0.5 + 50)/100;
                    var temp = (100-hetGnomad[coor])/100;
                    var red = 150 + 100*(1-temp);
                    var green = 250*(1-opacity);
                    parentElement.style.fill = 'rgb('+red+', '+green+', 10, '+opacity+')';
                    parentElement.classList.add('het-gnomad');
                    parentElement.classList.add('het');
                }
            }

            //create color legend
            this.createGradientLegend('rgb(250, 125, 10, 0.5)', 'rgb(150, 0, 10, 1)', '100%', '0%');


        }

    }


    showHetHelix = (e) => {

        //console.log('show het helix');

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){

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
                    var opacity = ((100-hetHelix[coor]) * 0.5 + 50)/100;
                    var temp = (100-hetHelix[coor])/100;
                    var red = 150 + 100*(1-temp);
                    var green = 250*(1-opacity);
                    parentElement.style.fill = 'rgb('+red+', '+green+', 10, '+opacity+')';
                    parentElement.classList.add('het-helix');
                    parentElement.classList.add('het');
                }
            }

            //create color legend
            this.createGradientLegend('rgb(250, 125, 10, 0.5)', 'rgb(150, 0, 10, 1)', '100%', '0%');

        }

    }




    showConservPhyloP = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){

            if(Object.keys(conservPhyloP).length == 0){
                this.state.geneData.filter(dat => dat.conserv_phylop!==null).map(function(obj){
                    conservPhyloP[obj.var_coordinate] = obj.conserv_phylop;
                })
            }
            //console.log(conservPhyloP);
          
            var coors = Object.keys(conservPhyloP).map(function(obj){
                return parseInt(obj)
            })

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    var temp = (conservPhyloP[coor]+20)/30;
                    var opacity = 1;
                    var red = 250 * temp;
                    var green = 230 * temp;
                    var blue = 150 - 150*temp;
                    parentElement.style.fill = 'rgb('+red+', '+green+', '+blue+', '+opacity+')';
                    parentElement.classList.add('conserv-phylop');
                    parentElement.classList.add('conserv');
                }
            }

            //create color legend
            this.createGradientLegend('rgb(250,230,0,1)', 'rgb(0,0,150,1)', '10', '-20');

        }

    }

    showConservPhastCons = (e) => {

        // clear all other checkboxes of different categories
        this.removeOtherCheckboxesOfDifferentName(e.target.name);

        // remove all other highlights regardless of category
        this.removeHighlights();

        if(e.target.checked){

            if(Object.keys(conservPhastCons).length == 0){
                this.state.geneData.filter(dat => dat.conserv_phastcons!==null).map(function(obj){
                    conservPhastCons[obj.var_coordinate] = obj.conserv_phastcons;
                })
            }
            //console.log(conservPhastCons);
          
            var coors = Object.keys(conservPhastCons).map(function(obj){
                return parseInt(obj)
            })

            var titles = document.getElementsByTagName('title');
            for(var i = 0; i<titles.length; i++){
                var parentElement = titles[i].parentElement;
                var coor = parseInt(titles[i].innerHTML);
                if(parentElement.tagName=="text" && coors.includes(coor)){
                    var opacity = conservPhastCons[coor] * 0.6 + 0.4;
                    var red = 0;
                    var green = 40 + 200 * (1-opacity);
                    var blue = 200 - 200 * (1-opacity);
                    parentElement.style.fill = 'rgb('+red+', '+green+', '+blue+', '+opacity+')';
                    parentElement.classList.add('conserv-phastcons');
                    parentElement.classList.add('conserv');
                }
            }

            //create color legend
            this.createGradientLegend('rgb(0, 40, 200, 1)','rgb(0, 160, 60, 0.4)', '1', '0');

        }

    }













    render() {

        if(Object.keys(this.state.geneData).length!==0){      //if the data on the gene has been retrieved
          return(
            <div id="visualize-form">

                <h5>Visualize information on the RNA structure</h5>


                <h6>Population frequency
                    <i style={{fontSize: "13px", color:'gray', fontWeight:'normal'}}> Displays as gradient, sum allele frequencies for all SNVs per base</i>
                    <div class="help-tip">
                        <p>For gnomAD and HelixMTdb, frequency and counts are shown for homoplasmic ('hom') and heteroplasmic ('het') variants separately.<br/>
                           - <a href="https://gnomad.broadinstitute.org/" target="_blank">gnomAD</a>: variants identified from whole genome sequencing data, excluding individuals known to have severe pediatric disease. Variants with heteroplasmy level &gt;95% are defined as homoplasmic.<br/>
                           - <a href="https://www.mitomap.org/foswiki/bin/view/MITOMAP/GBFreqInfo" target="_blank">MITOMAP</a>: variants present in GenBank sequence data, may include individuals with disease. <br/>
                           - <a href="https://www.helix.com/pages/mitochondrial-variant-database" target="_blank">HelixMTdb</a>: variants identified from saliva samples sequenced by Helix's proprietary exome including mtDNA, disease status unknown.</p>
                    </div>
                </h6>
                <label>
                    <input name="popGnomadHom" type="checkbox" onClick={this.showPopGnomadHom} />
                    <span>gnomAD hom</span>
                </label><br/>
                <label>
                    <input name="popGnomadHet" type="checkbox" onClick={this.showPopGnomadHet} />
                    <span>gnomAD het</span>
                </label><br/>
                <label>
                    <input name="popMitomap" type="checkbox" onClick={this.showPopMitomap} />
                    <span>MITOMAP</span>
                </label><br/>
                <label>
                    <input name="popHelixHom" type="checkbox" onClick={this.showPopHelixHom} />
                    <span>HelixMTdb hom</span>
                </label><br/>
                <label>
                    <input name="popHelixHet" type="checkbox" onClick={this.showPopHelixHet} />
                    <span>HelixMTdb het</span>
                </label>


                <h6>Maximum heteroplasmy
                    <i style={{fontSize: "13px", color:'gray', fontWeight:'normal'}}> Displays as gradient</i>
                    <div class="help-tip">
                        <p>Range 0-100%; heteroplasmy information not available from MITOMAP. For HelixMTdb, the maximum heteroplasmy level of homoplasmic variants is not reported, and have been assigned here as having maximum heteroplasmy of 1.</p>
                    </div>
                </h6>
                <label>
                    <input name="hetGnomad" type="checkbox" value="0" class="filled-in" onClick={this.showHetGnomad} />
                    <span>GnomAD</span>
                </label><br/>
                <label>
                    <input name="hetHelix" type="checkbox" value="0" class="filled-in" onClick={this.showHetHelix} />
                    <span>HelixMTdb</span>
                </label>


                <h6>Variants associated with disease<br/>
                    <i style={{fontSize: "13px", color:'gray', fontWeight:'normal'}}> Show bases with variants per category, multiple selections allowed</i><br/>
                </h6>
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


                <h6>Conservation metrics
                    <i style={{fontSize: "13px", color:'gray', fontWeight:'normal'}}> Displays as gradient</i>
                    <div class="help-tip">
                        <p>Measures of nucleotide conservation in 100 vertebrate species. <a href="http://compgen.cshl.edu/phast/resources.php" target="_blank">PhyloP scores</a> evaluate conservation at each base, and do not incorporate conservation at neighboring sites. <a href="http://compgen.cshl.edu/phast/resources.php" target="_blank">PhastCons scores</a> are the probability that the base belongs to a conserved multibase element.</p>
                    </div>
                </h6>
                <label>
                    <input name="conservPhyloP" type="checkbox" onClick={this.showConservPhyloP} />
                    <span>PhyloP
                        <i style={{fontSize: "13px", color:'gray', fontWeight:'normal'}}> PhyloP: &gt; 0 conserved, &lt; 0 fast-evolving; range -20-10</i>
                    </span>
                </label><br/>
                <label>
                    <input name="conservPhastCons" type="checkbox" onClick={this.showConservPhastCons} />
                    <span>PhastCons
                        <i style={{fontSize: "13px", color:'gray', fontWeight:'normal'}}> PhastCons: probability of negative selection; range 0-1</i>
                    </span>
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

                <p>Note that only one category can be visualized at a time.</p>                

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