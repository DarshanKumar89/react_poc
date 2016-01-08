import React from 'react'; 

var Menu = React.createClass({
	render: function() {  
		return (
      <div>
        <aside id="menu">
            <div id="navigation">
                <div className="profile-picture">
                    <a href="index.html">
                        <img src="images/profile.jpg" className="img-circle m-b" alt="logo"/>
                    </a>

                    <div className="stats-label text-color">
                        <span className="font-extra-bold font-uppercase">Robert Razer</span>

                        <div className="dropdown">
                            <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                                <small className="text-muted">Founder of App <b className="caret"></b></small>
                            </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a href="#contacts.html">Contacts</a></li>
                                <li><a href="#profile.html">Profile</a></li>
                                <li><a href="#analytics.html">Analytics</a></li>
                                <li className="divider"></li>
                                <li><a href="#login.html">Logout</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-extra-bold m-b-xs">
                                $260 104,200
                            </h4>
                            <small className="text-muted">Your income from the last year in sales product X.</small>
                        </div>
                    </div>
                </div>

                <ul className="nav" id="side-menu">
                    <li className="active">
                        <a> <span className="nav-label">Dashboard</span> <span className="label label-success pull-right">v.1</span> </a>
                    </li>
                    <li>
                        <a> <span className="nav-label">Analytics</span><span className="label label-warning pull-right">NEW</span> </a>
                    </li>
                    <li>
                        <a href="#"><span className="nav-label">Common views</span><span className="fa fa-angle-down pull-right"></span> </a>
                        <ul className="nav nav-second-level collapse">
                            <li><a href="/#login">Login</a></li>
                            <li><a href="/#register">Register</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span className="nav-label">Interface</span>
                            <span className="fa fa-angle-down pull-right"></span> </a>
                        <ul className="nav nav-second-level collapse">
                            <li><a href="#panels.html">Panels design</a></li>
                            <li><a href="#typography.html">Typography</a></li>
                            <li><a href="#buttons.html">Colors &amp; Buttons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><span className="nav-label">App views</span><span className="fa fa-angle-down pull-right"></span> </a>
                        <ul className="nav nav-second-level collapse">
                            <li><a href="#contacts.html">Contacts</a></li>
                            <li><a href="#projects.html">Projects</a></li>
                            <li><a href="#search.html">Search view</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><span className="nav-label">Charts</span><span className="fa fa-angle-down pull-right"></span> </a>
                        <ul className="nav nav-second-level collapse">
                            <li><a href="#chartjs.html">ChartJs</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><span className="nav-label">Box transitions</span><span className="fa fa-angle-down pull-right"></span> </a>
                        <ul className="nav nav-second-level collapse">
                            <li><a href="#overview.html"><span className="label label-success pull-right">Start</span> Overview </a>  </li>
                            <li><a href="#transition_two.html">Columns from up</a></li>
                            <li><a href="#transition_one.html">Columns custom</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="#"><span className="nav-label">Tables</span><span className="fa fa-angle-down pull-right"></span> </a>
                        <ul className="nav nav-second-level collapse">
                            <li><a href="#tables_design.html">Tables design</a></li>
                            <li><a href="#footable.html">Foo Table</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><span className="nav-label">Forms</span><span className="fa fa-angle-down pull-right"></span> </a>
                        <ul className="nav nav-second-level collapse">
                            <li><a href="#forms_elements.html">Forms elements</a></li>
                            <li><a href="#forms_extended.html">Forms extended</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="landing_page.html"> <span className="nav-label">Landing page</span></a>
                    </li>
                    
                </ul>
            </div>
        </aside>

      </div>

    );  
	}
});
	
module.exports = Menu;
