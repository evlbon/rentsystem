import Category from "../../models/category";
import {Meteor} from "meteor/meteor";

Meteor.methods({

  'create_category'(values,OwnerID) {

    let category = new Category({
      categoryName: values.name,
      approved_add: false,
      approved_del: false,
      request_del_cat: false,
      description: values.description,
      OwnerID,
    });

    category.save();
  },

  'approve_add_cat'(ID) {

    const cat = Category.findOne({_id: ID});
    console.log(cat);

    cat.approved_add = true;

    // Accounts.sendEnrollmentEmail(user._id);
    cat.save();
  },


  'request_del_cat'(name) {

    const cat = Category.findOne({categoryName: name});
    console.log(cat);

    cat.request_del_cat = true;

    // Accounts.sendEnrollmentEmail(user._id);
    cat.save();
  },


  'approve_del_cat'(ID) {

    Category.remove({_id: ID})

  },


  'deny_del_cat'(ID) {

    const cat = Category.findOne({_id: ID});
    cat.request_del_cat = false;
    cat.save()

  },

});
