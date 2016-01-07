var React = require('react');



var Table = React.createClass({
	getInitialState:function(){
		return{
			data:[]
		}
	},
	render:function(){
		return(

					<tr>
					    <td>
					    	<div className="icheckbox_square-green"><input type="checkbox" className="i-checks"/></div>
					    </td>
					    <td>
					    	   {this.props.info}
					    </td>
					    <td><strong>{this.props.task}</strong></td>
					    <td>{this.props.date}</td>
					    	<td><a href=""><i className="fa fa-check text-navy"></i></a>
					    </td>
					</tr>
		)
	}
});


var Listing = React.createClass({
	getInitialState:function(){
		return{
			data: [
				{
					data:{
						info: "Contract with Zender Company",
						task:"20%",
						date:"Jul 14, 2013"
					}
				},
				{
					data:{
						info: "Contract with Zender Company",
						task:"21%",
						date:"Jul 14, 2013"
					}
				},
				{
					data:{
						info: "Contract with Zender Company",
						task:"22%",
						date:"Jul 14, 2013"
					}
				},
			]
		}
	},
	
	eachProj:function(data, i){
		return(<Table key={i} date={data.data.date} task={data.data.task} info={data.data.info}/>)
	},
	render: function(){
		var each = this.state.data.map(this.eachProj);
		return(
			<div className="Listing component-bg">
				<table border="0">
				<thead>
					<tr>
                        <th>Project</th>
                        <th>Task</th>
                        <th>Completed</th>
                        <th>Date</th>                      
                    </tr>
				</thead>
				<tbody>
					{each}
				</tbody>
				</table>
			</div>
		)
	}
});


module.exports = Listing;