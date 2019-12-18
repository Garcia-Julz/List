import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
import SavedCard from '../savedList/SavedResult';

const userId = localStorage.getItem("credentials")

class SavedList extends Component {

    state = {
        savedNurses: []
    }

    delete = id => {
        ApiManager.delete("saved", id)
        .then(()=>{
            ApiManager.getAllforLoggedInUser(userId, "saved")
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
        
        ApiManager.getAllforLoggedInUser(localStorage.getItem("credentials"), "saved")
        .then((savedNurse) => {
            this.setState({
                savedNurses: savedNurse
            })
            // console.log("userId", userId)
        })
    }
    
    render() {
        console.log("hello", this.state.savedNurses)
        return (
        <>
        <div className="card-container">
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
    }
}

export default SavedList;