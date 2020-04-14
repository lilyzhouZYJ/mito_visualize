import React from 'react';

class Mttl1 extends React.Component{
    
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
                
                <text x="205" y="55"> A<title>3304</title> </text>
                <text x="205" y="70"> C<title>3303</title> </text>
                <text x="205" y="85"> A<title>3302</title> </text>
                <text x="205" y="100"> A<title>3301</title> </text>
                <text x="205" y="115"> T<title>3300</title> </text>
                <text x="205" y="130"> T<title>3299</title> </text>
                <text x="205" y="145"> C<title>3298</title> </text>
                <text x="205" y="160"> T<title>3297</title> </text>
                <text x="218" y="170"> T<title>3296</title> </text>
                <text x="231" y="170"> C<title>3295</title> </text>
                <text x="244" y="170"> T<title>3294</title> </text>
                <text x="257" y="170"> C<title>3293</title> </text>
                <text x="270" y="170"> C<title>3292</title> </text>
                <text x="282" y="163"> T<title>3291</title> </text>
                <text x="294" y="160"> T<title>3290</title> </text>
                <text x="306" y="168"> A<title>3289</title> </text>
                <text x="312" y="181.5"> A<title>3288</title> </text>
                <text x="306" y="195"> C<title>3287</title> </text>
                <text x="294" y="203"> T<title>3286</title> </text>
                <text x="282" y="200"> T<title>3285</title> </text>
                <text x="270" y="193"> G<title>3284</title> </text>
                <text x="257" y="193"> G<title>3283</title> </text>
                <text x="244" y="193"> A<title>3282</title> </text>
                <text x="231" y="193"> G<title>3281</title> </text>
                <text x="218" y="193"> A<title>3280</title> </text>
                <text x="220" y="205"> C<title>3279</title> </text>
                <text x="228" y="214"> T<title>3278</title> </text>
                <text x="230" y="225"> G<title>3277</title> </text>
                <text x="220" y="230"> A<title>3276</title> </text>
                <text x="210" y="228"> C<title>3275</title> </text>
                <text x="200" y="238"> A<title>3274</title> </text>
                <text x="200" y="253"> T<title>3273</title> </text>
                <text x="200" y="268"> T<title>3272</title> </text>
                <text x="200" y="283"> T<title>3271</title> </text>
                <text x="200" y="298"> C<title>3270</title> </text>
                <text x="208" y="308"> A<title>3269</title> </text>
                <text x="208" y="323"> A<title>3268</title> </text>
                <text x="200" y="334"> A<title>3267</title> </text>
                <text x="187.5" y="336"> A<title>3266</title> </text>
                <text x="175" y="334"> T<title>3265</title> </text>
                <text x="167" y="323"> T<title>3264</title> </text>
                <text x="167" y="308"> C<title>3263</title> </text>
                <text x="175" y="298"> A<title>3262</title> </text>
                <text x="175" y="283"> A<title>3261</title> </text>
                <text x="175" y="268"> A<title>3260</title> </text>
                <text x="175" y="253"> A<title>3259</title> </text>
                <text x="175" y="238"> T<title>3258</title> </text>
                <text x="163" y="228"> A<title>3257</title> </text>
                <text x="152" y="215"> C<title>3256</title> </text>
                <text x="139" y="215"> G<title>3255</title> </text>
                <text x="126" y="215"> C<title>3254</title> </text>
                <text x="113" y="215"> T<title>3253</title> </text>
                <text x="104" y="224"> A<title>3252</title> </text>
                <text x="92" y="230"> A<title>3251</title> </text>
                <text x="81" y="230"> T<title>3250</title> </text>
                <text x="69" y="222.5"> G<title>3249</title> </text>
                <text x="63" y="208.5"> G<title>3248</title> </text>
                <text x="63" y="196"> C<title>3247</title> </text>
                <text x="69" y="184.5"> C<title>3246</title> </text>
                <text x="81" y="177"> C<title>3245</title> </text>
                <text x="92" y="177"> G<title>3244</title> </text>
                <text x="104" y="183"> A<title>3243</title> </text>
                <text x="113" y="192"> G<title>3242</title> </text>
                <text x="126" y="192"> A<title>3241</title> </text>
                <text x="139" y="192"> C<title>3240</title> </text>
                <text x="152" y="192"> G<title>3239</title> </text>
                <text x="163" y="183"> G<title>3238</title> </text>
                <text x="173" y="173"> T<title>3237</title> </text>
                <text x="180" y="160"> A<title>3236</title> </text>
                <text x="180" y="145"> G<title>3235</title> </text>
                <text x="180" y="130"> A<title>3234</title> </text>
                <text x="180" y="115"> A<title>3233</title> </text>
                <text x="180" y="100"> T<title>3232</title> </text>
                <text x="180" y="85"> T<title>3231</title> </text>
                <text x="180" y="70"> G<title>3230</title> </text>
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
                <circle cx="192" cy="295" r="2"><title>192,295</title> </circle>
                <circle cx="118" cy="200" r="2"><title>118,200</title> </circle>
                <circle cx="130" cy="200" r="2"><title>130,200</title> </circle>
                <line x1="142" y1="195" x2="142" y2="205"><title>142,195 142,205</title> </line>
                <line x1="154" y1="195" x2="154" y2="205"><title>154,195 154,205</title> </line>
            </svg>

        )
    }
    
}

export default Mttl1;