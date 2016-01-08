var React = require('react');
var Link = require('react-router').Link;

var ThankYou = React.createClass({
	render: function() { 
		return (
			<div>
				<section className="thank-you">
					<div>
						<h1>Thank You</h1>
						<p>Thank you for signing up... </p>
						<div className="login">
							<Link to="login">Login</Link>
						</div>
						
					</div>
				</section>
			</div>
		); 
	}
});

module.exports = ThankYou;