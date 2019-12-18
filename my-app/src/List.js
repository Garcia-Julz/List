import React, { Component } from "react";
import NavBar from "./Components/nav/NavBar";
import ApplicationViews from "./Components/ApplicationViews";
import "./List.css";

class List extends Component {
  // user doesn't exist by default
  state = {
    user: false,
    userId: 0
  }

  // isAuthenticated checks if credentials are in local storage
  // returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (results) => {
    // console.log("auth", results[0].id)
    localStorage.setItem("credentials", results[0].id)
    this.setState({
      user: this.isAuthenticated()
    });
  }

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
        <NavBar />
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser} 
                          handleLogin={this.handleLogin}/>
      </React.Fragment>
    );
  }
}

export default List;