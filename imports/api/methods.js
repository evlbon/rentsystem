import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'


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
  },

  'delUser'(username,callback) {
    Meteor.users.remove({username})
  }


});


Meteor.publish('users', function () {
  return Meteor.users.find({});
});