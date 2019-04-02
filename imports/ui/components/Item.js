import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withRouter} from "react-router-dom";
import {Card} from 'antd';
import {withTracker} from 'meteor/react-meteor-data';

const {Meta} = Card;

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

    if (this.props.currentUser) {
      return (

        <Card
          hoverable
          onClick={()=>{this.props.history.push(`/item/${this.props.item._id}/`);}}
          style={{width: 300}}
          bordered={false}
          cover={<img alt="example" src="https://cenomaniya.ru/image/cache/data/skateboard/ckrider-900x900.jpg"/>}
        >
          <Meta
            title={this.props.item.itemName}
            description={`${this.props.item.price}$`}
          />

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
})(withRouter(Item));

//export default withRouter(Item)