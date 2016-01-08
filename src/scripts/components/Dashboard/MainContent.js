import React from 'react';
import WelcomeRow from './Widgets/WelcomeWidget';
import LineGraphWidget from './Widgets/LineGraphWidget';
import InfoWidgets from './Widgets/InfoWidgets';
import Activity from './Widgets/Activity';
import Listing from './Widgets/Listing';
import TableWidget from './Widgets/TableWidget';
import Footer from './Widgets/Footer';

var MainContent = React.createClass({
    render: function() {
        return ( 
        	<div>
        		<div id="wrapper">
				    <div className="content animate-panel">
				   		<WelcomeRow/>
				   		<LineGraphWidget/>
				   		{/*<InfoWidgets/>*/}
				   		<div className="row">
        					<div  className="col-lg-3">
        						<Activity/>
        					</div>
        					<div  className="col-lg-6">
        						<Listing/>
        					</div>
        					<div  className="col-lg-3">
        						<TableWidget/>
        					</div>
        				</div>
				   		<Footer/>
				   	</div>
				</div>
        	</div>   
        );
    }
});

module.exports = MainContent;
