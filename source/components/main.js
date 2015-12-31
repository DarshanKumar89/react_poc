var React = require('react');
var ReactDOM = require('react-dom');

var Dashboard = require('./Dashboard/Dashboard');
var Login = require('./Login/Login');
var Register = require('./Register/Register');
var $ = jQuery = require('jquery');
var BootstrapJS = require('./External/bootstrap.min');


ReactDOM.render(<Login/>, document.getElementById("app"));