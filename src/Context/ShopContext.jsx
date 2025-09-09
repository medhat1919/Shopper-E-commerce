import React, { createContext, useState } from 'react';
import all_product from '../assets/all_product.js';

// Step 1: Create the main data container
export const ShopContext = createContext(null);

// Step 2: Set up an empty shopping cart at the beginning of the application
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
        cart[all_product[i].id] = 0;
    }
    return cart;
};

// Step 3: Create the "provider" component
const ShopContextProvider = (props) => {
    // Cart state: stores products and their quantities
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add a product to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    
    // Function to remove a product from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId] -= 1;
            }
            return newCart;
        });
    };

    // Assemble all data and functions into one object
    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
    };

    // Step 4: Provide the data to all child components
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
