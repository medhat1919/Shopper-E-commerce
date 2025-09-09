import React from 'react'
import './Productdetails.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';

const Productdetails = (props) => {
    const {product} = props

    const {addToCart} = useContext(ShopContext);
  return (
    <div className='details'>
<div className="left">
<div className="images">
<img src={product.image} alt="" />
<img src={product.image} alt="" />
<img src={product.image} alt="" />
<img src={product.image} alt="" />
</div>
<div className="image">
<img src={product.image} alt="" />
</div>
</div>


<div className="right">
<div className="name">
    <h1>{product.name}</h1>
</div>
<div className="stars">
    
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
    <span>4.5</span>
</div>

<div className="price">
    <h1>{product.new_price}</h1>
    <p>{product.old_price}</p>
</div>

<div className="size">
    <h1>    Select Size</h1>
    <div className="sizes">
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
    </div>
<div className="btn">
    <button onClick={() => addToCart(product.id )}>ADD TO CART</button>
</div>

</div>

</div>




    </div>
  )
}

export default Productdetails