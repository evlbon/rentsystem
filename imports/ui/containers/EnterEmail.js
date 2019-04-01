import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import Profile from "../../models/profile";

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        Meteor.call('sendEmail',values.userName);
    });
  }

  handleBack = () => {
    this.props.history.push('/login/');
  }


  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
      <div className="small_elements">

      <div >
        <h1 className="uraccount">Enter username</h1>
      </div>


      <div className="register">

            <Form onSubmit={this.handleSubmit}>

              <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                      )}
                    </FormItem>

          
              <FormItem>

              <Button type="primary" style={{marginRight: '10px'}} onClick={this.handleBack.bind(this)}>
                  <Icon type="arrow-left" />LogIn
              </Button>

              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Send email to reset password
              </Button>

              </FormItem>

            </Form>

          </div>



    </div>



      <div>
        <img src="https://images.wallpaperscraft.ru/image/gora_snoubord_vershina_tuman_pokorenie_11541_1920x1080.jpg" width="100%" height="100%"/>
      </div>
      {/*<div style={{background:"white", height:1000}}>


        <div style={{height:"15%"}}/>

        <div className="uraccount">
          <h1>Your Account</h1>
        </div>



        <div style={{margin:"0 20% 0 20%"}}>


          <div className="register">
            <h1>Enter User Name</h1>
            <Form onSubmit={this.handleSubmit}>

              <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                      )}
                    </FormItem>

          
              <FormItem>

              <Button type="primary" style={{marginRight: '10px'}} onClick={this.handleBack.bind(this)}>
                  <Icon type="arrow-left" />LogIn
              </Button>

              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Send email to reset password
              </Button>

              </FormItem>

            </Form>

          </div>
        </div>
                      </div>*/} </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;