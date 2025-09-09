import React from 'react'
import './Offer.css'
import exclusive from '../../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'> 
    <div className="offerleft">
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>SHOP NOW </button>
    </div>
    <div className="offerright">
        <img src={exclusive} alt="" />

    </div>
    
    </div>
  )
}

export default Offer