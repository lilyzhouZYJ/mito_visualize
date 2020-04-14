import React from 'react';

class Mtte extends React.Component{
    
    componentDidMount(){
        //set styles
        var allLines = document.getElementById('svg-container').getElementsByTagName('line');
        for(var t of allLines){
            t.setAttribute('stroke',"#000000");
            t.setAttribute('stroke-width',"1");
            t.setAttribute('stroke-linecap',"round");
            var newY1 = parseFloat(t.getAttribute('y1'))+47;
            var newY2 = parseFloat(t.getAttribute('y2'))+47;
            t.setAttribute('y1',newY1);
            t.setAttribute('y2',newY2);
        }
        var allCircles = document.getElementById('svg-container').getElementsByTagName('circle');
        for(var t of allCircles){
            t.setAttribute('fill', '#000000');
            var newY = parseFloat(t.getAttribute('cy'))+47;
            t.setAttribute('cy',newY);
        }
        var allText = document.getElementById('svg-container').getElementsByTagName('text');
        for(var t of allText){
            t.setAttribute('font-size', '12');
            t.setAttribute('fill', '#000000');
            t.setAttribute('font-family', 'monospace');
            var newY = parseFloat(t.getAttribute('y'))+47;
            t.setAttribute('y',newY);
        }

        
        //highlight variant
        var variant = this.props.variant;
        var allText = document.getElementsByTagName('title');
        for(var t of allText){
            if(t.innerHTML==variant){
                var textNode = t.parentElement;
                textNode.setAttribute('font-weight',"bold");
                textNode.setAttribute('font-size',"15");
                textNode.setAttribute('fill',"crimson");
                var newX = parseFloat(textNode.getAttribute('x'))-1;
                var newY = parseFloat(textNode.getAttribute('y'))+1.5;
                textNode.setAttribute('x',newX);
                textNode.setAttribute('y',newY);
                textNode.setAttribute('id', 'highlight');

                //add circle for background color of highlight
                var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                circle.setAttribute('cx',newX+4);
                circle.setAttribute('cy',newY-5);
                circle.setAttribute('r',9);
                circle.setAttribute('fill','yellow');
                var svgnode = document.getElementById("svg-container"); 
                svgnode.insertBefore(circle, svgnode.childNodes[0]);
            }
        }

        //add text legend
        var geneName = document.createTextNode(this.props.gene);

        var textX = 55;
        var textY = 59;
        
        var geneNameNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        geneNameNode.appendChild(geneName);
        geneNameNode.setAttribute("x",textX);
        geneNameNode.setAttribute("y",textY);
        geneNameNode.setAttribute("text-anchor","start");
        geneNameNode.setAttribute("font-family","Roboto, sans-serif");
        geneNameNode.setAttribute("font-size","14");

        var svgnode = document.getElementById("svg-container"); 
        svgnode.appendChild(geneNameNode);
        
        if(this.props.variantId!==undefined){
            var variantId = document.createTextNode(this.props.variantId);
            var variantIdNode = document.createElementNS('http://www.w3.org/2000/svg','text');
            variantIdNode.appendChild(variantId);
            variantIdNode.setAttribute("x",textX);
            variantIdNode.setAttribute("y",textY+20);
            variantIdNode.setAttribute("text-anchor","start");
            variantIdNode.setAttribute("font-family","Roboto, sans-serif");
            variantIdNode.setAttribute("font-size","14");
            svgnode.appendChild(variantIdNode);
        }

        if(this.props.conseq!==undefined){
            var conseq = document.createTextNode(this.props.conseq);
            var conseqNode = document.createElementNS('http://www.w3.org/2000/svg','text');  
            conseqNode.appendChild(conseq);
            conseqNode.setAttribute("x",textX);
            conseqNode.setAttribute("y",textY+40);
            conseqNode.setAttribute("text-anchor","start");
            conseqNode.setAttribute("font-family","Roboto, sans-serif");
            conseqNode.setAttribute("font-size","14");
            svgnode.appendChild(conseqNode);
        }

        var legend = document.createTextNode("tRNA Secondary Structure");
        var legendNode = document.createElementNS('http://www.w3.org/2000/svg','text');
        legendNode.appendChild(legend);
        legendNode.setAttribute("x","55");
        legendNode.setAttribute("y","33");
        legendNode.setAttribute("font-family","Roboto, sans-serif");
        legendNode.setAttribute("font-size","15");
        legendNode.setAttribute("font-weight","bold");
        svgnode.appendChild(legendNode);

    }

    render() {
        
        return(
            <svg id="svg-container" height="390" width="350" xmlns="http://www.w3.org/2000/svg">
                
                <text x="205" y="55">A<title>14674</title> </text>
                <text x="205" y="70">T<title>14675</title> </text>
                <text x="205" y="85">A<title>14676</title> </text>
                <text x="205" y="100">A<title>14677</title> </text>
                <text x="205" y="115">G<title>14678</title> </text>
                <text x="205" y="130">A<title>14679</title> </text>
                <text x="205" y="145">G<title>14680</title> </text>
                <text x="205" y="160">C<title>14681</title> </text>
                <text x="220" y="170">G<title>14682</title> </text>
                <text x="233" y="170">T<title>14683</title> </text>
                <text x="246" y="170">G<title>14684</title> </text>
                <text x="259" y="170">C<title>14685</title> </text>
                <text x="272" y="170">C<title>14686</title> </text>
                <text x="282" y="163">T<title>14687</title> </text>
                <text x="294" y="160">G<title>14688</title> </text>
                <text x="306" y="168">A<title>14689</title> </text>
                <text x="312" y="181.5">T<title>14690</title> </text>
                <text x="306" y="195">G<title>14691</title> </text>
                <text x="294" y="203">T<title>14692</title> </text>
                <text x="282" y="200">T<title>14693</title> </text>
                <text x="272" y="193">G<title>14694</title> </text>
                <text x="259" y="193">G<title>14695</title> </text>
                <text x="246" y="193">T<title>14696</title> </text>
                <text x="233" y="193">G<title>14697</title> </text>
                <text x="220" y="193">C<title>14698</title> </text>
                <text x="220" y="205">T<title>14699</title> </text>
                <text x="226" y="215">G<title>14700</title> </text>
                <text x="218" y="225">G<title>14701</title> </text>
                <text x="206" y="228">T<title>14702</title> </text>
                <text x="200" y="238">T<title>14703</title> </text>
                <text x="200" y="253">A<title>14704</title> </text>
                <text x="200" y="268">C<title>14705</title> </text>
                <text x="200" y="283">T<title>14706</title> </text>
                <text x="200" y="298">A<title>14707</title> </text>
                <text x="208" y="308">T<title>14708</title> </text>
                <text x="208" y="323">A<title>14709</title> </text>
                <text x="200" y="334">C<title>14710</title> </text>
                <text x="187.5" y="336">T<title>14711</title> </text>
                <text x="175" y="334">T<title>14712</title> </text>
                <text x="167" y="323">T<title>14713</title> </text>
                <text x="167" y="308">T<title>14714</title> </text>
                <text x="175" y="298">T<title>14715</title> </text>
                <text x="175" y="283">G<title>14716</title> </text>
                <text x="175" y="268">G<title>14717</title> </text>
                <text x="175" y="253">T<title>14718</title> </text>
                <text x="175" y="238">A<title>14719</title> </text>
                <text x="163" y="228">G<title>14720</title> </text>
                <text x="152" y="215">C<title>14721</title> </text>
                <text x="139" y="215">A<title>14722</title> </text>
                <text x="126" y="215">A<title>14723</title> </text>
                <text x="113" y="215">C<title>14724</title> </text>
                <text x="100" y="222">A<title>14725</title> </text>
                <text x="87" y="217">T<title>14726</title> </text>
                <text x="80" y="203.5">A<title>14727</title> </text>
                <text x="87" y="190">A<title>14728</title> </text>
                <text x="100" y="185">A<title>14729</title> </text>
                <text x="113" y="192">G<title>14730</title> </text>
                <text x="126" y="192">T<title>14731</title> </text>
                <text x="139" y="192">T<title>14732</title> </text>
                <text x="152" y="192">G<title>14733</title> </text>
                <text x="165" y="183">A<title>14734</title> </text>
                <text x="173" y="173">T<title>14735</title> </text>
                <text x="180" y="160">G<title>14736</title> </text>
                <text x="180" y="145">T<title>14737</title> </text>
                <text x="180" y="130">T<title>14738</title> </text>
                <text x="180" y="115">C<title>14739</title> </text>
                <text x="180" y="100">T<title>14740</title> </text>
                <text x="180" y="85">T<title>14741</title> </text>
                <text x="180" y="70">G<title>14742</title> </text>
                <circle cx="196" cy="67" r="2"><title>196,67</title> </circle>
                <line x1="190" y1="82" x2="203" y2="82"><title>190,82 203,82</title> </line>
                <line x1="190" y1="97" x2="203" y2="97"><title>190,97 203,97</title> </line>
                <line x1="190" y1="112" x2="203" y2="112"><title>190,112 203,112</title> </line>
                <line x1="190" y1="127" x2="203" y2="127"><title>190,127 203,127</title> </line>
                <circle cx="196" cy="142" r="2"><title>196,142</title> </circle>
                <line x1="190" y1="157" x2="203" y2="157"><title>190,157 203,157</title> </line>
                <line x1="224" y1="173" x2="224" y2="183"><title>224,173 224,183</title> </line>
                <circle cx="237" cy="177" r="2"><title>237,177</title> </circle>
                <circle cx="250" cy="177" r="2"><title>250,177</title> </circle>
                <line x1="263" y1="173" x2="263" y2="183"><title>263,173 263,183</title> </line>
                <line x1="276" y1="173" x2="276" y2="183"><title>276,173 276,183</title> </line>
                <line x1="185" y1="235" x2="198" y2="235"><title>185,235 198,235</title> </line>
                <line x1="185" y1="250" x2="198" y2="250"><title>185,250 198,250</title> </line>
                <line x1="185" y1="265" x2="198" y2="265"><title>185,265 198,265</title> </line>
                <circle cx="192" cy="280" r="2"><title>192,280</title> </circle>
                <line x1="185" y1="295" x2="198" y2="295"><title>185,295 198,295</title> </line>
                <line x1="117" y1="195" x2="117" y2="205"><title>117,195 117,205</title> </line>
                <line x1="130" y1="195" x2="130" y2="205"><title>130,195 130,205</title> </line>
                <line x1="143" y1="195" x2="143" y2="205"><title>143,195 143,205</title> </line>
                <line x1="156" y1="195" x2="156" y2="205"><title>156,195 156,205</title> </line>
            </svg>

        )
    }
    
}

export default Mtte;