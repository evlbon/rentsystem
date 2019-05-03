import React from 'react';
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import UserCard from "../components/UserCard";
import {withRouter} from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import Profile from "../../models/profile";

const { Meta } = Card;

class UserList extends React.Component {


  render() {
    // console.log(this.state.current)
    const current = this.props.profiles.find((p)=>{return p.userID===this.props.currentUser._id});

    if(current.type !== 'admin')
      return '';


    return (
      <div style={{minHeight:"900px", background:"white", padding:"70px 0 0 0"}}>


        {
          this.props.profiles && this.props.currentUser?

          this.props.profiles.map((user)=>(
            <UserCard key={user.username} user={user} current={current}/>
          )):""
        }


      </div>
    )
  }
}


export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    profiles: Profile.find({}).fetch(),
  };
})(UserList);