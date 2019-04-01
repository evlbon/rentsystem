import { Meteor } from 'meteor/meteor';
import "../imports/api/methods"
import "../imports/models/item"

Meteor.startup(() => {
  // code to run on server at startup
    new Meteor.Collection('itemsss');
});
