import { Upload, Icon, message } from 'antd';
import React from 'react';
import Images from "../../models/image";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);

}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  const isPNG = file.type === 'image/png';


  if (!isJPG && !isPNG) {
    message.error('You can only upload JPG or PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }


  return (isJPG || isPNG) &&  isLt2M;
}

class UploadImage extends React.Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      console.log(info.file);

      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {

        // Images.insert({
        //   file: imageUrl.split(',')[1],
        //   isBase64: true, // <— Mandatory
        //   fileName: 'pic.png', // <— Mandatory
        //   type: info.file.originFileObj.type
        // });

        if(this.props.handleImage)
          this.props.handleImage({
              file: imageUrl.split(',')[1],
              isBase64: true,
              fileName: 'pic.png',
              type: info.file.originFileObj.type
            });

        this.setState({
          imageUrl,
          loading: false,
        })
        }
      );
    }
  }

  render() {

    console.log(Images.find().fetch());
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    );
  }
}

export default UploadImage
