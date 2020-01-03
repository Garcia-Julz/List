import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
import SavedCard from '../savedList/SavedResult';
import oops from './unsaved_image.png'
import './SavedList.css'

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
                <div className="oopsMessageContainer">
                    <div className="oopsMessage">
                        <img src={oops}></img>
                    </div>
                </div>
            )
        }
    }
}

export default SavedList;