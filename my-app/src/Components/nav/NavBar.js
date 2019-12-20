import React, { Component } from "react"
import { Link } from "react-router-dom"
import NavLogo from '../nav/Logo_list.png'
import './NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser()
    }
    
    render() {
        return (
            <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                <img src={NavLogo} 
                className="NavLogo"></img>
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
                        <li><Link className="nav-link" to="/" onClick={this.handleLogout}>Logout</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link></li>
                    </ul>
                </span>
            </nav>
        )
    }
}

export default NavBar