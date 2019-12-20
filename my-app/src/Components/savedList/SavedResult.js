import React, { Component } from 'react';
// import ApiManager from '../modules/ApiManager';

class SavedCard extends Component {

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


    // Ask about the error I am getting when I log in as RandomSource, then when I am redirected to my
    // list I can not Edit any card cause push is undefined. I consol loged to see that the UserId is
    // coming back with the correct numerical value

    // The bug can be worked around if you select the Mylist in the NavBar. this refreshes the page
    // and makes the push recognizible 
    render() {
        console.log("sup", this.props.savedId)
        return (
          <div className="saved-container">
              <div className="result-card">
                {/* <picture> **** stretch goal! ****
                  <img src={require('./image goes here')} alt="this alt tag is for metadata as well" />
                </picture> */}
                <p>First: {this.props.nurse.first}</p>
                <p>Last: {this.props.nurse.last}</p>
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