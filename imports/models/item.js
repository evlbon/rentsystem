import { Class } from 'meteor/jagi:astronomy';


const Items = Class.create({   
  name: 'Items', 
  collection: new Mongo.Collection('items'),
  fields: {// fields that items will have and the type of this field

    itemName: {
      type: String,
      optional: true,

    },

    usernameOwner: {
      type: String,
      optional: true,

    },

    usernameRenter: {
      type: String,
      optional: true,

    },

    price: {
      type: String,
      optional: true,

    },

    deposit: {
      type: String,
      optional: true,

    },

    keywords:{
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