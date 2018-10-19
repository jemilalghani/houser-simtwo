import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImg, clear} from '../../ducks/reducer';


class WizardTwo extends Component {

  render() {
    const {updateImg, clear} = this.props;
    return (
      <div className="WizardTwo">
        <header>
            <Link to='/'><button onClick={()=>clear()}>Cancel</button></Link>
        </header>
        Image URL
        <input placeholder={this.props.image_url} onChange={e=>updateImg(e.target.value)}></input>
        <Link to='/wizardthree'><button>Next Step</button></Link>
      </div>
    );
  }
}
function mapStateToProps(state){
    return{
        image_url:state.image_url
    }
}
export default connect(mapStateToProps, {updateImg, clear})(WizardTwo);
