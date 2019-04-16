import React from 'react';
import {List, Avatar, Icon} from 'antd';
import {withTracker} from 'meteor/react-meteor-data';
import Category from "./Category";

class CategoryList extends React.Component {


  render() {
      
    console.log(this.props.currentUser);
    if (this.props.currentUser) {

      return (
            <List
              itemLayout="vertical"
              bordered
              pagination={{
                pageSize: 8,
              }}
              dataSource={this.props.categories}
              renderItem={category => (
                <List.Item>
                  <Category category={category}/>
                </List.Item>
              )}
            />
      )
    }

    else
      return ("")
  }
}


export default CategoryList

