import Items from "../../models/item";
import {Profile} from "../../models/profile"
import {Meteor} from "meteor/meteor";
import {updateObject} from "./utility";


Meteor.methods({

    'addItem' ( values,OwnerID ) {

        console.log(OwnerID);

        let item = Items.insert({
            itemName: values.itemName,
            OwnerID,
            price: parseInt(values.price),
            deposit: parseInt(values.deposit),
            category: values.category,
            keywords: values.keywords,
            description: values.description,
        });
    },

  'delItem'(itemID) {
    Items.remove({_id: itemID})
  },


  'editItem'(values,id) {
    let item = Items.findOne({_id: id});
    console.log(item);

    item = new Items({...updateObject(item,values)});

    item.save();
  },



});

//Meteor.call('addItem', {ownerID:12, name:'velosiped', price=10, keywords=['q', 'ww']});