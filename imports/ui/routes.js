import React from 'react';
import { Route } from 'react-router-dom';

import ItemList from './containers/ItemListView';
// import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import MainPage from "./containers/Main";
import AccountPage from "./containers/AccountPage";
import WarpedProfileForm from "./containers/AddProfile";
import UserList from "./containers/UserList";
import EnterEmail from "./containers/EnterEmail";

import WarpedChangePassword from "./containers/ChangePassword";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MainPage} />
        {/*<Route exact path='/articles/:articleID/' component={ArticleDetail} />*/}
        {<Route exact path='/items' component={ItemList} />}
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/userpage/' component={AccountPage} />
        <Route exact path='/setprofile/' component={WarpedProfileForm} />
      <Route exact path='/enterEmail/' component={EnterEmail} />
      <Route exact path='/changePass/' component={WarpedChangePassword} />

      <Route exact path='/allusers/' component={UserList} />

    </div>
);

export default BaseRouter;