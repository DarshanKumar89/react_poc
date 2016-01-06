var React = require('react');
var Chart = require('chart.js'); 



var lineGraph = React.createClass({
		componentWillMount: function(){},
		componentDidMount: function(){
		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		};
		var ctx = document.getElementById("canvas").getContext("2d");
		myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
	},
	render: function() {  
		return (
      <div>
      	<div className="graph">
        <canvas id="canvas"></canvas>
        </div>
		<div className="info text-center">

			<div className="small">
				<span className="glyphicon glyphicon-time"></span> Active duration
			</div>

			<div>
				<h1 className="font-extra-bold m-t-xl m-b-xs">10 Months</h1>
				<small>And four weeks</small>
			</div>

			<div className="small m-t-xl">
				<span className="glyphicon glyphicon-time"></span> Last active in 12.10.2015
			</div>
		</div>
      </div> 
    );  
	}
});

module.exports = lineGraph;




