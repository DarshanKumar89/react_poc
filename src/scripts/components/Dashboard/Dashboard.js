import React from 'react';
import TopHeader from './Header';
import LeftMenu from './Menu';
import MainContent from './MainContent';

export default class Dashboard extends React.Component {
    render () {
        return ( 
        	<div>
        		<TopHeader/>
        		<LeftMenu/>
        		<MainContent/>
        	</div>   
        );
    }
}
