var React = require('react');

var MainContent = React.createClass({
    render: function() {
        return ( 
        	<div>
        		<footer className="footer">
			        <span className="pull-right">
			            Showcase App @Globant
			        </span>
			        Company 2015-2020
			    </footer>
        	</div>   
        );
    }
});

module.exports = MainContent;