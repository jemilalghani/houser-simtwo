import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateName, updateAddress, updateCity, updateState, updateZip, clear} from '../../ducks/reducer';


class Wizard extends Component {
  render() {
    const {updateName, updateAddress, updateCity, updateState, updateZip, clear} = this.props;
    return (
      <div className="Wizard">
        <header>
            <Link to='/'><button onClick={()=>clear()}>Cancel</button></Link>
        </header>
        Property Name
        <input value={this.props.name} onChange={e=>updateName(e.target.value)}></input>
        Address
        <input value={this.props.address} onChange={e=>updateAddress(e.target.value)}></input>
        City
        <input value={this.props.city} onChange={e=>updateCity(e.target.value)}></input>
        State
        <input value={this.props.state} onChange={e=>updateState(e.target.value)}></input>
        Zip
        <input value={this.props.zipcode} onChange={e=>updateZip(e.target.value)}></input>
      </div>
    );
  }
}
function mapStateToProps(state){
    return{
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode,
    }
}
export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZip, clear})(Wizard);
