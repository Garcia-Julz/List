import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class SearchFormResults extends Component {

render(){
    return (
        <>
        <div>
        <h1>Card results</h1>
        </div>
        <div className="resultContainer">
            <div className="cardContainer">
            </div>
        </div>
        {/* <form>
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
        </form> */}
        </>
    )
}
}

export default SearchFormResults