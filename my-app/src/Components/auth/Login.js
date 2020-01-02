import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ApiManager from '../modules/ApiManager';
import './Login.css';

class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = e => {
    e.preventDefault()
    ApiManager.checkUser(this.state.email, this.state.password)
    .then(results=>{
        if(results.length>0) {
            this.props.setUser(results[0])
            this.props.history.push("/mylist");
        } else {
            alert("Incorrect username, email, or password")
        } 
    })
}


    render() {
        return (
            <div className="loginCardContainer">
            <div className="loginCard">
                <form onSubmit={this.handleLogin}>
                    <div className="loginFieldset">
                        <div>
                        <fieldset>
                            <div className="cardTitle">
                            <h3>Please sign in</h3>
                            </div>
                            <div className="loginFormgrid">
                                <label htmlFor="inputEmail">Username: </label>
                                <input 
                                    onChange={this.handleFieldChange} 
                                    type="email"
                                    id="email"
                                    placeholder="Email address"
                                    required="" 
                                    autoFocus="" />

                                <label 
                                    htmlFor="inputPassword">Password: 
                                </label>
                                <input 
                                    className="inputs" 
                                    onChange={this.handleFieldChange} 
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    required="" />
                            </div>
                            <div className="loginButtons">
                                <button type="submit" className="loginButton">
                                    Sign in
                                </button>
                                <Link to={`/register`}><button className="loginButton">
                                    Register
                                </button></Link>
                            </div>
                        </fieldset>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }


}

export default Login;