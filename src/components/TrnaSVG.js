import React from 'react';
import Mtta from './tRNA/MT-TA';
import Mttt from './tRNA/MT-TT';
import Mtty from './tRNA/MT-TY';
import Mttw from './tRNA/MT-TW';
import Mttv from './tRNA/MT-TV';
import Mtts1 from './tRNA/MT-TS1';
import Mtts2 from './tRNA/MT-TS2';
import Mttp from './tRNA/MT-TP';
import Mttf from './tRNA/MT-TF';
import Mttk from './tRNA/MT-TK';
import Mttl1 from './tRNA/MT-TL1';
import Mttl2 from './tRNA/MT-TL2';
import Mtti from './tRNA/MT-TI';
import Mtth from './tRNA/MT-TH';
import Mttg from './tRNA/MT-TG';
import Mttq from './tRNA/MT-TQ';
import Mtte from './tRNA/MT-TE';
import Mttc from './tRNA/MT-TC';
import Mttd from './tRNA/MT-TD';
import Mttn from './tRNA/MT-TN';
import Mttm from './tRNA/MT-TM';
import Mttr from './tRNA/MT-TR';

//match each gene to its respective component
const tRNAs = {
    'MT-TA': Mtta,
    'MT-TT': Mttt,
    'MT-TW': Mttw,
    'MT-TY': Mtty,
    'MT-TV': Mttv,
    'MT-TS1':Mtts1,
    'MT-TS2':Mtts2,
    'MT-TP':Mttp,
    'MT-TF':Mttf,
    'MT-TK':Mttk,
    'MT-TL1':Mttl1,
    'MT-TL2':Mttl2,
    'MT-TI':Mtti,
    'MT-TH':Mtth,
    'MT-TG':Mttg,
    'MT-TQ':Mttq,
    'MT-TE':Mtte,
    'MT-TC':Mttc,
    'MT-TD':Mttd,
    'MT-TN':Mttn,
    'MT-TM':Mttm,
    'MT-TR':Mttr
};

const loc = {
    'MT-TF': [577,647],
    'MT-RNR1': [648,1601],
    'MT-TV':  [1602,1670],
    'MT-RNR2':[1671, 3229],
    'MT-TL1':[3230, 3304],
    'MT-ND1':[3307,4262],
    'MT-TI':[4263,4331],
    'MT-TQ':[4329,4400],
    'MT-TM':[4402,4469],
    'MT-ND2':[4470,5511],
    'MT-TW':[5512,5579],
    'MT-TA':[5587,5655],
    'MT-TN':[5657,5729],
    'MT-TC':[5761,5826],
    'MT-TY':[5826,5891],
    'MT-CO1':[5904,7445],
    'MT-TS1':[7446,7514],
    'MT-TD':[7518,7585],
    'MT-CO2':[7586,8269],
    'MT-TK':[8295,8364],
    'MT-ATP8':[8366,8572],
    'MT-ATP6':[8527,9207],
    'MT-CO3':[9207,9990],
    'MT-TG':[9991,10058],
    'MT-ND3':[10059,10404],
    'MT-TR':[10405,10469],
    'MT-ND4L':[10470,10766],
    'MT-ND4':[10760,12137],
    'MT-TH':[12138,12206],
    'MT-TS2': [12207,12265],
    'MT-TL2': [12266,12336],
    'MT-ND5': [12337,14148],
    'MT-ND6': [14149,14673],
    'MT-TE': [14674,14742],
    'MT-CYB': [14747,15887],
    'MT-TT': [15888,15953],
    'MT-TP': [15956,16023],
};

class TrnaSVG extends React.Component{

    render() {
    
        //if a variant has been inputted
        var variant;
        if(this.props.variant!==undefined){
            variant = this.props.variant;
            var variantCor = variant.replace(/\D/g, "");
        }
        
        //if a gene name has been selected
        var gene;
        if(this.props.gene!==undefined){
            gene = this.props.gene;
        } 
        // else {
        //     for(var key in loc){
        //         if(variant>=loc[key][0]&&variant<=loc[key][1]){
        //             gene = key;
        //         }
        //     }
        // }

        
        if(tRNAs[gene]){
            return(
                React.createElement(tRNAs[gene],{variant:variant, variantCor: variantCor, gene:gene})
            )
        } else {
             return null
        }
    }
    
}

export default TrnaSVG;

