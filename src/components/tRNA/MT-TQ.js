import React from 'react';

class Mttq extends React.Component{
    
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
                
                <text x="205" y="55"> G<title>4329</title> </text>
                <text x="205" y="70"> A<title>4330</title> </text>
                <text x="205" y="85"> T<title>4331</title> </text>
                <text x="205" y="100"> C<title>4332</title> </text>
                <text x="205" y="115"> C<title>4333</title> </text>
                <text x="205" y="130"> T<title>4334</title> </text>
                <text x="205" y="145"> G<title>4335</title> </text>
                <text x="205" y="160"> A<title>4336</title> </text>
                <text x="220" y="170"> T<title>4337</title> </text>
                <text x="233" y="170"> A<title>4338</title> </text>
                <text x="246" y="170"> C<title>4339</title> </text>
                <text x="259" y="170"> T<title>4340</title> </text>
                <text x="272" y="170"> C<title>4341</title> </text>
                <text x="282" y="165"> T<title>4342</title> </text>
                <text x="294" y="162"> T<title>4343</title> </text>
                <text x="306" y="168"> A<title>4344</title> </text>
                <text x="312" y="181.5"> G<title>4345</title> </text>
                <text x="306" y="195"> C<title>4346</title> </text>
                <text x="294" y="201"> T<title>4347</title> </text>
                <text x="282" y="198"> T<title>4348</title> </text>
                <text x="272" y="193"> G<title>4349</title> </text>
                <text x="259" y="193"> G<title>4350</title> </text>
                <text x="246" y="193"> G<title>4351</title> </text>
                <text x="233" y="193"> T<title>4352</title> </text>
                <text x="220" y="193"> A<title>4353</title> </text>
                <text x="220" y="205"> G<title>4354</title> </text>
                <text x="226" y="215"> G<title>4355</title> </text>
                <text x="218" y="225"> G<title>4356</title> </text>
                <text x="206" y="228"> A<title>4357</title> </text>
                <text x="200" y="238"> C<title>4358</title> </text>
                <text x="200" y="253"> T<title>4359</title> </text>
                <text x="200" y="268"> C<title>4360</title> </text>
                <text x="200" y="283"> T<title>4361</title> </text>
                <text x="200" y="298"> T<title>4362</title> </text>
                <text x="208" y="308"> A<title>4363</title> </text>
                <text x="208" y="323"> G<title>4364</title> </text>
                <text x="200" y="334"> G<title>4365</title> </text>
                <text x="187.5" y="336"> T<title>4366</title> </text>
                <text x="175" y="334"> T<title>4367</title> </text>
                <text x="167" y="323"> T<title>4368</title> </text>
                <text x="167" y="308"> T<title>4369</title> </text>
                <text x="175" y="298"> A<title>4370</title> </text>
                <text x="175" y="283"> A<title>4371</title> </text>
                <text x="175" y="268"> G<title>4372</title> </text>
                <text x="175" y="253"> A<title>4373</title> </text>
                <text x="175" y="238"> G<title>4374</title> </text>
                <text x="163" y="228"> G<title>4375</title> </text>
                <text x="152" y="215"> C<title>4376</title> </text>
                <text x="139" y="215"> A<title>4377</title> </text>
                <text x="126" y="215"> C<title>4378</title> </text>
                <text x="113" y="215"> G<title>4379</title> </text>
                <text x="101" y="223"> G<title>4380</title> </text>
                <text x="88" y="228"> T<title>4381</title> </text>
                <text x="75" y="223"> G<title>4382</title> </text>
                <text x="64" y="211"> G<title>4383</title> </text>
                <text x="64" y="196"> A<title>4384</title> </text>
                <text x="75" y="184"> T<title>4385</title> </text>
                <text x="88" y="179"> A<title>4386</title> </text>
                <text x="101" y="184"> G<title>4387</title> </text>
                <text x="113" y="192"> T<title>4388</title> </text>
                <text x="126" y="192"> G<title>4389</title> </text>
                <text x="139" y="192"> T<title>4390</title> </text>
                <text x="152" y="192"> G<title>4391</title> </text>
                <text x="165" y="183"> G<title>4392</title> </text>
                <text x="173" y="173"> G<title>4393</title> </text>
                <text x="180" y="160"> G<title>4394</title> </text>
                <text x="180" y="145"> T<title>4395</title> </text>
                <text x="180" y="130"> A<title>4396</title> </text>
                <text x="180" y="115"> G<title>4397</title> </text>
                <text x="180" y="100"> G<title>4398</title> </text>
                <text x="180" y="85"> A<title>4399</title> </text>
                <text x="180" y="70"> T<title>4400</title> </text>
                <line x1="190" y1="67" x2="205" y2="67"><title>190,67 205,67</title> </line>
                <line x1="190" y1="82" x2="205" y2="82"><title>190,82 205,82</title> </line>
                <line x1="190" y1="97" x2="205" y2="97"><title>190,97 205,97</title> </line>
                <line x1="190" y1="112" x2="205" y2="112"><title>190,112 205,112</title> </line>
                <line x1="190" y1="127" x2="205" y2="127"><title>190,127 205,127</title> </line>
                <circle cx="196" cy="142" r="2"><title>196,142</title> </circle>
                <circle cx="196" cy="157" r="2"><title>196,157</title> </circle>
                <line x1="224" y1="173" x2="224" y2="183"><title>224,173 224,183</title> </line>
                <line x1="237" y1="173" x2="237" y2="183"><title>237,173 237,183</title> </line>
                <line x1="250" y1="173" x2="250" y2="183"><title>250,173 250,183</title> </line>
                <circle cx="263" cy="177" r="2"><title>263,177</title> </circle>
                <line x1="276" y1="173" x2="276" y2="183"><title>276,173 276,183</title> </line>
                <line x1="185" y1="235" x2="198" y2="235"><title>185,235 198,235</title> </line>
                <line x1="185" y1="250" x2="198" y2="250"><title>185,250 198,250</title> </line>
                <line x1="185" y1="265" x2="198" y2="265"><title>185,265 198,265</title> </line>
                <line x1="185" y1="280" x2="198" y2="280"><title>185,280 198,280</title> </line>
                <line x1="185" y1="295" x2="198" y2="295"><title>185,295 198,295</title> </line>
                <circle cx="117" cy="200" r="2"><title>117,200</title> </circle>
                <line x1="130" y1="195" x2="130" y2="205"><title>130,195 130,205</title> </line>
                <line x1="143" y1="195" x2="143" y2="205"><title>143,195 143,205</title> </line>
                <line x1="156" y1="195" x2="156" y2="205"><title>156,195 156,205</title> </line>
            </svg>

        )
    }
    
}

export default Mttq;