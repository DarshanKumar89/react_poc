import React from 'react';

var ArrayData = [{
    info: "Contract with Globant Company",
    task: "20%",
    date: "Jul 14, 2013",
    time: "06.03.2015"
}, {
    info: "Contract with Zender Company",
    task: "27%",
    date: "June 18, 2013",
    time: "06.03.2016"
}, {
    info: "Contract with Clarice Company",
    task: "25%",
    date: "Jul 23, 2013",
    time: "06.03.2017"
}, {
    info: "Contract with ABC Company",
    task: "45%",
    date: "Aug 23, 2013",
    time: "06.06.2017"
}];


export default class Listing extends React.Component {

    constructor (props) { 
        super(props);
        this.state = {
            tableData: ArrayData
        };
    }

	render () {
		var tableBody = this.state.tableData.map(function(obj, i){
			return(
				<tr key={i}>
					<td>
						<input type="checkbox"/>
					</td>
					<td>
			    	   {obj.info}
			    	   <br/>
                        <small><i className="glyphicon glyphicon-time"></i> Created {obj.time}</small>		
				    </td>
				    <td><strong>{obj.task}</strong></td>
				    <td>{obj.date}</td>
			    	<td>
			    		<a><i className="fa fa-check text-navy"></i></a>
				    </td>
                </tr>
			)
		});
		return(
			<div className="hpanel">
                <div className="panel-heading">
                    <div className="panel-tools">
                        <a className="showhide"><i className="fa fa-chevron-up"></i></a>
                        <a className="closebox"><i className="glyphicon glyphicon"></i></a>
                    </div>
                    Recently active projects
                </div>
                <div className="panel-body list">
                    <div className="table-responsive project-list">
                        <table className="table table-striped">
                            <thead>
	                            <tr>
	                                <th colSpan="2">Project</th>
	                                <th>Task</th>
	                                <th>Date</th>
	                                <th>Action</th>
	                            </tr>
                            </thead>
                            <tbody>
                            	{tableBody}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
		)
	}
}