import React, { Component } from 'react';
// import ApiManager from '../modules/ApiManager';

class SavedCard extends Component {
    // useless
    state = {
        savedNurses: []
    }

    // saveNurse = evt => {
    //     evt.preventDefault();
    //     const nurse = {
    //         nurseId: this.props.nurse.id,
    //         userId: Number(localStorage.getItem("credentials")),
    //         notes: ""
    //     }
    //     ApiManager.post("saved", nurse)
    //     .then(() =>
    //         this.props.history.push("/mylist"));
    // }



    // SavedCard is the following below. This is different from the card you get from results
    // this contains 2 different buttons that has the delete function as well as Adding notes.
    // i used the SavedList to pass the delete property and I used the nurseDetails to pass
    // the edit notes function.

    render() {
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
                <p>Notes: {this.props.nurseCard.notes}</p>
                <section className="buttonSection">
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
                        <span>Add Notes</span>
                    </button>
                </section>
              </div>
          </div>
        );
    }
}

export default SavedCard;