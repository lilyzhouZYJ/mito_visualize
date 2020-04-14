import React from 'react';

class Mtth extends React.Component{
    
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
                
                <text x="205" y="55">C<title>12206</title> </text>
                <text x="205" y="70">C<title>12205</title> </text>
                <text x="205" y="85">A<title>12204</title> </text>
                <text x="205" y="100">T<title>12203</title> </text>
                <text x="205" y="115">T<title>12202</title> </text>
                <text x="205" y="130">T<title>12201</title> </text>
                <text x="205" y="145">A<title>12200</title> </text>
                <text x="205" y="160">T<title>12199</title> </text>
                <text x="220" y="170">T<title>12198</title> </text>
                <text x="233" y="170">C<title>12197</title> </text>
                <text x="246" y="170">C<title>12196</title> </text>
                <text x="259" y="170">C<title>12195</title> </text>
                <text x="272" y="170">C<title>12194</title> </text>
                <text x="282" y="163">A<title>12193</title> </text>
                <text x="294" y="160">G<title>12192</title> </text>
                <text x="306" y="168">C<title>12191</title> </text>
                <text x="312" y="181.5">A<title>12190</title> </text>
                <text x="306" y="195">T<title>12189</title> </text>
                <text x="294" y="203">T<title>12188</title> </text>
                <text x="282" y="200">C<title>12187</title> </text>
                <text x="272" y="193">G<title>12186</title> </text>
                <text x="259" y="193">G<title>12185</title> </text>
                <text x="246" y="193">A<title>12184</title> </text>
                <text x="233" y="193">G<title>12183</title> </text>
                <text x="220" y="193">A<title>12182</title> </text>
                <text x="220" y="205">C<title>12181</title> </text>
                <text x="226" y="215">A<title>12180</title> </text>
                <text x="218" y="225">A<title>12179</title> </text>
                <text x="206" y="228">C<title>12178</title> </text>
                <text x="200" y="238">A<title>12177</title> </text>
                <text x="200" y="253">G<title>12176</title> </text>
                <text x="200" y="268">T<title>12175</title> </text>
                <text x="200" y="283">C<title>12174</title> </text>
                <text x="200" y="298">T<title>12173</title> </text>
                <text x="208" y="308">A<title>12172</title> </text>
                <text x="208" y="323">A<title>12171</title> </text>
                <text x="200" y="334">G<title>12170</title> </text>
                <text x="187.5" y="336">T<title>12169</title> </text>
                <text x="175" y="334">G<title>12168</title> </text>
                <text x="167" y="323">T<title>12167</title> </text>
                <text x="167" y="308">T<title>12166</title> </text>
                <text x="175" y="298">A<title>12165</title> </text>
                <text x="175" y="283">G<title>12164</title> </text>
                <text x="175" y="268">A<title>12163</title> </text>
                <text x="175" y="253">C<title>12162</title> </text>
                <text x="175" y="238">T<title>12161</title> </text>
                <text x="163" y="228">A<title>12160</title> </text>
                <text x="152" y="215">C<title>12159</title> </text>
                <text x="139" y="215">A<title>12158</title> </text>
                <text x="126" y="215">A<title>12157</title> </text>
                <text x="113" y="215">A<title>12156</title> </text>
                <text x="100" y="222">A<title>12155</title> </text>
                <text x="87" y="217">C<title>12154</title> </text>
                <text x="80" y="203.5">C<title>12153</title> </text>
                <text x="87" y="190">A<title>12152</title> </text>
                <text x="100" y="185">A<title>12151</title> </text>
                <text x="113" y="192">T<title>12150</title> </text>
                <text x="126" y="192">T<title>12149</title> </text>
                <text x="139" y="192">T<title>12148</title> </text>
                <text x="152" y="192">G<title>12147</title> </text>
                <text x="165" y="183">A<title>12146</title> </text>
                <text x="173" y="173">T<title>12145</title> </text>
                <text x="180" y="160">A<title>12144</title> </text>
                <text x="180" y="145">T<title>12143</title> </text>
                <text x="180" y="130">A<title>12142</title> </text>
                <text x="180" y="115">A<title>12141</title> </text>
                <text x="180" y="100">A<title>12140</title> </text>
                <text x="180" y="85">T<title>12139</title> </text>
                <text x="180" y="70">G<title>12138</title> </text>
                <line x1="190" y1="67" x2="203" y2="67"><title>190,67 203,67</title> </line>
                <line x1="190" y1="82" x2="203" y2="82"><title>190,82 203,82</title> </line>
                <line x1="190" y1="97" x2="203" y2="97"><title>190,97 203,97</title> </line>
                <line x1="190" y1="112" x2="203" y2="112"><title>190,112 203,112</title> </line>
                <line x1="190" y1="127" x2="203" y2="127"><title>190,127 203,127</title> </line>
                <line x1="190" y1="142" x2="203" y2="142"><title>190,142 203,142</title> </line>
                <line x1="190" y1="157" x2="203" y2="157"><title>190,157 203,157</title> </line>
                <line x1="224" y1="173" x2="224" y2="183"><title>224,173 224,183</title> </line>
                <line x1="237" y1="173" x2="237" y2="183"><title>237,173 237,183</title> </line>
                <circle cx="250" cy="177" r="2"><title>250,177</title> </circle>
                <line x1="263" y1="173" x2="263" y2="183"><title>263,173 263,183</title> </line>
                <line x1="276" y1="173" x2="276" y2="183"><title>276,173 276,183</title> </line>
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

export default Mtth;