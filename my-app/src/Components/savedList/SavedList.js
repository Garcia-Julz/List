import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
import SavedCard from '../savedList/SavedResult';


class SavedList extends Component {

    currentUser = JSON.parse(localStorage.getItem("credentials"))
    
    state = {
        savedNurses: [],
        userId: this.currentUser.id
    }
    
    delete = id => {
        ApiManager.delete("saved", id)
        .then(()=>{
            const userId = JSON.parse(localStorage.getItem("credentials"))
            console.log("userId", userId.id)
            ApiManager.getAllforLoggedInUser(userId.id, "saved")
            .then((savedNurse) => {
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
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        console.log(currentUser.id)
        ApiManager.getAllforLoggedInUser(currentUser.id, "saved")
        .then((savedNurse) => {
            this.setState({
                savedNurses: savedNurse
            })
            // console.log("userId", userId)
        })
    }
    
    render() {
        if (this.state.savedNurses.length !== 0) {
            return (
                <> 
        <div className="saved-container">
            {this.state.savedNurses.map(nurse => {
                // console.log("hello", nurse)
            return <SavedCard
                key={nurse.id}
                nurse={nurse.nurse}
                savedId={nurse.id}
                delete={this.delete}
                nurseCard={nurse}
                {...this.props}
                // {...props}
                />
            })}
        </div>
        </>
            )
        } else {
            return (
                <h1></h1>
            )
        }
    }
}

export default SavedList;