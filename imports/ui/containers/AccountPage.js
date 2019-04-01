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

  handleDeletion(){
  
    Meteor.call('delUser',this.props.currentUser.username,(err)=>{
      if(err)
        alert(err);
      else
        this.props.history.push('/');  
    });

  }

  render() {


    if(this.props.currentUser){

      return (

        <div>

        <div className="elements">

       {/* <div style={{margin: 40, display:"inline-block", }}><Avatar shape="square" size={300} icon="user" /></div>*/}


        <div className="account_information" >

        <h1 className="uraccount">Account</h1>

          Username: {this.props.currentUser.username}<br/>
          Phone: { Profile.findOne({username:this.props.currentUser.username}).phone}<br/>
          Type: {Profile.findOne({username:this.props.currentUser.username}).type}<br/>
          Address: {Profile.findOne({username:this.props.currentUser.username}).address}<br/>
          First Name: {Profile.findOne({username:this.props.currentUser.username}).firstName}<br/>
          Last Name: {Profile.findOne({username:this.props.currentUser.username}).lastName}<br/>

        </div>

        <div  className="buttons_of_account" >
          <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleLogout.bind(this)}>
            Logout
          </Button><br/>

          <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleChangePass.bind(this)}>
            Change password
          </Button><br/>

          <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleChangeProfile.bind(this)}>
            Change profile info
          </Button><br/>

          <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleDeletion.bind(this)}>
            Delete account
          </Button><br/>

        </div> 

        </div>


        <div>
          <img src="https://images.wallpaperscraft.ru/image/gora_snoubord_vershina_tuman_pokorenie_11541_1920x1080.jpg" width="100%" height="100%"/>
        </div>

        {/*
        <div className='userpage' style={{height:1000, background: 'white', color: 'black'}}>
         
          <div style={{margin: 40, display:"inline-block", }}><Avatar shape="square" size={300} icon="user" /></div>

          <div style={{display:"inline-block"}}>

          <div className="account_information" style={{display:"inline-block"}}>

            Username {this.props.currentUser.username}<br/>
            Phone { Profile.findOne({username:this.props.currentUser.username}).phone}<br/>
            Type {Profile.findOne({username:this.props.currentUser.username}).type}<br/>
            Address {Profile.findOne({username:this.props.currentUser.username}).address}<br/>
            First Name {Profile.findOne({username:this.props.currentUser.username}).firstName}<br/>
            Last Name {Profile.findOne({username:this.props.currentUser.username}).lastName}<br/>

          </div>

          <div style={{display:"inline-block"}}>
            <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleLogout.bind(this)}>
              Logout
            </Button><br/>

            <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleChangePass.bind(this)}>
              Change password
            </Button><br/>

            <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleChangeProfile.bind(this)}>
              Change profile info
            </Button><br/>

            <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleDeletion.bind(this)}>
              Delete account
            </Button><br/>
          </div> 
          </div> 

        </div>*/} 
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


