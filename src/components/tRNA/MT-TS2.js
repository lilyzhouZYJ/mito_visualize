import React from 'react';

class Mtts2 extends React.Component{
    
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
                
                <text x="205" y="55"> A<title>12265</title> </text>
                <text x="205" y="70"> C<title>12264</title> </text>
                <text x="205" y="85"> T<title>12263</title> </text>
                <text x="205" y="100"> C<title>12262</title> </text>
                <text x="205" y="115"> T<title>12261</title> </text>
                <text x="205" y="130"> T<title>12260</title> </text>
                <text x="205" y="145"> T<title>12259</title> </text>
                <text x="205" y="160"> C<title>12258</title> </text>
                <text x="218" y="170"> G<title>12257</title> </text>
                <text x="231" y="170"> G<title>12256</title> </text>
                <text x="244" y="170"> T<title>12255</title> </text>
                <text x="257" y="170"> A<title>12254</title> </text>
                <text x="270" y="170"> C<title>12253</title> </text>
                <text x="282" y="163"> A<title>12252</title> </text>
                <text x="294" y="160"> A<title>12251</title> </text>
                <text x="306" y="163"> C<title>12250</title> </text>
                <text x="315" y="174"> A<title>12249</title> </text>
                <text x="315" y="189"> A<title>12248</title> </text>
                <text x="306" y="200"> T<title>12247</title> </text>
                <text x="294" y="203"> C<title>12246</title> </text>
                <text x="282" y="200"> T<title>12245</title> </text>
                <text x="270" y="193"> G<title>12244</title> </text>
                <text x="257" y="193"> T<title>12243</title> </text>
                <text x="244" y="193"> A<title>12242</title> </text>
                <text x="231" y="193"> C<title>12241</title> </text>
                <text x="218" y="193"> C<title>12240</title> </text>
                <text x="217" y="204"> C<title>12239</title> </text>
                <text x="215" y="216"> C<title>12238</title> </text>
                <text x="206" y="221"> C<title>12237</title> </text>
                <text x="200" y="233"> G<title>12236</title> </text>
                <text x="200" y="248"> T<title>12235</title> </text>
                <text x="200" y="263"> A<title>12234</title> </text>
                <text x="200" y="278"> C<title>12233</title> </text>
                <text x="200" y="293"> T<title>12232</title> </text>
                <text x="200" y="308"> C<title>12231</title> </text>
                <text x="208" y="318"> A<title>12230</title> </text>
                <text x="208" y="333"> A<title>12229</title> </text>
                <text x="200" y="344"> T<title>12228</title> </text>
                <text x="187.5" y="346"> C<title>12227</title> </text>
                <text x="175" y="344"> G<title>12226</title> </text>
                <text x="167" y="333"> T<title>12225</title> </text>
                <text x="167" y="318"> C<title>12224</title> </text>
                <text x="175" y="308"> A<title>12223</title> </text>
                <text x="175" y="293"> A<title>12222</title> </text>
                <text x="175" y="278"> G<title>12221</title> </text>
                <text x="175" y="263"> A<title>12220</title> </text>
                <text x="175" y="248"> A<title>12219</title> </text>
                <text x="175" y="233"> C<title>12218</title> </text>
                <text x="168" y="221"> A<title>12217</title> </text>
                <text x="160" y="205"> C<title>12216</title> </text>
                <text x="163" y="188"> T<title>12215</title> </text>
                <text x="171" y="173"> C<title>12214</title> </text>
                <text x="180" y="160"> G<title>12213</title> </text>
                <text x="180" y="145"> A<title>12212</title> </text>
                <text x="180" y="130"> A<title>12211</title> </text>
                <text x="180" y="115"> A<title>12210</title> </text>
                <text x="180" y="100"> G<title>12209</title> </text>
                <text x="180" y="85"> A<title>12208</title> </text>
                <text x="180" y="70"> G<title>12207</title> </text>
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
                <line x1="185" y1="230" x2="198" y2="230"><title>185,230 198,230</title> </line>
                <line x1="185" y1="245" x2="198" y2="245"><title>185,245 198,245</title> </line>
                <circle cx="192" cy="260" r="2" ><title>192,260</title> </circle>
                <line x1="185" y1="275" x2="198" y2="275"><title>185,275 198,275</title> </line>
                <line x1="185" y1="290" x2="198" y2="290"><title>185,290 198,290</title> </line>
                <circle cx="192" cy="305" r="2" ><title>192,305</title> </circle>
            </svg>

        )
    }
    
}

export default Mtts2;