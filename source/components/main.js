var React = require('react');
var ReactDOM = require('react-dom');
var Dashboard = require('./Dashboard/Dashboard');
var Login = require('./Login/Login');
var Register = require('./Register/Register');

var ColorLine = React.createClass({
	render: function() {
		return (
			<div className="color-line"></div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div>
				<ColorLine/>
				<Dashboard/>
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById("app"));