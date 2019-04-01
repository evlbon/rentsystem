import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import Profile from "../models/profile";
import {updateObject} from "./utility";
import Items from "../models/item";


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
  'editProfile'(id,values) {
    let profile = Profile.findOne({userID:id});
    console.log(values);

    profile = new Profile({...updateObject(profile,values)});

    profile.save();
  },
});



Meteor.methods({
  'items.insert'(values) {

    let item = new Items({
      itemName: values.name,
      usernameOwner: Meteor.users.findOne(this.userId).username,
      price: values.price,
      deposit: values.deposit,
      keywords: values.keywords,
      description: values.description
    });

    item.save();
  },

  'items.remove'(item_Id) {
    Items.remove({_id: item_Id})
  },

  'items.edit'(values) {
    const item = Items.findOne({_id:values.id});
    console.log(item)

    if(values.name)
      item.itemName = values.name;
    if(values.price)
      item.price = values.price;
    if(values.deposit)
      item.deposit = values.deposit;
    if(values.keywords)
      item.keywords = values.keywords;
    if(values.description)
      item.description = values.description;

    item.save();
  },

});
