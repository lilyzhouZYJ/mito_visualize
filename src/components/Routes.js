import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Import components */
import Home from './Home';
import About from './About';
import GeneTool from './GeneTool';
import VariantPage from './VariantPage/VariantPage';
import VariantSVGPage from './VariantPage/VariantSVGPage';
import VisualizationPage from './VisualizationPage';
import TrnaVisualizationSVG from './TrnaVisualizationSVG';
import RrnaVisualizationSVG from './RrnaVisualizationSVG';
import { Page, PageHeading } from './Page'
import { RNA_GENE_COORDINATES, PROTEIN_GENE_COORDINATES } from './params/params.js';

/* Check if a coordinate is in a protein-encoding gene */
const isProteinGene = (coor) => {
    var coorInt = parseInt(coor);
    for (var gene in PROTEIN_GENE_COORDINATES) {
    if(PROTEIN_GENE_COORDINATES[gene][0] <= coorInt 
        && coorInt <= PROTEIN_GENE_COORDINATES[gene][1])
        return true;
    }
    return false;
}

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/trna-page' render={(props) => <VariantPage rnaType="tRNA" {...props} />} />
            <Route path='/rrna-page' render={(props) => <VariantPage rnaType="rRNA" {...props} />} />
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
                            <VariantSVGPage rnaType='tRNA' gene={match.params.gene} />
                        )
                    } else {
                        return (
                            <VariantSVGPage rnaType='rRNA' gene={match.params.gene} />
                        )
                    }
                }}
            />
            
            <Route
                exact
                path="/variant/:variant"
                render={({ match }) => {
                    // Check variant format
                    const VARIANT_ID_REGEX = /^m-([0-9]+)-([acgt]+)-([acgt]+)$/i
                    const regex_match = VARIANT_ID_REGEX.exec(match.params.variant)

                    if(!regex_match){
                        // Error page
                        return(
                            <Page>
                                <PageHeading>Error resolving variant</PageHeading>
                                <p>Variant is not in the format m-pos-ref-alt</p>
                            </Page>
                        )                
                    }

                    // Check coordinate range
                    if(parseInt(regex_match[1]) < 1 || parseInt(regex_match[1]) > 16569){
                        // Error page
                        return(
                            <Page>
                                <PageHeading>Error resolving variant</PageHeading>
                                <p>Variant position: {regex_match[1]} is outside the coordinate range 1-16569</p>
                            </Page>
                        )                                
                    }

                    const variant_reformat = "m." + regex_match[1] + regex_match[2] + ">" + regex_match[3]
                    var variantCor = variant_reformat.replace(/\D/g, "")

                    // Check which gene the variant is in
                    var newGene = null;
                    for(var key in RNA_GENE_COORDINATES){
                        if(variantCor >= RNA_GENE_COORDINATES[key][0] && variantCor <= RNA_GENE_COORDINATES[key][1]){
                            newGene = key;
                        }
                    }

                    if(newGene === null){
                        // Error
                        if(isProteinGene(variantCor))
                            return(
                                <Page>
                                    <PageHeading>Error resolving variant</PageHeading>
                                    <p>
                                        Visualization for protein-coding genes not available. 
                                        MitImpact is a database for non-synonymous variants in 
                                        human mitochondrial protein-coding genes, available at&nbsp;
                                        <a href="https://mitimpact.css-mendel.it/" target="_blank">
                                            https://mitimpact.css-mendel.it/
                                        </a>.
                                    </p>
                                </Page>
                            )
                        else
                            return(
                                <Page>
                                    <PageHeading>Error resolving variant</PageHeading>
                                    <p>
                                        Visualization for non-coding regions not available. See the&nbsp;
                                        <a href="https://www.mitovisualize.org/mtdna" target="_blank">
                                            mtDNA tool
                                        </a>&nbsp;
                                        for visualization of a base/variant or region in the circular mtDNA.
                                    </p>
                                </Page>
                            )
                    } else if (newGene[3]=='T') {
                        return (
                            <VariantSVGPage
                                rnaType='tRNA'
                                gene={newGene}
                                variant={variant_reformat}
                            />
                        )
                    } else {
                        return (
                            <VariantSVGPage
                                rnaType='rRNA'
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
                    if(match.params.gene in PROTEIN_GENE_COORDINATES){
                        // Error
                        return(
                            <Page>
                                <PageHeading>Error</PageHeading>
                                <p>
                                    Visualization for protein-coding genes not available. 
                                    MitImpact is a database for non-synonymous variants in 
                                    human mitochondrial protein-coding genes, available at&nbsp;
                                    <a href="https://mitimpact.css-mendel.it/" target="_blank">
                                        https://mitimpact.css-mendel.it/
                                    </a>.
                                </p>
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
    )
}