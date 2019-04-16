import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';
import Items from '../../models/item';
import {Meteor} from "meteor/meteor";
import Profile from "../../models/profile";
import {Input, Checkbox, Button, Popover} from 'antd';
import UploadImage from "../components/UploadImage";


class Test extends React.Component {

  render() {
    return (
      <div style={{background: "white", padding: "100px 100px 20px 100px", minHeight: 1000}}>

        <UploadImage/>
        <img src='/mZfT69pdBRFTfQRuo.png'/>


      </div>
    )

  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    items: Items,
    profiles: Profile,
    users: Meteor.users,
  };
})(Test);
