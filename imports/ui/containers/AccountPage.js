import React from 'react';
import {Avatar, Button, Icon} from "antd";

import { withTracker } from 'meteor/react-meteor-data';
import Profile from "../../models/profile";

import  Items  from '../../models/item';
import Item from '../components/Item';

import { Meteor } from 'meteor/meteor';


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

  showRequests(){
  }


  render() {


    if(this.props.currentUser){
      const profile = Profile.findOne({userID: this.props.currentUser._id});
      return (
        <div className='userpage' style={{height:1000, background: 'white', color: 'black'}}>

          <div style={{height:'40%', overflow: 'hidden'}}>
            <div style={{margin:'-200px 0 0 0'}}>
              <img src='https://i.ibb.co/89zJtwS/Untitled-1.png' alt="1" width="100%"/>
            </div>
            <div className='hello'>
              Hello {profile.firstName}<br/>
              <a onClick={this.handleLogout.bind(this)} className='logout'>Logout <Icon type="arrow-right" /></a>


            </div>

          </div>



          <div className='userpage2'>
            <div style={{margin: '0 0 0 10%', float:'left'}}>

              <h1 style={{font:"normal 15px/0.5 Verdana Bold, Gadget, sans-serif"}}>ORDER HISTORY</h1>
              You have not placed any orders yet.
            </div>
            <div style={{float:'right', padding:'0 20% 0 0'}}>

              <h1 style={{font:"normal 15px/0.5 Verdana Bold, Gadget, sans-serif"}}>ACCOUNT DETAILS</h1>
              First name<br/> <h1 style={{font:"normal 25px/0.5 Verdana Bold, Gadget, sans-serif"}}>{profile.firstName}</h1>
              Last name<br/> <h1 style={{font:"normal 25px/0.5 Verdana Bold, Gadget, sans-serif"}}>{profile.lastName}</h1>
              Username <br/> <h1 style={{font:"normal 25px/0.5 Verdana Bold, Gadget, sans-serif"}}>{this.props.currentUser.username}</h1>
              
              {/*Phone<br/> <h1 style={{font:"normal 25px/0.5 Verdana Bold, Gadget, sans-serif"}}>{profile.phone}</h1>*/}
              
              Type<br/> <h1 style={{font:"normal 25px/0.5 Verdana Bold, Gadget, sans-serif"}}>{profile.type}</h1>

              <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleChangePass.bind(this)}>
                Change password
              </Button><br/>
              <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={this.handleChangeProfile.bind(this)}>
                Change profile info
              </Button><br/>

              <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={()=>{this.props.history.push('/my_items/')}}>
                My Items
              </Button><br/>

              {this.props.profiles.findOne({userID: this.props.currentUser._id}).type === "renter-owner" ?
              <div>
                <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={()=>{this.props.history.push('/my_categories/')}} >
                  Add category
                </Button><br/>

              <Button type="primary" htmlType="submit" style={{marginTop: '10px'}} onClick={()=>{this.props.history.push('/delcat/')}} >
                Delete category
              </Button><br/>
              </div>
                : ""
              }
               {this.props.profiles.findOne({userID: this.props.currentUser._id}).type === "admin" ?
              <div>
              <Button type="primary" htmlType="submit" style={{marginTop: '10px'}}  onClick={()=>{this.props.history.push('/requests/')}} >
                Category requests
              </Button><br/>
              </div>
                : ""
              }
          
          

            </div>
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
    profiles: Profile,
  };
})(UserPage);


