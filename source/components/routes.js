var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var $ = jQuery = require('jquery');
var BootstrapJS = require('./External/bootstrap.min');

var App = require('./common/App');
var NotFound = require('./common/NotFound');
var Dashboard = require('./Dashboard/Dashboard');
var Login = require('./Login/Login');
var Register = require('./Register/Register'); 


var Routes = React.createClass({
  render: function() { 
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Login} />
          <Route path="register" component={Register} />
          <Route path="dashboard" component={Dashboard} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
});

module.exports = Routes;