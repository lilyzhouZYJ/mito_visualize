import React from 'react';

class Mttg extends React.Component{
    
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
                
                <text x="205" y="55"> A<title>10058</title> </text>
                <text x="205" y="70"> T<title>10057</title> </text>
                <text x="205" y="85"> G<title>10056</title> </text>
                <text x="205" y="100"> A<title>10055</title> </text>
                <text x="205" y="115"> G<title>10054</title> </text>
                <text x="205" y="130"> A<title>10053</title> </text>
                <text x="205" y="145"> A<title>10052</title> </text>
                <text x="205" y="160"> A<title>10051</title> </text>
                <text x="220" y="170"> A<title>10050</title> </text>
                <text x="233" y="170"> A<title>10049</title> </text>
                <text x="246" y="170"> A<title>10048</title> </text>
                <text x="259" y="170"> C<title>10047</title> </text>
                <text x="272" y="170"> T<title>10046</title> </text>
                <text x="283" y="163"> T<title>10045</title> </text>
                <text x="296" y="163"> A<title>10044</title> </text>
                <text x="308" y="175"> C<title>10043</title> </text>
                <text x="308" y="190"> A<title>10042</title> </text>
                <text x="296" y="200"> A<title>10041</title> </text>
                <text x="283" y="200"> C<title>10040</title> </text>
                <text x="272" y="193"> A<title>10039</title> </text>
                <text x="259" y="193"> G<title>10038</title> </text>
                <text x="246" y="193"> T<title>10037</title> </text>
                <text x="233" y="193"> T<title>10036</title> </text>
                <text x="220" y="193"> T<title>10035</title> </text>
                <text x="220" y="205"> T<title>10034</title> </text>
                <text x="226" y="215"> G<title>10033</title> </text>
                <text x="218" y="225"> A<title>10032</title> </text>
                <text x="206" y="228"> T<title>10031</title> </text>
                <text x="200" y="238"> C<title>10030</title> </text>
                <text x="200" y="253"> A<title>10029</title> </text>
                <text x="200" y="268"> A<title>10028</title> </text>
                <text x="200" y="283"> T<title>10027</title> </text>
                <text x="200" y="298"> T<title>10026</title> </text>
                <text x="208" y="308"> A<title>10025</title> </text>
                <text x="208" y="323"> A<title>10024</title> </text>
                <text x="200" y="334"> C<title>10023</title> </text>
                <text x="187.5" y="336"> C<title>10022</title> </text>
                <text x="175" y="334"> T<title>10021</title> </text>
                <text x="167" y="323"> T<title>10020</title> </text>
                <text x="167" y="308"> C<title>10019</title> </text>
                <text x="175" y="298"> A<title>10018</title> </text>
                <text x="175" y="283"> A<title>10017</title> </text>
                <text x="175" y="268"> T<title>10016</title> </text>
                <text x="175" y="253"> T<title>10015</title> </text>
                <text x="175" y="238"> G<title>10014</title> </text>
                <text x="163" y="228"> C<title>10013</title> </text>
                <text x="152" y="215"> C<title>10012</title> </text>
                <text x="139" y="215"> A<title>10011</title> </text>
                <text x="126" y="215"> T<title>10010</title> </text>
                <text x="113" y="215"> G<title>10009</title> </text>
                <text x="100" y="222"> A<title>10008</title> </text>
                <text x="87" y="217"> T<title>10007</title> </text>
                <text x="80" y="203.5"> A<title>10006</title> </text>
                <text x="87" y="190"> A<title>10005</title> </text>
                <text x="100" y="185"> A<title>10004</title> </text>
                <text x="113" y="192"> T<title>10003</title> </text>
                <text x="126" y="192"> A<title>10002</title> </text>
                <text x="139" y="192"> T<title>10001</title> </text>
                <text x="152" y="192"> G<title>10000</title> </text>
                <text x="165" y="183"> A<title>9999</title> </text>
                <text x="173" y="173"> T<title>9998</title> </text>
                <text x="180" y="160"> T<title>9997</title> </text>
                <text x="180" y="145"> T<title>9996</title> </text>
                <text x="180" y="130"> T<title>9995</title> </text>
                <text x="180" y="115"> C<title>9994</title> </text>
                <text x="180" y="100"> T<title>9993</title> </text>
                <text x="180" y="85"> C<title>9992</title> </text>
                <text x="180" y="70"> A<title>9991</title> </text>
                <line x1="190" y1="67" x2="203" y2="67"><title>190,67 203,67</title> </line>
                <line x1="190" y1="82" x2="203" y2="82"><title>190,82 203,82</title> </line>
                <line x1="190" y1="97" x2="203" y2="97"><title>190,97 203,97</title> </line>
                <line x1="190" y1="112" x2="203" y2="112"><title>190,112 203,112</title> </line>
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
                <line x1="130" y1="195" x2="130" y2="205"><title>130,195 130,205</title> </line>
                <line x1="143" y1="195" x2="143" y2="205"><title>143,195 143,205</title> </line>
                <line x1="156" y1="195" x2="156" y2="205"><title>156,195 156,205</title> </line>
            </svg>

        )
    }
    
}

export default Mttg;