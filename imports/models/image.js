import { FilesCollection } from 'meteor/ostrio:files';

const Images = new FilesCollection({
  debug: true,
  collectionName: 'Images',
  allowClientCode: false,

  storagePath: '../../../../../public/'
});


export default Images;
