import React from 'react';

class Mtth extends React.Component{
    
    componentDidMount(){
        //set styles
        var allLines = document.getElementById('svg-container').getElementsByTagName('line');
        for(var t of allLines){
            t.setAttribute('stroke',"#000000");
            t.setAttribute('stroke-width',"1");
            t.setAttribute('stroke-linecap',"round");
        }
        var allCircles = document.getElementById('svg-container').getElementsByTagName('circle');
        for(var t of allCircles){
            t.setAttribute('fill', '#000000');
        }
        var allText = document.getElementById('svg-container').getElementsByTagName('text');
        for(var t of allText){
            t.setAttribute('font-size', '12');
            t.setAttribute('fill', '#000000');
            t.setAttribute('font-family', 'monospace');
            t.setAttribute('text-anchor','middle');
            t.setAttribute('alignment-baseline','middle');
        }

    }

    render() {
        
        return(
            <svg id="svg-container" height="390" width="350" xmlns="http://www.w3.org/2000/svg">
                <text x='35' y='10' style={{fontSize:'17', fontFamily:"sans-serif",textAnchor:'start',fontWeight:'bold'}}>MT-TH</text>
                <text x='35' y='35' style={{fontSize:'17', fontFamily:"sans-serif",textAnchor:'start',fontWeight:'bold'}}>mt-tRNA
                    <tspan style={{fontSize:'12'}} baselineShift="super">His</tspan>
                </text>
                <text x="205" y="10" >A<title></title> </text>
                <text x="205" y="25" >C<title></title> </text>
                <text x="205" y="40" >C<title></title> </text>
                <text x="205" y="55" >C<title>12206</title> </text>
                <text x="205" y="70" >C<title>12205</title> </text>
                <line x1="196.0" y1="70" x2="188.0" y2="70"><title>12205,12138</title> </line>
                <text x="205" y="85" >A<title>12204</title> </text>
                <line x1="196.0" y1="85" x2="188.0" y2="85"><title>12204,12139</title> </line>
                <text x="205" y="100" >T<title>12203</title> </text>
                <line x1="196.0" y1="100" x2="188.0" y2="100"><title>12203,12140</title> </line>
                <text x="205" y="115" >T<title>12202</title> </text>
                <line x1="196.0" y1="115" x2="188.0" y2="115"><title>12202,12141</title> </line>
                <text x="205" y="130" >T<title>12201</title> </text>
                <line x1="196.0" y1="130" x2="188.0" y2="130"><title>12201,12142</title> </line>
                <text x="205" y="145" >A<title>12200</title> </text>
                <line x1="196.0" y1="145" x2="188.0" y2="145"><title>12200,12143</title> </line>
                <text x="205" y="160" >T<title>12199</title> </text>
                <line x1="196.0" y1="160" x2="188.0" y2="160"><title>12199,12144</title> </line>
                <text x="220" y="170" >T<title>12198</title> </text>
                <line x1="220" y1="185.0" x2="220" y2="177.0"><title>12198,12182</title> </line>
                <text x="233" y="170" >C<title>12197</title> </text>
                <line x1="233" y1="185.0" x2="233" y2="177.0"><title>12197,12183</title> </line>
                <text x="246" y="170" >C<title>12196</title> </text>
                <circle cx="246.0" cy="181.0" r="2"><title>12196,12184</title> </circle>
                <text x="259" y="170" >C<title>12195</title> </text>
                <line x1="259" y1="185.0" x2="259" y2="177.0"><title>12195,12185</title> </line>
                <text x="272" y="170" >C<title>12194</title> </text>
                <line x1="272" y1="185.0" x2="272" y2="177.0"><title>12194,12186</title> </line>
                <text x="282" y="163" >A<title>12193</title> </text>
                <text x="294" y="160" >G<title>12192</title> </text>
                <text x="306" y="168" >C<title>12191</title> </text>
                <text x="312" y="181.5" >A<title>12190</title> </text>
                <text x="306" y="195" >T<title>12189</title> </text>
                <text x="294" y="203" >T<title>12188</title> </text>
                <text x="282" y="200" >C<title>12187</title> </text>
                <text x="272" y="193" >G<title>12186</title> </text>
                <text x="259" y="193" >G<title>12185</title> </text>
                <text x="246" y="193" >A<title>12184</title> </text>
                <text x="233" y="193" >G<title>12183</title> </text>
                <text x="220" y="193" >A<title>12182</title> </text>
                <text x="220" y="205" >C<title>12181</title> </text>
                <text x="226" y="215" >A<title>12180</title> </text>
                <text x="218" y="225" >A<title>12179</title> </text>
                <text x="206" y="228" >C<title>12178</title> </text>
                <text x="200" y="238" >A<title>12177</title> </text>
                <line x1="191.0" y1="238" x2="183.0" y2="238"><title>12177,12161</title> </line>
                <text x="200" y="253" >G<title>12176</title> </text>
                <line x1="191.0" y1="253" x2="183.0" y2="253"><title>12176,12162</title> </line>
                <text x="200" y="268" >T<title>12175</title> </text>
                <line x1="191.0" y1="268" x2="183.0" y2="268"><title>12175,12163</title> </line>
                <text x="200" y="283" >C<title>12174</title> </text>
                <line x1="191.0" y1="283" x2="183.0" y2="283"><title>12174,12164</title> </line>
                <text x="200" y="298" >T<title>12173</title> </text>
                <line x1="191.0" y1="298" x2="183.0" y2="298"><title>12173,12165</title> </line>
                <text x="208" y="308" >A<title>12172</title> </text>
                <text x="208" y="323" >A<title>12171</title> </text>
                <text x="200" y="334" >G<title>12170</title> </text>
                <text x="187.5" y="336" >T<title>12169</title> </text>
                <text x="175" y="334" >G<title>12168</title> </text>
                <text x="167" y="323" >T<title>12167</title> </text>
                <text x="167" y="308" >T<title>12166</title> </text>
                <text x="175" y="298" >A<title>12165</title> </text>
                <text x="175" y="283" >G<title>12164</title> </text>
                <text x="175" y="268" >A<title>12163</title> </text>
                <text x="175" y="253" >C<title>12162</title> </text>
                <text x="175" y="238" >T<title>12161</title> </text>
                <text x="163" y="228" >A<title>12160</title> </text>
                <text x="152" y="215" >C<title>12159</title> </text>
                <line x1="152" y1="207.0" x2="152" y2="199.0"><title>12159,12147</title> </line>
                <text x="139" y="215" >A<title>12158</title> </text>
                <line x1="139" y1="207.0" x2="139" y2="199.0"><title>12158,12148</title> </line>
                <text x="126" y="215" >A<title>12157</title> </text>
                <line x1="126" y1="207.0" x2="126" y2="199.0"><title>12157,12149</title> </line>
                <text x="113" y="215" >A<title>12156</title> </text>
                <line x1="113" y1="207.0" x2="113" y2="199.0"><title>12156,12150</title> </line>
                <text x="100" y="222" >A<title>12155</title> </text>
                <text x="87" y="217" >C<title>12154</title> </text>
                <text x="80" y="203.5" >C<title>12153</title> </text>
                <text x="87" y="190" >A<title>12152</title> </text>
                <text x="100" y="185" >A<title>12151</title> </text>
                <text x="113" y="192" >T<title>12150</title> </text>
                <text x="126" y="192" >T<title>12149</title> </text>
                <text x="139" y="192" >T<title>12148</title> </text>
                <text x="152" y="192" >G<title>12147</title> </text>
                <text x="165" y="183" >A<title>12146</title> </text>
                <text x="173" y="173" >T<title>12145</title> </text>
                <text x="180" y="160" >A<title>12144</title> </text>
                <text x="180" y="145" >T<title>12143</title> </text>
                <text x="180" y="130" >A<title>12142</title> </text>
                <text x="180" y="115" >A<title>12141</title> </text>
                <text x="180" y="100" >A<title>12140</title> </text>
                <text x="180" y="85" >T<title>12139</title> </text>
                <text x="180" y="70" >G<title>12138</title> </text>
            </svg>

        )
    }
    
}

export default Mtth;