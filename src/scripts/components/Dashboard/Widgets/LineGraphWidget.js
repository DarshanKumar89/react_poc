import React from 'react';
import LineGraph from './../../common/Charts/LineGraph.js'; 



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





