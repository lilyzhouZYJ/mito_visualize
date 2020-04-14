import React from 'react';

class Mttn extends React.Component{
    
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
                
                <text x="205" y="55"> G<title>5657</title> </text>
                <text x="205" y="70"> A<title>5658</title> </text>
                <text x="205" y="85"> T<title>5659</title> </text>
                <text x="205" y="100"> C<title>5660</title> </text>
                <text x="205" y="115"> T<title>5661</title> </text>
                <text x="205" y="130"> G<title>5662</title> </text>
                <text x="205" y="145"> G<title>5663</title> </text>
                <text x="205" y="160"> T<title>5664</title> </text>
                <text x="218" y="170"> T<title>5665</title> </text>
                <text x="231" y="170"> A<title>5666</title> </text>
                <text x="244" y="170"> C<title>5667</title> </text>
                <text x="257" y="170"> C<title>5668</title> </text>
                <text x="270" y="170"> C<title>5669</title> </text>
                <text x="282" y="163"> T<title>5670</title> </text>
                <text x="294" y="160"> G<title>5671</title> </text>
                <text x="306" y="168"> A<title>5672</title> </text>
                <text x="312" y="181.5"> A<title>5673</title> </text>
                <text x="306" y="195"> T<title>5674</title> </text>
                <text x="294" y="203"> T<title>5675</title> </text>
                <text x="282" y="200"> T<title>5676</title> </text>
                <text x="270" y="193"> G<title>5677</title> </text>
                <text x="257" y="193"> G<title>5678</title> </text>
                <text x="244" y="193"> G<title>5679</title> </text>
                <text x="231" y="193"> T<title>5680</title> </text>
                <text x="218" y="193"> G<title>5681</title> </text>
                <text x="220" y="204"> T<title>5682</title> </text>
                <text x="226" y="210"> T<title>5683</title> </text>
                <text x="223" y="220"> T<title>5684</title> </text>
                <text x="215" y="225"> G<title>5685</title> </text>
                <text x="206" y="228"> T<title>5686</title> </text>
                <text x="200" y="238"> G<title>5687</title> </text>
                <text x="200" y="253"> A<title>5688</title> </text>
                <text x="200" y="268"> A<title>5689</title> </text>
                <text x="200" y="283"> T<title>5690</title> </text>
                <text x="200" y="298"> C<title>5691</title> </text>
                <text x="208" y="308"> A<title>5692</title> </text>
                <text x="208" y="323"> A<title>5693</title> </text>
                <text x="200" y="334"> T<title>5694</title> </text>
                <text x="187.5" y="336"> T<title>5695</title> </text>
                <text x="175" y="334"> G<title>5696</title> </text>
                <text x="167" y="323"> T<title>5697</title> </text>
                <text x="167" y="308"> C<title>5698</title> </text>
                <text x="175" y="298"> G<title>5699</title> </text>
                <text x="175" y="283"> A<title>5700</title> </text>
                <text x="175" y="268"> T<title>5701</title> </text>
                <text x="175" y="253"> T<title>5702</title> </text>
                <text x="175" y="238"> C<title>5703</title> </text>
                <text x="163" y="228"> G<title>5704</title> </text>
                <text x="152" y="215"> T<title>5705</title> </text>
                <text x="139" y="215"> G<title>5706</title> </text>
                <text x="126" y="215"> G<title>5707</title> </text>
                <text x="117" y="224"> G<title>5708</title> </text>
                <text x="105" y="230"> A<title>5709</title> </text>
                <text x="94" y="230"> T<title>5710</title> </text>
                <text x="82" y="222.5"> T<title>5711</title> </text>
                <text x="76" y="208.5"> A<title>5712</title> </text>
                <text x="76" y="196"> G<title>5713</title> </text>
                <text x="82" y="184.5"> T<title>5714</title> </text>
                <text x="94" y="177"> T<title>5715</title> </text>
                <text x="105" y="177"> G<title>5716</title> </text>
                <text x="117" y="183"> A<title>5717</title> </text>
                <text x="126" y="192"> C<title>5718</title> </text>
                <text x="139" y="192"> C<title>5719</title> </text>
                <text x="152" y="192"> G<title>5720</title> </text>
                <text x="163" y="183"> A<title>5721</title> </text>
                <text x="173" y="173"> A<title>5722</title> </text>
                <text x="180" y="160"> G<title>5723</title> </text>
                <text x="180" y="145"> T<title>5724</title> </text>
                <text x="180" y="130"> T<title>5725</title> </text>
                <text x="180" y="115"> A<title>5726</title> </text>
                <text x="180" y="100"> G<title>5727</title> </text>
                <text x="180" y="85"> A<title>5728</title> </text>
                <text x="180" y="70"> T<title>5729</title> </text>
                <line x1="190" y1="67" x2="205" y2="67"><title>190,67 205,67</title> </line>
                <line x1="190" y1="82" x2="205" y2="82"><title>190,82 205,82</title> </line>
                <line x1="190" y1="97" x2="205" y2="97"><title>190,97 205,97</title> </line>
                <line x1="190" y1="112" x2="205" y2="112"><title>190,112 205,112</title> </line><circle cx="196" cy="127" r="2"><title>196,127</title> </circle>
                <circle cx="196" cy="142" r="2"><title>196,142</title> </circle>
                <circle cx="196" cy="157" r="2"><title>196,157</title> </circle>
                <circle cx="222" cy="177" r="2"><title>222,177</title> </circle>
                <line x1="235" y1="173" x2="235" y2="183"><title>235,173 235,183</title> </line>
                <line x1="248" y1="173" x2="248" y2="183"><title>248,173 248,183</title> </line>
                <line x1="261" y1="173" x2="261" y2="183"><title>261,173 261,183</title> </line>
                <line x1="274" y1="173" x2="274" y2="183"><title>274,173 274,183</title> </line>
                <line x1="185" y1="235" x2="198" y2="235"><title>185,235 198,235</title> </line>
                <line x1="185" y1="250" x2="198" y2="250"><title>185,250 198,250</title> </line>
                <line x1="185" y1="265" x2="198" y2="265"><title>185,265 198,265</title> </line>
                <line x1="185" y1="280" x2="198" y2="280"><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295"><title>185,295 198,295</title> </line>
                <line x1="130" y1="195" x2="130" y2="205"><title>130,195 130,205</title> </line>
                <line x1="142" y1="195" x2="142" y2="205"><title>142,195 142,205</title> </line>
                <circle cx="156" cy="200" r="2"><title>156,200</title> </circle>
            </svg>

        )
    }
    
}

export default Mttn;