import React, { Component } from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <header>
            <Link to='/wizard'><button>Add New Property</button></Link>
        </header>
        Dashboard
        <House/>
        
      </div>
    );
  }
}

export default Dashboard;
