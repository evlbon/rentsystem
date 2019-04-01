import React from 'react';
import {List, Avatar, Icon} from 'antd';
import {withTracker} from 'meteor/react-meteor-data';
import Item from "./Item";

class ItemList extends React.Component {


  render() {
    console.log(this.props.currentUser);

    if (this.props.currentUser) {

      return (
        <div style={{background: "white", padding: "100px 0 20px 0", minHeight:1000}}>
          <div style={{textAlign: "center", font: "font: normal 50px/1 Arial Black, Gadget, sans-serif"}}>
            <h1>RENTSHOP</h1>
          </div>


          <div style={{margin: "0 30px 0 30px"}}>
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
              dataSource={this.props.items}
              renderItem={item => (
                <List.Item>
                  <Item item={item}/>
                </List.Item>
              )}
            />
          </div>
        </div>
      )
    }

    else
      return ("")
  }
}


export default ItemList

