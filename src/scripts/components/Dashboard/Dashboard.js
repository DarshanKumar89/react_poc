var React = require('react');
var TopHeader = require('./Header.js');
var LeftMenu = require('./Menu.js');
var MainContent = require('./MainContent.js');

var Dashboard = React.createClass({
    render: function() {
        return ( 
        	<div>
        		<TopHeader/>
        		<LeftMenu/>
        		<MainContent/>
        	</div>   
        );
    }
});

module.exports = Dashboard;
