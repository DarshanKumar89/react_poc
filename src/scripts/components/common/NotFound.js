var React = require('react');
var Link = require('react-router').Link;

var NotFound = React.createClass({
	render: function() { 
		return (
			<div>
				<div className="color-line"></div>
				<div className="text-center" style={{"width" : "500px", "margin" : "auto", "paddingTop":"10%"}}>
					<h1>Page Not Found!!!</h1>
					<b><Link to="dashboard">click here</Link></b> to go to dashboard
				</div>
			</div>
		); 
	}
});

module.exports = NotFound;