import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className='navbar'>
            <span className='logo'>Organic Foods Lanka</span>
            <ul className="navbar-menu">
                <li><Link to="header" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
            </ul>
    <div className="navbar-right">
          <a><img className="cart" src="images/cart2.png" alt="cart" /></a>
          <a><img className='profile-login' src='images/user (1).png'></img></a>
          <button className='register'>Register</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
