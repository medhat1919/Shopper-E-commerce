import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (Props) => {
  return (
    <div className='item'>
      <Link to={`/product/${Props.id}`}><img onClick={() => window.scrollTo(0, 0)} src={Props.image} alt="" /></Link>
      <p>{Props.name}</p>
      <div className="price">
      <p>{Props.new_price}</p>
      <span>{Props.old_price}</span></div>
      </div>
    
  )
}

export default Item