import React from 'react';
import {Avatar, Button, Icon, Card} from "antd";

import { withTracker } from 'meteor/react-meteor-data';
import Profile from "../../models/profile";

import  Items  from '../../models/item';
import Item from '../components/Item';

import { Meteor } from 'meteor/meteor';
import Orders from "../../models/order";




class Order extends React.Component {

  render() {
    if (!this.props.currentUser)
      return '';


    const ord = this.props.ord;
    const item = this.props.items.findOne({_id:ord.ItemID});
    const renter = this.props.profiles.findOne({userID:ord.RenterID});

    console.log(ord);


    if (this.props.t)
      return(
        <Card style = {{width:'100%'}}>
          <p style={{color:'gray', float:'left', marginRight:10}}>{this.props.date? ord.createdAt.toLocaleString()+'  |':''}</p>


          {
            ord.state.isCompleted ?
              'Order for '+item.itemName+' was completed':

            !ord.state.isAccepted && !ord.state.isCanceled ?
              'Order for '+item.itemName+' is waiting for accepting':

             ord.state.isAccepted ? item.itemName+' was given': 'Order for '+item.itemName+' was declined'
          }

        </Card>
      );

    if(ord.state.isCompleted)
      return (
        <Card style = {{width:'100%'}}>
          <p style={{color:'gray', float:'left', marginRight:10}}>{this.props.date? ord.createdAt.toLocaleString()+'  |':''}</p>

          {renter.firstName} made order for {item.itemName}

          <div style={{float:'right'}}>
            Completed order
          </div>
        </Card>
      );


    if(!ord.state.isAccepted && !ord.state.isCanceled)
      return (
        <Card style = {{width:'100%'}}>
          <p style={{color:'gray', float:'left', marginRight:10}}>{this.props.date? ord.createdAt.toLocaleString()+'  |':''}</p>

          {renter.firstName} made order for {item.itemName}

          <div style={{float:'right'}}>
            <Button onClick={() => Meteor.call('editOrder',ord._id,{isAccepted: true})}>Accept</Button>
            <Button type={'danger'} onClick={() => Meteor.call('editOrder',ord._id,{isCanceled: true})}>Decline</Button>
          </div>
          </Card>
      );
    if(ord.state.isAccepted)
      return (
        <Card style = {{width:'100%'}}>
          <p style={{color:'gray', float:'left', marginRight:10}}>{this.props.date? ord.createdAt.toLocaleString()+'  |':''}</p>

          {renter.firstName} made order for {item.itemName}

          <div style={{float:'right'}}>
            <Button onClick={() => Meteor.call('editOrder',ord._id,{isCompleted: true})}>Complete</Button>
          </div>
        </Card>
      );

    if(ord.state.isCanceled)
      return (
        <Card style = {{width:'100%'}}>
          <p style={{color:'gray', float:'left', marginRight:10}}>{this.props.date? ord.createdAt.toLocaleString()+'  |':''}</p>

          {renter.firstName} made order for {item.itemName}

          <div style={{float:'right'}}>
            Declined order
          </div>
        </Card>
      );

    return''
  }
}


export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    profiles: Profile,
    items: Items,
    orders: Orders.find({}).fetch(),
  };
})(Order);


