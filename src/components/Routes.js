import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import TrnaPage from './TrnaPage';
import RrnaPage from './RrnaPage';
import GeneTool from './GeneTool';
import TrnaSVG from './TrnaSVG';
import RrnaSVG from './RrnaSVG';
import VisualizationPage from './VisualizationPage';
import TrnaVisualizationSVG from './TrnaVisualizationSVG';
import RrnaVisualizationSVG from './RrnaVisualizationSVG';
import { Page, PageHeading } from './Page'
import { RNA_GENE_COORDINATES } from './params/params.js';


// list of all protein-coding genes
const ProteinGeneDict = {
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

const isProteinGene = (coor) => {
  var coorInt = parseInt(coor);
  for (var gene in ProteinGeneDict){
    if(ProteinGeneDict [gene][0] <= coorInt && coorInt <= ProteinGeneDict [gene][1])
      return true;
  }
  return false;
}


export default function Routes() {
  return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/trna-page' component={TrnaPage} />
        <Route path='/rrna-page' component={RrnaPage} />
        <Route path='/mtdna' component={GeneTool} />
        <Route exact path='/trna-visualization' render={(props) => <VisualizationPage rnaType="tRNA" {...props} />} />
        <Route exact path='/rrna-visualization' render={(props) => <VisualizationPage rnaType="rRNA" {...props} />} />
        <Route exact path='/about-page' component={About} />

        <Route
            exact
            path="/:gene"
            render={({ match }) => {

              if(match.params.gene[3]=='T'){
                return (
                  <TrnaSVG
                    gene={match.params.gene}
                  />
                )
              } 
              else {
                return (
                  <RrnaSVG
                    gene={match.params.gene}
                  />
                )
              }
            }}
          />

        
        <Route
            exact
            path="/variant/:variant"
            render={({ match }) => {
              //m.5761A>G

              // console.log(match.params.variant)

              // check variant format
              // code here

              const VARIANT_ID_REGEX = /^m-([0-9]+)-([acgt]+)-([acgt]+)$/i
              const regex_match = VARIANT_ID_REGEX.exec(match.params.variant)

              if(!regex_match){
                return(
                  <Page>
                  <PageHeading>Error resolving variant</PageHeading>
                  <p>Variant is not in the format m-pos-ref-alt</p>
                  </Page>
                )                
              }

              //const [chrom, pos, ref, alt] = match.params.variant.split('-')
              //const variant_reformat = chrom + "." + pos + ref + ">" + alt

              if(parseInt(regex_match[1]) < 1 || parseInt(regex_match[1]) > 16569){
                return(
                  <Page>
                  <PageHeading>Error resolving variant</PageHeading>
                  <p>Variant position: {regex_match[1]} is outside the coordinate range 1-16569</p>
                  </Page>
                )                                
              }

              const variant_reformat = "m." + regex_match[1] + regex_match[2] + ">" + regex_match[3]


              // console.log(variant_reformat)
              var variantCor = variant_reformat.replace(/\D/g, "")

              var newGene = null;
              for(var key in RNA_GENE_COORDINATES){
                  if(variantCor>=RNA_GENE_COORDINATES[key][0]&&variantCor<=RNA_GENE_COORDINATES[key][1]){
                      newGene = key;
                  }
              }

              // console.log(newGene)

              // check gene
              // code here

              if(newGene === null){
                if(isProteinGene(variantCor))
                  return(
                    <Page>
                    <PageHeading>Error resolving variant</PageHeading>
                    <p>Visualization for protein-coding genes not available. MitImpact is a database for non-synonymous variants in human mitochondrial protein-coding genes, available at <a href="https://mitimpact.css-mendel.it/" target="_blank">https://mitimpact.css-mendel.it/</a>.</p>
                    </Page>
                  )
                else
                  return(
                    <Page>
                    <PageHeading>Error resolving variant</PageHeading>
                    <p>Visualization for non-coding regions not available. See the <a href="https://www.mitovisualize.org/mtdna" target="_blank">mtDNA tool</a> for visualization of a base/variant or region in the circular mtDNA.</p>
                    </Page>
                  )
              }
              else if(newGene[3]=='T'){
                return (
                  <TrnaSVG
                    gene={newGene}
                    variant={variant_reformat}

                  />
                )
              } 
              else {
                return (
                  <RrnaSVG
                    gene={newGene}
                    variant={variant_reformat}

                  />
                )
              }

            }}
          />

        <Route
            exact
            path="/rna-visualization/:gene"
            render={({ match }) => {
                // console.log(match.params.gene);

                if(match.params.gene in ProteinGeneDict){
                  return(
                    <Page>
                      <PageHeading>Error</PageHeading>
                      <p>Visualization for protein-coding genes not available. MitImpact is a database for non-synonymous variants in human mitochondrial protein-coding genes, available at <a href="https://mitimpact.css-mendel.it/" target="_blank">https://mitimpact.css-mendel.it/</a>.</p>
                    </Page>
                  )
                }


                if(match.params.gene[3]=='T'){
                    return (
                      <TrnaVisualizationSVG
                        gene={match.params.gene}
                        rnaType="tRNA"
                      />
                    )
                }
                else {
                    return (
                      <RrnaVisualizationSVG
                        gene={match.params.gene}
                        rnaType="rRNA"
                      />
                    )
                }
            }}
         />


       
    </Switch>
  );
}