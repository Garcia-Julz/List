import React from 'react'
import { Link } from "react-router-dom";
// import Buttons from './Buttons'

const Card = () =>
  <div className='card'>
    <view>
        <header>
        <h1>Validate</h1>
        <h1>With</h1>
        <h1>Confidence</h1>
        </header>
    </view>

    <Link to={`/login`}><button className="btn btn-primary" >Login</button></Link>

    <footer>
      <a href='https://github.com/u2ix/react-background-slider/blob/master/example/README.md'>
          Image Credits</a>
    </footer>
  </div>

export default Card