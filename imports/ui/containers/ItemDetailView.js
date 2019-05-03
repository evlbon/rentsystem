import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';
import Items from '../../models/item';
import {Button, Icon} from "antd";
import {Meteor} from "meteor/meteor";
import Profile from "../../models/profile";
import Images from "../../models/image";

class ViewItem extends React.Component {
  increase(userID){
    Meteor.call('rate',userID,this.props.currentUser._id,1)
  }

  decrease(userID){
    Meteor.call('rate',userID,this.props.currentUser._id,-1)
  }



  render() {
    console.log("asd");

    const item = this.props.items.findOne({_id: this.props.match.params.id});

    if (item) {
      const owner = this.props.profiles.find(r => r.userID === item.OwnerID);
      const rating = owner.wasRated.find(r=> r.userID === this.props.currentUser._id);
      // console.log(owner.wasRated.find( r => r.userID === this.props.currentUser._id))

      const img = Images.findOne({ name : item.image});

      return (
        <div style={{background: "white", padding: "200px 50px 20px 200px", minHeight: 1000}}>

          {img?
            <img style={{width: '45%'}} alt="Image"
                 src={'/'+img._id+img.extensionWithDot}
            />:
            <img style={{width: '45%'}} alt="example"
                 src="https://lightwidget.com/widgets/empty-photo.jpg"
            />
          }

          <div style={{
            float: 'right',
            width: '55%',
            padding: '5% 20px 20px 10%',
            font: "normal 15px/1.5 Avenir",
            color: 'black'
          }}>
            <h1 style={{font: "normal 50px/0.5 Verdana, Gadget, sans-serif"}}>{item.itemName}</h1>
            <p style={{color:'gray',font: "normal 15px/0.5 Avenir",}}>
              {item.price}₽/{item.deposit}₽
            </p>



            {item.OwnerID === this.props.currentUser._id ?
              <div>
                <Button type='primary' style={{marginTop: '10px'}} onClick={() => {
                  Meteor.call('delItem', this.props.match.params.id);
                }}>
                  DELETE
                </Button>
                {' '}
                <Button type='primary' style={{marginTop: '10px'}} onClick={() => {
                  this.props.history.push(`/edit_item/${this.props.match.params.id}/`)
                }}>
                  MODIFY
                </Button>

                <br/>

              </div> :
              <Button type={'primary'}
                      style={{width:'30%', height:40, margin:'10px 0 10px 0',font: "normal 18px/1.5 Avenir"}}
                      onClick={()=>{Meteor.call('newOrder', owner.userID, this.props.currentUser._id, item._id)}}

              >Rent</Button>

            }

            <p>
              Description<br/>
              {item.description}
            <br/>
              Owner:
              {` ${owner.firstName} ${owner.lastName} (${this.props.users.findOne({_id:owner.userID}).username})` }
              {item.OwnerID !== this.props.currentUser._id ?
                <div>
                  Rating of owner: {owner.rating+'  '}
                  <Icon type="like" onClick={()=>this.increase(item.OwnerID)} theme={rating && rating.rate === 1? "twoTone":''} />
                  <Icon type="dislike" onClick={()=>this.decrease(item.OwnerID)} theme={rating && rating.rate === -1? "twoTone":''}/></div>
                :''}


              <br/>Key Words:

              {' '+item.keywords}
                <br/>Category:
                {' '+item.category}
            </p>

          </div>

        </div>
      )
    }

    else return ("")
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    items: Items,
    profiles: Profile.find().fetch(),
    users: Meteor.users,
  };
})(ViewItem);
