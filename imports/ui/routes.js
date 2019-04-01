import React from 'react';
import { Route } from 'react-router-dom';


// import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import MainPage from "./containers/MainPage";
import AccountPage from "./containers/AccountPage";
import WarpedProfileForm from "./containers/AddProfile";
import WarpedItemForm from "./containers/AddItem";
import UserList from "./containers/UserList";

import ItemListView from './containers/ItemListView';
import ModifyItem from './containers/ModifyItem';
import ViewItem from './containers/ViewItem';
import MyItems from './containers/MyItems';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MainPage} />
        {/*<Route exact path='/articles/:articleID/' component={ArticleDetail} />*/}
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/userpage/' component={AccountPage} />
        <Route exact path='/setprofile/' component={WarpedProfileForm} />
        <Route exact path='/setitem/' component={WarpedItemForm} />
        <Route exact path='/edititem/:itemId/' component={ModifyItem} />
        <Route exact path='/viewitem/:itemId/' component={ViewItem} />

      <Route exact path='/allusers/' component={UserList} />
      <Route exact path='/items/' component={ItemListView} />
      <Route exact path='/myitems/' component={MyItems} />

    </div>
);

export default BaseRouter;