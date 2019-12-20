import React, { Component } from 'react'
import BackgroundSlider from '../../lib/BackgroundSlider'

import Card from './Card'

import image1 from '../HomeAssets/image1.jpeg'
import image2 from '../HomeAssets/image2.jpeg'
import image3 from '../HomeAssets/image3.jpeg'
import image4 from '../HomeAssets/image4.jpeg'
import image5 from '../HomeAssets/image5.jpeg'
import image6 from '../HomeAssets/image6.jpeg'

class HomeSlides extends Component {
  render () {
    return (
      <div className='App'>
        <div className='card-container'>
          <Card />
        </div>

        <BackgroundSlider
          images={[image1, image2, image3, image4, image5, image6]}
          duration={4}
          transition={2}
        />
      </div>
    )
  }
}

export default HomeSlides