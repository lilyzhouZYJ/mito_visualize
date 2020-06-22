import React from 'react';

class Mttq extends React.Component{
    
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
                <text x='35' y='10' style={{fontSize:'17', fontFamily:"sans-serif",textAnchor:'start',fontWeight:'bold'}}>MT-TQ</text>
                <text x='35' y='35' style={{fontSize:'12', fontFamily:"sans-serif",textAnchor:'start',fontWeight:'bold'}}>mt-tRNA
                    <tspan style={{fontSize:'9'}} baselineShift="super">Gln</tspan>
                </text>
                <text x="205" y="10">A<title></title> </text>
                <text x="205" y="25">C<title></title> </text>
                <text x="205" y="40">C<title></title> </text>
                <text x="205" y="55">G<title>4329</title> </text>
                <text x="205" y="70">A<title>4330</title> </text>
                <line x1="196.0" y1="70" x2="188.0" y2="70"><title>4330,4400</title> </line>
                <text x="205" y="85">T<title>4331</title> </text>
                <line x1="196.0" y1="85" x2="188.0" y2="85"><title>4331,4399</title> </line>
                <text x="205" y="100">C<title>4332</title> </text>
                <line x1="196.0" y1="100" x2="188.0" y2="100"><title>4332,4398</title> </line>
                <text x="205" y="115">C<title>4333</title> </text>
                <line x1="196.0" y1="115" x2="188.0" y2="115"><title>4333,4397</title> </line>
                <text x="205" y="130">T<title>4334</title> </text>
                <line x1="196.0" y1="130" x2="188.0" y2="130"><title>4334,4396</title> </line>
                <text x="205" y="145">G<title>4335</title> </text>
                <circle cx="192.0" cy="145.0" r="2"><title>4335,4395</title> </circle>
                <text x="205" y="160">A<title>4336</title> </text>
                <circle cx="192.0" cy="160.0" r="2"><title>4336,4394</title> </circle>
                <text x="220" y="170">T<title>4337</title> </text>
                <line x1="220" y1="185.0" x2="220" y2="177.0"><title>4337,4353</title> </line>
                <text x="233" y="170">A<title>4338</title> </text>
                <line x1="233" y1="185.0" x2="233" y2="177.0"><title>4338,4352</title> </line>
                <text x="246" y="170">C<title>4339</title> </text>
                <line x1="246" y1="185.0" x2="246" y2="177.0"><title>4339,4351</title> </line>
                <text x="259" y="170">T<title>4340</title> </text>
                <circle cx="259.0" cy="181.0" r="2"><title>4340,4350</title> </circle>
                <text x="272" y="170">C<title>4341</title> </text>
                <line x1="272" y1="185.0" x2="272" y2="177.0"><title>4341,4349</title> </line>
                <text x="282" y="165">T<title>4342</title> </text>
                <text x="294" y="162">T<title>4343</title> </text>
                <text x="306" y="168">A<title>4344</title> </text>
                <text x="312" y="181.5">G<title>4345</title> </text>
                <text x="306" y="195">C<title>4346</title> </text>
                <text x="294" y="201">T<title>4347</title> </text>
                <text x="282" y="198">T<title>4348</title> </text>
                <text x="272" y="193">G<title>4349</title> </text>
                <text x="259" y="193">G<title>4350</title> </text>
                <text x="246" y="193">G<title>4351</title> </text>
                <text x="233" y="193">T<title>4352</title> </text>
                <text x="220" y="193">A<title>4353</title> </text>
                <text x="220" y="205">G<title>4354</title> </text>
                <text x="226" y="215">G<title>4355</title> </text>
                <text x="218" y="225">G<title>4356</title> </text>
                <text x="206" y="228">A<title>4357</title> </text>
                <text x="200" y="238">C<title>4358</title> </text>
                <line x1="191.0" y1="238" x2="183.0" y2="238"><title>4358,4374</title> </line>
                <text x="200" y="253">T<title>4359</title> </text>
                <line x1="191.0" y1="253" x2="183.0" y2="253"><title>4359,4373</title> </line>
                <text x="200" y="268">C<title>4360</title> </text>
                <line x1="191.0" y1="268" x2="183.0" y2="268"><title>4360,4372</title> </line>
                <text x="200" y="283">T<title>4361</title> </text>
                <line x1="191.0" y1="283" x2="183.0" y2="283"><title>4361,4371</title> </line>
                <text x="200" y="298">T<title>4362</title> </text>
                <line x1="191.0" y1="298" x2="183.0" y2="298"><title>4362,4370</title> </line>
                <text x="208" y="308">A<title>4363</title> </text>
                <text x="208" y="323">G<title>4364</title> </text>
                <text x="200" y="334">G<title>4365</title> </text>
                <text x="187.5" y="336">T<title>4366</title> </text>
                <text x="175" y="334">T<title>4367</title> </text>
                <text x="167" y="323">T<title>4368</title> </text>
                <text x="167" y="308">T<title>4369</title> </text>
                <text x="175" y="298">A<title>4370</title> </text>
                <text x="175" y="283">A<title>4371</title> </text>
                <text x="175" y="268">G<title>4372</title> </text>
                <text x="175" y="253">A<title>4373</title> </text>
                <text x="175" y="238">G<title>4374</title> </text>
                <text x="163" y="228">G<title>4375</title> </text>
                <text x="152" y="215">C<title>4376</title> </text>
                <line x1="152" y1="207.0" x2="152" y2="199.0"><title>4376,4391</title> </line>
                <text x="139" y="215">A<title>4377</title> </text>
                <line x1="139" y1="207.0" x2="139" y2="199.0"><title>4377,4390</title> </line>
                <text x="126" y="215">C<title>4378</title> </text>
                <line x1="126" y1="207.0" x2="126" y2="199.0"><title>4378,4389</title> </line>
                <text x="113" y="215">G<title>4379</title> </text>
                <circle cx="113.0" cy="203.0" r="2"><title>4379,4388</title> </circle>
                <text x="101" y="223">G<title>4380</title> </text>
                <text x="88" y="228">T<title>4381</title> </text>
                <text x="75" y="223">G<title>4382</title> </text>
                <text x="64" y="211">G<title>4383</title> </text>
                <text x="64" y="196">A<title>4384</title> </text>
                <text x="75" y="184">T<title>4385</title> </text>
                <text x="88" y="179">A<title>4386</title> </text>
                <text x="101" y="184">G<title>4387</title> </text>
                <text x="113" y="192">T<title>4388</title> </text>
                <text x="126" y="192">G<title>4389</title> </text>
                <text x="139" y="192">T<title>4390</title> </text>
                <text x="152" y="192">G<title>4391</title> </text>
                <text x="165" y="183">G<title>4392</title> </text>
                <text x="173" y="173">G<title>4393</title> </text>
                <text x="180" y="160">G<title>4394</title> </text>
                <text x="180" y="145">T<title>4395</title> </text>
                <text x="180" y="130">A<title>4396</title> </text>
                <text x="180" y="115">G<title>4397</title> </text>
                <text x="180" y="100">G<title>4398</title> </text>
                <text x="180" y="85">A<title>4399</title> </text>
                <text x="180" y="70">T<title>4400</title> </text>
            </svg>

        )
    }
    
}

export default Mttq;