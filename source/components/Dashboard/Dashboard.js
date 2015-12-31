var React = require('react');
var Header = require('./Header.js');
var Menu = require('./Menu.js');

var Dashboard = React.createClass({
	render: function() { 
		return (
			<div id="Dashboard">
				 <Header/>  
				 <Menu/> 
			</div>  
		); 
	}
	
});
	
module.exports = Dashboard;
