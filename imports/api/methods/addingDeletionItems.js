import {Item} from "../../models/item";
import {Profile} from "../../models/profile"
import {Meteor} from "meteor/meteor";


Meteor.methods({

    'addItem' ({ itemID, ownerID, itemName, price=30, deposit=50, category, keywords=[], description }) {

        console.log('start');
        let item = Item.insert({
            itemID: itemID,
            itemName: itemName,
            ownerID: ownerID,
            price: price,
            deposit: deposit,
            category: category,
            keywords: keywords,
            description: description,
        });

        console.log('work');
        return item;
    },

    'findByKeyword' ({ keywords }) {
        return Item.find({keywords: keywords});
    },

    'findByUsername' ({ username }) {
        let user = Profile.find({username: username});
        if (user === undefined) {
            return undefined;
        }
        else {
            return Item.find({ownerID: user.userID});
        }
    },

    'findByOwner' ({ ownerID }) {
        return Item.find({ownerID: ownerID});
    },

    'rentableItems' () {
        return Item.find({renterID: undefined});
    }


});

//Meteor.call('addItem', {ownerID:12, name:'velosiped', price=10, keywords=['q', 'ww']});