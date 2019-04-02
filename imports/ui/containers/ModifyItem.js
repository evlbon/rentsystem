import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { Meteor } from 'meteor/meteor';

const FormItem = Form.Item;

class ModifyItem extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        Meteor.call('editItem',values,this.props.match.params.id,(err)=>{
          if(err)
            alert(err);
          else{
            this.props.history.push(`/item/${this.props.match.params.id}/`);
          }

        });
      }
    });
  }


  render() {
    console.log(this.props.match.params.id)

    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{background:"white", minHeight:1000, paddingBottom: 50}}>


        <div style={{height:100}}/>

        <div className="uraccount">
          <h1>Modify Item</h1>
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

                <Button type="primary" onClick={()=>{this.props.history.push(`/item/${this.props.match.params.id}/`)}} style={{marginRight: '10px'}}>
                  <Icon type={'left'}/>Back
                </Button>

                <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                  MODIFY
                </Button>

              </FormItem>

            </Form>

          </div>
        </div>
      </div>
    );
  }
}

const WrappedItemForm = Form.create()(ModifyItem);

export default WrappedItemForm;