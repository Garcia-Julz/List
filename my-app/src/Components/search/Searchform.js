import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';


class SearchForm extends Component {

    // Set initial state
    state = {
        id: "",
        licenseNumber: "",
        stateId: "",
        abv: "",
        loadingStatus: false,
        stateCodes: []
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
        console.log("EVT", nurseSearchDetails)
    
        ApiManager.getAll("registaredNurses", nurseSearchDetails)
          .then(() => this.props.history.push("/search"))
    }

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
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default SearchForm