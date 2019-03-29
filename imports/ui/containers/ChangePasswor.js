import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;

class ChangePassword extends React.Component {

  handleSubmit = (e) => {
    const p1 = e.target.elements.p1.value;
    const p2 = e.target.elements.p2.value;

    axios.post('http://127.0.0.1:8000/rest-auth/password/change/', {
      new_password1: p1,
      new_password2: p2,
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));
    this.props.history.push('/login/');
  }



  test(){

    axios.post('http://localhost:8000/rest-auth/password/reset/confirm/', {
      token : localStorage.getItem('token'),
      uid : "9",
      new_password1: "8d2g1101",
      new_password2: "8d2g1101",
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));


  }



  render() {

    this.test();
    // console.log(localStorage.getItem('token'))


    return (
      <div style={{background:"white", height:1000}}>


        <div style={{height:"15%"}}/>

        <div className="uraccount">
          <h1>Change Password</h1>
        </div>



        <div style={{margin:"0 20% 0 20%"}}>


          <div className="register">
            <h1>Register</h1>
            <Form onSubmit={this.handleSubmit}>

              <FormItem label="New Password">
                <Input name='p1' placeholder="New Password" />
              </FormItem>


              <FormItem label="Repeat">
                <Input name='p2' placeholder="Repeat" />
            </FormItem>



              <FormItem>

              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Register
              </Button>

              </FormItem>

            </Form>

          </div>
        </div>
      </div>
    );
  }
}


export default ChangePassword;
