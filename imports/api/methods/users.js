import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import Profile from "../../models/profile";
import {updateObject} from "./utility";
import Items from "../../models/item";
import Category from "../../models/category";


Meteor.methods({
  'addAdmin'(username) {
    const user = Meteor.users.findOne({username : username});

    let profile = Profile.findOne({userID: user._id});

    profile.type = 'admin';

    profile.save();
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



