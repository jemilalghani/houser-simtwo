import React, { Component } from 'react';
import House from '../House/House';
import Wizard from '../Wizard/Wizard';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      houseList:[]
    }
    this.readHouseList=this.readHouseList.bind(this);
  }
  componentDidMount(){
    this.readHouseList();
  }
  readHouseList(){
    axios.get('/api/houses').then(res=>{
      this.setState({
        houseList:res.data
      })
    })
  }
  delete(id){
    axios.delete(`/api/houses/${id}`).then((res)=>{
      window.location.reload();
    })
  }
  render() {
    let displayHouses = this.state.houseList.map((el,i)=>{
      return (
        <div key={i}>
          <House name={el.name} address={el.address} city={el.city} state={el.state} zip={parseInt(el.zip)} house_id={el.house_id} delete={this.delete}/>
        </div>
      )
    })
    return (
      <div className="Dashboard">
        <header>
            <Link to='/wizard'><button>Add New Property</button></Link>
        </header>
        Dashboard
        {/* {displayHouses} */}
        {this.props.match.path=='/wizard' ? <Wizard match= {this.props.match} readHouseList = {this.readHouseList} /> : displayHouses}
      </div>
    );
  }
}

export default Dashboard;
