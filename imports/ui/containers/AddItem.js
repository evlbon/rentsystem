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
                this.props.history.push('/items/');
              }
    
            });
          }
        });
      }


      render() {


        const { getFieldDecorator } = this.props.form;
        return (
            <div style = {{background: "white", padding: "70px 0 0 0"}}>

            <Form onSubmit={(event) => this.handleSubmit(event)} className="login-form">
              <FormItem label="Item Name">
              {getFieldDecorator('name', {
                  rules: [],
                })(
                  <Input style = {{ boxSizing: "border-box",
                    padding: "10px 0",
                    background: "transparent",
                    border: "none",
                    width: "100%",
                    paddingRight: "80px",
                    fontSize: "1em"}}
                    placeholder="Item Name" />
                )}
              </FormItem>


              <FormItem label="Price">
              {getFieldDecorator('price', {
                  rules: [],
                })(
                  <Input style = {{ boxSizing: "border-box",
                    padding: "10px 0",
                    background: "transparent",
                    border: "none",
                    width: "100%",
                    paddingRight: "80px",
                    fontSize: "1em"}}
                   placeholder="Price" />)}
            </FormItem>


              <FormItem label="Deposit">
              {getFieldDecorator('deposit', {
                  rules: [],
                })(
                  <Input style = {{ boxSizing: "border-box",
                    padding: "10px 0",
                    background: "transparent",
                    border: "none",
                    width: "100%",
                    paddingRight: "80px",
                    fontSize: "1em"}} 
                    placeholder="Deposit" />)}
              </FormItem>


              <FormItem label="Keywords">
              {getFieldDecorator('keywords', {
                  rules: [],
                })(
                  <Input style = {{ boxSizing: "border-box",
                    padding: "10px 0",
                    background: "transparent",
                    border: "none",
                    width: "100%",
                    paddingRight: "80px",
                    fontSize: "1em"}}
                    placeholder="Keywords" />)}
              </FormItem>


              <FormItem label="Description">
              {getFieldDecorator('description', {
                  rules: [],
                })(
                  <Input style = {{ boxSizing: "border-box",
                    padding: "10px 0",
                    background: "transparent",
                    border: "none",
                    width: "100%",
                    paddingRight: "80px",
                    fontSize: "1em"}}
                  placeholder="Description" />)}
              </FormItem>

              <FormItem>

                <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                  ADD
                </Button>

              </FormItem>

          </Form>
</div>
);
  }
}
const WarpedItemForm = Form.create({ name: 'normal_item' })(ItemForm);

export default (WarpedItemForm);