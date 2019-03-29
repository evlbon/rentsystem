import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;

class EdidProfileForm extends React.Component {

  handleSubmit = (e) => {
    const sq = e.target.elements.secretQuestion.value;
    const answer = e.target.elements.answer.value;
    const phone = e.target.elements.phone.value;

    axios.put(`http://127.0.0.1:8000/profiles/${localStorage.getItem('user')}/`, {
      secret_word: sq,
      secret_word_answer: answer,
      phone: phone,
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));


    this.props.history.push('/userpage/');
  }



  render()
{


    return (
      <div style={{background:"white", height:1000}}>


        <div style={{height:"15%"}}/>

        <div className="uraccount">
          <h1>Edit additional Info</h1>
        </div>



        <div style={{margin:"0 20% 0 20%"}}>


          <div className="register">
            <h1>Register</h1>
            <Form onSubmit={this.handleSubmit}>

              <FormItem label="Secret Question">
                <Input name='secretQuestion' placeholder="Secret Question" />
              </FormItem>


              <FormItem label="Answer">
                <Input name='answer' placeholder="Answer" />
            </FormItem>


              <FormItem label="Phone">
                <Input  name="phone" placeholder="phone" />
              </FormItem>



              <FormItem>

              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Edit
              </Button>

              </FormItem>

            </Form>

          </div>
        </div>
      </div>
    )
  }
}


export default EdidProfileForm;
