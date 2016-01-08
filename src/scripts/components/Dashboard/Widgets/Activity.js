var React = require('react');

var MainContent = React.createClass({
    render: function() {
        return ( 
            <div className="hpanel stats">
                <div className="panel-heading">
                    <div className="panel-tools">
                        <a className="showhide"><i className="glyphicon glyphicon-chevron-up"></i></a>
                        <a className="closebox"><i className="glyphicon glyphicon"></i></a>
                    </div>
                    Last active
                </div>
                <div className="panel-body list">
                    <div className="stats-title pull-left">
                        <h4>Activity</h4>
                    </div>
                    <div className="stats-icon pull-right">
                        <i className="glyphicon glyphicon-star" style={{"fontSize" : "50px"}}></i>
                    </div>
                    <div className="m-t-xl">
                        <span className="font-bold no-margins">
                            Social users
                        </span>
                        <br/>
                        <small>
                            Lorem Ipsum is simply dummy text of the printing simply all dummy text. Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                        </small>
                    </div>
                    <div className="row m-t-md">
                        <div  className="col-lg-6">
                            <h3 className="no-margins font-extra-bold text-success">300,102</h3>

                            <div className="font-bold">98% <i className="glyphicon glyphicon-arrow-up text-success"></i></div>
                        </div>
                        <div  className="col-lg-6">
                            <h3 className="no-margins font-extra-bold text-success">280,200</h3>

                            <div className="font-bold">98% <i className="glyphicon glyphicon-arrow-up text-success"></i></div>
                        </div>
                    </div>
                    <div className="row m-t-md">
                        <div  className="col-lg-6">
                            <h3 className="no-margins font-extra-bold ">120,108</h3>

                            <div className="font-bold">38% <i className="glyphicon glyphicon-arrow-down"></i></div>
                        </div>
                        <div  className="col-lg-6">
                            <h3 className="no-margins font-extra-bold ">450,600</h3>

                            <div className="font-bold">28% <i className="glyphicon glyphicon-arrow-down"></i></div>
                        </div>

                    </div>
                </div>
                <div className="panel-footer">
                    This is standard panel footer
                </div>
            </div>   
        );
    }
});

module.exports = MainContent;
