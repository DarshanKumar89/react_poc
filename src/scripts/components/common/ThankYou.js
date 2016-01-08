var React = require('react');
var Link = require('react-router').Link;

var ThankYou = React.createClass({
	render: function() { 
		return (
			<div>
				<div className="color-line"></div>
				<div className="text-center" style={{"width" : "500px", "margin" : "auto", "paddingTop":"10%"}}>
					<h1>Thanks for Signing up with us!!!</h1>
					<b><Link to="login">click here</Link></b> to login
				</div>
			</div>
		); 
	}
});

module.exports = ThankYou;