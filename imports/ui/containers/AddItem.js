import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

class ItemForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
     
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(values)
            Meteor.call('items.insert',values,(err)=>{
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
      console.log("asddas")


        const { getFieldDecorator } = this.props.form;
        return (
          <div style={{background:"white", height:1000}}>


            <div style={{height:"15%"}}/>

            <div className="uraccount">
              <h1>Add new Item</h1>
            </div>



            <div style={{margin:"0 20% 0 20%"}}>


              <div className="register">
                <Form onSubmit={(event) => this.handleSubmit(event)} className="login-form">
                  <FormItem label="Item Name">
                    {getFieldDecorator('name', {
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

export default (WarpedItemForm);