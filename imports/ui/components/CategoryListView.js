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
              size="large"
              grid={{
                gutter: 32, xs: 1, sm: 2, md: 8, lg: 4, xl: 4, xxl: 3,
              }}
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
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

