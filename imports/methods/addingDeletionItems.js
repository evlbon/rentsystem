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

    'findByName' ({ keyword }) {

        return Item.findAll({keywords: keyword});
    },

});

//Meteor.call('addItem', {ownerID:12, name:'velosiped', price=10, keywords=['q', 'ww']});