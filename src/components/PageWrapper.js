import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component{
    render(){
        return (
            <div>

                <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <Link className="navbar-brand mr-1" to="/home">KNN-React App</Link>
                <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" to="#">
                <i className="fas fa-bars"></i>
                </button>

                {/* <!-- Navbar Search --> */}
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search"></i>
                    </button>
                    </div>
                </div>
                </form>

                {/* <!-- Navbar --> */}
                <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown no-arrow mx-1">
                    <Link className="nav-link dropdown-toggle" to="/" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger">9+</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                    <Link className="dropdown-item" to="#">Action</Link>
                    <Link className="dropdown-item" to="#">Another action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Something else here</Link>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger">7</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                    <Link className="dropdown-item" to="#">Action</Link>
                    <Link className="dropdown-item" to="#">Another action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Something else here</Link>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user-circle fa-fw"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <Link className="dropdown-item" to="#">Settings</Link>
                    <Link className="dropdown-item" to="#">Activity Log</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">Logout</Link>
                    </div>
                </li>
                </ul>
                </nav>
        
                 {/* <!-- Sidebar --> */}
                 <div id="wrapper">
                 <ul className="sidebar navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/inputPlayer">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Input Player</span>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                    <h6 className="dropdown-header">Login Screens:</h6>
                    <Link className="dropdown-item" to="/try">Login</Link>
                    <Link className="dropdown-item" to="register.html">Register</Link>
                    <Link className="dropdown-item" to="forgot-password.html">Forgot Password</Link>
                    <div className="dropdown-divider"></div>
                    <h6 className="dropdown-header">Other Pages:</h6>
                    <Link className="dropdown-item" to="404.html">404 Page</Link>
                    <Link className="dropdown-item" to="blank.html">Blank Page</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
                </li>
                </ul>
                
                {this.props.children}
                </div>
                </div>
                
        );  
}
}
export default PageWrapper;