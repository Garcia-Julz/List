import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
import NurseCard from '../search/SearchResult';

const userId = localStorage.getItem("credentials")

class SavedList extends Component {

    state = {
        savedNurses: []
    }

    // deleteNurse = id => {
    //     ApiManager.delete("saved", this.state.savedNurses.id)
    //     .then(() => {
    //         ApiManager.getAll()
    //       .then(~.post("saved", this.state.savedNurses.id) => {
    //         this.setState({
    //             savedNurses: ~
    //         })
    //       })
    //     })
    // }

    deleteNurse = id => {
        // handles deleting a single event from events array and renders updated array to the DOM
        ApiManager.delete("saved", id)
            .then(() => {
                ApiManager.getAllforLoggedInUser(userId, "saved")
                    .then((updateSavedList) => {
                        this.setState({
                            savedNurses: updateSavedList
                        })
                    })
            })
    }

    // deleteNurse = id => {
    //     delete this.state.savedNurses[id]
    // }

    componentDidMount(){
        // console.log("SAVED LIST: ComponentDidMount");
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getAllforLoggedInUser(userId, "saved")
        .then((savedNurse) => {
            let nurseArray = []
            savedNurse.forEach(individualNurse => {
                // nurseArray.push(individualNurse.nurse)
                nurseArray[individualNurse.id] = individualNurse.nurse;
                console.log(individualNurse.nurse)
            });
            // console.log(savedNurse)
            this.setState({
                savedNurses: nurseArray
            })
            // console.log(this.state.savedNurses)
        })
    }

    render() {
        return (
        <>
        <div className="card-container">
            {this.state.savedNurses.map(nurse => {
                // console.log("hello", nurse)
            return <NurseCard
                key={nurse.id}
                nurse={nurse}
                deleteNurse={this.deleteNurse}
                {...this.props}
                />
            })}
        </div>
        </>
        )
    }
}

export default SavedList;