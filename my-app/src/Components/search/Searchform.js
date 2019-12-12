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
        registeredNurses: []
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        ApiManager.getAll("stateCodes")
          .then(stateCodes => {
            this.setState({
                stateCodes: stateCodes,
                loadingStatus: false
            });
          });
    }

    searchNurse = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: false });
        const nurseSearchDetails = {
            license: this.state.licenseNumber,
            stateId: this.state.stateId,
            // nurseStateId: 
        };
        // console.log("EVT", nurseSearchDetails)
    
        ApiManager.getNurse("registeredNurses", nurseSearchDetails.stateId, nurseSearchDetails.license)
        .then((nurse) => this.setState ({
            registeredNurses: nurse
        })
        //   .then(() => this.props.history.push("/searchresult"))
        )}

    render(){
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
                        id="stateId"
                        value={this.state.stateId}
                        onChange={this.handleFieldChange}
                    >
                        {this.state.stateCodes.map(states => 
                        <option key={states.stateId} value={states.stateId}>
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
                {this.state.registeredNurses.map(nurse =>
                <NurseCard 
                key={nurse.id} 
                nurse={nurse} 
                {...this.props}
                />
                )}
                </div>
            </form>
            </>
        )
    }
}

export default SearchForm