import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Carousel, Button, Icon } from 'antd';

import { withTracker } from 'meteor/react-meteor-data';
import Profile from "../../models/profile";



const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class CustomLayout extends React.Component {


    render() {

      const profile = this.props.currentUser ? this.props.profiles.findOne({userID: this.props.currentUser._id}): undefined;

      return (
        <Layout>

          <Header style={{ position: 'fixed', zIndex: 4, width: '100%',font:'normal 30px/1 Arial Black, Gadget, sans-serif'}}>
            <div className="auth">
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px'}}
              >
                {/*<Menu.Item key="1"><Link to="/login">Account</Link></Menu.Item>*/}


                {
                  this.props.currentUser ?

                    <Menu.Item key="1">
                      <Link to="/userpage/">Hello  {profile.firstName}</Link>
                    </Menu.Item>

                    :

                    <Menu.Item key="1">
                      <Link to="/login">Account</Link>
                    </Menu.Item>
                }


                <Menu.Item key="2"> <Link to="/search/">Search</Link></Menu.Item>
              </Menu>
            </div>

            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px'}}
            >
              <Menu.Item key="4"><Link to="/">Main Page</Link></Menu.Item>
              <Menu.Item key="1"><Link to="/all_items/">Items</Link></Menu.Item>
              {localStorage.getItem('user')? <Menu.Item key="2"><Link to="/allusers/">Users</Link></Menu.Item>:""}

            </Menu>
          </Header>



          <Content>
            {this.props.children}
          </Content>


          <Footer style={{ textAlign: 'center', color: 'white' }}>
            Rent system ©2019 Created by BS17-2-5: Eugene Bondarev, Dmitry Kochetov, Vyacheslav Vasilev, Aleksandra Shchetinina, Anastasia Pichka
          </Footer>
        </Layout>

      );
    }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    profiles: Profile,

    users: Meteor.users.find().fetch(),
  };
})(withRouter(CustomLayout));
