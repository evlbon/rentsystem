import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import Profile from "../models/profile";
import {updateObject} from "./utility";


Meteor.methods({
  'addAdmin'() {
    if(!Meteor.users.find({}).fetch()[0]) {
      Accounts.createUser({
        username: "admin",
        password: "admin"
      });
    }
  },
  'addUser'(username,password,callback) {
    Accounts.createUser({
      username,
      password,
    },callback);

    const user = Meteor.users.findOne({username});

    let profile = new Profile({
      userID: user._id,
      isBanned: false,
      type: 'renter',
      rating: 0,
      username: user.username,
    });

    profile.save();
  },

  'delUser'(username,callback) {
    Meteor.users.remove({username})
  }
});



Meteor.methods({
  'editProfile'(id,values) {
    let profile = Profile.findOne({userID:id});
    console.log(values);

    profile = new Profile({...updateObject(profile,values)});

    profile.save();
  },
});
