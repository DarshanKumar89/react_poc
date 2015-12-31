var React = require('react');
var ReactDOM = require('react-dom');
var Dashboard = require('./Dashboard/Dashboard');
var Login = require('./Login/Login');
var Register = require('./Register/Register');

<<<<<<< HEAD
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
=======
 
>>>>>>> 2cd7d780efba972f6b0b2305430d27501c98872c

ReactDOM.render(<App/>, document.getElementById("app"));