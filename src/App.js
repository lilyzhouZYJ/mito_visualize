import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import Navbar from './components/Navbar';
import MitoNavbar from './components/MitoNavbar';
import Routes from './components/Routes';
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import ApolloClient from 'apollo-boost';
//import {ApolloProvider} from 'react-apollo';  //bind react to Apollo

/*
// apollo client setup
const client = new ApolloClient({
  uri: 'http://34.92.100.56:4000/graphql'
})
*/

class App extends React.Component{
    
  render() {
      return (
          <BrowserRouter>
            <div className="App">
              <MitoNavbar />
              <Routes />
            </div>
          </BrowserRouter>
      );
  }

}

export default App;
