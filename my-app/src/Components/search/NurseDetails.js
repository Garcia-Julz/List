import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class NurseCardDetails extends Component {

    state = {
        first: "",
        last: "",
        loadingStatus: false,
    }

    componentDidMount(){
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.get("saved", Number(this.props.match.params.savedNurseId))
        .then((savedNurse) => {
            this.setState({
                first: savedNurse.first,
                last: savedNurse.last,
                loadingStatus: false,
            })
            console.log(savedNurse)
        })
    }

    render() {
        return (
        <div className="card" id="card-container">
            <div className="card-content" id="card-content">
            {/* <picture id="card-image">
                <img src={require('./dog.svg')} alt="My Dog" />
            </picture> */}
                <p>First: {this.state.first}</p>
                <p>Last: {this.state.last}</p>
                <button type="button" className="button" disabled={this.state.loadingStatus}
                onClick={this.handleEdit}><span>Edit</span></button>
            </div>
        </div>
        );
    }

}

export default NurseCardDetails;