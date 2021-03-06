import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// *****************  HOME  ***********************
import Home from "./home/Home";
import Login from "./auth/Login";
import About from './About/About'
import Registration from "./auth/RegisterAccount";
// // *****************  FORM  ***********************
// import ArticlesForm from "./articles/ArticlesForm";
// import EventForm from "./events/EventForm";
// import MessageForm from "./messages/MessageForm";
import SearchForm from './search/Searchform';
// // *****************  LIST  ***********************
// import ArticlesList from "./articles/ArticlesList";
// import EventsList from "./events/EventsList";
import SavedList from "./savedList/SavedList";
// import TasksList from "./tasks/TasksList"
// import FriendsList from "./friends/FriendsList";
// // *****************  EDIT  ***********************
import NurseCardNotes from "./search/NurseDetails";
// import EventEditForm from "./events/EventEditForm";
// import MessageEditForm from "./messages/MessageEditForm";
// import TaskEditForm from "./tasks/TaskEditForm";
// // import ArticlesEditForm from "./articles/ArticlesEditForm";
export default class ApplicationViews extends Component {

  render() {
      
    return (
      <React.Fragment>
        {/* Home and Authentication */}
        <Route exact path="/" render={(props) => {
          return <Home 
          user= {this.props.user}
          {...props}
          {...this.props} />
        }}
        />
        <Route
          exact path="/login" render={props => {
            return <Login
              {...props}
              {...this.props}
            />
          }}
        />
        <Route exact path="/register" render={props => {
          return <Registration 
          {...this.props}
          {...props} />
        }}
        />
        {/* LIST */}
        <Route
          exact path="/mylist" render={props => {
            if (this.props.user) {
              return <SavedList
                {...props}
                {...this.props}
              />
            } else {
              return <Redirect to="login" />
            }
          }}
        />
        {/* <Route
          path="/messages/new" render={props => {
            return <MessageForm {...props} />
          }}
        /> */}

        {/* <Route
          exact path="/messages/:messageId(\d+)/edit" render={props => {
            return <MessageEditForm {...props} />
          }} /> */}
        {/* TASKS */}
        {/* <Route
          exact path="/tasks" render={props => {
            return <TasksList {...props} />

          }}
        /> */}
        <Route exact path="/search" render={props => {
          return <SearchForm 
          {...props}
          {...this.props} />
        }}
        />
        {/* <Route path="/searchresults" render={props => {
          return <SearchFormResults {...props} />
        }}
        /> */}
        {/* <Route
          path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskEditForm {...props} />
          }}
          /> */}


        {/* <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        /> */}
        {/* DETAILS */}
        {/* <Route 
          exact path="/articles" render={props => {
            return <ArticlesList 
            {...props} />
        }}
        /> */}

        <Route path="/mylist/details/:savedNurseId(\d+)" render={props => {
          return <NurseCardNotes savedNurseId={parseInt(props.match.params.savedNurseId)}
          {...props}
          {...this.props} />
        }}
        />

        {/* <Route
          path="/articles/:articleId(\d+)/edit" render={props => {
            return <ArticlesEditForm 
            {...props} />
        }}
        /> */}
        {/* ABOUT */}
        {/* <Route
          exact path="/events" render={props => {
            if (this.props.user) {
              return <EventsList
                {...props}
                {...this.props}
              />
            } else {
              return <Redirect to="login" />
            }
          }}
        /> */}
        <Route path="/about" render={props => {
          return <About 
          {...this.props}
          {...props} />
        }}
        />
        {/* <Route path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEditForm {...props} />
        }}
        /> */}
      </React.Fragment>
    );
  }
}
