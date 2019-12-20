import React, { Component } from 'react'
// import './Home.css'
// import { Link } from "react-router-dom";
import './home.css'
import SavedList from '../savedList/SavedList';
import HomeSlides from './HomeSlides'

class Home extends Component {
    render() {
        const isAuth = this.props.user

        return (
            <>
            {isAuth
            ? <SavedList/>
            :
              <HomeSlides/>
            // <div>
            //     <div>     
            //         <header className="v-header container" id="homeBackground" >
            //             <h1><span>&lt;</span>Validate With Confidence</h1>
            //             <h1><span>&lt;</span>With</h1>
            //             <h1><span>&lt;</span>Confidence</h1>
            //         </header>
            //     </div>
            //     <div>
            //         <div id="loginButton">
            //         <Link to={`/login`}><button className="btn btn-primary" >Login</button></Link>
            //         </div>
            //     </div>
            //     <footer>
            //         <a href='https://github.com/u2ix/react-background-slider/blob/master/example/README.md'>Image Credits</a>
            //     </footer>
            // </div> 
            }
            </>
        )
    }
}

export default Home;