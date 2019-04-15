import { Class } from 'meteor/jagi:astronomy';


const Items = Class.create({
    name: 'Items',
    collection: new Meteor.Collection('items'),
    fields: {// fields that items will have and the type of this field

        itemID: {
            type: String,
            optional: true,
        },

        itemName: {
            type: String,
            optional: true,

        },

        OwnerID: {
            type: String,
            optional: true,

        },

        RenterID: {
            type: String,
            optional: true,

        },

        price: {
            type: Number,
            optional: true,

        },

        deposit: {
            type: Number,
            optional: true,

        },

        keywords: {
            type: String,
            optional: true,
            default: undefined,

        },

        category: {
            type: String,
            optional: true,
        },

        description: {
            type: String,
            optional: true,

        },
    }
});

export default Items