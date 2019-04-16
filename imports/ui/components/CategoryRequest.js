import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { withTracker } from 'meteor/react-meteor-data';
import Category from "../../models/category";
const FormItem = Form.Item;

class CategoryForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(values);
            Meteor.call('create_category', values, this.props.currentUser._id, (err)=>{
              if(err)
                alert(err);
              else{
                this.props.history.push('/userpage/');
              }
    
            });
          }
        });
      }


      render() {

        const { getFieldDecorator } = this.props.form;
        return (
                <Form onSubmit={(event) => this.handleSubmit(event)} layout='inline'>

                  <FormItem label="Add new category">
                    {getFieldDecorator('name', {
                      rules: [],
                    })(
                      <Input placeholder="Category Name" />
                    )}
                  </FormItem>

                  <FormItem>
                    {getFieldDecorator('description', {
                      rules: [],
                    })(
                      <Input placeholder="Description" />
                    )}
                  </FormItem>

                  <FormItem>

                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                      ADD
                    </Button>

                  </FormItem>

                </Form>
);
  }
}
const CategoryRequest = Form.create({ name: 'normal_item' })(CategoryForm);


export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(CategoryRequest);