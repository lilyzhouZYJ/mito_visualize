import React from 'react';

class Mtrnr1 extends React.Component{

    state = {
        variant: null
    }

    componentDidMount(){

        //this is for removing repeated lines (will be needed with rrna2 again)
        // var allTitle = document.getElementById('rrna-svg-container').getElementsByTagName('title');
        // for(var a of allTitle){
        //     if(a.parentElement.tagName=="line"||a.parentElement.tagName=="circle"){
        //         for(var b of allTitle){
        //             if(b.parentElement.tagName=="line"||b.parentElement.tagName=="circle"){
        //                 if(a.innerHTML.split(',')[0]==b.innerHTML.split(',')[1]&&a.innerHTML.split(',')[1]==b.innerHTML.split(',')[0]){
        //                     console.log(a.innerHTML+" "+b.innerHTML);
        //                     b.parentElement.remove();
        //                 }
        //             }
        //         }
        //         // if(a.innerHTML.split(',')[0]>a.innerHTML.split(',')[1]){
        //         //     a.parentElement.remove();
        //         // }
        //     }
        // }

        //set styles
        var allLines = document.getElementById('rrna-svg-container').getElementsByTagName('line');
        for(var t of allLines){
            t.setAttribute('stroke',"#000000");
            t.setAttribute('stroke-width',"1");
            t.setAttribute('stroke-linecap',"round");
        }
        var allCircles = document.getElementById('rrna-svg-container').getElementsByTagName('circle');
        for(var t of allCircles){
            t.setAttribute('fill', '#000000');
        }
        var allText = document.getElementById('rrna-svg-container').getElementsByTagName('text');
        for(var t of allText){
            t.setAttribute('font-size', '9');
            t.setAttribute('fill', '#000000');
            t.setAttribute('font-family', 'monospace');
            t.setAttribute('text-anchor','middle');
            t.setAttribute('alignment-baseline','middle');
        }
        var allPath = document.getElementById('rrna-svg-container').getElementsByTagName('path');
        for(var t of allPath){
            t.setAttribute('stroke','black');
            t.setAttribute('fill','transparent');
        }

    }

    render() {
        return(
            <svg id="rrna-svg-container" style={{backgroundColor:"white"}} viewBox='0 0 1000 1000' height="650" width="650" xmlns="http://www.w3.org/2000/svg">
                <line x1="486" y1="410" x2="494" y2="420"><title>1137,1138</title> </line>
                <line x1="540" y1="503" x2="529" y2="509"><title>657,658</title> </line>
                <line x1="504" y1="508" x2="520" y2="511"><title>656,657</title> </line>
                <line x1="316" y1="606" x2="315" y2="623"><title>687,688</title> </line>
                <line x1="315" y1="635" x2="315" y2="648"><title>688,689</title> </line>
                <line x1="235" y1="775" x2="238" y2="755"><title>802,801</title> </line>
                <line x1="236" y1="785" x2="242" y2="802"><title>801,800</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="453" y="526">A<title>648</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="458" y="519">A<title>649</title> </text>
                <line x1="456.666666667" y1="511.666666667" x2="455.333333333" y2="504.333333333"><title>649,668</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="464" y="524">T<title>650</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="467" y="517">A<title>651</title> </text>
                <line x1="465.333333333" y1="510.0" x2="463.666666667" y2="503.0"><title>651,667</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="475" y="514">G<title>652</title> </text>
                <line x1="473.333333333" y1="507.333333333" x2="471.666666667" y2="500.666666667"><title>652,666</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="483" y="511">G<title>653</title> </text>
                <line x1="481.333333333" y1="504.333333333" x2="479.666666667" y2="497.666666667"><title>653,665</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="491" y="508">T<title>654</title> </text>
                <circle cx="488.0" cy="498.0" r="1.3" fill="#000000"><title>654,664</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="498" y="507">T<title>655</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="525" y="512">T<title>656</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="544" y="499">G<title>657</title> </text>
                <line x1="546.666666667" y1="492.666666667" x2="549.333333333" y2="486.333333333"><title>657,1173</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="536" y="495">G<title>658</title> </text>
                <line x1="538.333333333" y1="489.666666667" x2="540.666666667" y2="484.333333333"><title>658,1172</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="528" y="493">T<title>659</title> </text>
                <line x1="530.0" y1="487.333333333" x2="532.0" y2="481.666666667"><title>659,1171</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="519" y="491">C<title>660</title> </text>
                <line x1="521.333333333" y1="485.0" x2="523.666666667" y2="479.0"><title>660,1170</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="511" y="489">C<title>661</title> </text>
                <line x1="513.333333333" y1="482.666666667" x2="515.666666667" y2="476.333333333"><title>661,1169</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="503" y="487">T<title>662</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="494" y="487">A<title>663</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="486" y="489">G<title>664</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="478" y="491">C<title>665</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="470" y="494">C<title>666</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="462" y="496">T<title>667</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="454" y="497">T<title>668</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="447" y="501">T<title>669</title> </text>
                <line x1="442.666666667" y1="496.333333333" x2="438.333333333" y2="491.666666667"><title>669,928</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="440" y="506">C<title>670</title> </text>
                <line x1="435.666666667" y1="501.0" x2="431.333333333" y2="496.0"><title>670,927</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="434" y="512">T<title>671</title> </text>
                <line x1="429.666666667" y1="506.666666667" x2="425.333333333" y2="501.333333333"><title>671,926</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="428" y="516">A<title>672</title> </text>
                <line x1="423.0" y1="511.0" x2="418.0" y2="506.0"><title>672,925</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="420" y="521">T<title>673</title> </text>
                <line x1="415.666666667" y1="516.0" x2="411.333333333" y2="511.0"><title>673,924</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="414" y="527">T<title>674</title> </text>
                <line x1="409.666666667" y1="522.0" x2="405.333333333" y2="517.0"><title>674,923</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="407" y="532">A<title>675</title> </text>
                <circle cx="400.0" cy="524.0" r="1.3" fill="#000000"><title>675,922</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="400" y="537">G<title>676</title> </text>
                <circle cx="394.0" cy="529.0" r="1.3" fill="#000000"><title>676,921</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="393" y="543">C<title>677</title> </text>
                <line x1="389.0" y1="538.0" x2="385.0" y2="533.0"><title>677,920</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="387" y="550">T<title>678</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="377" y="560">C<title>679</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="365" y="563">T<title>680</title> </text>
                <line x1="360.666666667" y1="558.0" x2="356.333333333" y2="553.0"><title>680,866</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="358" y="569">T<title>681</title> </text>
                <line x1="353.666666667" y1="564.0" x2="349.333333333" y2="559.0"><title>681,865</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="574">A<title>682</title> </text>
                <line x1="346.666666667" y1="568.666666667" x2="342.333333333" y2="563.333333333"><title>682,864</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="345" y="579">G<title>683</title> </text>
                <line x1="340.666666667" y1="573.666666667" x2="336.333333333" y2="568.333333333"><title>683,863</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="338" y="584">T<title>684</title> </text>
                <line x1="333.666666667" y1="578.666666667" x2="329.333333333" y2="573.333333333"><title>684,862</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="331" y="589">A<title>685</title> </text>
                <line x1="326.666666667" y1="583.666666667" x2="322.333333333" y2="578.333333333"><title>685,861</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="324" y="595">A<title>686</title> </text>
                <line x1="319.0" y1="590.0" x2="314.0" y2="585.0"><title>686,859</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="317" y="601">G<title>687</title> </text>
                <line x1="312.333333333" y1="596.0" x2="307.666666667" y2="591.0"><title>687,858</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="315" y="629">A<title>688</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="315" y="654">T<title>689</title> </text>
                <circle cx="304.0" cy="654.0" r="1.3" fill="#000000"><title>689,824</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="314" y="667">T<title>690</title> </text>
                <line x1="308.0" y1="667" x2="300.0" y2="667"><title>690,823</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="321" y="673">A<title>691</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="315" y="680">C<title>692</title> </text>
                <line x1="308.0" y1="680" x2="300.0" y2="680"><title>692,822</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="315" y="690">A<title>693</title> </text>
                <line x1="308.0" y1="690" x2="300.0" y2="690"><title>693,821</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="315" y="698">C<title>694</title> </text>
                <line x1="308.0" y1="698" x2="300.0" y2="698"><title>694,820</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="322" y="701">A<title>695</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="315" y="706">T<title>696</title> </text>
                <line x1="308.0" y1="706" x2="300.0" y2="706"><title>696,819</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="315" y="714">G<title>697</title> </text>
                <line x1="308.0" y1="714" x2="300.0" y2="714"><title>697,818</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="316" y="723">C<title>698</title> </text>
                <line x1="309.0" y1="723" x2="301.0" y2="723"><title>698,817</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="326" y="736">A<title>699</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="335" y="749">A<title>700</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="340" y="766">G<title>701</title> </text>
                <line x1="340" y1="780.0" x2="340" y2="772.0"><title>701,708</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="348" y="766">C<title>702</title> </text>
                <circle cx="348.0" cy="776.0" r="1.3" fill="#000000"><title>702,707</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="357" y="765">A<title>703</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="365" y="771">T<title>704</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="366" y="781">C<title>705</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="358" y="788">C<title>706</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="348" y="786">C<title>707</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="340" y="786">C<title>708</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="333" y="800">G<title>709</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="325" y="810">T<title>710</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="315" y="819">T<title>711</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="301" y="825">C<title>712</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="287" y="828">C<title>713</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="272" y="825">A<title>714</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="259" y="823">G<title>715</title> </text>
                <line x1="254.0" y1="817.666666667" x2="249.0" y2="812.333333333"><title>715,800</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="253" y="828">T<title>716</title> </text>
                <line x1="248.0" y1="823.333333333" x2="243.0" y2="818.666666667"><title>716,799</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="248" y="835">G<title>717</title> </text>
                <line x1="243.0" y1="830.0" x2="238.0" y2="825.0"><title>717,798</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="253" y="843">A<title>718</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="256" y="851">G<title>719</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="255" y="860">T<title>720</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="251" y="867">T<title>721</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="244" y="873">C<title>722</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="236" y="878">A<title>723</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="236" y="886">C<title>724</title> </text>
                <circle cx="225.0" cy="886.0" r="1.3" fill="#000000"><title>724,751</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="237" y="897">C<title>725</title> </text>
                <line x1="229.0" y1="897" x2="221.0" y2="897"><title>725,749</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="236" y="905">C<title>726</title> </text>
                <line x1="229.0" y1="905" x2="221.0" y2="905"><title>726,748</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="236" y="914">T<title>727</title> </text>
                <line x1="229.0" y1="914" x2="221.0" y2="914"><title>727,747</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="240" y="922">C<title>728</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="243" y="932">T<title>729</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="242" y="944">A<title>730</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="239" y="954">A<title>731</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="236" y="961">A<title>732</title> </text>
                <line x1="229.0" y1="961" x2="221.0" y2="961"><title>732,742</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="236" y="969">T<title>733</title> </text>
                <line x1="229.0" y1="969" x2="221.0" y2="969"><title>733,741</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="236" y="978">C<title>734</title> </text>
                <line x1="229.0" y1="978" x2="221.0" y2="978"><title>734,740</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="237" y="986">A<title>735</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="234" y="995">C<title>736</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="226" y="998">C<title>737</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="217" y="995">A<title>738</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="213" y="986">C<title>739</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="978">G<title>740</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="969">A<title>741</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="961">T<title>742</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="210" y="952">C<title>743</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="206" y="943">A<title>744</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="206" y="933">A<title>745</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="210" y="924">A<title>746</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="914">A<title>747</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="905">G<title>748</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="897">G<title>749</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="208" y="891">A<title>750</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="886">A<title>751</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="876">C<title>752</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="209" y="870">A<title>753</title> </text>
                <line x1="204.0" y1="865.0" x2="199.0" y2="860.0"><title>753,789</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="204" y="878">A<title>754</title> </text>
                <line x1="199.0" y1="872.666666667" x2="194.0" y2="867.333333333"><title>754,788</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="198" y="882">G<title>755</title> </text>
                <line x1="193.0" y1="877.333333333" x2="188.0" y2="872.666666667"><title>755,787</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="192" y="890">C<title>756</title> </text>
                <line x1="187.0" y1="884.666666667" x2="182.0" y2="879.333333333"><title>756,786</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="194" y="899">A<title>757</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="187" y="906">T<title>758</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="179" y="900">C<title>759</title> </text>
                <circle cx="173.0" cy="892.0" r="1.3" fill="#000000"><title>759,785</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="172" y="914">A<title>760</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="159" y="920">A<title>761</title> </text>
                <line x1="154.666666667" y1="915.333333333" x2="150.333333333" y2="910.666666667"><title>761,779</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="154" y="927">G<title>762</title> </text>
                <line x1="149.333333333" y1="922.333333333" x2="144.666666667" y2="917.666666667"><title>762,778</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="155" y="936">C<title>763</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="148" y="942">A<title>764</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="141" y="941">C<title>765</title> </text>
                <line x1="136.333333333" y1="935.666666667" x2="131.666666667" y2="930.333333333"><title>765,777</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="133" y="949">G<title>766</title> </text>
                <line x1="128.0" y1="944.0" x2="123.0" y2="939.0"><title>766,775</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="127" y="955">C<title>767</title> </text>
                <line x1="122.0" y1="949.666666667" x2="117.0" y2="944.333333333"><title>767,774</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="121" y="962">A<title>768</title> </text>
                <line x1="116.0" y1="956.666666667" x2="111.0" y2="951.333333333"><title>768,773</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="115" y="968">G<title>769</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="105" y="969">C<title>770</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="97" y="962">A<title>771</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="99" y="952">A<title>772</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="106" y="946">T<title>773</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="112" y="939">G<title>774</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="118" y="934">C<title>775</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="119" y="926">A<title>776</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="127" y="925">G<title>777</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="140" y="913">C<title>778</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="146" y="906">T<title>779</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="139" y="899">C<title>780</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="138" y="890">A<title>781</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="142" y="883">A<title>782</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="150" y="880">A<title>783</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="158" y="880">A<title>784</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="167" y="885">C<title>785</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="177" y="874">G<title>786</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="183" y="868">C<title>787</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="189" y="862">T<title>788</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="194" y="855">T<title>789</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="201" y="848">A<title>790</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="209" y="840">G<title>791</title> </text>
                <line x1="214.333333333" y1="835.0" x2="219.666666667" y2="830.0"><title>791,797</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="203" y="834">C<title>792</title> </text>
                <line x1="208.0" y1="829.0" x2="213.0" y2="824.0"><title>792,796</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="200" y="827">C<title>793</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="199" y="817">T<title>794</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="208" y="815">A<title>795</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="218" y="819">G<title>796</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="225" y="825">C<title>797</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="233" y="820">C<title>798</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="238" y="814">A<title>799</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="244" y="807">C<title>800</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="234" y="780">A<title>801</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="240" y="750">C<title>802</title> </text>
                <line x1="245.0" y1="745.333333333" x2="250.0" y2="740.666666667"><title>802,811</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="235" y="743">C<title>803</title> </text>
                <line x1="239.666666667" y1="738.333333333" x2="244.333333333" y2="733.666666667"><title>803,810</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="228" y="737">C<title>804</title> </text>
                <line x1="233.0" y1="732.0" x2="238.0" y2="727.0"><title>804,809</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="221" y="730">C<title>805</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="219" y="720">C<title>806</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="226" y="714">A<title>807</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="235" y="714">C<title>808</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="243" y="722">G<title>809</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="249" y="729">G<title>810</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="255" y="736">G<title>811</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="262" y="734">A<title>812</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="268" y="730">A<title>813</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="275" y="727">A<title>814</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="281" y="725">C<title>815</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="288" y="724">A<title>816</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="723">G<title>817</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="714">C<title>818</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="706">A<title>819</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="698">G<title>820</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="690">T<title>821</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="680">G<title>822</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="667">A<title>823</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="654">T<title>824</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="646">T<title>825</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="638">A<title>826</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="630">A<title>827</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="622">C<title>828</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="614">C<title>829</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="287" y="614">T<title>830</title> </text>
                <line x1="286.666666667" y1="606.666666667" x2="286.333333333" y2="599.333333333"><title>830,856</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="282" y="622">T<title>831</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="278" y="614">T<title>832</title> </text>
                <line x1="278" y1="607.0" x2="278" y2="599.0"><title>832,855</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="270" y="614">A<title>833</title> </text>
                <line x1="270" y1="607.0" x2="270" y2="599.0"><title>833,854</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="262" y="614">G<title>834</title> </text>
                <line x1="262" y1="607.0" x2="262" y2="599.0"><title>834,853</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="258" y="621">C<title>835</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="251" y="626">A<title>836</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="243" y="622">A<title>837</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="239" y="614">T<title>838</title> </text>
                <line x1="239" y1="606.0" x2="239" y2="598.0"><title>838,851</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="231" y="614">A<title>839</title> </text>
                <line x1="231" y1="606.0" x2="231" y2="598.0"><title>839,850</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="223" y="614">A<title>840</title> </text>
                <line x1="223" y1="606.0" x2="223" y2="598.0"><title>840,849</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="215" y="614">A<title>841</title> </text>
                <line x1="214.666666667" y1="606.333333333" x2="214.333333333" y2="598.666666667"><title>841,848</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="206" y="614">C<title>842</title> </text>
                <line x1="206" y1="606.0" x2="206" y2="598.0"><title>842,847</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="197" y="614">G<title>843</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="190" y="608">A<title>844</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="190" y="598">A<title>845</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="197" y="591">A<title>846</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="206" y="591">G<title>847</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="214" y="591">T<title>848</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="223" y="591">T<title>849</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="231" y="591">T<title>850</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="239" y="591">A<title>851</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="250" y="589">A<title>852</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="262" y="592">C<title>853</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="270" y="592">T<title>854</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="278" y="592">A<title>855</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="286" y="592">A<title>856</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="294" y="588">G<title>857</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="303" y="586">C<title>858</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="309" y="580">T<title>859</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="311" y="572">A<title>860</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="318" y="573">T<title>861</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="325" y="568">A<title>862</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="332" y="563">C<title>863</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="338" y="558">T<title>864</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="345" y="554">A<title>865</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="352" y="548">A<title>866</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="345" y="544">C<title>867</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="339" y="539">C<title>868</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="338" y="531">C<title>869</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="340" y="523">C<title>870</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="344" y="517">A<title>871</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="514">G<title>872</title> </text>
                <line x1="366.0" y1="514" x2="358.0" y2="514"><title>872,917</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="506">G<title>873</title> </text>
                <line x1="366.0" y1="506" x2="358.0" y2="506"><title>873,916</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="497">G<title>874</title> </text>
                <line x1="366.0" y1="497" x2="358.0" y2="497"><title>874,915</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="489">T<title>875</title> </text>
                <line x1="366.0" y1="489" x2="358.0" y2="489"><title>875,914</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="480">T<title>876</title> </text>
                <line x1="366.0" y1="480" x2="358.0" y2="480"><title>876,913</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="342" y="477">G<title>877</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="334" y="480">G<title>878</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="327" y="476">T<title>879</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="328" y="466">C<title>880</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="334" y="462">A<title>881</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="341" y="460">A<title>882</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="462">T<title>883</title> </text>
                <circle cx="362.0" cy="462.0" r="1.3" fill="#000000"><title>883,912</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="454">T<title>884</title> </text>
                <circle cx="362.0" cy="454.0" r="1.3" fill="#000000"><title>884,911</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="446">T<title>885</title> </text>
                <line x1="366.0" y1="446" x2="358.0" y2="446"><title>885,910</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="437">C<title>886</title> </text>
                <line x1="366.0" y1="437" x2="358.0" y2="437"><title>886,909</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="351" y="428">G<title>887</title> </text>
                <line x1="366.0" y1="428" x2="358.0" y2="428"><title>887,908</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="341" y="422">T<title>888</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="334" y="412">G<title>889</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="331" y="400">C<title>890</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="334" y="389">C<title>891</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="340" y="379">A<title>892</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="350" y="371">G<title>893</title> </text>
                <line x1="365.0" y1="371" x2="357.0" y2="371"><title>893,900</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="350" y="362">C<title>894</title> </text>
                <line x1="365.0" y1="362" x2="357.0" y2="362"><title>894,899</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="344" y="356">C<title>895</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="352" y="349">A<title>896</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="361" y="345">C<title>897</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="371" y="349">C<title>898</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="372" y="362">G<title>899</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="372" y="371">C<title>900</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="380" y="375">G<title>901</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="387" y="383">G<title>902</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="391" y="390">T<title>903</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="393" y="400">C<title>904</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="391" y="410">A<title>905</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="387" y="418">C<title>906</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="380" y="425">A<title>907</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="428">C<title>908</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="437">G<title>909</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="446">A<title>910</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="454">T<title>911</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="463">T<title>912</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="480">A<title>913</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="489">A<title>914</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="497">C<title>915</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="506">C<title>916</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="514">C<title>917</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="524">A<title>918</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="533">A<title>919</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="381" y="528">G<title>920</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="388" y="522">T<title>921</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="394" y="516">C<title>922</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="401" y="512">A<title>923</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="407" y="506">A<title>924</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="413" y="501">T<title>925</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="421" y="496">A<title>926</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="427" y="491">G<title>927</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="434" y="487">A<title>928</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="429" y="475">A<title>929</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="431" y="416">G<title>930</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="439" y="407">C<title>931</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="450" y="398">C<title>932</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="462" y="395">G<title>933</title> </text>
                <line x1="476.0" y1="395" x2="468.0" y2="395"><title>933,1136</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="462" y="386">G<title>934</title> </text>
                <line x1="476.0" y1="386" x2="468.0" y2="386"><title>934,1135</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="462" y="378">C<title>935</title> </text>
                <line x1="476.0" y1="378" x2="468.0" y2="378"><title>935,1134</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="462" y="369">G<title>936</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="454" y="368">T<title>937</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="445" y="362">A<title>938</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="438" y="354">A<title>939</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="432" y="346">A<title>940</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="428" y="336">G<title>941</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="425" y="327">A<title>942</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="419" y="321">G<title>943</title> </text>
                <line x1="423.0" y1="315.666666667" x2="427.0" y2="310.333333333"><title>943,1052</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="413" y="316">T<title>944</title> </text>
                <line x1="416.666666667" y1="310.333333333" x2="420.333333333" y2="304.666666667"><title>944,1051</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="405" y="312">G<title>945</title> </text>
                <line x1="409.0" y1="306.0" x2="413.0" y2="300.0"><title>945,1050</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="398" y="307">T<title>946</title> </text>
                <line x1="402.0" y1="301.333333333" x2="406.0" y2="295.666666667"><title>946,1049</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="389" y="308">T<title>947</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="379" y="305">T<title>948</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="373" y="297">T<title>949</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="372" y="288">A<title>950</title> </text>
                <line x1="376.666666667" y1="282.0" x2="381.333333333" y2="276.0"><title>950,1044</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="366" y="282">G<title>951</title> </text>
                <line x1="370.0" y1="276.333333333" x2="374.0" y2="270.666666667"><title>951,1043</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="358" y="276">A<title>952</title> </text>
                <line x1="362.333333333" y1="270.333333333" x2="366.666666667" y2="264.666666667"><title>952,1042</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="352" y="270">T<title>953</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="346" y="263">C<title>954</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="340" y="255">A<title>955</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="336" y="246">C<title>956</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="333" y="237">C<title>957</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="329" y="229">C<title>958</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="327" y="219">C<title>959</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="326" y="210">C<title>960</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="324" y="200">T<title>961</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="325" y="190">C<title>962</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="326" y="181">C<title>963</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="327" y="171">C<title>964</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="330" y="162">C<title>965</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="333" y="155">A<title>966</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="338" y="146">A<title>967</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="342" y="138">T<title>968</title> </text>
                <line x1="357.0" y1="138" x2="349.0" y2="138"><title>968,1036</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="342" y="129">A<title>969</title> </text>
                <line x1="357.0" y1="129" x2="349.0" y2="129"><title>969,1035</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="342" y="121">A<title>970</title> </text>
                <line x1="357.0" y1="121" x2="349.0" y2="121"><title>970,1034</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="342" y="112">A<title>971</title> </text>
                <line x1="357.0" y1="112" x2="349.0" y2="112"><title>971,1033</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="342" y="103">G<title>972</title> </text>
                <line x1="357.0" y1="103" x2="349.0" y2="103"><title>972,1032</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="342" y="94">C<title>973</title> </text>
                <line x1="357.0" y1="94" x2="349.0" y2="94"><title>973,1031</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="335" y="89">T<title>974</title> </text>
                <line x1="335" y1="83.0" x2="335" y2="75.0"><title>974,1014</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="327" y="90">A<title>975</title> </text>
                <circle cx="327.0" cy="79.0" r="1.3" fill="#000000"><title>975,1013</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="319" y="93">A<title>976</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="310" y="93">A<title>977</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="302" y="90">A<title>978</title> </text>
                <circle cx="302.0" cy="79.0" r="1.3" fill="#000000"><title>978,1010</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="293" y="90">C<title>979</title> </text>
                <circle cx="293.0" cy="79.0" r="1.3" fill="#000000"><title>979,1009</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="285" y="90">T<title>980</title> </text>
                <line x1="285" y1="83.0" x2="285" y2="75.0"><title>980,1008</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="277" y="90">C<title>981</title> </text>
                <line x1="277" y1="83.0" x2="277" y2="75.0"><title>981,1007</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="268" y="90">A<title>982</title> </text>
                <line x1="268" y1="83.0" x2="268" y2="75.0"><title>982,1006</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="260" y="90">C<title>983</title> </text>
                <circle cx="259.0" cy="79.0" r="1.3" fill="#000000"><title>983,1005</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="251" y="90">C<title>984</title> </text>
                <line x1="251" y1="83.0" x2="251" y2="75.0"><title>984,1004</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="242" y="90">T<title>985</title> </text>
                <line x1="242.333333333" y1="83.0" x2="242.666666667" y2="76.0"><title>985,1003</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="234" y="94">G<title>986</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="223" y="95">A<title>987</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="215" y="88">G<title>988</title> </text>
                <line x1="215" y1="82.0" x2="215" y2="74.0"><title>988,999</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="205" y="88">T<title>989</title> </text>
                <line x1="205" y1="82.0" x2="205" y2="74.0"><title>989,998</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="197" y="88">T<title>990</title> </text>
                <line x1="197" y1="82.0" x2="197" y2="74.0"><title>990,997</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="189" y="92">G<title>991</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="181" y="89">T<title>992</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="175" y="84">A<title>993</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="175" y="75">A<title>994</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="180" y="68">A<title>995</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="188" y="65">A<title>996</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="197" y="69">A<title>997</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="205" y="69">A<title>998</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="215" y="69">C<title>999</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="220" y="60">T<title>1000</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="228" y="58">C<title>1001</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="237" y="61">C<title>1002</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="243" y="69">A<title>1003</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="251" y="69">G<title>1004</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="259" y="69">T<title>1005</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="268" y="69">T<title>1006</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="277" y="69">G<title>1007</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="285" y="69">A<title>1008</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="293" y="69">C<title>1009</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="302" y="69">A<title>1010</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="311" y="64">C<title>1011</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="320" y="66">A<title>1012</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="327" y="69">A<title>1013</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="335" y="69">A<title>1014</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="339" y="61">A<title>1015</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="345" y="54">T<title>1016</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="354" y="53">A<title>1017</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="362" y="55">G<title>1018</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="368" y="61">A<title>1019</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="372" y="67">C<title>1020</title> </text>
                <line x1="372" y1="82.0" x2="372" y2="74.0"><title>1020,1030</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="381" y="61">T<title>1021</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="389" y="68">A<title>1022</title> </text>
                <line x1="389" y1="82.0" x2="389" y2="74.0"><title>1022,1029</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="398" y="68">C<title>1023</title> </text>
                <line x1="398" y1="82.0" x2="398" y2="74.0"><title>1023,1028</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="407" y="67">G<title>1024</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="413" y="74">A<title>1025</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="414" y="84">A<title>1026</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="407" y="90">A<title>1027</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="398" y="89">G<title>1028</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="389" y="89">T<title>1029</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="372" y="89">G<title>1030</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="364" y="94">G<title>1031</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="364" y="103">C<title>1032</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="364" y="112">T<title>1033</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="364" y="121">T<title>1034</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="364" y="129">T<title>1035</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="364" y="138">A<title>1036</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="371" y="157">A<title>1037</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="376" y="177">C<title>1038</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="378" y="198">A<title>1039</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="379" y="219">T<title>1040</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="376" y="241">A<title>1041</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="371" y="259">T<title>1042</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="378" y="265">C<title>1043</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="386" y="270">T<title>1044</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="393" y="266">G<title>1045</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="401" y="268">A<title>1046</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="408" y="274">A<title>1047</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="412" y="282">C<title>1048</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="410" y="290">A<title>1049</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="417" y="294">C<title>1050</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="424" y="299">A<title>1051</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="431" y="305">C<title>1052</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="438" y="310">A<title>1053</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="441" y="301">A<title>1054</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="446" y="293">T<title>1055</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="454" y="283">A<title>1056</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="278">G<title>1057</title> </text>
                <line x1="477.0" y1="278" x2="469.0" y2="278"><title>1057,1098</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="269">C<title>1058</title> </text>
                <line x1="477.0" y1="269" x2="469.0" y2="269"><title>1058,1097</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="261">T<title>1059</title> </text>
                <line x1="477.0" y1="261" x2="469.0" y2="261"><title>1059,1096</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="253">A<title>1060</title> </text>
                <line x1="477.0" y1="253" x2="469.0" y2="253"><title>1060,1095</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="244">A<title>1061</title> </text>
                <line x1="477.0" y1="244" x2="469.0" y2="244"><title>1061,1094</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="236">G<title>1062</title> </text>
                <line x1="477.0" y1="236" x2="469.0" y2="236"><title>1062,1093</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="456" y="236">A<title>1063</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="450" y="229">C<title>1064</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="456" y="223">C<title>1065</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="222">C<title>1066</title> </text>
                <line x1="477.0" y1="222" x2="469.0" y2="222"><title>1066,1092</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="462" y="213">A<title>1067</title> </text>
                <line x1="477.0" y1="213" x2="469.0" y2="213"><title>1067,1091</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="456" y="206">A<title>1068</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="454" y="197">A<title>1069</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="456" y="186">C<title>1070</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="179">T<title>1071</title> </text>
                <line x1="477.0" y1="179" x2="469.0" y2="179"><title>1071,1087</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="170">G<title>1072</title> </text>
                <line x1="477.0" y1="170" x2="469.0" y2="170"><title>1072,1086</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="162">G<title>1073</title> </text>
                <line x1="477.0" y1="162" x2="469.0" y2="162"><title>1073,1085</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="153">G<title>1074</title> </text>
                <line x1="477.0" y1="153" x2="469.0" y2="153"><title>1074,1084</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="456" y="146">A<title>1075</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="454" y="135">T<title>1076</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="456" y="126">T<title>1077</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="463" y="120">A<title>1078</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="473" y="117">G<title>1079</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="482" y="120">A<title>1080</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="490" y="126">T<title>1081</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="492" y="135">A<title>1082</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="490" y="145">C<title>1083</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="153">C<title>1084</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="162">C<title>1085</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="170">C<title>1086</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="179">A<title>1087</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="490" y="186">C<title>1088</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="491" y="197">T<title>1089</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="489" y="206">A<title>1090</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="213">T<title>1091</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="222">G<title>1092</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="236">C<title>1093</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="244">T<title>1094</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="253">T<title>1095</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="261">A<title>1096</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="269">G<title>1097</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="484" y="278">C<title>1098</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="493" y="279">C<title>1099</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="501" y="283">C<title>1100</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="507" y="287">T<title>1101</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="512" y="295">A<title>1102</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="514" y="304">A<title>1103</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="514" y="311">A<title>1104</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="512" y="319">C<title>1105</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="507" y="325">C<title>1106</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="500" y="330">T<title>1107</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="492" y="333">C<title>1108</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="492" y="343">A<title>1109</title> </text>
                <line x1="492" y1="357.0" x2="492" y2="349.0"><title>1109,1132</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="500" y="343">A<title>1110</title> </text>
                <circle cx="500.0" cy="353.0" r="1.3" fill="#000000"><title>1110,1131</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="509" y="343">C<title>1111</title> </text>
                <line x1="509" y1="357.0" x2="509" y2="349.0"><title>1111,1130</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="517" y="343">A<title>1112</title> </text>
                <line x1="517" y1="357.0" x2="517" y2="349.0"><title>1112,1129</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="525" y="343">G<title>1113</title> </text>
                <line x1="525" y1="357.0" x2="525" y2="349.0"><title>1113,1128</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="534" y="343">T<title>1114</title> </text>
                <line x1="534" y1="357.0" x2="534" y2="349.0"><title>1114,1127</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="542" y="343">T<title>1115</title> </text>
                <line x1="542" y1="357.0" x2="542" y2="349.0"><title>1115,1126</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="548" y="336">A<title>1116</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="558" y="333">A<title>1117</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="568" y="334">A<title>1118</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="576" y="339">T<title>1119</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="580" y="348">C<title>1120</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="580" y="359">A<title>1121</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="576" y="367">A<title>1122</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="568" y="373">C<title>1123</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="558" y="374">A<title>1124</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="549" y="371">A<title>1125</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="542" y="364">A<title>1126</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="534" y="364">A<title>1127</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="525" y="364">C<title>1128</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="517" y="364">T<title>1129</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="509" y="364">G<title>1130</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="500" y="364">C<title>1131</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="492" y="364">T<title>1132</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="483" y="369">C<title>1133</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="483" y="378">G<title>1134</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="483" y="386">C<title>1135</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="483" y="395">C<title>1136</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="483" y="405">A<title>1137</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="498" y="427">G<title>1138</title> </text>
                <line x1="498" y1="441.0" x2="498" y2="433.0"><title>1138,1165</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="506" y="427">A<title>1139</title> </text>
                <line x1="506" y1="441.0" x2="506" y2="433.0"><title>1139,1164</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="514" y="427">A<title>1140</title> </text>
                <circle cx="514.0" cy="437.0" r="1.3" fill="#000000"><title>1140,1163</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="516" y="420">C<title>1141</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="521" y="410">A<title>1142</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="528" y="406">C<title>1143</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="536" y="407">T<title>1144</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="542" y="409">A<title>1145</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="548" y="417">C<title>1146</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="550" y="425">G<title>1147</title> </text>
                <circle cx="550.0" cy="436.0" r="1.3" fill="#000000"><title>1147,1158</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="558" y="425">A<title>1148</title> </text>
                <line x1="558.333333333" y1="432.666666667" x2="558.666666667" y2="440.333333333"><title>1148,1157</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="567" y="425">G<title>1149</title> </text>
                <line x1="567.333333333" y1="432.666666667" x2="567.666666667" y2="440.333333333"><title>1149,1156</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="576" y="425">C<title>1150</title> </text>
                <line x1="576" y1="440.0" x2="576" y2="432.0"><title>1150,1155</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="585" y="425">C<title>1151</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="590" y="432">A<title>1152</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="590" y="441">C<title>1153</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="584" y="448">A<title>1154</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="576" y="448">G<title>1155</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="568" y="448">C<title>1156</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="559" y="448">T<title>1157</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="550" y="448">T<title>1158</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="544" y="456">A<title>1159</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="537" y="460">A<title>1160</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="528" y="460">A<title>1161</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="520" y="458">A<title>1162</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="515" y="448">C<title>1163</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="506" y="448">T<title>1164</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="498" y="448">C<title>1165</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="500" y="456">A<title>1166</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="505" y="461">A<title>1167</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="510" y="467">A<title>1168</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="518" y="470">G<title>1169</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="526" y="473">G<title>1170</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="534" y="476">A<title>1171</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="543" y="479">C<title>1172</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="552" y="480">C<title>1173</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="563" y="480">T<title>1174</title> </text>
                <line x1="563" y1="495.0" x2="563" y2="487.0"><title>1174,1480</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="571" y="480">G<title>1175</title> </text>
                <line x1="571" y1="495.0" x2="571" y2="487.0"><title>1175,1479</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="480">G<title>1176</title> </text>
                <circle cx="582.0" cy="491.0" r="1.3" fill="#000000"><title>1176,1477</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="591" y="480">C<title>1177</title> </text>
                <line x1="591" y1="495.0" x2="591" y2="487.0"><title>1177,1476</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="599" y="480">G<title>1178</title> </text>
                <line x1="599" y1="495.0" x2="599" y2="487.0"><title>1178,1475</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="605" y="473">G<title>1179</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="610" y="480">T<title>1180</title> </text>
                <circle cx="610.0" cy="491.0" r="1.3" fill="#000000"><title>1180,1474</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="618" y="480">G<title>1181</title> </text>
                <line x1="618" y1="495.0" x2="618" y2="487.0"><title>1181,1473</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="627" y="480">C<title>1182</title> </text>
                <line x1="627" y1="495.0" x2="627" y2="487.0"><title>1182,1472</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="635" y="480">T<title>1183</title> </text>
                <line x1="635" y1="495.0" x2="635" y2="487.0"><title>1183,1471</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="644" y="480">T<title>1184</title> </text>
                <line x1="644" y1="495.0" x2="644" y2="487.0"><title>1184,1470</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="652" y="480">C<title>1185</title> </text>
                <line x1="652" y1="495.0" x2="652" y2="487.0"><title>1185,1469</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="661" y="480">A<title>1186</title> </text>
                <line x1="661" y1="495.0" x2="661" y2="487.0"><title>1186,1468</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="665" y="472">T<title>1187</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="670" y="465">A<title>1188</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="674" y="472">T<title>1189</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="678" y="480">C<title>1190</title> </text>
                <line x1="678.333333333" y1="487.333333333" x2="678.666666667" y2="494.666666667"><title>1190,1464</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="686" y="480">C<title>1191</title> </text>
                <line x1="686.333333333" y1="487.333333333" x2="686.666666667" y2="494.666666667"><title>1191,1463</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="694" y="480">C<title>1192</title> </text>
                <line x1="694.333333333" y1="487.333333333" x2="694.666666667" y2="494.666666667"><title>1192,1462</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="701" y="478">T<title>1193</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="708" y="475">C<title>1194</title> </text>
                <line x1="711.666666667" y1="481.0" x2="715.333333333" y2="487.0"><title>1194,1428</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="715" y="471">T<title>1195</title> </text>
                <line x1="718.666666667" y1="477.333333333" x2="722.333333333" y2="483.666666667"><title>1195,1427</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="722" y="467">A<title>1196</title> </text>
                <line x1="726.0" y1="473.0" x2="730.0" y2="479.0"><title>1196,1426</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="729" y="462">G<title>1197</title> </text>
                <circle cx="735.0" cy="471.0" r="1.3" fill="#000000"><title>1197,1425</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="737" y="458">A<title>1198</title> </text>
                <line x1="740.666666667" y1="464.0" x2="744.333333333" y2="470.0"><title>1198,1424</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="748" y="447">G<title>1199</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="436">G<title>1200</title> </text>
                <circle cx="770.0" cy="436.0" r="1.3" fill="#000000"><title>1200,1365</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="428">A<title>1201</title> </text>
                <line x1="774.0" y1="428" x2="766.0" y2="428"><title>1201,1364</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="419">G<title>1202</title> </text>
                <line x1="774.0" y1="419" x2="766.0" y2="419"><title>1202,1363</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="410">C<title>1203</title> </text>
                <line x1="774.0" y1="410" x2="766.0" y2="410"><title>1203,1362</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="402">C<title>1204</title> </text>
                <line x1="774.0" y1="402" x2="766.0" y2="402"><title>1204,1361</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="394">T<title>1205</title> </text>
                <circle cx="770.0" cy="394.0" r="1.3" fill="#000000"><title>1205,1360</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="385">G<title>1206</title> </text>
                <circle cx="770.0" cy="385.0" r="1.3" fill="#000000"><title>1206,1359</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="376">T<title>1207</title> </text>
                <line x1="774.0" y1="376" x2="766.0" y2="376"><title>1207,1358</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="368">T<title>1208</title> </text>
                <line x1="774.0" y1="368" x2="766.0" y2="368"><title>1208,1357</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="355">C<title>1209</title> </text>
                <line x1="774.0" y1="355" x2="766.0" y2="355"><title>1209,1355</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="346">T<title>1210</title> </text>
                <line x1="774.0" y1="346" x2="766.0" y2="346"><title>1210,1354</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="751" y="351">G<title>1211</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="742" y="352">T<title>1212</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="731" y="353">A<title>1213</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="721" y="353">A<title>1214</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="715" y="358">T<title>1215</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="710" y="364">C<title>1216</title> </text>
                <line x1="705.0" y1="359.0" x2="700.0" y2="354.0"><title>1216,1227</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="704" y="370">G<title>1217</title> </text>
                <line x1="699.0" y1="365.0" x2="694.0" y2="360.0"><title>1217,1226</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="703" y="381">A<title>1218</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="696" y="387">T<title>1219</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="687" y="391">A<title>1220</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="677" y="389">A<title>1221</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="671" y="383">A<title>1222</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="669" y="372">C<title>1223</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="672" y="362">C<title>1224</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="680" y="357">C<title>1225</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="689" y="355">C<title>1226</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="695" y="349">G<title>1227</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="702" y="342">A<title>1228</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="707" y="337">T<title>1229</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="706" y="328">C<title>1230</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="707" y="319">A<title>1231</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="711" y="312">A<title>1232</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="718" y="304">C<title>1233</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="727" y="300">C<title>1234</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="736" y="299">T<title>1235</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="746" y="301">C<title>1236</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="752" y="309">A<title>1237</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="313">C<title>1238</title> </text>
                <line x1="774.0" y1="313" x2="766.0" y2="313"><title>1238,1351</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="304">C<title>1239</title> </text>
                <line x1="774.0" y1="304" x2="766.0" y2="304"><title>1239,1350</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="296">A<title>1240</title> </text>
                <line x1="774.0" y1="296" x2="766.0" y2="296"><title>1240,1349</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="288">C<title>1241</title> </text>
                <line x1="774.0" y1="288" x2="766.0" y2="288"><title>1241,1348</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="279">C<title>1242</title> </text>
                <line x1="774.0" y1="279" x2="766.0" y2="279"><title>1242,1347</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="270">T<title>1243</title> </text>
                <line x1="774.0" y1="270" x2="766.0" y2="270"><title>1243,1346</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="261">C<title>1244</title> </text>
                <line x1="774.0" y1="261" x2="766.0" y2="261"><title>1244,1345</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="751" y="261">T<title>1245</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="743" y="261">T<title>1246</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="737" y="255">G<title>1247</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="737" y="247">C<title>1248</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="743" y="241">T<title>1249</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="752" y="241">C<title>1250</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="241">A<title>1251</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="233">G<title>1252</title> </text>
                <line x1="774.0" y1="233" x2="766.0" y2="233"><title>1252,1340</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="224">C<title>1253</title> </text>
                <line x1="774.0" y1="224" x2="766.0" y2="224"><title>1253,1339</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="753" y="218">C<title>1254</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="213">T<title>1255</title> </text>
                <line x1="774.0" y1="213" x2="766.0" y2="213"><title>1255,1338</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="204">A<title>1256</title> </text>
                <line x1="774.0" y1="204" x2="766.0" y2="204"><title>1256,1337</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="196">T<title>1257</title> </text>
                <circle cx="770.0" cy="196.0" r="1.3" fill="#000000"><title>1257,1336</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="188">A<title>1258</title> </text>
                <line x1="774.0" y1="188" x2="766.0" y2="188"><title>1258,1335</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="752" y="186">T<title>1259</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="752" y="177">A<title>1260</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="175">C<title>1261</title> </text>
                <line x1="774.0" y1="175" x2="766.0" y2="175"><title>1261,1334</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="167">C<title>1262</title> </text>
                <line x1="774.0" y1="167" x2="766.0" y2="167"><title>1262,1333</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="151">G<title>1263</title> </text>
                <circle cx="770.0" cy="151.0" r="1.3" fill="#000000"><title>1263,1329</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="143">C<title>1264</title> </text>
                <line x1="774.0" y1="143" x2="766.0" y2="143"><title>1264,1328</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="135">C<title>1265</title> </text>
                <line x1="774.0" y1="135" x2="766.0" y2="135"><title>1265,1327</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="124">A<title>1266</title> </text>
                <line x1="774.0" y1="124" x2="766.0" y2="124"><title>1266,1325</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="115">T<title>1267</title> </text>
                <circle cx="770.0" cy="115.0" r="1.3" fill="#000000"><title>1267,1324</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="107">C<title>1268</title> </text>
                <line x1="774.0" y1="107" x2="766.0" y2="107"><title>1268,1323</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="760" y="98">T<title>1269</title> </text>
                <circle cx="770.0" cy="98.0" r="1.3" fill="#000000"><title>1269,1322</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="757" y="89">T<title>1270</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="757" y="80">C<title>1271</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="757" y="72">A<title>1272</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="751" y="62">G<title>1273</title> </text>
                <line x1="751" y1="55.0" x2="751" y2="47.0"><title>1273,1302</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="743" y="62">C<title>1274</title> </text>
                <line x1="743" y1="55.0" x2="743" y2="47.0"><title>1274,1301</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="734" y="62">A<title>1275</title> </text>
                <circle cx="734.0" cy="51.0" r="1.3" fill="#000000"><title>1275,1300</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="725" y="62">A<title>1276</title> </text>
                <circle cx="725.0" cy="51.0" r="1.3" fill="#000000"><title>1276,1299</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="717" y="62">A<title>1277</title> </text>
                <line x1="717" y1="55.0" x2="717" y2="47.0"><title>1277,1298</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="709" y="62">C<title>1278</title> </text>
                <line x1="709" y1="55.0" x2="709" y2="47.0"><title>1278,1297</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="697" y="64">C<title>1279</title> </text>
                <line x1="690.0" y1="64" x2="682.0" y2="64"><title>1279,1289</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="697" y="73">C<title>1280</title> </text>
                <line x1="690.0" y1="73" x2="682.0" y2="73"><title>1280,1288</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="697" y="82">T<title>1281</title> </text>
                <line x1="690.0" y1="82" x2="682.0" y2="82"><title>1281,1287</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="699" y="90">G<title>1282</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="695" y="99">A<title>1283</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="685" y="101">T<title>1284</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="678" y="98">G<title>1285</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="673" y="91">A<title>1286</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="676" y="82">A<title>1287</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="676" y="73">G<title>1288</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="676" y="64">G<title>1289</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="672" y="57">C<title>1290</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="670" y="47">T<title>1291</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="674" y="38">A<title>1292</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="680" y="32">C<title>1293</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="687" y="30">A<title>1294</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="696" y="31">A<title>1295</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="703" y="34">A<title>1296</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="709" y="41">G<title>1297</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="717" y="41">T<title>1298</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="725" y="41">A<title>1299</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="734" y="41">A<title>1300</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="743" y="41">G<title>1301</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="751" y="41">C<title>1302</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="756" y="34">G<title>1303</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="763" y="29">C<title>1304</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="770" y="28">A<title>1305</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="779" y="30">A<title>1306</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="785" y="34">G<title>1307</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="790" y="42">T<title>1308</title> </text>
                <line x1="790" y1="57.0" x2="790" y2="49.0"><title>1308,1317</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="799" y="42">A<title>1309</title> </text>
                <line x1="799" y1="57.0" x2="799" y2="49.0"><title>1309,1316</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="808" y="42">C<title>1310</title> </text>
                <line x1="808" y1="57.0" x2="808" y2="49.0"><title>1310,1315</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="817" y="42">C<title>1311</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="824" y="48">C<title>1312</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="823" y="59">A<title>1313</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="817" y="64">C<title>1314</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="808" y="64">G<title>1315</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="799" y="64">T<title>1316</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="790" y="64">A<title>1317</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="783" y="64">A<title>1318</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="783" y="73">A<title>1319</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="783" y="81">G<title>1320</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="783" y="90">A<title>1321</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="98">C<title>1322</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="107">G<title>1323</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="115">T<title>1324</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="124">T<title>1325</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="787" y="130">A<title>1326</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="135">G<title>1327</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="143">G<title>1328</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="151">T<title>1329</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="789" y="152">C<title>1330</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="793" y="160">A<title>1331</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="789" y="167">A<title>1332</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="167">G<title>1333</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="175">G<title>1334</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="188">T<title>1335</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="196">G<title>1336</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="204">T<title>1337</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="213">A<title>1338</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="224">G<title>1339</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="233">C<title>1340</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="789" y="236">C<title>1341</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="793" y="243">C<title>1342</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="793" y="252">A<title>1343</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="788" y="258">T<title>1344</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="261">G<title>1345</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="270">A<title>1346</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="279">G<title>1347</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="288">G<title>1348</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="296">T<title>1349</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="304">G<title>1350</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="313">G<title>1351</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="788" y="324">C<title>1352</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="787" y="337">A<title>1353</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="346">A<title>1354</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="781" y="355">G<title>1355</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="787" y="362">A<title>1356</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="368">A<title>1357</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="376">A<title>1358</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="385">T<title>1359</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="394">G<title>1360</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="402">G<title>1361</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="410">G<title>1362</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="419">C<title>1363</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="428">T<title>1364</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="436">A<title>1365</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="780" y="444">C<title>1366</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="790" y="444">A<title>1367</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="799" y="445">T<title>1368</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="807" y="446">T<title>1369</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="814" y="451">T<title>1370</title> </text>
                <line x1="818.333333333" y1="457.0" x2="822.666666667" y2="463.0"><title>1370,1382</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="821" y="446">T<title>1371</title> </text>
                <line x1="825.333333333" y1="452.0" x2="829.666666667" y2="458.0"><title>1371,1381</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="829" y="441">C<title>1372</title> </text>
                <line x1="833.0" y1="446.333333333" x2="837.0" y2="451.666666667"><title>1372,1380</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="835" y="435">T<title>1373</title> </text>
                <line x1="839.333333333" y1="441.0" x2="843.666666667" y2="447.0"><title>1373,1379</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="842" y="430">A<title>1374</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="850" y="426">C<title>1375</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="858" y="430">C<title>1376</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="860" y="439">C<title>1377</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="855" y="446">C<title>1378</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="848" y="453">A<title>1379</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="841" y="457">G<title>1380</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="834" y="464">A<title>1381</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="827" y="469">A<title>1382</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="830" y="477">A<title>1383</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="829" y="488">A<title>1384</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="826" y="496">C<title>1385</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="821" y="503">T<title>1386</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="815" y="512">A<title>1387</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="808" y="519">C<title>1388</title> </text>
                <line x1="801.0" y1="521.0" x2="794.0" y2="523.0"><title>1388,1418</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="813" y="525">G<title>1389</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="816" y="534">A<title>1390</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="818" y="542">T<title>1391</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="817" y="552">A<title>1392</title> </text>
                <circle cx="806.0" cy="555.0" r="1.3" fill="#000000"><title>1392,1414</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="819" y="560">G<title>1393</title> </text>
                <circle cx="808.0" cy="563.0" r="1.3" fill="#000000"><title>1393,1413</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="821" y="568">C<title>1394</title> </text>
                <line x1="814.333333333" y1="570.0" x2="807.666666667" y2="572.0"><title>1394,1412</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="823" y="576">C<title>1395</title> </text>
                <line x1="816.333333333" y1="578.0" x2="809.666666667" y2="580.0"><title>1395,1411</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="826" y="584">C<title>1396</title> </text>
                <line x1="819.0" y1="585.666666667" x2="812.0" y2="587.333333333"><title>1396,1410</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="828" y="592">T<title>1397</title> </text>
                <line x1="821.333333333" y1="594.0" x2="814.666666667" y2="596.0"><title>1397,1409</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="830" y="601">T<title>1398</title> </text>
                <line x1="823.333333333" y1="603.0" x2="816.666666667" y2="605.0"><title>1398,1408</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="833" y="610">A<title>1399</title> </text>
                <line x1="825.666666667" y1="611.666666667" x2="818.333333333" y2="613.333333333"><title>1399,1407</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="839" y="615">T<title>1400</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="842" y="625">G<title>1401</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="838" y="635">A<title>1402</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="830" y="640">A<title>1403</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="820" y="640">A<title>1404</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="812" y="633">C<title>1405</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="809" y="624">T<title>1406</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="811" y="615">T<title>1407</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="810" y="607">A<title>1408</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="808" y="598">A<title>1409</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="805" y="589">G<title>1410</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="803" y="582">G<title>1411</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="801" y="574">G<title>1412</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="798" y="566">T<title>1413</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="795" y="558">C<title>1414</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="790" y="551">G<title>1415</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="787" y="543">A<title>1416</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="785" y="533">A<title>1417</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="787" y="525">G<title>1418</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="776" y="522">G<title>1419</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="766" y="515">T<title>1420</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="758" y="508">G<title>1421</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="752" y="498">G<title>1422</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="750" y="487">A<title>1423</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="748" y="476">T<title>1424</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="741" y="480">T<title>1425</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="734" y="485">T<title>1426</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="726" y="490">A<title>1427</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="719" y="493">G<title>1428</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="728" y="500">C<title>1429</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="734" y="508">A<title>1430</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="740" y="516">G<title>1431</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="743" y="525">T<title>1432</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="744" y="537">A<title>1433</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="746" y="547">A<title>1434</title> </text>
                <line x1="739.333333333" y1="550.0" x2="732.666666667" y2="553.0"><title>1434,1456</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="749" y="555">A<title>1435</title> </text>
                <line x1="742.666666667" y1="558.0" x2="736.333333333" y2="561.0"><title>1435,1455</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="753" y="562">C<title>1436</title> </text>
                <line x1="747.0" y1="565.0" x2="741.0" y2="568.0"><title>1436,1454</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="757" y="569">T<title>1437</title> </text>
                <line x1="751.0" y1="572.0" x2="745.0" y2="575.0"><title>1437,1453</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="761" y="577">A<title>1438</title> </text>
                <line x1="755.0" y1="580.0" x2="749.0" y2="583.0"><title>1438,1452</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="765" y="584">A<title>1439</title> </text>
                <line x1="759.0" y1="587.0" x2="753.0" y2="590.0"><title>1439,1451</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="770" y="590">G<title>1440</title> </text>
                <line x1="764.0" y1="593.666666667" x2="758.0" y2="597.333333333"><title>1440,1450</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="775" y="597">A<title>1441</title> </text>
                <circle cx="765.0" cy="603.0" r="1.3" fill="#000000"><title>1441,1449</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="782" y="602">G<title>1442</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="785" y="610">T<title>1443</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="784" y="619">A<title>1444</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="778" y="625">G<title>1445</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="769" y="629">A<title>1446</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="761" y="624">G<title>1447</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="756" y="617">T<title>1448</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="755" y="609">G<title>1449</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="752" y="601">C<title>1450</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="747" y="593">T<title>1451</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="743" y="586">T<title>1452</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="739" y="578">A<title>1453</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="735" y="571">G<title>1454</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="730" y="564">T<title>1455</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="726" y="556">T<title>1456</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="717" y="552">G<title>1457</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="709" y="546">A<title>1458</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="701" y="536">A<title>1459</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="696" y="525">C<title>1460</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="694" y="514">A<title>1461</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="695" y="502">G<title>1462</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="687" y="502">G<title>1463</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="679" y="502">G<title>1464</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="678" y="510">C<title>1465</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="670" y="514">C<title>1466</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="662" y="510">C<title>1467</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="661" y="502">T<title>1468</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="652" y="502">G<title>1469</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="644" y="502">A<title>1470</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="635" y="502">A<title>1471</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="627" y="502">G<title>1472</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="618" y="502">C<title>1473</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="610" y="502">G<title>1474</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="599" y="502">C<title>1475</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="591" y="502">G<title>1476</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="502">T<title>1477</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="577" y="508">A<title>1478</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="571" y="502">C<title>1479</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="563" y="502">A<title>1480</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="559" y="510">C<title>1481</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="558" y="521">A<title>1482</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="558" y="533">C<title>1483</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="559" y="544">C<title>1484</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="556">G<title>1485</title> </text>
                <line x1="576.0" y1="556" x2="568.0" y2="556"><title>1485,1566</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="565">C<title>1486</title> </text>
                <circle cx="572.0" cy="565.0" r="1.3" fill="#000000"><title>1486,1565</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="558" y="574">C<title>1487</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="582">C<title>1488</title> </text>
                <line x1="576.0" y1="582" x2="568.0" y2="582"><title>1488,1562</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="591">G<title>1489</title> </text>
                <line x1="576.0" y1="591" x2="568.0" y2="591"><title>1489,1561</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="599">T<title>1490</title> </text>
                <circle cx="572.0" cy="599.0" r="1.3" fill="#000000"><title>1490,1560</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="608">C<title>1491</title> </text>
                <line x1="576.0" y1="608" x2="568.0" y2="608"><title>1491,1559</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="555" y="616">A<title>1492</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="555" y="624">C<title>1493</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="635">C<title>1494</title> </text>
                <circle cx="572.0" cy="635.0" r="1.3" fill="#000000"><title>1494,1555</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="643">C<title>1495</title> </text>
                <line x1="576.0" y1="643" x2="568.0" y2="643"><title>1495,1554</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="651">T<title>1496</title> </text>
                <line x1="576.0" y1="651" x2="568.0" y2="651"><title>1496,1553</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="660">C<title>1497</title> </text>
                <line x1="576.0" y1="660" x2="568.0" y2="660"><title>1497,1552</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="668">C<title>1498</title> </text>
                <line x1="576.0" y1="668" x2="568.0" y2="668"><title>1498,1551</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="676">T<title>1499</title> </text>
                <line x1="576.0" y1="676" x2="568.0" y2="676"><title>1499,1550</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="685">C<title>1500</title> </text>
                <line x1="576.0" y1="685" x2="568.0" y2="685"><title>1500,1549</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="553" y="689">A<title>1501</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="550" y="696">A<title>1502</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="554" y="702">G<title>1503</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="704">T<title>1504</title> </text>
                <line x1="576.0" y1="704" x2="568.0" y2="704"><title>1504,1546</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="714">A<title>1505</title> </text>
                <line x1="575.0" y1="714" x2="567.0" y2="714"><title>1505,1545</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="723">T<title>1506</title> </text>
                <line x1="575.0" y1="723" x2="567.0" y2="723"><title>1506,1544</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="732">A<title>1507</title> </text>
                <line x1="575.0" y1="732" x2="567.0" y2="732"><title>1507,1543</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="740">C<title>1508</title> </text>
                <circle cx="571.0" cy="740.0" r="1.3" fill="#000000"><title>1508,1542</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="749">T<title>1509</title> </text>
                <circle cx="571.0" cy="749.0" r="1.3" fill="#000000"><title>1509,1541</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="757">T<title>1510</title> </text>
                <line x1="575.0" y1="757" x2="567.0" y2="757"><title>1510,1540</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="768">C<title>1511</title> </text>
                <line x1="575.0" y1="768" x2="567.0" y2="768"><title>1511,1538</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="556" y="778">A<title>1512</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="556" y="787">A<title>1513</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="795">A<title>1514</title> </text>
                <line x1="576.0" y1="795" x2="568.0" y2="795"><title>1514,1535</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="803">G<title>1515</title> </text>
                <line x1="576.0" y1="803" x2="568.0" y2="803"><title>1515,1534</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="562" y="811">G<title>1516</title> </text>
                <line x1="576.0" y1="811" x2="568.0" y2="811"><title>1516,1533</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="555" y="817">A<title>1517</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="550" y="825">C<title>1518</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="550" y="835">A<title>1519</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="554" y="842">T<title>1520</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="849">T<title>1521</title> </text>
                <line x1="575.0" y1="849" x2="567.0" y2="849"><title>1521,1529</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="859">T<title>1522</title> </text>
                <line x1="575.0" y1="859" x2="567.0" y2="859"><title>1522,1528</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="559" y="869">A<title>1523</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="561" y="878">A<title>1524</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="572" y="881">C<title>1525</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="876">T<title>1526</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="586" y="868">A<title>1527</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="859">A<title>1528</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="849">A<title>1529</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="588" y="843">A<title>1530</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="593" y="832">C<title>1531</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="590" y="820">C<title>1532</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="811">C<title>1533</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="803">C<title>1534</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="795">T<title>1535</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="587" y="787">A<title>1536</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="588" y="777">C<title>1537</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="768">G<title>1538</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="589" y="764">C<title>1539</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="757">A<title>1540</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="749">T<title>1541</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="740">T<title>1542</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="732">T<title>1543</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="723">A<title>1544</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="714">T<title>1545</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="704">A<title>1546</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="591" y="699">T<title>1547</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="591" y="690">A<title>1548</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="685">G<title>1549</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="676">A<title>1550</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="668">G<title>1551</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="660">G<title>1552</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="651">A<title>1553</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="643">G<title>1554</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="582" y="635">A<title>1555</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="589" y="630">C<title>1556</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="593" y="622">A<title>1557</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="590" y="614">A<title>1558</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="608">G<title>1559</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="599">T<title>1560</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="591">C<title>1561</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="582">G<title>1562</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="589" y="578">T<title>1563</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="589" y="571">A<title>1564</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="565">A<title>1565</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="583" y="556">C<title>1566</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="590" y="548">A<title>1567</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="602" y="547">T<title>1568</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="557">G<title>1569</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="571">G<title>1570</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="587">T<title>1571</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="620" y="587">A<title>1572</title> </text>
                <line x1="620" y1="602.0" x2="620" y2="594.0"><title>1572,1593</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="629" y="587">A<title>1573</title> </text>
                <line x1="629" y1="602.0" x2="629" y2="594.0"><title>1573,1592</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="637" y="587">G<title>1574</title> </text>
                <line x1="637" y1="602.0" x2="637" y2="594.0"><title>1574,1591</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="645" y="587">T<title>1575</title> </text>
                <line x1="645" y1="602.0" x2="645" y2="594.0"><title>1575,1590</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="654" y="587">G<title>1576</title> </text>
                <line x1="654" y1="602.0" x2="654" y2="594.0"><title>1576,1589</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="663" y="587">T<title>1577</title> </text>
                <circle cx="663.0" cy="598.0" r="1.3" fill="#000000"><title>1577,1588</title> </circle>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="671" y="587">A<title>1578</title> </text>
                <line x1="671" y1="602.0" x2="671" y2="594.0"><title>1578,1587</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="681" y="587">C<title>1579</title> </text>
                <line x1="681" y1="602.0" x2="681" y2="594.0"><title>1579,1586</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="689" y="587">T<title>1580</title> </text>
                <line x1="689" y1="602.0" x2="689" y2="594.0"><title>1580,1585</title> </line>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="698" y="587">G<title>1581</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="705" y="593">G<title>1582</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="704" y="603">A<title>1583</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="698" y="609">A<title>1584</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="689" y="609">A<title>1585</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="681" y="609">G<title>1586</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="671" y="609">T<title>1587</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="663" y="609">G<title>1588</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="654" y="609">C<title>1589</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="645" y="609">A<title>1590</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="637" y="609">C<title>1591</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="629" y="609">T<title>1592</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="620" y="609">T<title>1593</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="609">G<title>1594</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="618">G<title>1595</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="628">A<title>1596</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="636">C<title>1597</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="644">G<title>1598</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="653">A<title>1599</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="661">A<title>1600</title> </text>
                <path d="M426,462 Q415,443 426,426"></path>
                <text x="612" y="670">C<title>1601</title> </text>
            </svg>
        )
    }

}

export default Mtrnr1;