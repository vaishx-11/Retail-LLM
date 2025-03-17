import React from 'react';
import './CategoryList.css';

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div className="container">
      {Object.keys(categories).map(category => (
        <div key={category} className="category-card" onClick={() => onCategoryClick(category)}>
          <h2 className="category-title">{category}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;