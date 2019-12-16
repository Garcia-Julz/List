// import React, { Component } from 'react';
// import ApiManager from '../modules/ApiManager';

// class ResultDetails extends Component {

//   state = {
//       name: "",
//       city: "",
//       loadingStatus: true,
//   }

//   componentDidMount() {
//     const currentUser = localStorage.getItem("credentials")
//     ApiManager.getAll("stateCodes")
//       .then(stateCodes => {
//         this.setState({
//             userId: currentUser.id,
//             stateCodes: stateCodes,
//             loadingStatus: false
//         });
//       });
//   }

//   handleDelete = () => {
//     //invoke the delete function in LocationManger and re-direct to the location list.
//     this.setState({loadingStatus: true})
//     locationManager.delete(this.props.locationId)
//     .then(() => this.props.history.push("/locations"))
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           {/* <picture id="card-image">
//             <img src={require('./location.png')} alt="Find Location" />
//           </picture> */}
//             <h3>First: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
//             <p>Last: {this.state.city}</p>
//             <button type="button" className="button" disabled={this.state.loadingStatus}
//             onClick={this.handleDelete}><span>Delete</span></button>
//         </div>
//       </div>
//     );
//   }

// }

// export default ResultDetails;