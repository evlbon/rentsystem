import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';
import Items from '../../models/item';
import {Meteor} from "meteor/meteor";
import Profile from "../../models/profile";
import {Input, Checkbox, Button, Popover, Dropdown, Menu, Icon} from 'antd';
import ItemList from "../components/ItemListView";
import Category from "../../models/category";

const Search = Input.Search;
const ANY_CAT = 'Any category';

class MySearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      byName: true,
      byOwner: true,
      byKeyWords: true,
      selectedCat: ANY_CAT,
    };
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

  getApprovedCat = () => {

    const cat = Category.find({approved_add: true}, { sort: { approved_add: 1 }}).map(e => e.categoryName);
    cat.splice(0, 0, 'Any category');
    return cat;
  };

   handleMenuClick = (e) => {
     this.setState({
         selectedCat: this.getApprovedCat()[e.key]
     })
   };




    search = (value) => {
    let result = [];

    if (value) {
        if (this.state.byName)
            result = result.concat(this.searchByName(value));

        if (this.state.byOwner)
            this.searchByOwner(value).forEach(item => {

                if (result.findIndex(r => {
                        return item._id === r._id
                    }) === -1)
                    result.push(item)

            });

        if (this.state.byKeyWords)
            this.searchByKey(value).forEach(item => {
                if (result.findIndex(r => {
                        return item._id === r._id
                    }) === -1)
                    result.push(item)

            });
    } else {
        result = Items.find({}).fetch()
    }

    if (this.state.selectedCat !== ANY_CAT) {
        result = result.filter(item =>{
            return item.category === this.state.selectedCat
        });
    }


    // result = result.concat(this.searchByOwner(value));
    // result = result.concat(this.searchByKey(value));
    return result;

  };


  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }


  render() {

      const menu = (
          <Menu onClick={(e) => this.handleMenuClick(e)}>
              {this.getApprovedCat().map((e,i) => {
                  return <Menu.Item key={i}>{e}</Menu.Item>
              })}
          </Menu>
      );

      return (
        <div style={{background: "white", padding: "100px 100px 20px 100px", minHeight: 1000}}>


          <div style={{float:'left',width:'94%'}}>
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
          </div>
          <div style={{float:'right',width:'5%'}}>
            <Popover placement="bottom" title={'Choose'} content={<div>

              <Checkbox defaultChecked onChange={e=>{this.setState({byName:e.target.checked})}}>By name</Checkbox><br/>
              <Checkbox defaultChecked onChange={e=>{this.setState({byOwner:e.target.checked})}}>By owner</Checkbox><br/>
              <Checkbox defaultChecked onChange={e=>{this.setState({byKeyWords:e.target.checked})}}>By key words</Checkbox>
              <br/>

              <Dropdown overlay={menu}>
                  <Button style={{ marginTop: 8 }}>
                      {this.state.selectedCat} <Icon type="down" />
                  </Button>
              </Dropdown>

            </div>} trigger="click">
              <Button type='primary' style={{height:40, width:'100%'}}>By</Button>
            </Popover>
          </div>



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
