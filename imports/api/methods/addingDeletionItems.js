import {Item} from "../../models/item";
import {Meteor} from "meteor/meteor";

let _itemID = 0;

Meteor.methods({

    'addItem' ({ ownerID, itemName, price=30, deposit=50, category, keywords=[], description }) {

        let item = Item.insert({
            itemID: _itemID,
            itemName: itemName,
            ownerID: ownerID,
            price: price,
            deposit: deposit,
            category: category,
            keywords: keywords,
            description: description,
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