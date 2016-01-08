import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

window.jQuery = window.$ = require('jquery');
var BootstrapJS = require('./components/External/bootstrap.min');

import AppContainer from './components/common/AppContainer';
import NotFound from './components/common/NotFound';
import ThankYou from './components/common/ThankYou';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register'; 

export default class Routes extends React.Component {
  render () { 
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <Redirect from="/login" to="/" />
          <IndexRoute component={Login} />
          <Route path="register" component={Register} />
          <Route path="dashboard" component={Dashboard} />
          <Route path="thanks" component={ThankYou} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
      
    );
  }
}

