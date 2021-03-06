import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class NurseCard extends Component {


    state = {
        savedNurses: []
    }
    
    saveNurse = evt => {
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        evt.preventDefault();
        const nurse = {
            nurseId: this.props.nurse.id,
            userId: currentUser.id,
            notes: ""
        }
        ApiManager.post("saved", nurse)
        .then(() =>
        this.props.history.push("/mylist"));
        console.log("nurse", nurse)
    }

    render() {
        console.log("props",this.props)
        return (
          <div className="result-content">
              <div className="saved-card">
                {/* <picture> **** stretch goal! ****
                  <img src={require('./image goes here')} alt="this alt tag is for metadata as well" />
                </picture> */}
                <p>First: {this.props.nurse.first}</p>
                <p>Last: {this.props.nurse.last}</p>
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