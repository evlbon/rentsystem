import {Meteor} from "meteor/meteor";
import Images from "../../models/image";

Meteor.methods({

  'addImage' ( file ) {

    Images.insert({
      file,
      isBase64: true, // <— Mandatory
      fileName: 'pic.png' // <— Mandatory
    });

    console.log(file)

  },
});