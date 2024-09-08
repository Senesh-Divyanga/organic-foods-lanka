import React from 'react'
import Navbar from '../Navbar/Navbar'
import First_picture from '../cover-photo/First_picture'
import Products from '../products/Products'
import About from '../about-us/About'
import Footer from '../Footer/Footer'
import { Link, Element } from 'react-scroll';

const Home = () => {

  return (
    <>
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
          <img className="cart" src="images/cart2.png" alt="cart" />
          <a href="profile"><img src="images/user (1).png" alt="profile" /></a>
          <button className='register'>Register</button>
    </div>
  </div>
</div>
<First_picture />
<Element name="products">
    <Products />
</Element>

<Element name="about">
    <About />
</Element>

<Element name="contact">
    <Footer />
</Element>
    </>
  )
}

export default Home
