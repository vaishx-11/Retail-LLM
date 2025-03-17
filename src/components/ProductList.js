import React from 'react';
import './ProductList.css';

const ProductList = ({ category, products, onBack }) => {
  return (
    <div className="container">
      <button className="back-button" onClick={onBack}>Back to Categories</button>
      <h2>{category}</h2>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <p className="product-name">{product}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;