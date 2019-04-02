import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';
import Items from '../../models/item';
import {Meteor} from "meteor/meteor";
import Profile from "../../models/profile";
import { Input } from 'antd';
import ItemList from "../components/ItemListView";

const Search = Input.Search;
class MySearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items:[]};
  }



  searchByName = (itemName) =>{
    return Items.find({itemName}).fetch()
  };

  searchByOwner = (username) =>{
    const user = this.props.users.findOne({username});
    if(user){
     const OwnerID = user._id;
      return Items.find({OwnerID}).fetch()
    }
    return []
  };

  searchByKey = (key) =>{

    let result = [];


    Items.find({}).fetch().forEach(item=>{
      const keys = item.keywords;
      if(keys.indexOf(key)!==-1)
        result.push(item)
    });

    return result
  };



  search = (value) => {
    let result = [];

    result = result.concat(this.searchByName(value));

    this.searchByOwner(value).forEach(item =>{

      if (result.findIndex(r=>{return item._id === r._id}) === -1)
        result.push(item)

    });

    this.searchByKey(value).forEach(item =>{
      if (result.findIndex(r=>{return item._id === r._id}) === -1)
        result.push(item)

    });


    // result = result.concat(this.searchByOwner(value));
    // result = result.concat(this.searchByKey(value));
    return result;

  };


  render() {
    console.log(this.props.users);
      return (
        <div style={{background: "white", padding: "100px 100px 20px 100px", minHeight: 1000}}>

          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => {
              this.setState({
                items: this.search(value)
              })

            }}
          />
          <div style={{height:50}}/>

          <ItemList items={this.state.items}  currentUser={this.props.currentUser}/>

        </div>

      )

  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    items: Items,
    profiles: Profile,
    users: Meteor.users,
  };
})(MySearch);
