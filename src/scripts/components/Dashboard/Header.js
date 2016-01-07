var React = require('react');

var Header = React.createClass({
	render: function() {  
		return (

      <nav className="navbar navbar-default"> 
    <div className="color-line"></div>
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span> 
      </button>
      <a className="navbar-brand" href="#">Homer Theme</a> 
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search something special"/>
        </div>
        { /*<button type="submit" className="btn btn-default">Submit</button>*/}  
      </form>
      <ul className="nav navbar-nav navbar-right"> 
        <li><a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                       <span className="glyphicon glyphicon-volume-up" aria-hidden="true"></span>
                    </a></li>
   <li><a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                       <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                    </a></li>
                    <li><a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                       <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                    </a></li>
                    <li><a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                       <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                    </a></li>
                    <li><a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                       <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </a></li>
 
      </ul>
    </div>
  </div>
</nav>);  
	}
	
});
	
module.exports = Header;