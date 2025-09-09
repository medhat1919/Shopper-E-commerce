 import {  useState } from 'react';
import './Navpar.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
 
const Navpar = () => {
  const [menu, setMenu] = useState('shop');
 
  return (
    <div className="navpar">
      <div className="navleft">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="mid">
        <li onClick={() => setMenu('shop')}>
          <Link to="/">Shop</Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('men')}>
          <Link to="/mens">Men</Link> {menu === 'men' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('women')}>
          <Link to="/womens">Women</Link> {menu === 'women' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to="/kids">Kids</Link> {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navright">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
       </div>
    </div>
  );
};

export default Navpar;