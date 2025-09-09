import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="heroleft">
        <h2>NEW ARRIVALS <span>ONLY</span></h2>
        <div className="mid">
            <div className="handimg"> 
          <p>New</p>
          <img src={hand_icon} alt="" /></div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <button>SHOP NOW <img src={arrow_icon} alt="" /></button>
      </div>
      <div className="heroright">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero