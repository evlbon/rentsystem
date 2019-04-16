import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withRouter} from "react-router-dom";
import {Card} from 'antd';
import {withTracker} from 'meteor/react-meteor-data';
import { Form, Input, Icon, Button } from 'antd';

const {Meta} = Card;

class Category extends Component {

  addCategory() {
    Meteor.call('approve_add_cat', this.props.category._id);
  }

  denyAddCategory() {
    Meteor.call('approve_del_cat', this.props.category._id);
  }

  deleteCategory() {
    Meteor.call('approve_del_cat', this.props.category._id);
}
  denyDeleteCategory() {
    Meteor.call('deny_del_cat', this.props.category._id);
  }


//{(this.props.currentUser.username == this.props.item.username)?
  render() {

    if (this.props.currentUser) {
      return (

        <div style={{height:40}}>
          {this.props.category.categoryName}
          <div style={{float:'right'}}>
            {this.props.category.request_del_cat === true ?
              <Button onClick={this.deleteCategory.bind(this)}>Delete</Button>
              : ""
            }
            {this.props.category.request_del_cat === true ?
              <Button onClick={this.denyDeleteCategory.bind(this)}>Deny deletion</Button>
              : ""
            }
            {this.props.category.approved_add === false ?
              <Button onClick={this.addCategory.bind(this)}>Add</Button>
              : ""
            }
            {this.props.category.approved_add === false ?
              <Button onClick={this.denyAddCategory.bind(this)}>Deny addition</Button>
              : ""
            }
          </div>
        </div>


      );
    }
    else
      return ("")
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(withRouter(Category));

//export default withRouter(Item)