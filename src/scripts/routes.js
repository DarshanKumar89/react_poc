import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

window.jQuery = window.$ = require('jquery');
var BootstrapJS = require('./components/External/bootstrap.min');

import NotFound from './components/common/NotFound';
import ThankYou from './components/common/ThankYou';
import AppContainer from './containers/AppContainer';
import Dashboard from './components/Dashboard/Dashboard';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer'; 

export default class Routes extends React.Component {
  render () { 
    return (
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <Redirect from="/login" to="/" />
          <IndexRoute component={LoginContainer} />
          <Route path="register" component={RegisterContainer} />
          <Route path="dashboard" component={Dashboard} />
          <Route path="thanks" component={ThankYou} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
      
    );
  }
}

