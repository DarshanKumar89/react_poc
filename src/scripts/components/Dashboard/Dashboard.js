var React = require('react');
var Header = require('./Header.js');
var Menu = require('./Menu.js');
var Activity = require('./Activity.js');
var LineGraphWidget = require('./Widgets/LineGraphWidget.js');
var Listing = require('./Listing.js');

var Dashboard = React.createClass({
	render: function() { 
		return (
			<div id="Dashboard"> 
				 <Header/>  
				 <Menu/>
			 	<LineGraphWidget/>
			 	<Activity/>
			 	<Listing/>
			</div>   
		); 
	}
	
});
	
module.exports = Dashboard;
