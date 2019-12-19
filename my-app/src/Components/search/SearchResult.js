import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class NurseCard extends Component {

    // Set saves Nurses to an empty array and will populate only 1 result in state
    state = {
        savedNurses: []
    }
    
    saveNurse = evt => {
        // this funstion is to save a nurse from your result
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        evt.preventDefault();
        const nurse = {
            nurseId: this.props.nurse.id,
            userId: currentUser.id,
            notes: ""
        }
        // Once you save a card, it is assigned a nurseId, (your) UserId, and an 
        // empty string of notes.

        // This posts a nurse that the user saves into the saved table using the
        // post method below. While nurse contains the values that it should populate in
        // saved table.
        ApiManager.post("saved", nurse)
        .then(() =>
        // after the post it redirects the user to /mylist
        this.props.history.push("/mylist"));
        // console.log("nurse", nurse)
    }

    render() {
        console.log("props",this.props)
        return (
          <div className="card">
              <div className="card-content">
                {/* <picture> **** stretch goal! ****
                  <img src={require('./image goes here')} alt="this alt tag is for metadata as well" />
                </picture> */}
                <p>First: <span className="card-ownername">
                {this.props.nurse.first}</span></p>
                <p>Last: <span className="card-ownername">
                {this.props.nurse.last}</span></p>
                <p>Status: {this.props.nurse.licenseStatus}</p>
                <p>License Type: {this.props.nurse.licenseType}</p>
                <p>Issued: {this.props.nurse.issueDate}</p>
                <p>Expires: {this.props.nurse.expireDate}</p>
                {/* <p>Notes: {this.props.nurseCard.notes}</p> */}
                <section className="buttonSection">
                    <button 
                    type="button"
                    className="button2"
                    onClick={this.saveNurse}
                    >
                        <span>Save</span>
                    </button>
                    {/* </button>
                    <button 
                    type="button"
                    className="button2"
                    onClick={()=> this.props.delete(this.props.savedId)}
                    >
                        <span>Delete</span>
                    </button>
                    <button 
                    type="button"
                    className="button2"
                    onClick={()=> this.props.history.push(`/mylist/details/${this.props.savedId}`)}
                    >
                        <span>Add Notes</span> */}
                    {/* <button 
                    type="button"
                    className="button2"
                    onClick= {() => 
                        this.props.deleteNurse(this.props.nurse.id)}
                    >
                        <span>Delete</span>
                    </button> */}
                    {/* <button 
                    type="button"
                    className="button2"
                    onClick={this.saveNurse}
                    >
                        <span>Edit</span>
                    </button> */}
                </section>
              </div>
          </div>
        );
    }
}

export default NurseCard;