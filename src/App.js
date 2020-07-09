import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import 'materialize-css/dist/css/materialize.min.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';  //bind react to Apollo

// apollo client setup
const client = new ApolloClient({
  uri: 'http://34.92.100.56:4000/graphql' //endpoint that Apollo will make request/queries to
})

class App extends React.Component{
    
  render() {
      return (
        <ApolloProvider client={client}>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Routes />
            </div>
          </BrowserRouter>
        </ApolloProvider>
      );
  }

}

export default App;
