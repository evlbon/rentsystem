import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
//import axios from 'axios';
//import { connect } from 'react-redux';
//import { NavLink } from 'react-router-dom';
//import * as actions from '../store/actions/auth';

import { withTracker } from 'meteor/react-meteor-data';

const FormItem = Form.Item;

class ChangePassword extends React.Component {

  handleSubmit = (e) => {
    const p1 = e.target.elements.p1.value;
    const p2 = e.target.elements.p2.value;

    Meteor.call('chPassword', this.props.currentUser._id, p1, (err)=>{
    });

    this.props.history.push('/login/');

  }



  /*test(){

    axios.post('http://localhost:8000/rest-auth/password/reset/confirm/', {
      token : localStorage.getItem('token'),
      uid : "9",
      new_password1: "8d2g1101",
      new_password2: "8d2g1101",
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));


  }*/


  render() {

   // this.test();
    // console.log(localStorage.getItem('token'))


    return (

      <div>
      <div className="small_elements">

      <div >
        <h1 className="uraccount">Change password</h1>
      </div>


      <div className="register">
            <Form onSubmit={this.handleSubmit}>

              <FormItem >
                <Input name='p1' placeholder="New Password" />
              </FormItem>


              <FormItem >
                <Input name='p2' placeholder="Repeat" />
            </FormItem>



              <FormItem>

              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Save
              </Button>

              </FormItem>

            </Form>

          </div>


    </div>



      <div>
        <img src="https://images.wallpaperscraft.ru/image/gora_snoubord_vershina_tuman_pokorenie_11541_1920x1080.jpg" width="100%" height="100%"/>
      </div>


      {/*
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
      </div>*/} </div>
    );
  }
}


export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(ChangePassword);
