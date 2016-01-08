import React from 'react';
import TopHeader from './Header';
import LeftMenu from './Menu';
import MainContent from './MainContent';

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
