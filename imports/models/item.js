import { Class } from 'meteor/jagi:astronomy';


const Item = Class.create( {
    name: 'Item',
    collection: new Meteor.Collection('items'),

    fields: {

        itemID: {
            type: String,
            optional: true,
        },

        name: {
            type: String,
            optional: true,
        },

        price: {
            type: Number,
            optional: true,
            decimal: true,
        },

        category: {
            type: String,
            optional: true,
        },

        cost: {
            type: Number,
            optional: true,
            decimal: true,
        },

        /*

        bookingFrom: {
            type: Date,
            optional: true,
            default: new Date(),
        },

        bookingUntil: {
            type: Date,
            optional: true,
        },

        bookingTime: {
            type: Date,
            optional: true,
            default: new Date(this.bookingFrom - this.bookingUntil),
        },

        booked: {
            type: Boolean,
            optional: true,
            default: false,
        },

        bookedFrom: {
            type: Date,
            optional: true,
        },

        expiration: {
            type: Date,
            optional: true,
            default: new Date(this.bookedFrom - Date.now()).getHours(),
        }

         */
    }

});

export default Item