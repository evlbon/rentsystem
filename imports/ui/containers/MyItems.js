import Item from '../components/Item';

import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import  Items  from '../../models/item';
 
// App component - represents the whole app
class MyItems extends Component {
     

  renderItems() {
    myItems = this.props.items;
    myItems = myItems.filter(item => item.usernameOwner === this.props.currentUser.username)
    return myItems.map((item) => (
      <Item key={item._id} item={item} />
    ));
  }


  render() {
    if(this.props.currentUser){
    return (
      <div style = {{background: "white", padding: "70px 0 0 0"}}>
        <ul style = {{ margin: 0, padding: 0, background: "white"}}>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
  else
  return("")
}
}



export default withTracker(() => {
    return {
        items: Items.find({}).fetch(),
        currentUser: Meteor.user(),
    };
  })(MyItems);
