
// List of all tRNA genes
export const TRNA_GENES = [
    'MT-TA',
    'MT-TT',
    'MT-TW',
    'MT-TY',
    'MT-TV',
    'MT-TS1',
    'MT-TS2',
    'MT-TP',
    'MT-TF',
    'MT-TK',
    'MT-TL1',
    'MT-TL2',
    'MT-TI',
    'MT-TH',
    'MT-TG',
    'MT-TQ',
    'MT-TE',
    'MT-TC',
    'MT-TD',
    'MT-TN',
    'MT-TM',
    'MT-TR'
];

// List of all rRNA genes
export const RRNA_GENES = [
    'MT-RNR1',
    'MT-RNR2'
];

// List of genes on the reverse strand
export const GENES_REVERSE_STRAND = [
    "MT-TQ",
    "MT-TA",
    "MT-TN",
    "MT-TC",
    "MT-TY",
    "MT-TS1",
    "MT-TE",
    "MT-TP"
];

// Match all genes to their respective regions
export const ALL_GENE_COORDINATES = {
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


// Match all RNA-encoding genes to their respective regions
export const RNA_GENE_COORDINATES = {
    'MT-TF': [577,647],
    'MT-RNR1': [648,1601],
    'MT-TV':  [1602,1670],
    'MT-RNR2':[1671, 3229],
    'MT-TL1':[3230, 3304],
    'MT-TI':[4263,4331],
    'MT-TQ':[4329,4400],
    'MT-TM':[4402,4469],
    'MT-TW':[5512,5579],
    'MT-TA':[5587,5655],
    'MT-TN':[5657,5729],
    'MT-TC':[5761,5826],
    'MT-TY':[5826,5891],
    'MT-TS1':[7446,7514],
    'MT-TD':[7518,7585],
    'MT-TK':[8295,8364],
    'MT-TG':[9991,10058],
    'MT-TR':[10405,10469],
    'MT-TH':[12138,12206],
    'MT-TS2': [12207,12265],
    'MT-TL2': [12266,12336],
    'MT-TE': [14674,14742],
    'MT-TT': [15888,15953],
    'MT-TP': [15956,16023],
};

// Match all protein-encoding genes to their respective regions
export const PROTEIN_GENE_COORDINATES = {
    'MT-ND1':[3307,4262],
    'MT-ND2':[4470,5511],
    'MT-CO1':[5904,7445],
    'MT-CO2':[7586,8269],
    'MT-ATP8':[8366,8572],
    'MT-ATP6':[8527,9207],
    'MT-CO3':[9207,9990],
    'MT-ND3':[10059,10404],
    'MT-ND4L':[10470,10766],
    'MT-ND4':[10760,12137],
    'MT-ND5': [12337,14148],
    'MT-ND6': [14149,14673],
    'MT-CYB': [14747,15887],
};