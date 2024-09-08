import React, { forwardRef } from 'react'
import "./Products.css"

const Products = ({ title, price }, ref) => {
  return (
    <div className='products' ref={ref}>
      <div className="products-header">
        <h1>Products</h1>
      </div>
      <div className="thumbnails">
      <a href="#">
      <div className="product-thumbnail-1">
            <img src="images/brinjal.jfif" alt={title} className="product-image-1" />
            <div className="stars">
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                </div>
            <div className="product-details">
                <h2 className="product-title">Brinjal Moju</h2>
                <span className="product-price">$ 10.00{price}</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur</p>
            </div>
    </div>
      </a>

    <a href="#">
    <div className="product-thumbnail-2">
            <img src="images/brinjal.jfif" alt={title} className="product-image-2" />
            <div className="stars">
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                </div>
            <div className="product-details">
                <h2 className="product-title">Brinjal Moju</h2>
                <span className="product-price">$ 10.00{price}</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur</p>
            </div>
    </div>
    </a>

    <a href="#">
    <div className="product-thumbnail-3">
            <img src="images/brinjal.jfif" alt={title} className="product-image-3" />
            <div className="stars">
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                </div>
            <div className="product-details">
                <h2 className="product-title">Brinjal Moju</h2>
                <span className="product-price">$ 10.00{price}</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur</p>
            </div>
    </div>
    </a>

    <a href="#">
    <div className="product-thumbnail-4">
            <img src="images/brinjal.jfif" alt={title} className="product-image-4" />
            <div className="stars">
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                    <img src="images/star.png" className="star" alt="" />
                </div>
            <div className="product-details">
                <h2 className="product-title">Brinjal Moju</h2>
                <span className="product-price">$ 10.00{price}</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur</p>
            </div>
    </div>
    </a>
      </div>
    </div>
  )
}

export default forwardRef(Products);
