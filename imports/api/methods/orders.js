import {Meteor} from "meteor/meteor";
import Orders, {State} from "../../models/order";
import Items from "../../models/item";
import {updateObject} from "./utility";

Meteor.methods({

  'newOrder'(OwnerID,RenterID,ItemID) {

    let ord = new Orders({
      createdAt: new Date(),
      OwnerID,
      RenterID,
      ItemID,
      state: {isAccepted: false, isCanceled: false, isCompleted: false},
    });

    ord.save();
  },

  'editOrder'(_id,chages) {
    let ord = Orders.findOne({_id});
    ord.state = new State({...updateObject(ord.state,chages)});
    // console.log(ord.state);
    ord.save();
  },


});
