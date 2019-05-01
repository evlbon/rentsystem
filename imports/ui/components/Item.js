import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withRouter} from "react-router-dom";
import {Card} from 'antd';
import {withTracker} from 'meteor/react-meteor-data';
import Images from "../../models/image";
import Profile from "../../models/profile";

const {Meta} = Card;

class Item extends Component {

  render() {

    if (this.props.currentUser) {
      const img = Images.findOne({ name : this.props.item.image});
      let path = "https://cenomaniya.ru/image/cache/data/skateboard/ckrider-900x900.jpg";
      if (img)
        path = '/'+img._id+img.extensionWithDot;
      return (

        <Card
          hoverable
          onClick={()=>{this.props.history.push(`/item/${this.props.item._id}/`);}}
          style={{width: 300}}
          bordered={false}
          cover={<img alt="example" src={path}/>}
        >
          <Meta
            title={this.props.item.itemName}
            description={`${this.props.item.price}₽`}
          />

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
