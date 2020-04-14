import React from 'react';

class Mttk extends React.Component{
    
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
                
                <text x="205" y="55"> A<title>8364</title> </text>
                <text x="205" y="70"> G<title>8363</title> </text>
                <text x="205" y="85"> T<title>8362</title> </text>
                <text x="205" y="100"> G<title>8361</title> </text>
                <text x="205" y="115"> A<title>8360</title> </text>
                <text x="205" y="130"> C<title>8359</title> </text>
                <text x="205" y="145"> A<title>8358</title> </text>
                <text x="205" y="160"> T<title>8357</title> </text>
                <text x="218" y="170"> T<title>8356</title> </text>
                <text x="231" y="170"> T<title>8355</title> </text>
                <text x="244" y="170"> C<title>8354</title> </text>
                <text x="257" y="170"> T<title>8353</title> </text>
                <text x="270" y="170"> C<title>8352</title> </text>
                <text x="282" y="160"> C<title>8351</title> </text>
                <text x="294" y="157"> A<title>8350</title> </text>
                <text x="306" y="160"> C<title>8349</title> </text>
                <text x="316" y="168"> A<title>8348</title> </text>
                <text x="321" y="181.5"> A<title>8347</title> </text>
                <text x="316" y="195"> C<title>8346</title> </text>
                <text x="306" y="203"> C<title>8345</title> </text>
                <text x="294" y="206"> A<title>8344</title> </text>
                <text x="282" y="203"> A<title>8343</title> </text>
                <text x="270" y="193"> G<title>8342</title> </text>
                <text x="257" y="193"> A<title>8341</title> </text>
                <text x="244" y="193"> G<title>8340</title> </text>
                <text x="231" y="193"> A<title>8339</title> </text>
                <text x="218" y="193"> A<title>8338</title> </text>
                <text x="220" y="205"> T<title>8337</title> </text>
                <text x="228" y="214"> T<title>8336</title> </text>
                <text x="228" y="225"> A<title>8335</title> </text>
                <text x="218" y="230"> G<title>8334</title> </text>
                <text x="206" y="228"> A<title>8333</title> </text>
                <text x="200" y="238"> A<title>8332</title> </text>
                <text x="200" y="253"> A<title>8331</title> </text>
                <text x="200" y="268"> T<title>8330</title> </text>
                <text x="200" y="283"> T<title>8329</title> </text>
                <text x="200" y="298"> G<title>8328</title> </text>
                <text x="208" y="308"> A<title>8327</title> </text>
                <text x="208" y="323"> A<title>8326</title> </text>
                <text x="200" y="334"> T<title>8325</title> </text>
                <text x="187.5" y="336"> T<title>8324</title> </text>
                <text x="175" y="334"> T<title>8323</title> </text>
                <text x="167" y="323"> T<title>8322</title> </text>
                <text x="167" y="308"> C<title>8321</title> </text>
                <text x="175" y="298"> C<title>8320</title> </text>
                <text x="175" y="283"> A<title>8319</title> </text>
                <text x="175" y="268"> A<title>8318</title> </text>
                <text x="175" y="253"> T<title>8317</title> </text>
                <text x="175" y="238"> T<title>8316</title> </text>
                <text x="163" y="228"> A<title>8315</title> </text>
                <text x="152" y="215"> C<title>8314</title> </text>
                <text x="139" y="215"> G<title>8313</title> </text>
                <text x="126" y="215"> A<title>8312</title> </text>
                <text x="113" y="215"> T<title>8311</title> </text>
                <text x="100" y="222"> T<title>8310</title> </text>
                <text x="90" y="203.5"> C<title>8309</title> </text>
                <text x="100" y="185"> A<title>8308</title> </text>
                <text x="113" y="192"> A<title>8307</title> </text>
                <text x="126" y="192"> T<title>8306</title> </text>
                <text x="139" y="192"> C<title>8305</title> </text>
                <text x="152" y="192"> G<title>8304</title> </text>
                <text x="163" y="183"> A<title>8303</title> </text>
                <text x="173" y="173"> A<title>8302</title> </text>
                <text x="180" y="160"> A<title>8301</title> </text>
                <text x="180" y="145"> T<title>8300</title> </text>
                <text x="180" y="130"> G<title>8299</title> </text>
                <text x="180" y="115"> T<title>8298</title> </text>
                <text x="180" y="100"> C<title>8297</title> </text>
                <text x="180" y="85"> A<title>8296</title> </text>
                <text x="180" y="70"> C<title>8295</title> </text>
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
                <line x1="261" y1="173" x2="261" y2="183"><title>261,173 261,183</title> </line>
                <line x1="274" y1="173" x2="274" y2="183"><title>274,173 274,183</title> </line>
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

export default Mttk;