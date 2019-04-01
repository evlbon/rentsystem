import {Item} from "../../models/item";
import {Profile} from "../../models/profile"
import {Meteor} from "meteor/meteor";

Meteor.methods({

    'clr_db'() {
        Profile.remove({});
        Meteor.users.remove({});
        Item.remove({});

    },
});