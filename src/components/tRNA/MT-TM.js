import React from 'react';

class Mttm extends React.Component {

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

        return (
            <svg id="svg-container" height="390" width="350" xmlns="http://www.w3.org/2000/svg">

                <text x="205" y="55"> A<title>4469</title> </text>
                <text x="205" y="70"> T<title>4468</title> </text>
                <text x="205" y="85"> C<title>4467</title> </text>
                <text x="205" y="100"> A<title>4466</title> </text>
                <text x="205" y="115"> T<title>4465</title> </text>
                <text x="205" y="130"> G<title>4464</title> </text>
                <text x="205" y="145"> C<title>4463</title> </text>
                <text x="205" y="160"> C<title>4462</title> </text>
                <text x="218" y="170"> C<title>4461</title> </text>
                <text x="231" y="170"> T<title>4460</title> </text>
                <text x="244" y="170"> T<title>4459</title> </text>
                <text x="257" y="170"> C<title>4458</title> </text>
                <text x="270" y="170"> C<title>4457</title> </text>
                <text x="283" y="163"> C<title>4456</title> </text>
                <text x="296" y="163"> A<title>4455</title> </text>
                <text x="308" y="175"> T<title>4454</title> </text>
                <text x="308" y="190"> A<title>4453</title> </text>
                <text x="296" y="200"> T<title>4452</title> </text>
                <text x="283" y="200"> T<title>4451</title> </text>
                <text x="270" y="193"> G<title>4450</title> </text>
                <text x="257" y="193"> G<title>4449</title> </text>
                <text x="244" y="193"> T<title>4448</title> </text>
                <text x="231" y="193"> T<title>4447</title> </text>
                <text x="218" y="193"> G<title>4446</title> </text>
                <text x="220" y="205"> T<title>4445</title> </text>
                <text x="226" y="215"> A<title>4444</title> </text>
                <text x="218" y="225"> A<title>4443</title> </text>
                <text x="206" y="228"> A<title>4442</title> </text>
                <text x="200" y="238"> A<title>4441</title> </text>
                <text x="200" y="253"> G<title>4440</title> </text>
                <text x="200" y="268"> C<title>4439</title> </text>
                <text x="200" y="283"> C<title>4438</title> </text>
                <text x="200" y="298"> C<title>4437</title> </text>
                <text x="208" y="308"> C<title>4436</title> </text>
                <text x="208" y="323"> A<title>4435</title> </text>
                <text x="200" y="334"> T<title>4434</title> </text>
                <text x="187.5" y="336"> A<title>4433</title> </text>
                <text x="175" y="334"> C<title>4432</title> </text>
                <text x="167" y="323"> C<title>4431</title> </text>
                <text x="167" y="308"> C<title>4430</title> </text>
                <text x="175" y="298"> G<title>4429</title> </text>
                <text x="175" y="283"> G<title>4428</title> </text>
                <text x="175" y="268"> G<title>4427</title> </text>
                <text x="175" y="253"> C<title>4426</title> </text>
                <text x="175" y="238"> T<title>4425</title> </text>
                <text x="163" y="228"> A<title>4424</title> </text>
                <text x="152" y="215"> T<title>4423</title> </text>
                <text x="139" y="215"> C<title>4422</title> </text>
                <text x="126" y="215"> G<title>4421</title> </text>
                <text x="113" y="215"> A<title>4420</title> </text>
                <text x="100" y="222"> A<title>4419</title> </text>
                <text x="87" y="217"> T<title>4418</title> </text>
                <text x="80" y="203.5"> A<title>4417</title> </text>
                <text x="87" y="190"> A<title>4416</title> </text>
                <text x="100" y="185"> A<title>4415</title> </text>
                <text x="113" y="192"> T<title>4414</title> </text>
                <text x="126" y="192"> C<title>4413</title> </text>
                <text x="139" y="192"> G<title>4412</title> </text>
                <text x="152" y="192"> A<title>4411</title> </text>
                <text x="163" y="183"> C<title>4410</title> </text>
                <text x="173" y="173"> T<title>4409</title> </text>
                <text x="180" y="160"> G<title>4408</title> </text>
                <text x="180" y="145"> G<title>4407</title> </text>
                <text x="180" y="130"> A<title>4406</title> </text>
                <text x="180" y="115"> A<title>4405</title> </text>
                <text x="180" y="100"> T<title>4404</title> </text>
                <text x="180" y="85"> G<title>4403</title> </text>
                <text x="180" y="70"> A<title>4402</title> </text>
                <line x1="190" y1="67" x2="205" y2="67"><title>190,67 205,67</title> </line>
                <line x1="190" y1="82" x2="205" y2="82"><title>190,82 205,82</title> </line>
                <line x1="190" y1="97" x2="205" y2="97"><title>190,97 205,97</title> </line>
                <line x1="190" y1="112" x2="205" y2="112"><title>190,112 205,112</title> </line>
                <circle cx="196" cy="127" r="2"><title>196,127</title> </circle>
                <line x1="190" y1="142" x2="205" y2="142"><title>190,142 205,142</title> </line>
                <line x1="190" y1="157" x2="205" y2="157"><title>190,157 205,157</title> </line>
                <line x1="222" y1="173" x2="222" y2="183"><title>222,173 222,183</title> </line>
                <circle cx="235" cy="177" r="2"><title>235,177</title> </circle>
                <circle cx="248" cy="177" r="2"><title>248,177</title> </circle>
                <line x1="261" y1="173" x2="261" y2="183"><title>261,173 261,183</title> </line>
                <line x1="274" y1="173" x2="274" y2="183"><title>274,173 274,183</title> </line>
                <line x1="185" y1="235" x2="198" y2="235"><title>185,235 198,235</title> </line>
                <line x1="185" y1="250" x2="198" y2="250"><title>185,250 198,250</title> </line>
                <line x1="185" y1="265" x2="198" y2="265"><title>185,265 198,265</title> </line>
                <line x1="185" y1="280" x2="198" y2="280"><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295"><title>185,295 198,295</title> </line>
                <line x1="117" y1="195" x2="117" y2="205"><title>117,195 117,205</title> </line>
                <line x1="130" y1="195" x2="130" y2="205"><title>130,195 130,205</title> </line>
                <line x1="142" y1="195" x2="142" y2="205"><title>142,195 142,205</title> </line>
                <line x1="156" y1="195" x2="156" y2="205"><title>156,195 156,205</title> </line>
            </svg>

        )
    }

}

export default Mttm;