import React from 'react';

var AppContainer = React.createClass({
    render: function() {
      return (
      	<div>
      		{this.props.children}  
      	</div>
      );
    }
});

module.exports = AppContainer;