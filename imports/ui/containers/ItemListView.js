import React from 'react';

import { Form, Input, Icon, Button } from 'antd';
import { withTracker } from 'meteor/react-meteor-data';

class ItemList extends React.Component {


    render() {

        if(this.props.currentUser){

        return (
            <div>
            <div className="items_elements">


            <div className="myItems">
            <h1 className="uraccount">My Items</h1>

            <div>
            
                <hr className="horizontalLine"></hr>

                <div className="information_about_my_item">
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Delete
                    </Button>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Modify
                    </Button>
                </div>

                <hr className="horizontalLine"></hr>
               
                <div className="information_about_my_item">
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Delete
                    </Button>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Modify
                    </Button>
                </div>

                <hr className="horizontalLine"></hr>
               
                <div className="information_about_my_item" >
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Delete
                    </Button>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Modify
                    </Button>
                </div>
            </div>
            </div>


            <div className="list_of_items">
                <div className="item_to_rent" >
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Read info
                    </Button>
                </div>
                <div className="item_to_rent" >
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Read info
                    </Button>
                </div>
                <div className="item_to_rent" >
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Read info
                    </Button>
                </div>
                <div className="item_to_rent" >
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Read info
                    </Button>
                </div>
                <div className="item_to_rent" >
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Read info
                    </Button>
                </div>
                <div className="item_to_rent" >
                    <p>Item Name 1</p>
                    <p>Price</p>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                    Read info
                    </Button>
                </div>
            
            </div>    


            </div>

            <img src="https://images.wallpaperscraft.ru/image/gora_snoubord_vershina_tuman_pokorenie_11541_1920x1080.jpg" width="100%" height="100%"/>

            </div>
        )
    }

        else
        return("")
    }
}


export default withTracker(() => {
    return {
      currentUser: Meteor.user(),
    };
  })(ItemList);
  
