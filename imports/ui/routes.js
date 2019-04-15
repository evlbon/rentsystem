import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './containers/Signup';
import MainPage from "./containers/Main";
import AccountPage from "./containers/AccountPage";
import WarpedProfileForm from "./containers/AddProfile";
import WarpedItemForm from "./containers/AddItem";
import UserList from "./containers/UserList";
import EnterEmail from "./containers/EnterEmail";

import WarpedChangePassword from "./containers/ChangePassword";

import ItemList from './components/ItemListView';

import ModifyItem from './containers/ModifyItem';
import ViewItem from './containers/ItemDetailView';
import MyItems from './containers/MyItems';
import AllItems from "./containers/AllItems";
import MySearch from "./containers/Search";
import CategotyRequest from "./containers/CategoryRequest";
import Requests from"./containers/Requests";
import CategoryDeletionRequest from "./containers/CategoryDeletionRequest";


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MainPage} />
        {/*<Route exact path='/articles/:articleID/' component={ArticleDetail} />*/}
        {/*{<Route exact path='/items' component={ItemList} />}*/}
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/userpage/' component={AccountPage} />
        <Route exact path='/setprofile/' component={WarpedProfileForm} />
        <Route exact path='/enterEmail/' component={EnterEmail} />
      <Route exact path='/changePass/' component={WarpedChangePassword} />
        <Route exact path='/setitem/' component={WarpedItemForm} />
        <Route exact path='/setcat/' component={CategotyRequest} />

        <Route exact path='/requests/' component={Requests} />

        <Route exact path='/delcat/' component={CategoryDeletionRequest} />

        <Route exact path='/edit_item/:id/' component={ModifyItem} />
        <Route exact path='/item/:id/' component={ViewItem} />


      <Route exact path='/all_items/' component={AllItems} />
      <Route exact path='/my_items/' component={MyItems} />

      <Route exact path='/allusers/' component={UserList} />
      {/*<Route exact path='/items/' component={ItemListView} />*/}
      <Route exact path='/myitems/' component={MyItems} />

      <Route exact path='/search/' component={MySearch} />



    </div>
);

export default BaseRouter;