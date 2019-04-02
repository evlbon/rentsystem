import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { withTracker } from 'meteor/react-meteor-data';
import Items from "../../models/item";
const FormItem = Form.Item;

class ItemForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
     
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(values);
            Meteor.call('addItem',values,this.props.currentUser._id,(err)=>{
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
                    {getFieldDecorator('category', {
                      rules: [],
                    })(
                      <Input placeholder="Category" />)}
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