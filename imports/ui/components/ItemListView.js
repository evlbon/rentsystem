import React from 'react';
import {List, Avatar, Icon} from 'antd';
import {withTracker} from 'meteor/react-meteor-data';
import Item from "./Item";

class ItemList extends React.Component {


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
                pageSize: 16,
              }}
              dataSource={this.props.items}
              renderItem={item => (
                <List.Item>
                  <Item item={item}/>
                </List.Item>
              )}
            />
      )
    }

    else
      return ("")
  }
}


export default ItemList

