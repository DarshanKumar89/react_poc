var React = require('react');
var Link = require('react-router').Link;

var NotFound = React.createClass({
	render: function() { 
		return (
			<div>
				<div className="not-found">
					<div className="logo">
						<p>OOPS! - Could not Find it</p>
						<img src="images/404.png"/>
						<div className="sub">
						<p><Link to="dashboard">Back to home</Link></p>
						</div>
					</div>
				</div>	
			</div>
		); 
	}
});

module.exports = NotFound;