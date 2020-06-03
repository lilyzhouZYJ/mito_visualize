import React from 'react';

class Mttr extends React.Component{
    
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
                <text x='35' y='10' style={{fontSize:'17', fontFamily:"sans-serif",textAnchor:'start',fontWeight:'bold'}}>MT-TR</text>
                <text x='35' y='35' style={{fontSize:'17', fontFamily:"sans-serif",textAnchor:'start',fontWeight:'bold'}}>mt-tRNA
                    <tspan style={{fontSize:'12'}} baselineShift="super">Arg</tspan>
                </text>
                <text x="205" y="10">A<title></title> </text>
                <text x="205" y="25">C<title></title> </text>
                <text x="205" y="40">C<title></title> </text>
                <text x="205" y="55">A<title>10469</title> </text>
                <text x="205" y="70">A<title>10468</title> </text>
                <line x1="196.0" y1="70" x2="188.0" y2="70"><title>10468,10405</title> </line>
                <text x="205" y="85">C<title>10467</title> </text>
                <line x1="196.0" y1="85" x2="188.0" y2="85"><title>10467,10406</title> </line>
                <text x="205" y="100">C<title>10466</title> </text>
                <line x1="196.0" y1="100" x2="188.0" y2="100"><title>10466,10407</title> </line>
                <text x="205" y="115">A<title>10465</title> </text>
                <line x1="196.0" y1="115" x2="188.0" y2="115"><title>10465,10408</title> </line>
                <text x="205" y="130">T<title>10464</title> </text>
                <line x1="196.0" y1="130" x2="188.0" y2="130"><title>10464,10409</title> </line>
                <text x="205" y="145">T<title>10463</title> </text>
                <circle cx="192.0" cy="145.0" r="2"><title>10463,10410</title> </circle>
                <text x="205" y="160">T<title>10462</title> </text>
                <line x1="196.0" y1="160" x2="188.0" y2="160"><title>10462,10411</title> </line>
                <text x="218" y="170">A<title>10461</title> </text>
                <line x1="218" y1="185.0" x2="218" y2="177.0"><title>10461,10449</title> </line>
                <text x="231" y="170">T<title>10460</title> </text>
                <line x1="231" y1="185.0" x2="231" y2="177.0"><title>10460,10450</title> </line>
                <text x="244" y="170">A<title>10459</title> </text>
                <line x1="244" y1="185.0" x2="244" y2="177.0"><title>10459,10451</title> </line>
                <text x="257" y="170">C<title>10458</title> </text>
                <line x1="257" y1="185.0" x2="257" y2="177.0"><title>10458,10452</title> </line>
                <text x="268" y="165">T<title>10457</title> </text>
                <text x="281" y="167">A<title>10456</title> </text>
                <text x="289" y="181.5">A<title>10455</title> </text>
                <text x="281" y="196">T<title>10454</title> </text>
                <text x="268" y="198">A<title>10453</title> </text>
                <text x="257" y="193">G<title>10452</title> </text>
                <text x="244" y="193">T<title>10451</title> </text>
                <text x="231" y="193">A<title>10450</title> </text>
                <text x="218" y="193">T<title>10449</title> </text>
                <text x="220" y="205">T<title>10448</title> </text>
                <text x="226" y="215">A<title>10447</title> </text>
                <text x="218" y="225">A<title>10446</title> </text>
                <text x="206" y="228">A<title>10445</title> </text>
                <text x="200" y="238">T<title>10444</title> </text>
                <line x1="191.0" y1="238" x2="183.0" y2="238"><title>10444,10428</title> </line>
                <text x="200" y="253">T<title>10443</title> </text>
                <line x1="191.0" y1="253" x2="183.0" y2="253"><title>10443,10429</title> </line>
                <text x="200" y="268">A<title>10442</title> </text>
                <line x1="191.0" y1="268" x2="183.0" y2="268"><title>10442,10430</title> </line>
                <text x="200" y="283">C<title>10441</title> </text>
                <line x1="191.0" y1="283" x2="183.0" y2="283"><title>10441,10431</title> </line>
                <text x="200" y="298">T<title>10440</title> </text>
                <line x1="191.0" y1="298" x2="183.0" y2="298"><title>10440,10432</title> </line>
                <text x="208" y="308">C<title>10439</title> </text>
                <text x="208" y="323">A<title>10438</title> </text>
                <text x="200" y="334">G<title>10437</title> </text>
                <text x="187.5" y="336">C<title>10436</title> </text>
                <text x="175" y="334">T<title>10435</title> </text>
                <text x="167" y="323">T<title>10434</title> </text>
                <text x="167" y="308">T<title>10433</title> </text>
                <text x="175" y="298">A<title>10432</title> </text>
                <text x="175" y="283">G<title>10431</title> </text>
                <text x="175" y="268">T<title>10430</title> </text>
                <text x="175" y="253">A<title>10429</title> </text>
                <text x="175" y="238">A<title>10428</title> </text>
                <text x="163" y="228">G<title>10427</title> </text>
                <text x="152" y="215">C<title>10426</title> </text>
                <line x1="152" y1="207.0" x2="152" y2="199.0"><title>10426,10414</title> </line>
                <text x="139" y="215">A<title>10425</title> </text>
                <line x1="139" y1="207.0" x2="139" y2="199.0"><title>10425,10415</title> </line>
                <text x="126" y="215">A<title>10424</title> </text>
                <line x1="126" y1="207.0" x2="126" y2="199.0"><title>10424,10416</title> </line>
                <text x="113" y="215">A<title>10423</title> </text>
                <line x1="113" y1="207.0" x2="113" y2="199.0"><title>10423,10417</title> </line>
                <text x="100" y="222">A<title>10422</title> </text>
                <text x="87" y="217">C<title>10421</title> </text>
                <text x="80" y="203.5">A<title>10420</title> </text>
                <text x="87" y="190">A<title>10419</title> </text>
                <text x="100" y="185">A<title>10418</title> </text>
                <text x="113" y="192">T<title>10417</title> </text>
                <text x="126" y="192">T<title>10416</title> </text>
                <text x="139" y="192">T<title>10415</title> </text>
                <text x="152" y="192">G<title>10414</title> </text>
                <text x="163" y="183">A<title>10413</title> </text>
                <text x="173" y="173">T<title>10412</title> </text>
                <text x="180" y="160">A<title>10411</title> </text>
                <text x="180" y="145">T<title>10410</title> </text>
                <text x="180" y="130">A<title>10409</title> </text>
                <text x="180" y="115">T<title>10408</title> </text>
                <text x="180" y="100">G<title>10407</title> </text>
                <text x="180" y="85">G<title>10406</title> </text>
                <text x="180" y="70">T<title>10405</title> </text>
            </svg>

        )
    }
    
}

export default Mttr;