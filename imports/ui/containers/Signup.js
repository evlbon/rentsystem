import React from 'react';
import { Form, Input, Icon, Button } from 'antd';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Meteor.call('addUser',
        values.userName, 
        values.email, 
        values.phone,
        values.address,
        values.firstName,
        values.lastName, (err)=>
        {
          if(err)
            alert(err);
          else{
            this.props.history.push('/');
          }

        });
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
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
            <h1 className="uraccount">Registration</h1>
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
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }, {
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('phone', {
                  rules: [],
                })(
                  <Input placeholder="Phone" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('address', {
                  rules: [],
                })(
                  <Input placeholder="Address" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('firstName', {
                  rules: [],
                })(
                  <Input placeholder="First Name" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('lastName', {
                  rules: [],
                })(
                  <Input placeholder="Last Name" />
                )}
              </FormItem>


              <FormItem>

                <Button type="primary" style={{marginRight: '10px'}} onClick={this.handleBack.bind(this)}>
                  <Icon type="arrow-left" />LogIn
                </Button>

              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Register
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
            <h1>Register</h1>
            <Form onSubmit={this.handleSubmit}>

              <FormItem>
                  {getFieldDecorator('userName', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }, {
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('phone', {
                  rules: [],
                })(
                  <Input placeholder="Phone" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('address', {
                  rules: [],
                })(
                  <Input placeholder="Address" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('firstName', {
                  rules: [],
                })(
                  <Input placeholder="First Name" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('lastName', {
                  rules: [],
                })(
                  <Input placeholder="Last Name" />
                )}
              </FormItem>


              <FormItem>

                <Button type="primary" style={{marginRight: '10px'}} onClick={this.handleBack.bind(this)}>
                  <Icon type="arrow-left" />LogIn
                </Button>

              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Register
              </Button>

              </FormItem>

            </Form>

          </div>
        </div>
      </div>
                */}

      </div>

    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
