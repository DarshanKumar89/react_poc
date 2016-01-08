import React from 'react';
import LineGraph from './../../common/Charts/LineGraph'; 

export default class LineGraphWidget extends React.Component {
	render () { 
		return (
			<div>
				<div className="row">
		            <div  className="col-lg-12">
		                <div className="hpanel">
		                    <div className="panel-heading">
		                        <div className="panel-tools">
		                            <a className="showhide"><i className="fa fa-chevron-up"></i></a>
		                            <a className="closebox"><i className="glyphicon glyphicon"></i></a>
		                        </div>
		                        Dashboard information and statistics
		                    </div>
		                    <div className="panel-body">
		                        <div className="row">
		                            <div  className="col-md-3 text-center">
		                                <div className="small">
		                                    <i className="glyphicon glyphicon-flash"></i> Page views
		                                </div>
		                                <div>
		                                    <h1 className="font-extra-bold m-t-xl m-b-xs">
		                                        226,802
		                                    </h1>
		                                    <small>Page views in last month</small>
		                                </div>
		                                <div className="small m-t-xl">
		                                    <i className="glyphicon glyphicon-time"></i> Data from January
		                                </div>
		                            </div>
		                            <div  className="col-md-6">
		                                <div className="text-center small">
		                                    <i className="glyphicon glyphicon-user"></i> Active users in current month (December)
		                                    <LineGraph/>
		                                </div>
		                            </div>
		                            <div  className="col-md-3 text-center">
		                                <div className="small">
		                                    <i className="glyphicon glyphicon-time"></i> Active duration
		                                </div>
		                                <div>
		                                    <h1 className="font-extra-bold m-t-xl m-b-xs">
		                                        10 Months
		                                    </h1>
		                                    <small>And four weeks</small>
		                                </div>
		                                <div className="small m-t-xl">
		                                    <i className="glyphicon glyphicon-time"></i> Last active in 12.10.2015
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="panel-footer">
		                    <span className="pull-right">
		                          You have two new messages from <a href="">Monica Bolt</a>
		                    </span>
		                        Last update: 21.05.2015
		                    </div>
		                </div>
		            </div>
		        </div>
			</div>   
		); 
	}
	
}





