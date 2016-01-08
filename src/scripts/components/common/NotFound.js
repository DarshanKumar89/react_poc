import React from 'react';
import {Link} from 'react-router';

export default class NotFound extends React.Component {
	render () { 
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
}