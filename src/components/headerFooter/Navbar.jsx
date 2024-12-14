import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import '../css/main.css'; 
import './Navbar.css'
import insta from '../../assets/images/rb_2227.png'
import fb from '../../assets/images/social_13051733.png'
import cart from '../../assets/images/shopping-cart_2331970.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>CSST</h2>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to='/' className="nav-item"><a href="#home">Home</a></Link>
          <Link to='/about' className="nav-item"><a href="#about">About</a></Link>
          <Link to='/products' className="nav-item"><a href="#services">Products</a></Link>
          <Link to='/contact' className="nav-item"><a href="#contact">Contact</a></Link>
        </ul>

        <div className="navbar-icons">
          <img  className="social-icon instagram" src={insta}/>
          <img  className="social-icon facebook" src={fb}/>
          <img  className="cart-icon" src={cart}/>
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
