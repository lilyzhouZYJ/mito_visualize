import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import TrnaPage from './TrnaPage';
import RrnaPage from './RrnaPage';
import GeneTool from './GeneTool';
import TrnaSVG from './TrnaSVG';
import RrnaSVG from './RrnaSVG';
import GeneDropDown from './GeneDropDown';
import VisualizationPage from './VisualizationPage';
import TrnaVisualizationSVG from './TrnaVisualizationSVG';
import RrnaVisualizationSVG from './RrnaVisualizationSVG';

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
        {/*
        <Route
            exact
            path="/:gene/:variant"
            render={({ match }) => {
              return (
                <TrnaSVG
                  variant={match.params.variant}
                  variantCor={match.params.variant.replace(/\D/g, "")}
                  gene={match.params.gene}
                />
              )
            }}
          />
          */} 

        <Route
            exact
            path="/rna-visualization/:gene"
            render={({ match }) => {
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