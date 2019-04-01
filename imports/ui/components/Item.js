import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'; 
import {withRouter} from "react-router-dom";

import { withTracker } from 'meteor/react-meteor-data';
 
class Item extends Component {

    deleteThisItem() {
      Meteor.call('items.remove', this.props.item._id);
    }

    handleModifyItem() {
        this.props.history.push(`/edititem/${this.props.item._id}/`);
        //this.setState({ item_Id: this.props.item._id });
    }

    handleViewItem() {
      this.props.history.push(`/viewitem/${this.props.item._id}/`);
      //this.setState({ item_Id: this.props.item._id });
  }


//{(this.props.currentUser.username == this.props.item.username)?
  render() {
    if(this.props.currentUser){
      return (
          <li style = {{ position: "relative", listStyle: "none", padding: "15px",
            borderBottom: "#eee solid 1px" }}>

   
      <p>
        <strong>Owner: </strong> 
        {this.props.item.usernameOwner}
      </p>
      <p>
      <strong>Item name: </strong>
        {this.props.item.itemName}
      </p>
      <p>
      <strong>Price: </strong>
        {this.props.item.price}
      </p>
      <p>
      <strong>Deposit: </strong>
        {this.props.item.deposit}
      </p>
      <p>
      <strong>Description: </strong>
        {this.props.item.description}
      </p>
      
      <button style={{marginTop: '10px'}} onClick={this.handleViewItem.bind(this)}>
        VIEW
      </button><br/>

      <button style={{marginTop: '10px'}} onClick={this.deleteThisItem.bind(this)}>
        DELETE
      </button><br/>
      <button style={{marginTop: '10px'}} onClick={this.handleModifyItem.bind(this)}>
        MODIFY
      </button><br/>
      </li>

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
})(withRouter(Item));

//export default withRouter(Item)