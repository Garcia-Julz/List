import React, { Component } from "react";
import NavBar from "./Components/nav/NavBar";
import ApplicationViews from "./Components/ApplicationViews";
import "./List.css";

class List extends Component {
  // user doesn't exist by default
  state = {
    user: false,
    userId: ""
  }

  // isAuthenticated checks if credentials are in local storage
  // returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (results) => {
    console.log("auth-results", results)
    localStorage.setItem(
      "credentials", JSON.stringify(results))
    this.setState({
      user: this.isAuthenticated()
    });
    console.log(results)
  }
  
  getUser = JSON.parse(localStorage.getItem("credentials"))

  clearUser = () =>  {
    localStorage.removeItem("credentials")
    this.setState({user: this.isAuthenticated()})
  }

  componentDidMount(){
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
        user={this.state.user}
        clearUser={this.clearUser}/>
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser} 
                          handleLogin={this.handleLogin}
                          getUser={this.getUser}/>
      </React.Fragment>
    );
  }
}

export default List;