var React = require('react');
var Chart = require('chart.js'); 
var LineGraph = require('./../../common/Charts/lineGraph.js'); 



var LineGraphWidget = React.createClass({
	render: function() { 
		return (
			<div className="lineGraph component-bg">
				 <LineGraph/>
			</div>   
		); 
	}
	
});
	
module.exports = LineGraphWidget;





