import React from 'react';

class Mttf extends React.Component{
    
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
                <text x='35' y='10' style={{fontSize:'17', fontFamily:"sans-serif",textAnchor:'start',fontWeight:'bold'}}>MT-TF</text>
                <text x='35' y='35' style={{fontSize:'17', fontFamily:"sans-serif",textAnchor:'start',fontWeight:'bold'}}>mt-tRNA
                    <tspan style={{fontSize:'12'}} baselineShift="super">Phe</tspan>
                </text>
                <text x="205" y="10" >A<title></title> </text>
                <text x="205" y="25" >C<title></title> </text>
                <text x="205" y="40" >C<title></title> </text>
                <text x="205" y="55" >A<title>647</title> </text>
                <text x="205" y="70" >C<title>646</title> </text>
                <line x1="196.0" y1="70" x2="188.0" y2="70"><title>646,577</title> </line>
                <text x="205" y="85" >A<title>645</title> </text>
                <line x1="196.0" y1="85" x2="188.0" y2="85"><title>645,578</title> </line>
                <text x="205" y="100" >A<title>644</title> </text>
                <line x1="196.0" y1="100" x2="188.0" y2="100"><title>644,579</title> </line>
                <text x="205" y="115" >A<title>643</title> </text>
                <line x1="196.0" y1="115" x2="188.0" y2="115"><title>643,580</title> </line>
                <text x="205" y="130" >T<title>642</title> </text>
                <line x1="196.0" y1="130" x2="188.0" y2="130"><title>642,581</title> </line>
                <text x="205" y="145" >A<title>641</title> </text>
                <line x1="196.0" y1="145" x2="188.0" y2="145"><title>641,582</title> </line>
                <text x="205" y="160" >C<title>640</title> </text>
                <line x1="196.0" y1="160" x2="188.0" y2="160"><title>640,583</title> </line>
                <text x="218" y="170" >C<title>639</title> </text>
                <line x1="218" y1="185.0" x2="218" y2="177.0"><title>639,625</title> </line>
                <text x="231" y="170" >C<title>638</title> </text>
                <line x1="231" y1="185.0" x2="231" y2="177.0"><title>638,626</title> </line>
                <text x="244" y="170" >C<title>637</title> </text>
                <line x1="244" y1="185.0" x2="244" y2="177.0"><title>637,627</title> </line>
                <text x="256" y="160" >A<title>636</title> </text>
                <text x="268" y="157" >C<title>635</title> </text>
                <text x="280" y="160" >T<title>634</title> </text>
                <text x="290" y="168" >A<title>633</title> </text>
                <text x="295" y="181.5" >C<title>632</title> </text>
                <text x="290" y="195" >A<title>631</title> </text>
                <text x="280" y="203" >C<title>630</title> </text>
                <text x="268" y="206" >T<title>629</title> </text>
                <text x="256" y="203" >C<title>628</title> </text>
                <text x="244" y="193" >G<title>627</title> </text>
                <text x="231" y="193" >G<title>626</title> </text>
                <text x="218" y="193" >G<title>625</title> </text>
                <text x="216" y="207" >C<title>624</title> </text>
                <text x="225" y="217" >A<title>623</title> </text>
                <text x="220" y="230" >G<title>622</title> </text>
                <text x="206" y="225" >A<title>621</title> </text>
                <text x="200" y="238" >T<title>620</title> </text>
                <line x1="191.0" y1="238" x2="183.0" y2="238"><title>620,604</title> </line>
                <text x="200" y="253" >T<title>619</title> </text>
                <circle cx="187.0" cy="253.0" r="2"><title>619,605</title> </circle>
                <text x="200" y="268" >T<title>618</title> </text>
                <line x1="191.0" y1="268" x2="183.0" y2="268"><title>618,606</title> </line>
                <text x="200" y="283" >G<title>617</title> </text>
                <line x1="191.0" y1="283" x2="183.0" y2="283"><title>617,607</title> </line>
                <text x="200" y="298" >T<title>616</title> </text>
                <line x1="191.0" y1="298" x2="183.0" y2="298"><title>616,608</title> </line>
                <text x="208" y="308" >A<title>615</title> </text>
                <text x="208" y="323" >A<title>614</title> </text>
                <text x="200" y="334" >A<title>613</title> </text>
                <text x="187.5" y="336" >A<title>612</title> </text>
                <text x="175" y="334" >G<title>611</title> </text>
                <text x="167" y="323" >T<title>610</title> </text>
                <text x="167" y="308" >C<title>609</title> </text>
                <text x="175" y="298" >A<title>608</title> </text>
                <text x="175" y="283" >C<title>607</title> </text>
                <text x="175" y="268" >A<title>606</title> </text>
                <text x="175" y="253" >T<title>605</title> </text>
                <text x="175" y="238" >A<title>604</title> </text>
                <text x="163" y="225" >A<title>603</title> </text>
                <text x="152" y="215" >C<title>602</title> </text>
                <line x1="152" y1="207.0" x2="152" y2="199.0"><title>602,586</title> </line>
                <text x="139" y="215" >G<title>601</title> </text>
                <line x1="139" y1="207.0" x2="139" y2="199.0"><title>601,587</title> </line>
                <text x="126" y="215" >A<title>600</title> </text>
                <line x1="126" y1="207.0" x2="126" y2="199.0"><title>600,588</title> </line>
                <text x="113" y="215" >A<title>599</title> </text>
                <line x1="113" y1="207.0" x2="113" y2="199.0"><title>599,589</title> </line>
                <text x="103" y="223" >A<title>598</title> </text>
                <text x="91" y="229" >C<title>597</title> </text>
                <text x="79" y="227" >T<title>596</title> </text>
                <text x="68" y="218" >C<title>595</title> </text>
                <text x="62" y="203.5" >C<title>594</title> </text>
                <text x="68" y="189" >T<title>593</title> </text>
                <text x="79" y="180" >C<title>592</title> </text>
                <text x="91" y="178" >C<title>591</title> </text>
                <text x="103" y="184" >A<title>590</title> </text>
                <text x="113" y="192" >T<title>589</title> </text>
                <text x="126" y="192" >T<title>588</title> </text>
                <text x="139" y="192" >C<title>587</title> </text>
                <text x="152" y="192" >G<title>586</title> </text>
                <text x="163" y="183" >A<title>585</title> </text>
                <text x="173" y="173" >T<title>584</title> </text>
                <text x="180" y="160" >G<title>583</title> </text>
                <text x="180" y="145" >T<title>582</title> </text>
                <text x="180" y="130" >A<title>581</title> </text>
                <text x="180" y="115" >T<title>580</title> </text>
                <text x="180" y="100" >T<title>579</title> </text>
                <text x="180" y="85" >T<title>578</title> </text>
                <text x="180" y="70" >G<title>577</title> </text>
            </svg>

        )
    }
    
}

export default Mttf;