import React from 'react';
import {Link} from 'react-router';

export default class ThankYou extends React.Component {
	render () { 
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
}