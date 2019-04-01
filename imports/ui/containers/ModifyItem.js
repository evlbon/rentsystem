import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { Meteor } from 'meteor/meteor';

const FormItem = Form.Item;

class ModifyItem extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    //const name = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(this.props.match.params.itemId)
        Meteor.call('items.edit', this.props.match.params.itemId, values,(err)=>{
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
      <div style={{background:"white", height:1000}}>
      
        <div style={{margin:"0 20% 0 20%"}}>


          <div className="register">
            <h1>Modify Item</h1>

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
                  SAVE CHANGES
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