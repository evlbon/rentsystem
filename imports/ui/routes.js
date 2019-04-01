import React from 'react';
import { Route } from 'react-router-dom';

import ItemList from './containers/ItemListView';
// import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import MainPage from "./containers/MainPage";
import AccountPage from "./containers/AccountPage";
import WarpedProfileForm from "./containers/AddProfile";
import ChangePassword from "./containers/ChangePassword";
import UserList from "./containers/UserList";
import EnterEmail from "./containers/EnterEmail";


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MainPage} />
        {/*<Route exact path='/articles/:articleID/' component={ArticleDetail} />*/}
        {<Route exact path='/items' component={ItemList} />}
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/userpage/' component={AccountPage} />
        <Route exact path='/setprofile/' component={WarpedProfileForm} />
      {<Route exact path='/changePass/' component={ChangePassword} />}
      <Route exact path='/enterEmail/' component={EnterEmail} />
      <Route exact path='/allusers/' component={UserList} />

    </div>
);

export default BaseRouter;