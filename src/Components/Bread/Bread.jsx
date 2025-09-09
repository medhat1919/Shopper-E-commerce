import React from 'react'
import './Bread.css'
import arrow from '../../assets/arrow.png'

const Bread = (props) => {
    const {product} = props
  return (
    <div className='Bread'>
        Home  <img src={arrow} alt="arrow_icon"  />  Shop  <img src={arrow} alt="arrow_icon"  /> {product.category}
           <img src={arrow} alt="arrow_icon" />  {product.name}      </div>
  )
}

export default Bread