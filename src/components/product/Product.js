// Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import './product.scss'

const Product = ({ product }) => {
  return (
    
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <Link to={`/products/${product.id}`}>View Product</Link>
    </div>
    
  );
};

export default Product;
