import React from 'react';
import { Form, Input, Icon, Button, List } from 'antd';
import { withTracker } from 'meteor/react-meteor-data';
import Category from "../../models/category";
import CategoryRequest from "../components/CategoryRequest";
import {Meteor} from "meteor/meteor";

class Cat extends React.Component {
  handleDel(name) {
    Meteor.call('request_del_cat', name );
  }
  render(){
    return(
      <div>
        <div style={{width: 100, display: 'inline-block'}}>
          {this.props.cat.categoryName}
        </div>
        <div style={{width: 200, display: 'inline-block'}}>
          Status: {this.props.cat.approved_add? <span style={{color:'green'}}>Confirmed</span>:<span style={{color:'red'}}>Not confirmed</span> }
        </div>


        <div style={{float:'right'}}><Button type='danger' onClick={this.handleDel.bind(this,this.props.cat.categoryName)}>Del</Button></div>

      </div>
    )
  }
}


class MyCategories extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        Meteor.call('create_category', values, (err)=>{
          if(err)
            alert(err);

        });
      }
    });
  }



  render() {

    return this.props.currentUser?(
      <div style={{background:"white", minHeight:1000, paddingBottom: 50}}>


        <div style={{height:100}}/>

        <List
          header={<h1>Categories</h1>}
          footer={<div><CategoryRequest/></div>}
          bordered
          itemLayout="vertical"
          dataSource={this.props.categories.find({OwnerID:this.props.currentUser._id}).fetch()}
          renderItem={category => (
            <List.Item>
              <Cat cat = {category}/>
            </List.Item>
          )}
        />

      </div>
    ):'';
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    categories: Category,
  };
})(MyCategories);