import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import {withRouter} from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import Items from "../../models/item";
import ItemList from "../components/ItemListView";
const FormItem = Form.Item;

class AllItems extends React.Component {

  render() {
    console.log(this.props.items);


    return (

      <ItemList items={this.props.items}  currentUser={this.props.currentUser}/>
    );
  }
}



export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    items: Items.find({}).fetch()
  };
})(AllItems);
