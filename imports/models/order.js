import { Class } from 'meteor/jagi:astronomy';

export const State = Class.create({
  name: 'State',
  fields: {
    isAccepted: {
      type: Boolean,
      default: false,
      optional: true,
    },
    isCanceled: {
      type: Boolean,
      default: false,
      optional: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
      optional: true,
    },


  },
});

const Orders = Class.create({
  name: 'Order',
  collection: new Meteor.Collection('order'),
  fields: {


    createdAt: {
      type: Date,
      optional: true,

    },

    state: {
      type: State,
      optional: true,

    },

    OwnerID: {
      type: String,
      optional: true,

    },

    ItemID: {
      type: String,
      optional: true,

    },

    RenterID: {
      type: String,
      optional: true,

    },
  }
});

export default Orders