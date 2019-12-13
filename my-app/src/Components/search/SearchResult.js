import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class NurseCard extends Component {

    saveNurse = evt => {
        evt.preventDefault();
            const nurse = {
                rnId: this.props.nurse.id,
                userId: Number(localStorage.getItem("credentials")),
                notes: ""
            }
            ApiManager.post("saved", nurse)
                .then(() =>
                    this.props.history.push("/mylist"));
                    console.log("hello", nurse)
    }

    componentDidMount() {
        const currentUser = localStorage.getItem("credentials")
        ApiManager.getAll("stateCodes")
          .then(stateCodes => {
            this.setState({
                userId: currentUser.id,
                stateCodes: stateCodes,
                loadingStatus: false
            });
          });
    }

    render() {
        console.log("searchresults this.props", this.props)
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
                <p>Staus: {this.props.nurse.licenseStatus}</p>
                <p>License Type: {this.props.nurse.licenseType}</p>
                <p>Issued: {this.props.nurse.issueDate}</p>
                <p>Expires: {this.props.nurse.expireDate}</p>
                <section className="buttonSection">
                    <button 
                    type="button"
                    className="button2"
                    onClick={this.saveNurse}
                    >
                        <span>Save</span>
                    </button>
                </section>
              </div>
          </div>
        );
      }
}

export default NurseCard;