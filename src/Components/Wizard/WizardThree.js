import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { updateMortgage, updateRent, clear} from '../../ducks/reducer';
import axios from 'axios';


class WizardThree extends Component {

  addTo(){
    axios.post('/api/houses', {name:this.props.name, address:this.props.address, 
        city:this.props.city, state:this.props.state, zip:this.props.zipcode,
        image_url:this.props.image_url, monthly_mortgage:this.props.monthly_mortgage,
        desired_rent: this.props.desired_rent}).then(res=>{
      this.props.readHouseList(res)
    }).catch(error=>{
      console.error("error in addTo /api/houses", error)
    })
    this.props.clear();
    window.location.reload();
  }
  render() {
    const { updateMortgage, updateRent, clear} = this.props;
    return (
      <div className="WizardThree">
        <header>
            <Link to='/'><button onClick={()=>clear()}>Cancel</button></Link>
        </header>
        Monthly Mortgage
        <input value={this.props.monthly_mortgage} onChange={e=>updateMortgage(e.target.value)}></input>
        Desired Rent 
        <input value={this.props.desired_rent} onChange={e=>updateRent(e.target.value)}></input>
        <Link to ='/'><button onClick={()=>this.addTo()}>Complete</button></Link>
      </div>
    );
  }
}
function mapStateToProps(state){
    return{
        name:state.name,
        address:state.address,
        city:state.city,
        state:state.state,
        zipcode: state.zipcode,
        image_url:state.image_url,
        monthly_mortgage:state.monthly_mortgage,
        desired_rent:state.desired_rent
    }
}
export default connect(mapStateToProps, {updateMortgage, updateRent, clear})(WizardThree);
