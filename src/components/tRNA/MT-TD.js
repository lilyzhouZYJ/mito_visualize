import React from 'react';

class Mttd extends React.Component{
    
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
                
                <text x="205" y="55" >A<title>7585</title> </text>
                <text x="205" y="70" >T<title>7584</title> </text>
                <text x="205" y="85" >T<title>7583</title> </text>
                <text x="205" y="100" >C<title>7582</title> </text>
                <text x="205" y="115" >T<title>7581</title> </text>
                <text x="205" y="130" >A<title>7580</title> </text>
                <text x="205" y="145" >T<title>7579</title> </text>
                <text x="205" y="160" >A<title>7578</title> </text>
                <text x="220" y="170" >T<title>7577</title> </text>
                <text x="233" y="170" >A<title>7576</title> </text>
                <text x="246" y="170" >T<title>7575</title> </text>
                <text x="259" y="170" >C<title>7574</title> </text>
                <text x="272" y="170" >C<title>7573</title> </text>
                <text x="283" y="163" >T<title>7572</title> </text>
                <text x="296" y="163" >A<title>7571</title> </text>
                <text x="308" y="175" >A<title>7570</title> </text>
                <text x="308" y="190" >A<title>7569</title> </text>
                <text x="296" y="200" >T<title>7568</title> </text>
                <text x="283" y="200" >C<title>7567</title> </text>
                <text x="272" y="193" >G<title>7566</title> </text>
                <text x="259" y="193" >G<title>7565</title> </text>
                <text x="246" y="193" >A<title>7564</title> </text>
                <text x="233" y="193" >T<title>7563</title> </text>
                <text x="220" y="193" >A<title>7562</title> </text>
                <text x="220" y="205" >T<title>7561</title> </text>
                <text x="226" y="215" >T<title>7560</title> </text>
                <text x="218" y="225" >A<title>7559</title> </text>
                <text x="206" y="228" >A<title>7558</title> </text>
                <text x="200" y="238" >A<title>7557</title> </text>
                <text x="200" y="253" >T<title>7556</title> </text>
                <text x="200" y="268" >T<title>7555</title> </text>
                <text x="200" y="283" >G<title>7554</title> </text>
                <text x="200" y="298" >A<title>7553</title> </text>
                <text x="208" y="308" >A<title>7552</title> </text>
                <text x="208" y="323" >A<title>7551</title> </text>
                <text x="200" y="334" >C<title>7550</title> </text>
                <text x="187.5" y="336" >T<title>7549</title> </text>
                <text x="175" y="334" >G<title>7548</title> </text>
                <text x="167" y="323" >T<title>7547</title> </text>
                <text x="167" y="308" >T<title>7546</title> </text>
                <text x="175" y="298" >T<title>7545</title> </text>
                <text x="175" y="283" >C<title>7544</title> </text>
                <text x="175" y="268" >A<title>7543</title> </text>
                <text x="175" y="253" >A<title>7542</title> </text>
                <text x="175" y="238" >T<title>7541</title> </text>
                <text x="163" y="228" >A<title>7540</title> </text>
                <text x="152" y="215" >C<title>7539</title> </text>
                <text x="139" y="215" >T<title>7538</title> </text>
                <text x="126" y="215" >T<title>7537</title> </text>
                <text x="113" y="215" >T<title>7536</title> </text>
                <text x="100" y="222" >A<title>7535</title> </text>
                <text x="87" y="217" >C<title>7534</title> </text>
                <text x="80" y="203.5" >C<title>7533</title> </text>
                <text x="87" y="190" >A<title>7532</title> </text>
                <text x="100" y="185" >A<title>7531</title> </text>
                <text x="113" y="192" >A<title>7530</title> </text>
                <text x="126" y="192" >A<title>7529</title> </text>
                <text x="139" y="192" >A<title>7528</title> </text>
                <text x="152" y="192" >G<title>7527</title> </text>
                <text x="165" y="183" >A<title>7526</title> </text>
                <text x="173" y="173" >T<title>7525</title> </text>
                <text x="180" y="160" >T<title>7524</title> </text>
                <text x="180" y="145" >A<title>7523</title> </text>
                <text x="180" y="130" >T<title>7522</title> </text>
                <text x="180" y="115" >G<title>7521</title> </text>
                <text x="180" y="100" >G<title>7520</title> </text>
                <text x="180" y="85" >A<title>7519</title> </text>
                <text x="180" y="70" >A<title>7518</title> </text>
                <line x1="190" y1="67" x2="203" y2="67"><title>190,67 203,67</title> </line>
                <line x1="190" y1="82" x2="203" y2="82"><title>190,82 203,82</title> </line>
                <line x1="190" y1="97" x2="203" y2="97"><title>190,97 203,97</title> </line>
                <circle cx="196" cy="112" r="2"><title>196,112</title> </circle>
                <line x1="190" y1="127" x2="203" y2="127"><title>190,127 203,127</title> </line>
                <line x1="190" y1="142" x2="203" y2="142"><title>190,142 203,142</title> </line>
                <line x1="190" y1="157" x2="203" y2="157"><title>190,157 203,157</title> </line>
                <line x1="224" y1="173" x2="224" y2="183"><title>224,173 224,183</title> </line>
                <line x1="237" y1="173" x2="237" y2="183"><title>237,173 237,183</title> </line>
                <line x1="250" y1="173" x2="250" y2="183"><title>250,173 250,183</title> </line>
                <line x1="263" y1="173" x2="263" y2="183"><title>263,173 263,183</title> </line>
                <line x1="276" y1="173" x2="276" y2="183"><title>276,173 276,183</title> </line>
                <line x1="185" y1="235" x2="198" y2="235"><title>185,235 198,235</title> </line>
                <line x1="185" y1="250" x2="198" y2="250"><title>185,250 198,250</title> </line>
                <line x1="185" y1="265" x2="198" y2="265"><title>185,265 198,265</title> </line>
                <line x1="185" y1="280" x2="198" y2="280"><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295"><title>185,295 198,295</title> </line>
                <line x1="117" y1="195" x2="117" y2="205"><title>117,195 117,205</title> </line>
                <line x1="130" y1="195" x2="130" y2="205"><title>130,195 130,205</title> </line>
                <line x1="143" y1="195" x2="143" y2="205"><title>143,195 143,205</title> </line>
                <line x1="156" y1="195" x2="156" y2="205"><title>156,195 156,205</title> </line>
            </svg>

        )
    }
    
}

export default Mttd;