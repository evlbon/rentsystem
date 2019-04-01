import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import  Items  from '../../models/item';

class ViewItem extends React.Component {


  render() {
    console.log("asd");

    const item = this.props.items.findOne({_id:this.props.match.params.id});
    if(item)

    return(
      <div style={{background: "white", padding: "200px 20px 20px 20px",minHeight:1000}}>

        <img style={{ width:'40%'}} alt="example" src="https://cenomaniya.ru/image/cache/data/skateboard/ckrider-900x900.jpg"/>

        <div style={{float: 'right', width:'60%', padding: '5% 20px 20px 10%',font:"normal 20px/0.5 Verdana, Gadget, sans-serif", color:'black'}}>
          <h1 style={{font:"normal 50px/0.5 Verdana, Gadget, sans-serif"}}>{item.itemName}</h1>

          <p>
            <strong>Owner: </strong>
            {item.usernameOwner}
          </p>

          <p>
            <strong>Price: </strong>
            {item.price}
          </p>
          <p>
            <strong>Deposit: </strong>
            {item.deposit}
          </p>
          <p>
            <strong>Description: </strong>
            {item.description}
          </p>
        </div>

      </div>

    )
    else return("")
  }
}

export default withTracker(() => {
    return {
        items: Items
    };
  })(ViewItem);
