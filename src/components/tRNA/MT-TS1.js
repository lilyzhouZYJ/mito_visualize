import React from 'react';

class Mtts1 extends React.Component{
    
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
                
                <text x="205" y="55"> G<title>7446</title> </text>
                <text x="205" y="70"> T<title>7447</title> </text>
                <text x="205" y="85"> T<title>7448</title> </text>
                <text x="205" y="100"> T<title>7449</title> </text>
                <text x="205" y="115"> T<title>7450</title> </text>
                <text x="205" y="130"> T<title>7451</title> </text>
                <text x="205" y="145"> T<title>7452</title> </text>
                <text x="205" y="160"> C<title>7453</title> </text>
                <text x="217" y="167"> C<title>7454</title> </text>
                <text x="230" y="167"> T<title>7455</title> </text>
                <text x="243" y="167"> T<title>7456</title> </text>
                <text x="256" y="167"> C<title>7457</title> </text>
                <text x="269" y="167"> C<title>7458</title> </text>
                <text x="279" y="160"> T<title>7459</title> </text>
                <text x="291" y="157"> T<title>7460</title> </text>
                <text x="303" y="165"> A<title>7461</title> </text>
                <text x="309" y="178.5"> G<title>7462</title> </text>
                <text x="303" y="192"> C<title>7463</title> </text>
                <text x="291" y="200"> T<title>7464</title> </text>
                <text x="279" y="197"> T<title>7465</title> </text>
                <text x="269" y="190"> G<title>7466</title> </text>
                <text x="256" y="190"> G<title>7467</title> </text>
                <text x="243" y="190"> G<title>7468</title> </text>
                <text x="230" y="190"> G<title>7469</title> </text>
                <text x="217" y="190"> G<title>7470</title> </text>
                <text x="218" y="201"> G<title>7471</title> </text>
                <text x="213" y="212"> T<title>7472</title> </text>
                <text x="204" y="211"> T<title>7473</title> </text>
                <text x="200" y="223"> T<title>7474</title> </text>
                <text x="200" y="238"> C<title>7475</title> </text>
                <text x="200" y="253"> G<title>7476</title> </text>
                <text x="200" y="268"> A<title>7477</title> </text>
                <text x="200" y="283"> C<title>7478</title> </text>
                <text x="200" y="298"> C<title>7479</title> </text>
                <text x="208" y="308"> A<title>7480</title> </text>
                <text x="208" y="323"> A<title>7481</title> </text>
                <text x="200" y="334"> A<title>7482</title> </text>
                <text x="187.5" y="336"> G<title>7483</title> </text>
                <text x="175" y="334"> T<title>7484</title> </text>
                <text x="167" y="323"> T<title>7485</title> </text>
                <text x="167" y="308"> C<title>7486</title> </text>
                <text x="175" y="298"> G<title>7487</title> </text>
                <text x="175" y="283"> G<title>7488</title> </text>
                <text x="175" y="268"> T<title>7489</title> </text>
                <text x="175" y="253"> T<title>7490</title> </text>
                <text x="175" y="238"> G<title>7491</title> </text>
                <text x="175" y="223"> G<title>7492</title> </text>
                <text x="170" y="211"> G<title>7493</title> </text>
                <text x="162" y="203"> G<title>7494</title> </text>
                <text x="149" y="203"> T<title>7495</title> </text>
                <text x="136" y="203"> A<title>7496</title> </text>
                <text x="123" y="203"> C<title>7497</title> </text>
                <text x="110" y="210"> C<title>7498</title> </text>
                <text x="97" y="205"> G<title>7499</title> </text>
                <text x="90" y="191.5"> G<title>7500</title> </text>
                <text x="97" y="178"> A<title>7501</title> </text>
                <text x="110" y="173"> G<title>7502</title> </text>
                <text x="123" y="180"> G<title>7503</title> </text>
                <text x="136" y="180"> T<title>7504</title> </text>
                <text x="149" y="180"> A<title>7505</title> </text>
                <text x="162" y="180"> C<title>7506</title> </text>
                <text x="173" y="173"> T<title>7507</title> </text>
                <text x="180" y="160"> G<title>7508</title> </text>
                <text x="180" y="145"> A<title>7509</title> </text>
                <text x="180" y="130"> A<title>7510</title> </text>
                <text x="180" y="115"> A<title>7511</title> </text>
                <text x="180" y="100"> A<title>7512</title> </text>
                <text x="180" y="85"> A<title>7513</title> </text>
                <text x="180" y="70"> G<title>7514</title> </text>
                <circle cx="196" cy="67" r="2"><title>196,67</title> </circle>
                <line x1="190" y1="82" x2="203" y2="82" ><title>190,82 203,82</title> </line>
                <line x1="190" y1="97" x2="203" y2="97" ><title>190,97 203,97</title> </line>
                <line x1="190" y1="112" x2="203" y2="112" ><title>190,112 203,112</title> </line>
                <line x1="190" y1="127" x2="203" y2="127" ><title>190,127 203,127</title> </line>
                <line x1="190" y1="142" x2="203" y2="142" ><title>190,142 203,142</title> </line>
                <line x1="190" y1="157" x2="203" y2="157" ><title>190,157 203,157</title> </line>
                <line x1="221" y1="170" x2="221" y2="180" ><title>221,170 221,180</title> </line>
                <circle cx="234" cy="174" r="2"><title>234,174</title> </circle>
                <circle cx="247" cy="174" r="2"><title>247,174</title> </circle>
                <line x1="260" y1="170" x2="260" y2="180" ><title>260,170 260,180</title> </line>
                <line x1="273" y1="170" x2="273" y2="180" ><title>273,170 273,180</title> </line>
                <circle cx="192" cy="220" r="2"><title>192,220</title> </circle>
                <line x1="185" y1="235" x2="198" y2="235" ><title>185,235 198,235</title> </line>
                <circle cx="192" cy="250" r="2"><title>192,250</title> </circle>
                <line x1="185" y1="265" x2="198" y2="265" ><title>185,265 198,265</title> </line>
                <line x1="185" y1="280" x2="198" y2="280" ><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295" ><title>185,295 198,295</title> </line>
                <line x1="127" y1="183" x2="127" y2="193" ><title>127,183 127,193</title> </line>
                <line x1="140" y1="183" x2="140" y2="193" ><title>140,183 140,193</title> </line>
                <line x1="153" y1="183" x2="153" y2="193" ><title>153,183 153,193</title> </line>
                <line x1="166" y1="183" x2="166" y2="193" ><title>166,183 166,193</title> </line>
            </svg>

        )
    }
    
}

export default Mtts1;