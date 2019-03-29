import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import {withRouter} from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
const FormItem = Form.Item;

class ProfileForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        Meteor.call('editProfile',this.props.currentUser._id,values,(err)=>{
          if(err)
            alert(err);
          else{
            this.props.history.push('/userpage/');
          }

        });
      }
    });
    // this.props.history.push('/userpage/');
  }



  render() {


    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{background:"white", height:1000}}>


        <div style={{height:"15%"}}/>

        <div className="uraccount">
          <h1>Addition Info</h1>
        </div>



        <div style={{margin:"0 20% 0 20%"}}>


          <div className="register">
            <h1>Register</h1>

            <Form onSubmit={(event) => this.handleSubmit(event)} className="login-form">


              <FormItem label="Secret Question">
                {getFieldDecorator('question', {
                  rules: [],
                })(
                  <Input placeholder="Secret Question" />
                )}
              </FormItem>


              <FormItem label="Answer">
                {getFieldDecorator('answer', {
                  rules: [],
                })(
                  <Input placeholder="Answer" />
                )}
            </FormItem>


              <FormItem label="Phone">
                {getFieldDecorator('phone', {
                  rules: [],
                })(
                  <Input placeholder="Phone" />
                )}
              </FormItem>



              <FormItem>

              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Change profile
              </Button>

              </FormItem>

            </Form>

          </div>
        </div>
      </div>
    );
  }
}



const WarpedProfileForm = Form.create({ name: 'normal_profile' })(ProfileForm);


export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(WarpedProfileForm);
