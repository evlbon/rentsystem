import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import "../imports/models/item"

// import 'antd/dist/antd.less';
import './main.less';
import App from '../imports/ui/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});