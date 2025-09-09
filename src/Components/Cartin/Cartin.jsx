import React, { useContext } from 'react';
import './Cartin.css';
import { ShopContext } from '../../Context/ShopContext';
import cart_cross_icon from '../../assets/cart_cross_icon.png';

const Cartin = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cartin'>
            <div className="cartin-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="content">
                                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartin-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cartin-remove-icon' src={cart_cross_icon} onClick={() => { removeFromCart(e.id) }} alt="cart_cross_icon" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
           
        </div>
    );
}

export default Cartin;
 