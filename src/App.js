import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component{
    
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Routes />
          </div>
        </BrowserRouter>
      );
  }

}

export default App;
