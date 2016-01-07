var React = require('react'); 

var Activity = React.createClass({
	render: function() {  
		return (
        
            <div className="Activity component-bg">
                <div className="stats-title pull-left"> 
                            <h4>Activity</h4>
                </div>
                <div className="stats-icon pull-right">
                            <span className="glyphicon glyphicon-star-empty"></span>
                </div>
                <div>
                  <p className="clearfix">
                    Social users 
                    Lorem Ipsum is simply dummy text of the printing simply all dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                  </p>
                </div>
            </div>
   

    );  
	}
});
	
module.exports = Activity;
