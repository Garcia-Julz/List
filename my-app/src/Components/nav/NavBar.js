import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }
    
    render() {
        return (
            <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mylist">My List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About us</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="nav nav-pills nav-fill">
                        <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link></li>
                    </ul>
                </span>
            </nav>
        )
    }
}

export default NavBar