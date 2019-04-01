import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import  Items  from '../../models/item';

class ViewItem extends React.Component {

  item = this.props.items.find((item)=>{return item._id === this.props.match.params.itemId})
  render() {

    <div>
        <li style = {{ position: "relative", listStyle: "none", padding: "15px",
        borderBottom: "#eee solid 1px" }}>
            <p>
                <strong>Owner: </strong> 
                {item.usernameOwner}
            </p>
            <p>
                <strong>Item name: </strong>
                {item.itemName}
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
        </li>
    </div>
  }
}

export default withTracker(() => {
    return {
        items: Items.find({}).fetch(),
    };
  })(ViewItem);
