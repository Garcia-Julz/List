import React from 'react'
import { Link } from "react-router-dom";
// import Buttons from './Buttons'

const Card = () =>
  <div className='card'>
        <header>
        <h1>Validate With</h1>
        <h1>Confidence</h1>
        </header>

    <Link to={`/login`}><button className="btn btn-primary" >Login</button></Link>

    <footer className="credits">
      <a href='https://github.com/u2ix/react-background-slider/blob/master/example/README.md'>
          Background credit</a>
    </footer>
  </div>

export default Card