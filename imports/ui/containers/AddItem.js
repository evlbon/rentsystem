import React from 'react';
import {Form, Input, Icon, Button, Dropdown, Menu} from 'antd';
import { withTracker } from 'meteor/react-meteor-data';
import Items from "../../models/item";
import UploadImage from "../components/UploadImage";
import Images from "../../models/image";
import Category from "../../models/category";
const FormItem = Form.Item;

class ItemForm extends React.Component {
    getApprovedCat = () => {

      const cat = Category.find({approved_add: true}, { sort: { approved_add: 1 }}).map(e => e.categoryName);
      cat.splice(0, 0, 'Any');
      return cat;
    };
    handleMenuClick = (e) => {
      this.setState({
        selectedCat: this.getApprovedCat()[e.key]
      })
    };

    constructor() {
      super();
      this.state = {
        image: undefined,
        selectedCat: 'Any',
      }
    }

    handleImage(image) {
      this.setState({image});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(values);


            let image = undefined;

            if(this.state.image){
              image = this.props.currentUser._id + Math.floor(Math.random()*100000).toString() + '.' + this.state.image.type.split('/')[1];
              Images.insert({
                ...this.state.image,
                fileName: image,
              });
            }
            Meteor.call('addItem',{...values, image, category: this.state.selectedCat},this.props.currentUser._id,(err)=>{
              if(err)
                alert(err);
              else{
                this.props.history.push('/all_items/');
              }

            });
          }
        });
      }

    render() {

      const menu = (
        <Menu onClick={(e) => this.handleMenuClick(e)}>
          {this.getApprovedCat().map((e,i) => {
            return <Menu.Item key={i}>{e}</Menu.Item>
          })}
        </Menu>
      );

        const { getFieldDecorator } = this.props.form;
        return (
          <div style={{background:"white", minHeight:1000, paddingBottom: 50}}>


            <div style={{height:100}}/>

            <div className="uraccount">
              <h1>Add new Item</h1>
            </div>



            <div style={{margin:"0 20% 100px 20%"}}>


              <div className="register">
                <Form onSubmit={(event) => this.handleSubmit(event)} className="login-form">
                  <FormItem label="Image">
                    {getFieldDecorator('img', {
                      rules: [],
                    })(
                      <UploadImage handleImage={this.handleImage.bind(this)}/>
                    )}
                  </FormItem>

                  <FormItem label="Item Name">
                    {getFieldDecorator('itemName', {
                      rules: [],
                    })(
                      <Input placeholder="Item Name" />
                    )}
                  </FormItem>


                  <FormItem label="Price">
                    {getFieldDecorator('price', {
                      rules: [],
                    })(
                      <Input placeholder="Price" />)}
                  </FormItem>


                  <FormItem label="Deposit">
                    {getFieldDecorator('deposit', {
                      rules: [],
                    })(
                      <Input placeholder="Deposit" />)}
                  </FormItem>


                  <FormItem label="Keywords">
                    {getFieldDecorator('keywords', {
                      rules: [],
                    })(
                      <Input placeholder="Keywords" />)}
                  </FormItem>


                  <FormItem label="Description">
                    {getFieldDecorator('description', {
                      rules: [],
                    })(
                      <Input placeholder="Description" />)}
                  </FormItem>

                  <FormItem label="Category">
                    <Dropdown overlay={menu}>
                      <Button style={{ marginTop: 8 }}>
                        {this.state.selectedCat} <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </FormItem>


                  <FormItem>

                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                      ADD
                    </Button>

                  </FormItem>

                </Form>

              </div>
            </div>
          </div>
);
  }
}
const WarpedItemForm = Form.create({ name: 'normal_item' })(ItemForm);


export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(WarpedItemForm);