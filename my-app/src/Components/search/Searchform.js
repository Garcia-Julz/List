import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';


class SearchForm extends Component {

    // Set initial state
    state = {
        id: "",
        stateId: "",
        abv: "",
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
            //   console.log("hi", stateCodes)
            this.setState({
                stateCodes: stateCodes
            });
          });
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
                            rows="1"
                            cols="10"
                            id="id"
                            placeholder="License #"
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
                            // disabled={this.state.loadingStatus}
                            // onClick={this.constructNewMessage}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default SearchForm