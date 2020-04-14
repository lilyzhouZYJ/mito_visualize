import React from 'react';

class Mtta extends React.Component{
    
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
        var variantCor = this.props.variantCor;
        var allText = document.getElementById('svg-container').getElementsByTagName('title');
        for(var t of allText){
            if(t.innerHTML==variantCor){
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
                <text x="205" y="55" > A<title>5587</title> </text>
                <text x="205" y="70" > T<title>5588</title> </text>
                <text x="205" y="85" > T<title>5589</title> </text>
                <text x="205" y="100" > C<title>5590</title> </text>
                <text x="205" y="115" > C<title>5591</title> </text>
                <text x="205" y="130" > T<title>5592</title> </text>
                <text x="205" y="145" > G<title>5593</title> </text>
                <text x="205" y="160" > A<title>5594</title> </text>
                <text x="220" y="170" > C<title>5595</title> </text>
                <text x="233" y="170" > G<title>5596</title> </text>
                <text x="246" y="170" > T<title>5597</title> </text>
                <text x="259" y="170" > T<title>5598</title> </text>
                <text x="272" y="170" > T<title>5599</title> </text>
                <text x="282" y="163" > T<title>5600</title> </text>
                <text x="294" y="160" > G<title>5601</title> </text>
                <text x="306" y="168" > G<title>5602</title> </text>
                <text x="312" y="181.5" > G<title>5603</title> </text>
                <text x="306" y="195" > G<title>5604</title> </text>
                <text x="294" y="203" > T<title>5605</title> </text>
                <text x="282" y="200" > G<title>5606</title> </text>
                <text x="272" y="193" > A<title>5607</title> </text>
                <text x="259" y="193" > G<title>5608</title> </text>
                <text x="246" y="193" > A<title>5609</title> </text>
                <text x="233" y="193" > C<title>5610</title> </text>
                <text x="220" y="193" > G<title>5611</title> </text>
                <text x="220" y="205" > T<title>5612</title> </text>
                <text x="226" y="215" > A<title>5613</title> </text>
                <text x="218" y="225" > G<title>5614</title> </text>
                <text x="206" y="228" > T<title>5615</title> </text>
                <text x="200" y="238" > T<title>5616</title> </text>
                <text x="200" y="253" > G<title>5617</title> </text>
                <text x="200" y="268" > A<title>5618</title> </text>
                <text x="200" y="283" > C<title>5619</title> </text>
                <text x="200" y="298" > T<title>5620</title> </text>
                <text x="208" y="308" > T<title>5621</title> </text>
                <text x="208" y="323" > G<title>5622</title> </text>
                <text x="200" y="334" > C<title>5623</title> </text>
                <text x="187.5" y="336" > G<title>5624</title> </text>
                <text x="175" y="334" > T<title>5625</title> </text>
                <text x="167" y="323" > T<title>5626</title> </text>
                <text x="167" y="308" > T<title>5627</title> </text>
                <text x="175" y="298" > A<title>5628</title> </text>
                <text x="175" y="283" > G<title>5629</title> </text>
                <text x="175" y="268" > T<title>5630</title> </text>
                <text x="175" y="253" > C<title>5631</title> </text>
                <text x="175" y="238" > G<title>5632</title> </text>
                <text x="163" y="228" > G<title>5633</title> </text>
                <text x="152" y="215" > T<title>5634</title> </text>
                <text x="139" y="215" > G<title>5635</title> </text>
                <text x="126" y="215" > A<title>5636</title> </text>
                <text x="113" y="215" > A<title>5637</title> </text>
                <text x="100" y="222" > A<title>5638</title> </text>
                <text x="87" y="217" > T<title>5639</title> </text>
                <text x="80" y="203.5" > T<title>5640</title> </text>
                <text x="87" y="190" > A<title>5641</title> </text>
                <text x="100" y="185" > A<title>5642</title> </text>
                <text x="113" y="192" > T<title>5643</title> </text>
                <text x="126" y="192" > T<title>5644</title> </text>
                <text x="139" y="192" > C<title>5645</title> </text>
                <text x="152" y="192" > G<title>5646</title> </text>
                <text x="165" y="183" > A<title>5647</title> </text>
                <text x="173" y="173" > T<title>5648</title> </text>
                <text x="180" y="160" > T<title>5649</title> </text>
                <text x="180" y="145" > C<title>5650</title> </text>
                <text x="180" y="130" > G<title>5651</title> </text>
                <text x="180" y="115" > G<title>5652</title> </text>
                <text x="180" y="100" > G<title>5653</title> </text>
                <text x="180" y="85" > A<title>5654</title> </text>
                <text x="180" y="70" > A<title>5655</title> </text>

                <line x1="190" y1="67" x2="203" y2="67" ><title>190,67 203,67</title> </line>
                <line x1="190" y1="82" x2="203" y2="82" ><title>190,82 203,82</title> </line>
                <line x1="190" y1="97" x2="203" y2="97" ><title>190,97 203,97</title> </line>
                <line x1="190" y1="112" x2="203" y2="112" ><title>190,112 203,112</title> </line>

                <circle cx="196" cy="127" r="2" ><title>196,127</title> </circle>

                <line x1="190" y1="142" x2="203" y2="142" ><title>190,142 203,142</title> </line>
                <line x1="190" y1="157" x2="203" y2="157" ><title>190,157 203,157</title> </line>
                <line x1="224" y1="173" x2="224" y2="183" ><title>224,173 224,183</title> </line>
                <line x1="237" y1="173" x2="237" y2="183" ><title>237,173 237,183</title> </line>
                <line x1="250" y1="173" x2="250" y2="183" ><title>250,173 250,183</title> </line>

                <circle cx="263" cy="177" r="2" ><title>263,177</title> </circle>

                <line x1="276" y1="173" x2="276" y2="183" ><title>276,173 276,183</title> </line>

                <circle cx="192" cy="235" r="2" ><title>192,235</title> </circle>

                <line x1="185" y1="250" x2="198" y2="250" ><title>185,250 198,250</title> </line>
                <line x1="185" y1="265" x2="198" y2="265" ><title>185,265 198,265</title> </line>
                <line x1="185" y1="280" x2="198" y2="280" ><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295" ><title>185,295 198,295</title> </line>
                <line x1="117" y1="195" x2="117" y2="205" ><title>117,195 117,205</title> </line>
                <line x1="130" y1="195" x2="130" y2="205" ><title>130,195 130,205</title> </line>
                <line x1="143" y1="195" x2="143" y2="205" ><title>143,195 143,205</title> </line>
                
                <circle cx="156" cy="200" r="2" ><title>156,200</title> </circle>
            </svg>

        )
    }
    
}

export default Mtta;