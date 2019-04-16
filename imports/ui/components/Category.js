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
    //this.props.history.push(`/viewitem/${this.props.item._id}/`);
    //this.setState({ item_Id: this.props.item._id });
  }


//{(this.props.currentUser.username == this.props.item.username)?
  render() {

    if (this.props.currentUser) {
      return (

        <Card
          hoverable
          //onClick={()=>{this.props.history.push(`/item/${this.props.item._id}/`);}}
          style={{width: 300}}
          bordered={false}
        >
          <Meta
            title={this.props.category.categoryName}
          />
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
          {/*<p>*/}
            {/*<strong>Owner: </strong>*/}
            {/*{this.props.item.usernameOwner}*/}
          {/*</p>*/}
          {/*<p>*/}
            {/*<strong>Price: </strong>*/}
            {/*{this.props.item.price}*/}
          {/*</p>*/}
          {/*<p>*/}
            {/*<strong>Deposit: </strong>*/}
            {/*{this.props.item.deposit}*/}
          {/*</p>*/}
          {/*<p>*/}
            {/*<strong>Description: </strong>*/}
            {/*{this.props.item.description}*/}
          {/*</p>*/}

          {/*<button style={{marginTop: '10px'}} onClick={this.handleViewItem.bind(this)}>*/}
            {/*VIEW*/}
          {/*</button>*/}
          {/*<br/>*/}

          {/*<button style={{marginTop: '10px'}} onClick={this.deleteThisItem.bind(this)}>*/}
            {/*DELETE*/}
          {/*</button>*/}
          {/*<br/>*/}
          {/*<button style={{marginTop: '10px'}} onClick={this.handleModifyItem.bind(this)}>*/}
            {/*MODIFY*/}
          {/*</button>*/}
          {/*<br/>*/}

        </Card>


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