import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
import NurseCard from '../search/SearchResult';

class SavedList extends Component {

    state = {
        savedNurses: [],
    }


    // deleteNurse = id => {
    //     ApiManager.delete("saved", id)
    //     .then(() => {
    //         ApiManager.getAll()
    //       .then(ApiManager.post("saved", id) => {
    //         this.setState({
    //             savedNurses: ~~~
    //         })
    //       })
    //     })
    // }

    // componentDidMount(){
    //     // console.log("SAVED LIST: ComponentDidMount");
    //     //getAll from ApiManager and hang on to that data; put it in state
    //     ApiManager.getAll()
    //     .then((savedNurses) => {
    //         this.setState({
    //             savedNurses: savedNurses
    //         })
    //     })
    // }

    render() {
        return (
        <>
        <div className="card-container">
            {this.state.savedNurses.map(nurse =>
                <NurseCard
                key={nurse.id}
                nurse={nurse}
                deleteNurse={this.deleteNurse}
                {...this.props}
                />
            )}
        </div>
        </>
        )
    }
}

export default SavedList;