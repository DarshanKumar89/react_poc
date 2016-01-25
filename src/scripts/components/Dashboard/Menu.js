import React, { PropTypes } from 'react';

/*var menus = [{ 
    "label": "Dashboard", 
    "subMenu":[]
},{ 
    "label": "Analytics", 
    "subMenu":[]
},{ 
    "label": "Common Views", 
    "subMenu":[{"subLabel": "Login", "link": "/#login"}, 
                {"subLabel": "Register", "link": "/#register"}]
},{
    "label": "Interface", 
    "subMenu":[{"subLabel": "Panels design", "link": "#panels.html"}, 
                {"subLabel": "Typography", "link": "#typography.html"},
                {"subLabel": "Colors & Buttons", "link": "#buttons.html"}]
},{   
    "label": "App views", 
    "subMenu":[{"subLabel": "Thank You", "link": "/#thanks"}, 
                {"subLabel": "Not Found", "link": "/#hregherg"}]
},{   
    "label": "Charts", 
    "subMenu":[{"subLabel": "ChartJs", "link": "/#ChartJs"}, 
                {"subLabel": "D3Js", "link": "/#d3js"}]
},{   
    "label": "Box transitions", 
    "subMenu":[{"subLabel": "Overview", "link": "/#ChartJs"},
                {"subLabel": "Overview 2", "link": "/#ChartJs"}]
},{   
    "label": "Tables", 
    "subMenu":[{"subLabel": "Tables design", "link": "/#ChartJs"}, 
                {"subLabel": "Foo Table", "link": "/#d3js"}]
},{   
    "label": "Forms", 
    "subMenu":[{"subLabel": "Forms elements", "link": "/#ChartJs"}, 
                {"subLabel": "Forms extended", "link": "/#d3js"}]
},{   
    "label": "Landing page", 
    "subMenu":[]
}]; */

export default class Menu extends React.Component {

    componentDidMount() {
         $("#side-menu>li:first").addClass("active");   
    }
    render () {
        var myMenu = this.props.menuData.map(function(obj, i){

            let xx;
            if(obj.label == 'Dashboard'){
                xx = <span className="label label-success pull-right">v.1</span>
            }else if(obj.label == 'Analytics'){
                xx = <span className="label label-warning pull-right">NEW</span>
            }else{
                xx = <span className="fa fa-angle-down pull-right"></span>
            }

            return(
                <li key={i}>
                    <a>
                        <span className="nav-label">{obj.label}</span>
                        {xx}
                    </a>
                    <ul className="nav nav-second-level collapse">
                        {
                            obj.subMenu.map(function(eachObj, i){
                                return (
                                    <li  key={i}><a href={eachObj.link}>{eachObj.subLabel}</a></li>
                                )
                            })
                        }
                    </ul>
                </li>
            )
        });  
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
                    {myMenu}
                </ul>
            </div>
        </aside>

      </div>

    );  
    }
}

Menu.propTypes = {
  menuData: PropTypes.array.isRequired
}
