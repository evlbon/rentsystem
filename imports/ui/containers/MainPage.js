import React from 'react';
import { Layout, Menu, Carousel, Button } from 'antd';
class MainPage extends React.Component {


  render() {
    return (
      <div>
        <h1 className="lll">
          Do you need something?<br/>
          Just rent it!
        </h1>

        <div style={{ height:"100%", width:'100%'}}>

          <Carousel autoplay="true">
            <div><img src="https://i.pinimg.com/originals/22/d7/b2/22d7b249c24225ca8940601f5aaa9996.jpg" alt="1" width="100%" height="100%"/></div>
            <div><img src="https://images.wallpaperscraft.ru/image/gora_snoubord_vershina_tuman_pokorenie_11541_1920x1080.jpg" alt="2" width="100%" height="100%"/></div>
            <div><img src="https://img1.akspic.ru/image/19824-skejtbording_tryuk-skejtbord-skejtpark-oblako-olli-1366x768.jpg" alt="3" width="100%" height="100%"/></div>
          </Carousel>

        </div>
        <div style={{ background: 'transparent',  minHeight: 100 }}>Content</div>
      </div>
    )
  }
}

export default MainPage;