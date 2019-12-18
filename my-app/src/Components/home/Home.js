import React, { Component } from 'react'
// import './Home.css'
import { Link } from "react-router-dom";
import SavedList from '../savedList/SavedList';

class Home extends Component {
    render() {
        const isAuth = this.props.user

        return (
            <>
            {isAuth
            ? this.props.history.push("/mylist")
            :
            <div>      
            <div id="homeBackground" >
            </div>
            <div>
                <h1 id="welcomeHomePageHeader">Validate With Confidence</h1>
                <div id="loginButton">
                <Link to={`/login`}><button className="btn btn-primary" >Login</button></Link>
                </div>
            </div>
            </div>
            }
            </>
        )
    }
}

export default Home;