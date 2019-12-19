import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
import SavedCard from '../savedList/SavedResult';


class SavedList extends Component {
    
    state = {
        savedNurses: []
    }
    
    delete = id => {
        // this function would delete the nurse by using the delete method
        // looking through the saved table and then the id associated to the card.
        ApiManager.delete("saved", id)
        .then(()=>{
            // I define my userId and get an object of credentials
            const userId = JSON.parse(localStorage.getItem("credentials"))
            // console.log("userId", userId.id)
            // i console logged the id by drilling down within the object
            ApiManager.getAllforLoggedInUser(userId.id, "saved")
            .then((savedNurse) => {
                // then it sets the states of all saved nurses in the array of state
            this.setState({
                savedNurses: savedNurse
            })
        })
        })
    }

    // deleteNurse = id => {
    //     // handles deleting a single event from events array and renders updated array to the DOM
    //     ApiManager.delete("saved", id)
    //         .then(() => {
    //             ApiManager.getAllforLoggedInUser(userId, "saved")
    //                 .then((updateSavedList) => {
    //                     this.setState({
    //                         savedNurses: updateSavedList
    //                     })
    //                 })
    //         })
    // }

    // deleteNurse = id => {
    //     delete this.state.savedNurses[id]
    // }

    componentDidMount(){
        // console.log("SAVED LIST: ComponentDidMount");
        //getAll from ApiManager and hang on to that data; put it in state

        // I defined the currentUser and did the same where I drilled down to the id
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        console.log(currentUser.id)
        // do a getAll to find all saved results associated to that users id 
        ApiManager.getAllforLoggedInUser(currentUser.id, "saved")
        .then((savedNurse) => {
            // after that is said and done, a .then is asked to set the state of all savedNurse(s) 
            this.setState({
                savedNurses: savedNurse
            })
            console.log("userId", savedNurse)
        })
    }
    
    render() {
        if (this.state.savedNurses.length !== 0) {
            return (
                <> 
        <div className="card-container">
            {/* this saved Card needs to have the following below such as the key, delete, savedId, nurseCard  */}
            {this.state.savedNurses.map(nurse => {
                // console.log("hello", nurse)
            return <SavedCard
                key={nurse.id}
                nurse={nurse.nurse}
                savedId={nurse.id}
                delete={this.delete}
                nurseCard={nurse}
                {...this.props}
                />
            })}
        </div>
        </>
            )
        } else {
            return (
                <h1>Hello World</h1>
            )
        }
    }
}

export default SavedList;