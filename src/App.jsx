import React from 'react'
import Navbar from './components/Navbar/Navbar'
import First_picture from './components/cover-photo/First_picture'
import Products from './components/products/Products'
import Footer from './components/Footer/Footer'
import About from './components/about-us/About'
import { Route, Routes, Router } from 'react-router-dom'
import Login from '../src/components/Login/Login'
import Home from './components/Home/Home'


const App = () => {
  return (
    <>
    <div  className='app'>
      <Home />
    </div>
    </>
  )
}

export default App
