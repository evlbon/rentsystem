import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.less';
import App from '../imports/ui/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});