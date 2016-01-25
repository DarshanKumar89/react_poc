import React, { PropTypes } from 'react';
import TopHeader from './Header';
import LeftMenu from './Menu';
import MainContent from './MainContent';

export default class Dashboard extends React.Component {

    render () {
    	const { dashData } = this.props
        return ( 
        	<div>
        		<TopHeader/>
        		<LeftMenu menuData={ dashData.dashData.sidebar.navigationLinks }/>
        		<MainContent/>
        	</div>   
        );
    }
}

Dashboard.propTypes = {
	dashData: PropTypes.object.isRequired
}
