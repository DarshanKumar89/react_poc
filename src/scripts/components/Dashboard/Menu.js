var React = require('react'); 

var Menu = React.createClass({
	render: function() {  
		return (
      <div className="Menu">
         <div className="profile-picture">
          <img className="img-circle" src="images/profile.jpg"/>
         </div>
        <div>
          <ul>
            <li>DASHBOARD</li>
            <li>ANALYTICS</li>
            <li>INTERFACE</li>
            <li>APP VIEWS</li>
            <li>CHARTS</li>
            <li>BOX TRANSITIONS</li>
            <li>COMMON VIEWS</li>
            <li>TABLES</li> 
            <li>WIDGETS</li>
            <li>FORMS</li>
            <li>LAYOUT OPTIONS</li>
            <li>GRID SYSTEM</li>
            <li>LANDING PAGE</li>
            <li>ANGULARJS VERSION</li>
            <li>METEOR VERSION  </li>
          </ul>

        </div>

      </div>

    );  
	}
});
	
module.exports = Menu;
