import React from 'react';
import { Form, Input, Icon, Button } from 'antd';

const FormItem = Form.Item;

class ProfileForm extends React.Component {

  handleSubmit = (e) => {
    this.props.history.push('/userpage/');
  }



  render() {


    return (
      <div style={{background:"white", height:1000}}>


        <div style={{height:"15%"}}/>

        <div className="uraccount">
          <h1>Addition Info</h1>
        </div>



        <div style={{margin:"0 20% 0 20%"}}>


          <div className="register">
            <h1>Register</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">

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



const WarpedProfileForm = Form.create({ name: 'normal_login' })(ProfileForm);

export default WarpedProfileForm
