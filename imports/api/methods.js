import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import Profile from "../models/profile";
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
    const profile = Profile.findOne({userID:id});
    console.log(values)

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
    if(values.rating !== undefined)
      profile.rating = values.rating;

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

  'items.edit'(itemId, values) {
    const item = Items.findOne({_id:itemId});
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
