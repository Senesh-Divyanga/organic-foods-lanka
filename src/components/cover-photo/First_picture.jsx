import React from 'react'
import "./First_picture.css"

const First_picture = () => {
  return (
    <div className='cover-pic'>
      <img className="cover" src="images/cover1.jpg" alt="cover" />
      <img src="images/overlay.png" alt="" className="overlay" />
      <div className="cover-content">
        <h1>Organic Foods Lanka...</h1>
        <p className="cover-para">Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iure nisi fuga ex, non nostrum soluta earum ullam
          iusto id molestiae voluptatem voluptas! Nulla id dolorem modi veritatis
          laborum, pariatur omnis.</p>
          <button className="cover-button">Order Now</button>
      </div>
      <br /><br />
    </div>
  )
}

export default First_picture
