import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class NurseCardNotes extends Component {

    // I set state to contain the following information to be displayed when a card is selected
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

    // updateNotes gives the function to update your notes
    updateNotes = evt => {
        // I define my current user as an object 
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        evt.preventDefault()
        // const userId = localStorage.getItem("credentials")
        this.setState({ loadingStatus: true });
        const editedNotes = {
            // the following informtaion that will be passed on to the saved table once when
            // you make and post your edit. 
            id: this.state.id,
            nurseId: this.state.nurseId,
            userId: currentUser.id,
            notes: this.state.notes,
        };
        // this updates your existing info in your DB with edited notes. 
        ApiManager.update("saved", editedNotes)
        .then(() => 
            // then it reditects you to your saved list after
            this.props.history.push("/mylist"))
    }

    // hanlde field change handes the changes being made to state by the input field in
    // the edited notes field to be specific.
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount(){
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getNurseDetails("saved", this.props.match.params.savedNurseId)
        .then((savedNurse) => {
            // console.log("I am nested", savedNurse)
            // this fetches the nurse from your saved table.
            // It contains an object within the object and that object inside your 
            // saved table has the nurse info id to be fetched for when you see the nurse details
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
        <div className="card" id="card-container">
            <div className="card-content" id="card-content">
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