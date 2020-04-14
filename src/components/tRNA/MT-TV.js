import React from 'react';

class Mttv extends React.Component{
    
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
                
                <text x="205" y="55" >A<title>1670</title> </text>
                <text x="205" y="70" >G<title>1669</title> </text>
                <text x="205" y="85" >T<title>1668</title> </text>
                <text x="205" y="100" >C<title>1667</title> </text>
                <text x="205" y="115" >T<title>1666</title> </text>
                <text x="205" y="130" >C<title>1665</title> </text>
                <text x="205" y="145" >G<title>1664</title> </text>
                <text x="205" y="160" >C<title>1663</title> </text>
                <text x="218" y="170" >C<title>1662</title> </text>
                <text x="231" y="170" >A<title>1661</title> </text>
                <text x="244" y="170" >G<title>1660</title> </text>
                <text x="257" y="170" >T<title>1659</title> </text>
                <text x="270" y="170" >T<title>1658</title> </text>
                <text x="283" y="163" >C<title>1657</title> </text>
                <text x="296" y="163" >A<title>1656</title> </text>
                <text x="308" y="175" >A<title>1655</title> </text>
                <text x="308" y="190" >T<title>1654</title> </text>
                <text x="296" y="200" >T<title>1653</title> </text>
                <text x="283" y="200" >C<title>1652</title> </text>
                <text x="270" y="193" >A<title>1651</title> </text>
                <text x="257" y="193" >A<title>1650</title> </text>
                <text x="244" y="193" >C<title>1649</title> </text>
                <text x="231" y="193" >T<title>1648</title> </text>
                <text x="218" y="193" >T<title>1647</title> </text>
                <text x="220" y="205" >T<title>1646</title> </text>
                <text x="226" y="215" >A<title>1645</title> </text>
                <text x="218" y="225" >G<title>1644</title> </text>
                <text x="206" y="228" >A<title>1643</title> </text>
                <text x="200" y="238" >G<title>1642</title> </text>
                <text x="200" y="253" >G<title>1641</title> </text>
                <text x="200" y="268" >A<title>1640</title> </text>
                <text x="200" y="283" >T<title>1639</title> </text>
                <text x="200" y="298" >T<title>1638</title> </text>
                <text x="208" y="308" >C<title>1637</title> </text>
                <text x="208" y="323" >A<title>1636</title> </text>
                <text x="200" y="334" >C<title>1635</title> </text>
                <text x="187.5" y="336" >A<title>1634</title> </text>
                <text x="175" y="334" >T<title>1633</title> </text>
                <text x="167" y="323" >T<title>1632</title> </text>
                <text x="167" y="308" >C<title>1631</title> </text>
                <text x="175" y="298" >A<title>1630</title> </text>
                <text x="175" y="283" >A<title>1629</title> </text>
                <text x="175" y="268" >C<title>1628</title> </text>
                <text x="175" y="253" >C<title>1627</title> </text>
                <text x="175" y="238" >C<title>1626</title> </text>
                <text x="163" y="228" >A<title>1625</title> </text>
                <text x="152" y="215" >C<title>1624</title> </text>
                <text x="139" y="215" >G<title>1623</title> </text>
                <text x="126" y="215" >A<title>1622</title> </text>
                <text x="113" y="215" >A<title>1621</title> </text>
                <text x="100" y="222" >A<title>1620</title> </text>
                <text x="87" y="222" >C<title>1619</title> </text>
                <text x="74" y="210" >A<title>1618</title> </text>
                <text x="74" y="194.5" >C<title>1617</title> </text>
                <text x="87" y="185" >A<title>1616</title> </text>
                <text x="100" y="185" >A<title>1615</title> </text>
                <text x="113" y="192" >T<title>1614</title> </text>
                <text x="126" y="192" >T<title>1613</title> </text>
                <text x="139" y="192" >C<title>1612</title> </text>
                <text x="152" y="192" >G<title>1611</title> </text>
                <text x="163" y="183" >A<title>1610</title> </text>
                <text x="173" y="173" >T<title>1609</title> </text>
                <text x="180" y="160" >G<title>1608</title> </text>
                <text x="180" y="145" >T<title>1607</title> </text>
                <text x="180" y="130" >G<title>1606</title> </text>
                <text x="180" y="115" >A<title>1605</title> </text>
                <text x="180" y="100" >G<title>1604</title> </text>
                <text x="180" y="85" >A<title>1603</title> </text>
                <text x="180" y="70" >C<title>1602</title> </text>
                <line x1="190" y1="67" x2="205" y2="67" ><title>190,67 205,67</title></line>
                <line x1="190" y1="82" x2="205" y2="82" ><title>190,82 205,82</title> </line>
                <line x1="190" y1="97" x2="205" y2="97" ><title>190,97 205,97</title> </line>
                <line x1="190" y1="112" x2="205" y2="112" ><title>190,112 205,112</title> </line>
                <line x1="190" y1="127" x2="205" y2="127" ><title>190,127 205,127</title> </line>
                <circle cx="196" cy="142" r="2" ><title>196,142</title> </circle>
                <line x1="190" y1="157" x2="205" y2="157" ><title>190,157 205,157</title> </line>
                <circle cx="222" cy="177" r="2" ><title>222,177</title> </circle>
                <line x1="235" y1="173" x2="235" y2="183" ><title>235,173 235,183</title> </line>
                <line x1="248" y1="173" x2="248" y2="183" ><title>248,173 248,183</title> </line>
                <line x1="261" y1="173" x2="261" y2="183" ><title>261,173 261,183</title> </line>
                <line x1="274" y1="173" x2="274" y2="183" ><title>274,173 274,183</title> </line>
                <line x1="185" y1="235" x2="198" y2="235" ><title>185,235 198,235</title> </line>
                <line x1="185" y1="250" x2="198" y2="250" ><title>185,250 198,250</title> </line>
                <circle cx="191" cy="265" r="2" ><title>191,265</title> </circle>
                <line x1="185" y1="280" x2="198" y2="280" ><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295" ><title>185,295 198,295</title> </line>
                <line x1="117" y1="195" x2="117" y2="205" ><title>117,195 117,205</title> </line>
                <line x1="130" y1="195" x2="130" y2="205" ><title>130,195 130,205</title> </line>
                <line x1="142" y1="195" x2="142" y2="205" ><title>142,195 142,205</title> </line>
                <line x1="156" y1="195" x2="156" y2="205" ><title>156,195 156,205</title> </line>
            </svg>

        )
    }
    
}

export default Mttv;