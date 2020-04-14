import React from 'react';

class Mttw extends React.Component{
    
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
                
                <text x="205" y="55"> G<title>5579</title> </text>
                <text x="205" y="70"> T<title>5578</title> </text>
                <text x="205" y="85"> C<title>5577</title> </text>
                <text x="205" y="100"> T<title>5576</title> </text>
                <text x="205" y="115"> T<title>5575</title> </text>
                <text x="205" y="130"> T<title>5574</title> </text>
                <text x="205" y="145"> A<title>5573</title> </text>
                <text x="205" y="160"> A<title>5572</title> </text>
                <text x="218" y="170"> T<title>5571</title> </text>
                <text x="231" y="170"> T<title>5570</title> </text>
                <text x="244" y="170"> C<title>5569</title> </text>
                <text x="256" y="163"> A<title>5568</title> </text>
                <text x="268" y="160"> T<title>5567</title> </text>
                <text x="280" y="163"> A<title>5566</title> </text>
                <text x="289" y="174"> A<title>5565</title> </text>
                <text x="289" y="189"> C<title>5564</title> </text>
                <text x="280" y="200"> G<title>5563</title> </text>
                <text x="268" y="203"> T<title>5562</title> </text>
                <text x="256" y="200"> T<title>5561</title> </text>
                <text x="244" y="193"> G<title>5560</title> </text>
                <text x="231" y="193"> A<title>5559</title> </text>
                <text x="218" y="193"> A<title>5558</title> </text>
                <text x="220" y="205"> T<title>5557</title> </text>
                <text x="226" y="215"> G<title>5556</title> </text>
                <text x="218" y="225"> A<title>5555</title> </text>
                <text x="206" y="228"> C<title>5554</title> </text>
                <text x="200" y="238"> T<title>5553</title> </text>
                <text x="200" y="253"> C<title>5552</title> </text>
                <text x="200" y="268"> C<title>5551</title> </text>
                <text x="200" y="283"> C<title>5550</title> </text>
                <text x="200" y="298"> G<title>5549</title> </text>
                <text x="208" y="308"> A<title>5548</title> </text>
                <text x="208" y="323"> A<title>5547</title> </text>
                <text x="200" y="334"> A<title>5546</title> </text>
                <text x="187.5" y="336"> C<title>5545</title> </text>
                <text x="175" y="334"> T<title>5544</title> </text>
                <text x="167" y="323"> T<title>5543</title> </text>
                <text x="167" y="308"> C<title>5542</title> </text>
                <text x="175" y="298"> C<title>5541</title> </text>
                <text x="175" y="283"> G<title>5540</title> </text>
                <text x="175" y="268"> A<title>5539</title> </text>
                <text x="175" y="253"> G<title>5538</title> </text>
                <text x="175" y="238"> A<title>5537</title> </text>
                <text x="163" y="228"> A<title>5536</title> </text>
                <text x="152" y="215"> C<title>5535</title> </text>
                <text x="139" y="215"> C<title>5534</title> </text>
                <text x="126" y="215"> A<title>5533</title> </text>
                <text x="113" y="215"> G<title>5532</title> </text>
                <text x="101" y="222"> A<title>5531</title> </text>
                <text x="88" y="225"> C<title>5530</title> </text>
                <text x="75" y="219"> A<title>5529</title> </text>
                <text x="67" y="203.5"> T<title>5528</title> </text>
                <text x="75" y="188"> A<title>5527</title> </text>
                <text x="88" y="182"> A<title>5526</title> </text>
                <text x="101" y="185"> A<title>5525</title> </text>
                <text x="113" y="192"> T<title>5524</title> </text>
                <text x="126" y="192"> T<title>5523</title> </text>
                <text x="139" y="192"> G<title>5522</title> </text>
                <text x="152" y="192"> G<title>5521</title> </text>
                <text x="163" y="183"> A<title>5520</title> </text>
                <text x="173" y="173"> T<title>5519</title> </text>
                <text x="180" y="160"> T<title>5518</title> </text>
                <text x="180" y="145"> T<title>5517</title> </text>
                <text x="180" y="130"> A<title>5516</title> </text>
                <text x="180" y="115"> A<title>5515</title> </text>
                <text x="180" y="100"> A<title>5514</title> </text>
                <text x="180" y="85"> G<title>5513</title> </text>
                <text x="180" y="70"> A<title>5512</title> </text>
                <line x1="190" y1="67" x2="203" y2="67"><title>190,67 203,67</title> </line>
                <line x1="190" y1="82" x2="203" y2="82"><title>190,82 203,82</title> </line>
                <line x1="190" y1="97" x2="203" y2="97"><title>190,97 203,97</title> </line>
                <line x1="190" y1="112" x2="203" y2="112"><title>190,112 203,112</title> </line>
                <line x1="190" y1="127" x2="203" y2="127"><title>190,127 203,127</title> </line>
                <line x1="190" y1="142" x2="203" y2="142"><title>190,142 203,142</title> </line>
                <line x1="190" y1="157" x2="203" y2="157"><title>190,157 203,157</title> </line>
                <line x1="222" y1="173" x2="222" y2="183"><title>222,173 222,183</title> </line>
                <line x1="235" y1="173" x2="235" y2="183"><title>235,173 235,183</title> </line>
                <line x1="248" y1="173" x2="248" y2="183"><title>248,173 248,183</title> </line>
                <line x1="185" y1="235" x2="198" y2="235"><title>185,235 198,235</title> </line>
                <line x1="185" y1="250" x2="198" y2="250"><title>185,250 198,250</title> </line>
                <circle cx="192" cy="265" r="2"><title>192,265</title> </circle>
                <line x1="185" y1="280" x2="198" y2="280"><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295"><title>185,295 198,295</title> </line>
                <circle cx="116" cy="200" r="2"><title>116,200</title> </circle>
                <line x1="130" y1="195" x2="130" y2="205"><title>130,195 130,205</title> </line>
                <line x1="142" y1="195" x2="142" y2="205"><title>142,195 142,205</title> </line>
                <line x1="156" y1="195" x2="156" y2="205"><title>156,195 156,205</title> </line>
            </svg>

        )
    }
    
}

export default Mttw;