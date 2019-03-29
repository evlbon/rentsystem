import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import Profile from "../models/profile";


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

    const user = Meteor.users.findOne({username})

    let profile = new Profile({
      userID: user._id,
      isBanned: false,
      type: 'renter',
    })

    profile.save();
  },

  'delUser'(username,callback) {
    Meteor.users.remove({username})
  }
});



Meteor.methods({
  'editProfile'(id,values) {
    console.log(values)
    const profile = Profile.findOne({userID:id});

    if(values.phone)
      profile.phone = values.phone;
    if(values.question)
      profile.question = values.question;
    if(values.answer)
      profile.answer = values.answer;
    if(values.type)
      profile.type = values.type;
    if(values.isBanned)
      profile.isBanned = values.isBanned;

    profile.save();
  },
});
