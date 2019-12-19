import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
import NurseCard from './SearchResult';

class SearchForm extends Component {

    // Set initial state
    state = {
        id: "",
        licenseNumber: "",
        stateId: "",
        abv: "",
        loadingStatus: false,
        stateCodes: [],
        nurses: []
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    // What renders on page load
    componentDidMount() {
        const currentUser = localStorage.getItem("credentials")
        // this gets all states from the table stateCodes
        ApiManager.getAll("stateCodes")
          .then(stateCodes => {
            this.setState({
                userId: Number(currentUser),
                stateCodes: stateCodes,
                loadingStatus: false
            });
            // stateCodes is an array of objects (states with their stateCodes, Id and Abv)
            // console.log("stateCodes", stateCodes)
          });
    }

    searchNurse = evt => {
        evt.preventDefault()
        if (this.state.stateId !== "") {
            this.setState({ loadingStatus: false });
            const nurseSearchDetails = {
                // state of the nurse license value
            license: this.state.licenseNumber,
                // state of the stateId value
            stateId: this.state.stateId
        };
        // console.log("nurseSearch", nurseSearchDetails)
        
        ApiManager.getNurse("nurses", nurseSearchDetails.stateId, nurseSearchDetails.license)
        .then((showNurse) => this.setState ({
            nurses: showNurse
        })
        //   .then(() => this.props.history.push("/searchresult"))
        )}
        else {
            window.alert("Please select state!")
            // **************  how can I find the value of showNurse?  **********
        }}
        
        render(){
            console.log("showNurse", this.state)
        return (
            <>
            <form>
                <fieldset>
                    <div>
                        <input
                            type="text"
                            required
                            value={this.state.licenseNumber}
                            id="licenseNumber"
                            placeholder="License #"
                            onChange={this.handleFieldChange}
                        />
                    </div>
                    <div>
                    <fieldset>
                        <select
                        className="form-control"
                        // The id targets the state stateId up on top on state
                        id="stateId"
                        value={this.state.stateId}
                        onChange={this.handleFieldChange}
                    >
                        <option value="">Select a state</option>
                        {this.state.stateCodes.map(states => 
                        <option 
                        // this gives the value of the option selected
                        key={states.stateId} 
                        value={states.stateId}
                        >
                            {states.abv}
                        </option>
                        )}
                        </select>
                    </fieldset>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            disabled={this.state.loadingStatus}
                            onClick={this.searchNurse}
                        >Search</button>
                    </div>
                </fieldset>
                <div className="result-container">
                {this.state.nurses.map(nurse =>
                // Nurse card that is ploted to show is put here
                <NurseCard 
                key={nurse.id} 
                nurse={nurse} 
                {...this.props}
                delete={this.delete}
                />
                )}
                </div>
            </form>
            </>
        )
    }
}

export default SearchForm