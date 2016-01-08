import React from 'react';

export default class InfoWidgets extends React.Component {
    render () {
        return ( 
        	<div>
                <div className="row">
                    <div  className="col-lg-3">
                        <div className="hpanel">
                            <div className="panel-body text-center h-200">
                                <i className="fa fa-bank fa-3x"></i>

                                <h1 className="m-xs">$1 206,90</h1>

                                <h3 className="font-extra-bold no-margins text-success">
                                    All Income
                                </h3>
                                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum.</small>
                            </div>
                            <div className="panel-footer">
                                This is standard panel footer
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-3">
                        <div className="hpanel stats">
                            <div className="panel-body h-200">
                                <div className="stats-title pull-left">
                                    <h4>Users Activity</h4>
                                </div>
                                <div className="stats-icon pull-right">
                                    <i className="fa fa-leaf fa-5x"></i>
                                </div>
                                <div className="m-t-xl">
                                    <h3 className="m-b-xs">210</h3>
                            <span className="font-bold no-margins">
                                Social users
                            </span>

                                    <div className="row">
                                        <div  className="col-xs-6">
                                            <small className="stats-label">Pages / Visit</small>
                                            <h4>7.80</h4>
                                        </div>

                                        <div  className="col-xs-6">
                                            <small className="stats-label">% New Visits</small>
                                            <h4>76.43%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-footer">
                                This is standard panel footer
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-3">
                        <div className="hpanel stats">
                            <div className="panel-body h-200">
                                <div className="stats-title pull-left">
                                    <h4>Page Views</h4>
                                </div>
                                <div className="stats-icon pull-right">
                                    <i className="fa fa-cubes fa-5x"></i>
                                </div>
                                <div className="m-t-xl">
                                    <h1 className="text-success">860k+</h1>
                            <span className="font-bold no-margins">
                                Social users
                            </span>
                                    <br/>
                                    <small>
                                        Lorem Ipsum is simply dummy text of the printing and <strong>typesetting
                                        industry</strong>. Lorem Ipsum has been.
                                    </small>
                                </div>
                            </div>
                            <div className="panel-footer">
                                This is standard panel footer
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-3">
                        <div className="hpanel stats">
                            <div className="panel-body h-200">
                                <div className="stats-title pull-left">
                                    <h4>Today income</h4>
                                </div>
                                <div className="stats-icon pull-right">
                                    <i className="fa fa-gift fa-5x"></i>
                                </div>
                                <div className="clearfix"></div>
                                <div className="flot-chart">
                                </div>
                                <div className="m-t-xs">

                                    <div className="row">
                                        <div  className="col-xs-5">
                                            <small className="stat-label">Today</small>
                                            <h4>$230,00 </h4>
                                        </div>
                                        <div  className="col-xs-7">
                                            <small className="stat-label">Last week</small>
                                            <h4>$7 980,60 <i className="fa fa-arrow-up text-success"></i></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-footer">
                                This is standard panel footer
                            </div>
                        </div>
                    </div>
                </div>
        	</div>   
        );
    }
}
