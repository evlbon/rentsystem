import { Class } from 'meteor/jagi:astronomy';


const Category = Class.create({
    name: 'Category',
    collection: new Meteor.Collection('category'),
    fields: {// fields that items will have and the type of this field

        categoryName: {
            type: String,
            optional: true,

        },

        approved_add: {
            type: Boolean,
            optional: true,

        },

        request_del_cat: {
            type: Boolean,
            optional: true,

        },

        description: {
            type: String,
            optional: true,

        },
    }
});

export default Category