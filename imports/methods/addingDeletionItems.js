import {Item} from "../models/item";
import {Meteor} from "meteor/meteor";

let _itemID = 0;

Meteor.methods({

    'addItem' ({ ownerID, name, price=30, cost=50, keywords=[] }) {

        let item = Item.insert({
            itemID: _itemID,
            name: name,
            ownerID: ownerID,
            price: price,
            cost: cost,
            keywords: keywords,
        });
        _itemID++;

        console.log('qwqqe');
        return item;
    },

    'findByKeyword' ({ keyword }) {

        return Item.findAll({keywords: keyword});
    },

    'findByUsername' ({ username }) {
        let user = Profile.findOne({username: username});
        if (user === undefined) {
            return undefined;
        }
        else {
            return Item.findAll({ownerID: user.userID});
        }
    },

    'findByOwner' ({ ownerID }) {
        return Item.findAll({ownerID: ownerID});
    },

    'rentableItems' () {
        return Item.findAll({renterID: undefined});
    }


});

//Meteor.call('addItem', {ownerID:12, name:'velosiped', price=10, keywords=['q', 'ww']});