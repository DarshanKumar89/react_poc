import React, { PropTypes } from 'react';
import TopHeader from './Header';
import LeftMenu from './Menu';
import MainContent from './MainContent';

export default class Dashboard extends React.Component {
    render () {
    	let data= this.props.dashData || {}

    	//console.log(this.props.dashData)
        return ( 
        	<div>
        		<TopHeader/>
        		<LeftMenu menuData={data.sidebar.navigationLinks}/>
        		<MainContent/>
        	</div>   
        );
    }
}

Dashboard.propTypes = {
	dashData: PropTypes.object.isRequired
}
