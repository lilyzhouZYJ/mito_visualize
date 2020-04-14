import React from 'react';

class Mttf extends React.Component{
    
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
                
                <text x="205" y="10"> A<title></title> </text>
                <text x="205" y="25"> C<title></title> </text>
                <text x="205" y="40"> C<title></title> </text>
                <text x="205" y="55"> A<title>647</title> </text>
                <text x="205" y="70"> C<title>646</title> </text>
                <text x="205" y="85"> A<title>645</title> </text>
                <text x="205" y="100"> A<title>644</title> </text>
                <text x="205" y="115"> A<title>643</title> </text>
                <text x="205" y="130"> T<title>642</title> </text>
                <text x="205" y="145"> A<title>641</title> </text>
                <text x="205" y="160"> C<title>640</title> </text>
                <text x="218" y="170"> C<title>639</title> </text>
                <text x="231" y="170"> C<title>638</title> </text>
                <text x="244" y="170"> C<title>637</title> </text>
                <text x="256" y="160"> A<title>636</title> </text>
                <text x="268" y="157"> C<title>635</title> </text>
                <text x="280" y="160"> T<title>634</title> </text>
                <text x="290" y="168"> A<title>633</title> </text>
                <text x="295" y="181.5"> C<title>632</title> </text>
                <text x="290" y="195"> A<title>631</title> </text>
                <text x="280" y="203"> C<title>630</title> </text>
                <text x="268" y="206"> T<title>629</title> </text>
                <text x="256" y="203"> C<title>628</title> </text>
                <text x="244" y="193"> G<title>627</title> </text>
                <text x="231" y="193"> G<title>626</title> </text>
                <text x="218" y="193"> G<title>625</title> </text>
                <text x="216" y="207"> C<title>624</title> </text>
                <text x="225" y="217"> A<title>623</title> </text>
                <text x="220" y="230"> G<title>622</title> </text>
                <text x="206" y="225"> A<title>621</title> </text>
                <text x="200" y="238"> T<title>620</title> </text>
                <text x="200" y="253"> T<title>619</title> </text>
                <text x="200" y="268"> T<title>618</title> </text>
                <text x="200" y="283"> G<title>617</title> </text>
                <text x="200" y="298"> T<title>616</title> </text>
                <text x="208" y="308"> A<title>615</title> </text>
                <text x="208" y="323"> A<title>614</title> </text>
                <text x="200" y="334"> A<title>613</title> </text>
                <text x="187.5" y="336"> A<title>612</title> </text>
                <text x="175" y="334"> G<title>611</title> </text>
                <text x="167" y="323"> T<title>610</title> </text>
                <text x="167" y="308"> C<title>609</title> </text>
                <text x="175" y="298"> A<title>608</title> </text>
                <text x="175" y="283"> C<title>607</title> </text>
                <text x="175" y="268"> A<title>606</title> </text>
                <text x="175" y="253"> T<title>605</title> </text>
                <text x="175" y="238"> A<title>604</title> </text>
                <text x="163" y="225"> A<title>603</title> </text>
                <text x="152" y="215"> C<title>602</title> </text>
                <text x="139" y="215"> G<title>601</title> </text>
                <text x="126" y="215"> A<title>600</title> </text>
                <text x="113" y="215"> A<title>599</title> </text>
                <text x="103" y="223"> A<title>598</title> </text>
                <text x="91" y="229"> C<title>597</title> </text>
                <text x="79" y="227"> T<title>596</title> </text>
                <text x="68" y="218"> C<title>595</title> </text>
                <text x="62" y="203.5"> C<title>594</title> </text>
                <text x="68" y="189"> T<title>593</title> </text>
                <text x="79" y="180"> C<title>592</title> </text>
                <text x="91" y="178"> C<title>591</title> </text>
                <text x="103" y="184"> A<title>590</title> </text>
                <text x="113" y="192"> T<title>589</title> </text>
                <text x="126" y="192"> T<title>588</title> </text>
                <text x="139" y="192"> C<title>587</title> </text>
                <text x="152" y="192"> G<title>586</title> </text>
                <text x="163" y="183"> A<title>585</title> </text>
                <text x="173" y="173"> T<title>584</title> </text>
                <text x="180" y="160"> G<title>583</title> </text>
                <text x="180" y="145"> T<title>582</title> </text>
                <text x="180" y="130"> A<title>581</title> </text>
                <text x="180" y="115"> T<title>580</title> </text>
                <text x="180" y="100"> T<title>579</title> </text>
                <text x="180" y="85"> T<title>578</title> </text>
                <text x="180" y="70"> G<title>577</title> </text>
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
                <circle cx="192" cy="250" r="2"><title>192,250</title> </circle>
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

export default Mttf;