import React from 'react';

class Mttc extends React.Component{
    
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
                
                <text x="205" y="55" > T<title>5761</title> </text>
                <text x="205" y="70" > T<title>5762</title> </text>
                <text x="205" y="85" > C<title>5763</title> </text>
                <text x="205" y="100" > G<title>5764</title> </text>
                <text x="205" y="115" > G<title>5765</title> </text>
                <text x="205" y="130" > G<title>5766</title> </text>
                <text x="205" y="145" > G<title>5767</title> </text>
                <text x="205" y="160" > C<title>5768</title> </text>
                <text x="218" y="170" > C<title>5769</title> </text>
                <text x="231" y="170" > G<title>5770</title> </text>
                <text x="244" y="170" > T<title>5771</title> </text>
                <text x="257" y="170" > C<title>5772</title> </text>
                <text x="269" y="163" > C<title>5773</title> </text>
                <text x="281" y="160" > A<title>5774</title> </text>
                <text x="293" y="163" > A<title>5775</title> </text>
                <text x="302" y="174" > A<title>5776</title> </text>
                <text x="302" y="189" > C<title>5777</title> </text>
                <text x="293" y="200" > T<title>5778</title> </text>
                <text x="281" y="203" > T<title>5779</title> </text>
                <text x="269" y="200" > C<title>5780</title> </text>
                <text x="257" y="193" > G<title>5781</title> </text>
                <text x="244" y="193" > A<title>5782</title> </text>
                <text x="231" y="193" > C<title>5783</title> </text>
                <text x="218" y="193" > G<title>5784</title> </text>
                <text x="220" y="205" > A<title>5785</title> </text>
                <text x="226" y="215" > A<title>5786</title> </text>
                <text x="218" y="225" > G<title>5787</title> </text>
                <text x="206" y="228" > A<title>5788</title> </text>
                <text x="200" y="238" > A<title>5789</title> </text>
                <text x="200" y="253" > G<title>5790</title> </text>
                <text x="200" y="268" > C<title>5791</title> </text>
                <text x="200" y="283" > T<title>5792</title> </text>
                <text x="200" y="298" > T<title>5793</title> </text>
                <text x="208" y="308" > A<title>5794</title> </text>
                <text x="208" y="323" > A<title>5795</title> </text>
                <text x="200" y="334" > A<title>5796</title> </text>
                <text x="187.5" y="336" > C<title>5797</title> </text>
                <text x="175" y="334" > G<title>5798</title> </text>
                <text x="167" y="323" > T<title>5799</title> </text>
                <text x="167" y="308" > T<title>5800</title> </text>
                <text x="175" y="298" > A<title>5801</title> </text>
                <text x="175" y="283" > A<title>5802</title> </text>
                <text x="175" y="268" > G<title>5803</title> </text>
                <text x="175" y="253" > T<title>5804</title> </text>
                <text x="175" y="238" > T<title>5805</title> </text>
                <text x="163" y="228" > A<title>5806</title> </text>
                <text x="152" y="215" > T<title>5807</title> </text>
                <text x="139" y="215" > A<title>5808</title> </text>
                <text x="126" y="215" > C<title>5809</title> </text>
                <text x="113" y="222" > T<title>5810</title> </text>
                <text x="100" y="217" > T<title>5811</title> </text>
                <text x="93" y="203.5" > T<title>5812</title> </text>
                <text x="100" y="190" > T<title>5813</title> </text>
                <text x="113" y="185" > A<title>5814</title> </text>
                <text x="126" y="192" > G<title>5815</title> </text>
                <text x="139" y="192" > T<title>5816</title> </text>
                <text x="152" y="192" > G<title>5817</title> </text>
                <text x="163" y="183" > G<title>5818</title> </text>
                <text x="173" y="173" > A<title>5819</title> </text>
                <text x="180" y="160" > G<title>5820</title> </text>
                <text x="180" y="145" > C<title>5821</title> </text>
                <text x="180" y="130" > C<title>5822</title> </text>
                <text x="180" y="115" > T<title>5823</title> </text>
                <text x="180" y="100" > C<title>5824</title> </text>
                <text x="180" y="85" > G<title>5825</title> </text>
                <text x="180" y="70" > A<title>5826</title> </text>
                <line x1="190" y1="67" x2="203" y2="67" ><title>190,67 203,67</title> </line>
                <line x1="190" y1="82" x2="203" y2="82" ><title>190,82 203,82</title> </line>
                <line x1="190" y1="97" x2="203" y2="97" ><title>190,97 203,97</title> </line>
                <circle cx="196" cy="112" r="2" ><title>196,112</title> </circle>
                <line x1="190" y1="127" x2="203" y2="127" ><title>190,127 203,127</title> </line>
                <line x1="190" y1="142" x2="203" y2="142" ><title>190,142 203,142</title> </line>
                <line x1="190" y1="157" x2="203" y2="157" ><title>190,157 203,157</title> </line>
                <line x1="222" y1="173" x2="222" y2="183" ><title>222,173 222,183</title> </line>
                <line x1="235" y1="173" x2="235" y2="183" ><title>235,173 235,183</title> </line>
                <line x1="248" y1="173" x2="248" y2="183" ><title>248,173 248,183</title> </line>
                <line x1="261" y1="173" x2="261" y2="183" ><title>261,173 261,183</title> </line>
                <line x1="185" y1="235" x2="198" y2="235" ><title>185,235 198,235</title> </line>
                <circle cx="192" cy="250" r="2" ><title>192,250</title> </circle>
                <line x1="185" y1="265" x2="198" y2="265" ><title>185,265 198,265</title> </line>
                <line x1="185" y1="280" x2="198" y2="280" ><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295" ><title>185,295 198,295</title> </line>
                <line x1="130" y1="195" x2="130" y2="205" ><title>130,195 130,205</title> </line>
                <line x1="142" y1="195" x2="142" y2="205" ><title>142,195 142,205</title> </line>
                <circle cx="156" cy="200" r="2" ><title>156,200</title> </circle>
            </svg>

        )
    }
    
}

export default Mttc;