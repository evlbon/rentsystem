import React from 'react';
import {Avatar, Button} from "antd";

import { withTracker } from 'meteor/react-meteor-data';
import Profile from "../../models/profile";


class UserPage extends React.Component {



  handleLogout(){
    Meteor.logout();
    this.props.history.push('/');
  }


  handleChangePass(){
    this.props.history.push('/changePass/');
  }

  handleChangeProfile(){
    this.props.history.push('/setprofile/');
  }


  render() {


    if(this.props.currentUser){
      const profile = Profile.findOne({});
      return (
        <div className='userpage' style={{height:1000, background: 'white', color: 'black'}}>
          {/*<h1>This page is not completed</h1>*/}
          <div style={{margin: 40, display:"inline-block"}}><Avatar shape="square" size={300} icon="user" /></div>

          <div style={{display:"inline-block"}}>

            Username is {this.props.currentUser.username}<br/>
            Phone {profile.phone}<br/>

            <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleLogout.bind(this)}>
              Logout
            </Button><br/>

            <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleChangePass.bind(this)}>
              Change password
            </Button><br/>

            <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleChangeProfile.bind(this)}>
              Change profile info
            </Button><br/>
          </div>


        </div>
      );
    }

    else
      return("")
  }
}


export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(UserPage);


