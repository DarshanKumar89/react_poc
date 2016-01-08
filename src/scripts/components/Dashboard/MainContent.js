var React = require('react');
var WelcomeRow = require('./Widgets/WelcomeWidget');
var LineGraphWidget = require('./Widgets/LineGraphWidget');
var InfoWidgets = require('./Widgets/InfoWidgets');
var Footer = require('./Widgets/Footer');
var Activity = require('./Widgets/Activity');
var Listing = require('./Widgets/Listing');
var TableWidget = require('./Widgets/TableWidget');

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
