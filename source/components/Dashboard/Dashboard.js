var React = require('react');
var Header = require('./Header.js');
var Menu = require('./Menu.js');
var LineGraph = require('./../Widgets/lineGraph.js');

var Dashboard = React.createClass({
	render: function() { 
		return (
			<div id="Dashboard">
				 <Header/>  
				 <Menu/>
				 <div className="lineGraph col-md-6">
				 	<LineGraph/>
				 </div>
				
			</div>  
		); 
	}
	
});
	
module.exports = Dashboard;
