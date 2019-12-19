import React, { Component } from 'react'
// import './Home.css'
import { Link } from "react-router-dom";
// import Video from "react-native-video";
// import MedicalVideo from ".home/Spending time with my babies.mp4";
import SavedList from '../savedList/SavedList';

class Home extends Component {
    render() {
        // Seeing if isAuth is true
        const isAuth = this.props.user

        return (
            <>
            {isAuth
            // If isAuth is true, display the users saved list
            ? <SavedList/>
            :
            // Else show the home page that offers user to sign in
            <div id="homeBackground" >
            {/* //     <video
             //     repeat
            //     source={MedicalVideo}
                // resizeMode="cover"
                // style={StyleSheet.absoluteFill}
            //     />
                // <view> */}
                    <div>
                        <h1 id="welcomeHomePageHeader">Validate With Confidence</h1>
                        <div id="loginButton">
                            <Link to={`/login`}><button className="btn btn-primary" >Login</button></Link>
                        </div>
                    </div>
                {/* </view> */}
            </div>
            
            }
            </>
        )
    }
}

export default Home;