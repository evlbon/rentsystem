import React, { Component } from 'react';
import {Breadcrumb, Button, List, Card, Form,Icon, Input} from "antd";

import { withTracker } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base'
import {Link} from "react-router-dom";


class ChangePassword extends Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Accounts.changePassword(values.oldPassword, values.password, (err)=>{
          if(err)
            alert(err);
          else {
            alert("Susses");
            this.props.form.resetFields();
          }
        })
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Password do not match!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };



  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{background:"white", height:1000}}>


        <div style={{height:"15%"}}/>

        <div className="uraccount">
          <h1>Change Password</h1>
        </div>



        <div style={{margin:"0 20% 0 20%"}}>


          <div className="register">
            <h1>Change Password</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">


              <Form.Item>
                {getFieldDecorator('oldPassword', {
                  rules: [{
                    required: true, message: 'Please, enter old password!',
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Старый пароль" />
                )}
              </Form.Item>



              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please, enter new password!',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Новый пароль" />
                )}
              </Form.Item>


              <Form.Item>
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: 'Please, repeat new password!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Повторите новый пароль" />
                )}
              </Form.Item>


              <Form.Item>
                <Button type="primary" htmlType="submit" >
                  Изменить пароль
                </Button>
              </Form.Item>

            </Form>

          </div>
        </div>
      </div>
    );
  }
}


const WarpedChangePassword = Form.create({ name: 'normal_login' })(ChangePassword);

export default WarpedChangePassword
