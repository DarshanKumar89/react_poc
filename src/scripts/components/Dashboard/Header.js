import React from 'react';

export default class Header extends React.Component {
	render () {  
		return (
      <div id="header">
            <div className="color-line"></div>
            <div id="logo" className="light-version">
                <span>
                    @Globant
                </span>
            </div>
            <nav role="navigation">
                <div className="header-link hide-menu">
                  <i className="glyphicon glyphicon-menu-hamburger"></i>
                </div>
                <div className="small-logo">
                    <span className="text-primary">GLOBER APP</span>
                </div>
                <form role="search" className="navbar-form-custom">
                    <div className="form-group">
                        <input placeholder="Search something special" className="form-control" 
                        name="search" type="text" />
                    </div>
                </form>
                <div className="mobile-menu">
                    <button type="button" className="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
                        <i className="fa fa-chevron-down"></i>

                    </button>
                    <div className="collapse mobile-navbar" id="mobile-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <a className="text-center" href="/#login">Login</a>
                            </li>
                            <li>
                                <a className="text-center" href="/#register">Register</a>
                            </li>
                            <li>
                                <a className="text-center" href="">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-right">
                    <ul className="nav navbar-nav no-borders">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="glyphicon glyphicon-bullhorn"></i>
                            </a>
                            <ul className="dropdown-menu hdropdown notification animated flipInX">
                                <li>
                                    <a>
                                        <span className="label label-success">NEW</span> It is a long established.
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="label label-warning">WAR</span> There are many variations.
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="label label-danger">ERR</span> Contrary to popular belief.
                                    </a>
                                </li>
                                <li className="summary"><a href="#">See all notifications</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                                <i className="glyphicon glyphicon-th"></i>
                            </a>

                            <div className="dropdown-menu hdropdown bigmenu animated flipInX">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <a href="">
                                                <i className="glyphicon glyphicon-briefcase text-info"></i>
                                                <h5>Projects</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <i className="glyphicon glyphicon-envelope text-warning"></i>
                                                <h5>Email</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <i className="glyphicon glyphicon-user text-success"></i>
                                                <h5>Contacts</h5>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="">
                                                <i className="glyphicon glyphicon-comment text-info"></i>
                                                <h5>Forum</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <i className="glyphicon glyphicon-flash text-danger"></i>
                                                <h5>Analytics</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <i className="glyphicon glyphicon-folder-close text-success"></i>
                                                <h5>Files</h5>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle label-menu-corner" href="#" data-toggle="dropdown">
                                <i className="glyphicon glyphicon-envelope"></i>
                                <span className="label label-success">4</span>
                            </a>
                            <ul className="dropdown-menu hdropdown animated flipInX">
                                <div className="title">
                                    You have 4 new messages
                                </div>
                                <li>
                                    <a>
                                        It is a long established.
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        There are many variations.
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Lorem Ipsum is simply dummy.
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Contrary to popular belief.
                                    </a>
                                </li>
                                <li className="summary"><a href="#">See All Messages</a></li>
                            </ul>
                        </li>
                        <li>
                            <a id="sidebar" className="right-sidebar-toggle">
                                <i className="glyphicon glyphicon-stats"></i>
                            </a>
                        </li>
                        <li className="dropdown">
                            <a>
                                <i className="glyphicon glyphicon-log-out"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );  
	}
	
}
