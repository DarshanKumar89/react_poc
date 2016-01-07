var React = require('react');

var Register = React.createClass({

	getInitialState: function() {
      return {user:{}, newsletter: false};
    },

    handleChange: function(e) {
    	this.state.user[e.target.name] = e.target.value; 
    	this.setState({});
    },

    handleNewsLetter: function(e){
    	this.state.newsletter = !this.state.newsletter; 
    	this.setState({});	
    },

    registerSubmit: function(e) { 
      e.preventDefault();
      var user = this.state.user;

      if (!Object.keys(user).length ) {
        return;
      }
      
      // TODO: send request to the server
      console.log(user);
      this.state.user = {};
      this.setState({});
    },
	
	render: function() { 
		return (

			<div className="register-container">
    			<div className="row">
    				<div className="col-md-12">
    					<div className="text-center m-b-md">
			                <h3>Registration </h3>
			                <small>Full suported ReactJS WebApp template with very clean and aesthetic style prepared for your next app. </small>
			            </div>

			            <div className="hpanel">
            				<div className="panel-body">
            					<form onSubmit={this.registerSubmit}>
		                            <div className="row">
			                            <div className="form-group col-lg-12">
			                                <label>Username</label>
			                                <input value={this.state.user.username}
			                                	onChange={this.handleChange}
			                                	className="form-control" 
			                                	name="username" 
			                                	type="text" />
			                            </div>
			                            <div className="form-group col-lg-6">
			                                <label>Password</label>
			                                <input value={this.state.user.password}
			                                	onChange={this.handleChange}
			                                	className="form-control" 
			                                	name="password" 
			                                	type="password" />
			                            </div>
			                            <div className="form-group col-lg-6">
			                                <label>Repeat Password</label>
			                                <input value={this.state.user.password2}
			                                	onChange={this.handleChange}
			                                	className="form-control" 
			                                	name="password2" 
			                                	type="password" />
			                            </div>
			                            <div className="form-group col-lg-6">
			                                <label>Email Address</label>
			                                <input value={this.state.user.email}
			                                	onChange={this.handleChange}
			                                	className="form-control" 
			                                	name="email" 
			                                	type="email" />
			                            </div>
			                            <div className="form-group col-lg-6">
			                                <label>Repeat Email Address</label>
			                                <input value={this.state.user.email2}
			                                	onChange={this.handleChange}
			                                	className="form-control" 
			                                	name="email2" 
			                                	type="email" />
			                            </div>
			                            <div className="checkbox col-lg-12">
										    <label>
										      <input type="checkbox" 
			                            		checked={this.state.newsletter || this.props.newsletter } 
			                            		onChange={this.handleNewsLetter} />
			                            		Sign up for our newsletter
										    </label>
									  	</div>
		                            </div>
		                            <div className="text-center">
		                                <button type="submit" className="btn btn-success">Register</button>
		                                {' '}
		                                <button className="btn btn-default">Cancel</button>
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

		); 
	}
	
});
	
module.exports = Register;
