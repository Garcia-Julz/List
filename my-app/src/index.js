import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import List from './List'
import './index.css'
import BackgroundSlider from './lib/BackgroundSlider'

export default BackgroundSlider
// import * as firebase from 'firebase/app'
// import firebaseConfig from '../src/FirebaseFiles'

// firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <Router>
      <List />
  </Router>
  , document.getElementById('root'))