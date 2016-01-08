import React from 'react';
import { Router, Route } from 'react-router';

export default class Login extends React.Component {

	constructor (props) { 
		super(props);
		this.state = {
      user:{}, 
      rememberMe: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRememberMe = this.handleRememberMe.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }


    handleChange (e) {
    	this.state.user[e.target.name] = e.target.value; 
    	this.setState({});
    }

    handleRememberMe (e){
    	this.state.rememberMe = !this.state.rememberMe; 
    	this.setState({});	 
    }

    loginSubmit (e) {  
      e.preventDefault();
      var user = this.state.user;
      if (!user.username || !user.password) {
        return;
      }

      // TODO: send request to the server
      this.state.user = {};
      this.setState({});
      window.location.hash ="dashboard";
    }
	
	render () { 
		return (
			<div>
				<div className="color-line"></div>
				<div className="login-container">
	    			<div className="row">
	    				<div className="col-md-12">
	    					<div className="text-center m-b-md">
				                <h3>PLEASE LOGIN TO APP</h3>
				                <small>This is the best app ever!</small>
				            </div>

				            <div className="hpanel">
	            				<div className="panel-body">
	            					<form  onSubmit={this.loginSubmit}>
	            						<div className="form-group">
			                                <label>Username</label>
			                                <input type="text" 
			                                	placeholder="example@gmail.com" 
			                                	title="Please enter you username" 
			                                	value={this.state.user.username}
			                                	name="username"
	            								onChange={this.handleChange}
			                                	className="form-control" required/>
			                                <span className="small">Your unique username to app</span>
			                            </div>

			                            <div className="form-group">
			                                <label>Password</label>
			                                <input type="password"
			                                	placeholder="***************" 
			                                	title="Please enter you password" 
			                                	value={this.state.user.password}
			                                	name="password"
	            								onChange={this.handleChange}
			                                	className="form-control" required/>
			                                <span className="small">Your strong password</span>
			                            </div>

			                            <div className="checkbox">
										    <label>
										      <input type="checkbox" 
			                            		checked={this.state.rememberMe || this.props.rememberMe } 
			                            		onChange={this.handleRememberMe} />
			                            		Remember login
										    </label>
										    <p className="small">(if this is a private computer)</p>
									  	</div>
			                            					              
						              	<div>
			                            	<input type="submit" value="Login" 
			                            		className="btn btn-success btn-block" />
			                            	<a className="btn btn-default btn-block" href="/#/register">Register</a>
			                            </div>

						              
						            </form>
	            				</div>
	        				</div>

	    				</div>
	    			</div>


	    			<div className="row">
				        <div className="col-md-12 text-center">
				            <strong>GLOBER</strong> - ReactJS Responsive WebApp <br/> 2015 Copyright Company Name
				        </div>
				    </div>

				</div>
			</div>
		); 
	}
	
}
