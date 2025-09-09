import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email </h1>
        <p>Subscribe To Our Newsletter and Get 10% Off</p>
        <div className="btn">
        <input type="email" placeholder='Enter Your Email' />
        <button>Subscribe</button></div>
         </div>
  )
}

export default Newsletter