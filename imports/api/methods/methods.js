import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import Profile from "../../models/profile";
import {updateObject} from "./utility";
import Items from "../../models/item";
import Category from "../../models/category";


Meteor.methods({
  'addAdmin'() {
    if(!Meteor.users.find({}).fetch()[0]) {
      Accounts.createUser({
        username: "admin",
        password: "admin"
      });
    }
  },


  'addUser'(values,callback) {

    Accounts.createUser({
      username: values.username,
      password: values.password,
    },callback);
    console.log(values.username);

    const user = Meteor.users.findOne({username : values.username});



    let profile = new Profile({
      userID: user._id,
      isBanned: false,
      phone: values.phone,
      address: values.address,
      firstName: values.firstName,
      lastName: values.lastName,
      type: 'renter-owner',
      rating: 0,
    });

    // Accounts.sendEnrollmentEmail(user._id);
    profile.save();
  },

  'delUser'(username) {
    Meteor.users.remove({username});
    Profile.remove({"username":username});
  },

  'chPassword'(userID, new_password){
    Accounts.setPassword(userID, new_password);
  },

  'sendEmail'(userName){
    Accounts.sendResetPasswordEmail(Profile.findOne({username:userName}).userID)
  },

});

Meteor.methods({
  'editProfile'(ID,values) {
    let profile = Profile.findOne({userID:ID});
    console.log(values);

    profile = new Profile({...updateObject(profile,values)});

    profile.save();
  },
});



Meteor.methods({

  'items.remove'(itemID) {
    Items.remove({_id: itemID})
  },

  'items.edit'(values) {
    const item = Items.findOne({_id: values.id});
    console.log(item);

    if (values.itemID)
      item.itemID = values.itemID;
    if (values.itemName)
      item.itemName = values.itemName;
    if (values.ownerID)
      item.ownerID = values.ownerID;
    if (values.renterID)
      item.renterID = values.renterID;
    if (values.price)
      item.price = values.price;
    if (values.deposit)
      item.deposit = values.deposit;
    if (values.keywords)
      item.keywords = values.keywords;
    if (values.category)
      item.category = values.category;
    if (values.description)
      item.description = values.description;

    item.save();
  },

});

Meteor.methods({

  'create_category'(values) {

    let category = new Category({
      categoryName: values.name,
      approved_add: false,
      approved_del: false,
      request_del_cat: false,
      description: values.description
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

  },

});
