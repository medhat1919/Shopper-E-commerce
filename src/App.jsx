 import React from 'react';
import { Routes, Route } from 'react-router-dom';
 import './App.css';
import Navpar from './Components/Navpar/Navpar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import Category from './pages/Category';

import banner_mens from './assets/banner_mens.png';
import banner_womens from './assets/banner_women.png';
import banner_kids from './assets/banner_kids.png';

// Mockup components for pages
 

function App() {
  return (
    <div className="App">
      <Navpar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<Category banner={banner_mens} category="men"/>} />
        <Route path="/womens" element={<Category banner={banner_womens} category="women"/>} />
        <Route path="/kids" element={<Category banner={banner_kids} category="kid"/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:productid" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App
