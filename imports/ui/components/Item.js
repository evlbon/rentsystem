import React from 'react';
import { Card } from 'antd';
import { List, Avatar, Icon } from 'antd';

const { Meta } = Card;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Articles = (props) => {
    return (

    <div style={{background:"white", padding:"100px 0 20px 0"}}>
        <div style={{textAlign:"center",font: "font: normal 50px/1 Arial Black, Gadget, sans-serif"}}>
            <h1>RENTSHOP</h1>
        </div>


      <div style={{margin:"0 30px 0 30px"}}>
        <List
          itemLayout="vertical"
          size="large"
          grid={{
            gutter: 32, xs: 1, sm: 2, md: 8, lg: 4, xl: 4, xxl: 3,
          }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 8,
          }}
          dataSource={props.data}
          renderItem={item => (
            <List.Item>
              <Card
                hoverable
                style={{ width: 300 }}
                bordered={false}
                cover={<img alt="example" src="https://cenomaniya.ru/image/cache/data/skateboard/ckrider-900x900.jpg" />}
              >
                <Meta
                  title={item.title}
                  description="100$/Day"
                />
              </Card>

            </List.Item>
          )}
        />
      </div>


      {/*<List*/}
        {/*itemLayout="vertical"*/}
        {/*size="large"*/}
        {/*pagination={{*/}
          {/*onChange: (page) => {*/}
            {/*console.log(page);*/}
          {/*},*/}
          {/*pageSize: 3,*/}
        {/*}}*/}
        {/*dataSource={props.data}*/}
        {/*renderItem={item => (*/}
          {/*<List.Item*/}
            {/*key={item.title}*/}
            {/*actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}*/}
            {/*extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}*/}
          {/*>*/}
            {/*<List.Item.Meta*/}
              {/*avatar={<Avatar src={item.avatar} />}*/}
              {/*title={<a href={`/${item.id}`}>{item.title}</a>}*/}
              {/*description={item.description}*/}
            {/*/>*/}
            {/*{item.content}*/}
          {/*</List.Item>*/}
        {/*)}*/}
      {/*/>*/}


    </div>
    )
}

export default Articles;