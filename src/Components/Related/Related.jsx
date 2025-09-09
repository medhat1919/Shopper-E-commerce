import React from 'react'
import './Related.css'
import all_product from '../../assets/all_product'
import Item from '../Item/Item'

const Related = () => {
  return (
    <div className='related'>
<h1>Related Products</h1>

<div className="items">
{all_product.map((item,i) => (

   <Item
    key={i}
    id={item.id}
    image={item.image}
    name={item.name}
    new_price={item.new_price}
    old_price={item.old_price}
  />))}</div>

    </div>
  )
}

export default Related