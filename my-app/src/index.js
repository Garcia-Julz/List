import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import List from './List'
import './index.css'

ReactDOM.render(
  <Router>
      <List />
  </Router>
  , document.getElementById('root'))