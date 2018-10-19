import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';
import House from './Components/House/House';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
