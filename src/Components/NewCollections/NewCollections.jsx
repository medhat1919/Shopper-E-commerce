import React from 'react'
import './NewCollections.css'
import new_collections from '../../assets/new_collections'  
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>New Collections</h1>
        <div className="new">
{new_collections.map((item,i) => (

   <Item
    key={i}
    id={item.id}
    image={item.image}
    name={item.name}
    new_price={item.new_price}
    old_price={item.old_price}
  />
))}</div>

    </div>
  )
}

export default NewCollections