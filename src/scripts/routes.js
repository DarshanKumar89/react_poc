var React = require('react');
var browserHistory = require('react-router').browserHistory;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Redirect = require('react-router').Redirect;

window.jQuery = window.$ = require('jquery');
var BootstrapJS = require('./components/External/bootstrap.min');

var AppContainer = require('./components/common/AppContainer');
var NotFound = require('./components/common/NotFound');
var ThankYou = require('./components/common/ThankYou');
var Dashboard = require('./components/Dashboard/Dashboard');
var Login = require('./components/Login/Login');
var Register = require('./components/Register/Register'); 

var Routes = React.createClass({
  render: function() { 
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
});

module.exports = Routes;