import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import RnaPage from './RnaPage';
import GeneTool from './GeneTool';
import TrnaSVG from './TrnaSVG';
import RrnaSVG from './RrnaSVG';
import GeneDropDown from './GeneDropDown';

export default function Routes() {
  return (
    <Switch>
        <Route exact path='/' component={About} />
        <Route path='/rna-page' component={RnaPage} />
        <Route path='/gene-tool' component={GeneTool} />
        <Route path='/dropdowntest' component={GeneDropDown} />

        <Route
            exact
            path="/gene/:gene"
            render={({ match }) => {
              return (
                <TrnaSVG
                  gene={match.params.gene}
                />
              )
            }}
          />

        <Route
            exact
            path="/variant/:variantId"
            render={({ match }) => {
              return (
                <TrnaSVG
                  variant={match.params.variant}
                />
              )
            }}
          />
        
    </Switch>
  );
}