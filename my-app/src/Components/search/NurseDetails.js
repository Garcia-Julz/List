import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
// import * as firebase from '../../../src/FirebaseFiles';
// import 'firebase/storage';

class NurseCardNotes extends Component {

    state = {
        first: "",
        last: "",
        licenseStatus: "",
        licenseType: "",
        notes: "",
        id: "",
        userId: "",
        nurseId: "",
        loadingStatus: false,
    }

    updateNotes = evt => {
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        evt.preventDefault()
        // const userId = localStorage.getItem("credentials")
        this.setState({ loadingStatus: true });
        const editedNotes = {
            id: this.state.id,
            nurseId: this.state.nurseId,
            userId: currentUser.id,
            notes: this.state.notes,
        };
        ApiManager.update("saved", editedNotes)
        .then(() => 
            this.props.history.push("/mylist"))
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount(){
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getNurseDetails("saved", this.props.match.params.savedNurseId)
        .then((savedNurse) => {
            console.log("I am nested", savedNurse)
            this.setState({
                first: savedNurse.nurse.first,
                last: savedNurse.nurse.last,
                licenseStatus: savedNurse.nurse.licenseStatus,
                licenseType: savedNurse.nurse.licenseType,
                issueDate: savedNurse.nurse.issueDate,
                expireDate: savedNurse.nurse.expireDate,
                notes: savedNurse.notes,
                nurseId: savedNurse.nurseId,
                userId: savedNurse.userId,
                id: savedNurse.id,
                loadingStatus: false,
            })
            console.log(savedNurse)
        })
    }

    render() {
        // console.log(this.props.match.params.savedNurseId)
        return (
        <div className="details-container">
            <div className="details-card">
            {/* <picture id="card-image">
                <img src={require('./dog.svg')} alt="My Dog" />
            </picture> */}
                <p>First: {this.state.first}</p>
                <p>Last: {this.state.last}</p>
                <p>Status: {this.state.licenseStatus}</p>
                <p>Type: {this.state.licenseType}</p>
                <p>Issued: {this.state.issueDate}</p>
                <p>Expires: {this.state.expireDate}</p>
                {/* <p>Notes: {this.state.notes}</p> */}
                <label htmlFor="animalName">Notes:</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="notes"
                value={this.state.notes}
              />
                <button 
                type="button" 
                disabled={this.state.loadingStatus}
                className="button" 
                onClick={this.updateNotes}>
                    <span>Save</span>
                </button>
            </div>
        </div>
        );
    }

}

export default NurseCardNotes;