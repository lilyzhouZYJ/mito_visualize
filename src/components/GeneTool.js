import React from 'react';
import './styles/GeneTool.css';

//match each gene to its respective region
var dict = {
    'MT-TF': [577,647],
    'MT-RNR1': [648,1601],
    'MT-TV':  [1602,1670],
    'MT-RNR2':[1671, 3229],
    'MT-TL1':[3230, 3304],
    'MT-ND1':[3307,4262],
    'MT-TI':[4263,4331],
    'MT-TQ':[4329,4400],
    'MT-TM':[4402,4469],
    'MT-ND2':[4470,5511],
    'MT-TW':[5512,5579],
    'MT-TA':[5587,5655],
    'MT-TN':[5657,5729],
    'MT-TC':[5761,5826],
    'MT-TY':[5826,5891],
    'MT-CO1':[5904,7445],
    'MT-TS1':[7446,7514],
    'MT-TD':[7518,7585],
    'MT-CO2':[7586,8269],
    'MT-TK':[8295,8364],
    'MT-ATP8':[8366,8572],
    'MT-ATP6':[8527,9207],
    'MT-CO3':[9207,9990],
    'MT-TG':[9991,10058],
    'MT-ND3':[10059,10404],
    'MT-TR':[10405,10469],
    'MT-ND4L':[10470,10766],
    'MT-ND4':[10760,12137],
    'MT-TH':[12138,12206],
    'MT-TS2': [12207,12265],
    'MT-TL2': [12266,12336],
    'MT-ND5': [12337,14148],
    'MT-ND6': [14149,14673],
    'MT-TE': [14674,14742],
    'MT-CYB': [14747,15887],
    'MT-TT': [15888,15953],
    'MT-TP': [15956,16023],
};


class GeneTool extends React.Component{

    state = {
        cx: 350,
        cy: 350,
        radius: 250,
        innerRadius: 220,
        dist: 30,
    }
    
    //converts from polar system to cartesian coordinates
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    componentDidMount(){

        var cx = this.state.cx;       //x coordinate of circle center
        var cy = this.state.cy;       //y coordinate of circle center
        var radius = this.state.radius;   //radius of outer circle
        var dist = this.state.dist;      //distance between two circles

        /**********
        Lines
        **********/

        //position of each lines
        var pos = [577,648,1602,1671,3230,3305,3307,4263,4331,4329,4401,4402,4470,5512,5580,5587,5656,5657,5730,5761,5826,5892,5904,7446,7515,7518,7586,8270,8295,8365,8366,8572,8527,9207,9991,10059,10405,10470,10766,10760,12138,12207,12266,12337,14149,14674,14743,14747,15888,15954,15956,16024];
        var angles = [];
        for (var p of pos){
            angles.push(p/16569*2*Math.PI-Math.PI/2);   //angles in radians
        }
        
        //plot each line
        for (var angle of angles){
            var pt1x = radius * Math.cos(angle) + cx;
            var pt1y = radius * Math.sin(angle) + cy;
            var pt2x = (radius-dist) * Math.cos(angle) + cx;
            var pt2y = (radius-dist) * Math.sin(angle) + cy;
            var line = document.createElementNS('http://www.w3.org/2000/svg','line');
            line.setAttribute("x1",pt1x);
            line.setAttribute("y1",pt1y);
            line.setAttribute("x2",pt2x);
            line.setAttribute("y2",pt2y);
            line.setAttribute("stroke","black");
            line.setAttribute("stroke-width","1");
            var svgnode = document.getElementById("circle"); 
        var svgnode = document.getElementById("circle"); 
            var svgnode = document.getElementById("circle"); 
            svgnode.insertBefore(line, svgnode.childNodes[svgnode.childNodes.length-1]);
        }

        /***************
         Each section
        ***************/

        var opts = {
            cx: cx,             //x coordinate of circle center
            cy: cy,             //y coordinate of circle center
            radius: radius,     //radius of outer circle
            start_angle: null,  //start angle of section
            end_angle: null,    //end angle of section
        };

        var colors = {
            mRNA: "turquoise",
            tRNA: "lightgreen",
            rRNA: "bisque",
            overlap: "deepskyblue",
            noncoding: "lightpink"
        }

        //mRNA overlap
        var overlap = [8,9,31,32,38,39];
        for (var i = 0; i<overlap.length/2; i++){
            opts.start_angle = (angles[overlap[i*2]]+Math.PI/2)*180/Math.PI;
            opts.end_angle = (angles[overlap[i*2+1]]+Math.PI/2)*180/Math.PI;

            var start = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle),
                end = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle),
                largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";

            var d = [
                "M", start.x, start.y,
                "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
                "L", opts.cx, opts.cy,
                "Z"
                ].join(" ");
            
            var over = document.createElementNS('http://www.w3.org/2000/svg','path');
            over.setAttribute("d",d);
            over.setAttribute("fill",colors.overlap);
            var svgnode = document.getElementById("circle");
            svgnode.insertBefore(over, svgnode.childNodes[0]);
        }  


        //tRNA
        var tRnaAngles = [0,1,2,3,4,6,7,12,13,18,19,22,23,26,27,29,34,35,36,37,40,43,45,47,48,51];
        for (var i = 0; i<tRnaAngles.length/2; i++){
            opts.start_angle = (angles[tRnaAngles[i*2]]+Math.PI/2)*180/Math.PI;
            opts.end_angle = (angles[tRnaAngles[i*2+1]]+Math.PI/2)*180/Math.PI;
            
            var start = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle),
                end = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle),
                largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";
            
            var d = [
                "M", start.x, start.y,
                "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
                "L", opts.cx, opts.cy,
                "Z"
                ].join(" ");
            
            var sector = document.createElementNS('http://www.w3.org/2000/svg','path');
            sector.setAttribute("d",d);
            sector.setAttribute("fill",colors.tRNA);
            var svgnode = document.getElementById("circle");
            svgnode.insertBefore(sector, svgnode.childNodes[0]);
        }

        //mRNA
        var mRnaAngles = [5,18,19,48];
        for (var i = 0; i<mRnaAngles.length/2; i++){
            opts.start_angle = (angles[mRnaAngles[i*2]]+Math.PI/2)*180/Math.PI;
            opts.end_angle = (angles[mRnaAngles[i*2+1]]+Math.PI/2)*180/Math.PI;

            var start = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle),
                end = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle),
                largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";

            var d = [
                "M", start.x, start.y,
                "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
                "L", opts.cx, opts.cy,
                "Z"
                ].join(" ");
            
            var sector = document.createElementNS('http://www.w3.org/2000/svg','path');
            sector.setAttribute("d",d);
            sector.setAttribute("fill",colors.mRNA);
            var svgnode = document.getElementById("circle");
            svgnode.insertBefore(sector, svgnode.childNodes[0]);
        }  
        
        
        //rRNA
        opts.start_angle = (angles[1]+Math.PI/2)*180/Math.PI;
        opts.end_angle = (angles[4]+Math.PI/2)*180/Math.PI;

        var start = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle),
            end = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle),
            largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y,
            "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
            "L", opts.cx, opts.cy,
            "Z"
            ].join(" ");
        
        var sector = document.createElementNS('http://www.w3.org/2000/svg','path');
        sector.setAttribute("d",d);
        sector.setAttribute("fill",colors.rRNA);
        var svgnode = document.getElementById("circle");
        svgnode.insertBefore(sector, svgnode.childNodes[0]);

        //noncoding
        var noncode = [51,0,18,19];
        for (var i = 0; i<noncode.length/2; i++){
            opts.start_angle = (angles[noncode[i*2]]+Math.PI/2)*180/Math.PI;
            opts.end_angle = (angles[noncode[i*2+1]]+Math.PI/2)*180/Math.PI;

            var start = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle),
                end = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle),
                largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";

            var d = [
                "M", start.x, start.y,
                "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
                "L", opts.cx, opts.cy,
                "Z"
                ].join(" ");
            
            var noncoding = document.createElementNS('http://www.w3.org/2000/svg','path');
            noncoding.setAttribute("d",d);
            noncoding.setAttribute("fill",colors.noncoding);
            var svgnode = document.getElementById("circle");
            svgnode.insertBefore(noncoding, svgnode.childNodes[0]);
        }           

        /**************
         * Text Labels
         **************/
        
        for (const [key, value] of Object.entries(dict)) {

            var textPos = (value[0]+value[1])/2;
            var textAngle = textPos/16569*2*Math.PI-Math.PI/2;  //text angle in radians
            var textX = 1.02 * radius * Math.cos(textAngle) + cx;
            var textY = 1.02 * radius * Math.sin(textAngle) + cy;

            var labelNode = document.createElementNS('http://www.w3.org/2000/svg','text');
            var label = document.createTextNode(key);
            labelNode.appendChild(label);

            labelNode.setAttribute("x",textX);
            labelNode.setAttribute("y",textY);
            if(textAngle>Math.PI/2){
                textAngle = textAngle+Math.PI;
                labelNode.setAttribute("text-anchor","end");
            } else {
                labelNode.setAttribute("text-anchor","start");
            }
            labelNode.setAttribute("transform","rotate("+textAngle*180/Math.PI+","+textX+","+textY+")");
            labelNode.setAttribute("fill","black");
            labelNode.setAttribute("font-size","11");
            labelNode.setAttribute("alignment-baseline","central");
            labelNode.setAttribute("id",key);
            labelNode.setAttribute("class","textLabels");
            //fix text overlap
            if(key=="MT-TY"|key=="MT-TM"|key=="MT-TH"){
                labelNode.setAttribute("alignment-baseline","hanging");
            }
            else if(key=="MT-TW"|key=="MT-TI"|key=="MT-TL2"){
                labelNode.setAttribute("alignment-baseline","baseline");
            }
            else if(key=="MT-TA"|key=="MT-TP"|key=="MT-TS1"){
                labelNode.setAttribute("alignment-baseline","middle");
            }
            labelNode.setAttribute("class","label");
            var svgnode = document.getElementById("circle");
            svgnode.insertBefore(labelNode, svgnode.childNodes[svgnode.childNodes.length-1]);
            
        }
    }

    handleSubmitGene = (e) => {
        e.preventDefault();
        var newGene = document.getElementById('gene-name').value;
        var newPos = dict[newGene];

        //remove preexisting variant highlight
        elementExists = document.getElementById('highlight-var');
        if(elementExists!==null){
            elementExists.remove();
            document.getElementById('varLabel').remove();
        }

        //remove preexisting gene highlight
        var elementExists = document.getElementById('highlight');
        if(elementExists!==null){
            elementExists.remove();
            var labels = document.getElementsByClassName('label');
            for (var i=0;i<labels.length;i++) {
                labels[i].setAttribute('font-weight','normal');
                labels[i].setAttribute('fill','black');
            }
        }

        //remove preexisting deletions
        elementExists = document.getElementById('highlight-del');
        if(elementExists!==null){
            elementExists.remove();
            document.getElementById('circle-del').remove();
        }

        if (newPos!==null){
            var opts = {
                cx: 350,
                cy: 350,
                radius: 250,
                start_angle: (newPos[0]/16569*2*Math.PI)*180/Math.PI,
                end_angle: (newPos[1]/16569*2*Math.PI)*180/Math.PI,
            };
            var start = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle),
                end = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle),
                largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";
            var d = [
                "M", start.x, start.y,
                "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
                "L", opts.cx, opts.cy,
                "Z"
            ].join(" ");
            var highlight = document.createElementNS('http://www.w3.org/2000/svg','path');
            highlight.setAttribute("d",d);
            highlight.setAttribute("fill","crimson");
            highlight.setAttribute("id","highlight");
            var svgnode = document.getElementById("circle");
            svgnode.insertBefore(highlight, document.getElementsByTagName('circle')[0]);

            //highlight gene name as well
            var highlightGene = document.getElementById(newGene);
            highlightGene.setAttribute('font-weight','bold');
            highlightGene.setAttribute('fill','crimson');
        
        }
    }

    handleSubmitVar = (e) => {
        var radius = this.state.radius;
        var dist = this.state.dist;
        var cx = this.state.cx;
        var cy = this.state.cy;
        
        e.preventDefault();
        
        //remove preexisting gene highlight
        var elementExists = document.getElementById('highlight');
        if(elementExists!==null){
            elementExists.remove();
            var labels = document.getElementsByClassName('label');
            for (var i=0;i<labels.length;i++) {
                labels[i].setAttribute('font-weight','normal');
                labels[i].setAttribute('fill','black');
            }
        }

        //remove preexisting variant highlight
        elementExists = document.getElementById('highlight-var');
        if(elementExists!==null){
            elementExists.remove();
            document.getElementById('varLabel').remove();
        }

        //remove preexisting deletions
        elementExists = document.getElementById('highlight-del');
        if(elementExists!==null){
            elementExists.remove();
            document.getElementById('circle-del').remove();
        }

        var varName = document.getElementById('var-pos').value;
        var varPos = varName.split("-")[1];

        if(varPos<=16569){
            
            //add line to highlight variant position
            var angle = varPos/16569*2*Math.PI-Math.PI/2;   //angles in radians
            var pt1x = radius * Math.cos(angle) + cx;
            var pt1y = radius * Math.sin(angle) + cy;
            var pt2x = (radius-dist-50) * Math.cos(angle) + cx;
            var pt2y = (radius-dist-50) * Math.sin(angle) + cy;

            var line = document.createElementNS('http://www.w3.org/2000/svg','line');
            line.setAttribute("x1",pt1x);
            line.setAttribute("y1",pt1y);
            line.setAttribute("x2",pt2x);
            line.setAttribute("y2",pt2y);
            line.setAttribute("stroke","crimson");
            line.setAttribute("stroke-width","3");
            line.setAttribute("id","highlight-var");
            var svgnode = document.getElementById("circle"); 
            svgnode.insertBefore(line, svgnode.childNodes[svgnode.childNodes.length-1]);

            //add text label for variant
            var textNode = document.createElementNS('http://www.w3.org/2000/svg','text');
            var node1 = document.createElementNS('http://www.w3.org/2000/svg','tspan');
            var text = document.createTextNode(varName);
            node1.appendChild(text);
            textNode.appendChild(node1);

            if(varPos>16569/2){
                textNode.setAttribute('text-anchor','start');
                textNode.setAttribute('x',pt2x+5);
                textNode.setAttribute('y',pt2y);
            } else {
                textNode.setAttribute('x',pt2x-5);
                textNode.setAttribute('y',pt2y);
                textNode.setAttribute("text-anchor","end");
            }
            textNode.setAttribute("fill","crimson");
            textNode.setAttribute("font-size","14");
            textNode.setAttribute("alignment-baseline","central");
            textNode.setAttribute("id","varLabel");
            textNode.setAttribute("font-weight","bold");
            svgnode.insertBefore(textNode, svgnode.childNodes[svgnode.childNodes.length-1]);
        }
        
    }

    handleSubmitDel = (e) => {
        e.preventDefault();
        
        //remove preexisting gene highlight
        var elementExists = document.getElementById('highlight');
        if(elementExists!==null){
            elementExists.remove();
            var labels = document.getElementsByClassName('label');
            for (var i=0;i<labels.length;i++) {
                labels[i].setAttribute('font-weight','normal');
                labels[i].setAttribute('fill','black');
            }
        }

        //remove preexisting variant highlight
        elementExists = document.getElementById('highlight-var');
        if(elementExists!==null){
            elementExists.remove();
            document.getElementById('varLabel').remove();
        }

        //remove preexisting deletions
        elementExists = document.getElementById('highlight-del');
        if(elementExists!==null){
            elementExists.remove();
            document.getElementById('circle-del').remove();
        }

        
        var start = document.getElementById("del-start").value;
        var end = document.getElementById("del-end").value;

        if(start>=0 && end<=16569 && start-end<0){
            var opts = {
                cx: this.state.cx,
                cy: this.state.cy,
                radius: this.state.innerRadius - 10,
                start_angle: (start/16569*2*Math.PI)*180/Math.PI,
                end_angle: (end/16569*2*Math.PI)*180/Math.PI,
            };
            var start = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle),
                end = this.polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle),
                largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";
            var d = [
                "M", start.x, start.y,
                "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
                "L", opts.cx, opts.cy,
                "Z"
            ].join(" ");
            
            var highlight = document.createElementNS('http://www.w3.org/2000/svg','path');
            highlight.setAttribute("d",d);
            highlight.setAttribute("fill","slateblue");
            highlight.setAttribute("id","highlight-del");
            var svgnode = document.getElementById("circle");
            svgnode.insertBefore(highlight,svgnode[svgnode.childNodes.length-1]);

            var circleCover = document.createElementNS('http://www.w3.org/2000/svg','circle');
            circleCover.setAttribute('cx',opts.cx);
            circleCover.setAttribute('cy',opts.cy);
            circleCover.setAttribute('r',opts.radius-20);
            circleCover.setAttribute('fill','white');
            circleCover.setAttribute('id','circle-del');
            svgnode.insertBefore(circleCover,svgnode[svgnode.childNodes.length-1]);
        }

    }

    render() {
        return(
            <div id="gene-tool">
                <svg id="circle" width="700" height="700">
                    <circle cx="350" cy="350" r="250" stroke="saddlebrown" strokeWidth="1" fill="transparent" />
                    <circle cx="350" cy="350" r="240" stroke="none" fill="#ffffff90" filter="url(#blurMe)" />
                    <circle cx="350" cy="350" r="225" stroke="none" fill="#ffffffd0" filter="url(#blurMe)" />
                    <circle cx="350" cy="350" r="220" stroke="#8b4513c0" strokeWidth="1" fill="white" />
                    
                    <filter id="blurMe">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                    </filter>
                </svg>

                <div id="submit-form">
                    <p>Highlighting Gene</p>
                    <form onSubmit={this.handleSubmitGene}>
                        <label htmlFor="gene-name">Input gene name</label>
                        <input type="text" id="gene-name"></input>
                        <button type="submit">Submit</button>
                    </form>
                    <br></br>

                    <p>Highlighting Variant</p>
                    <form onSubmit={this.handleSubmitVar}>
                        <label htmlFor="var-pos">Input variant ID</label>
                        <input type="text" id="var-pos"></input>
                        <button type="submit">Submit</button>
                    </form>
                    <br></br>

                    <p>Highlighting a region of deletion</p>
                    <form onSubmit={this.handleSubmitDel}>
                        <label htmlFor="del-start">Input deletion start</label>
                        <input type="text" id='del-start'></input>
                        <label htmlFor="del-end">Input deletion end</label>
                        <input type="text" id='del-end'></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default GeneTool;
