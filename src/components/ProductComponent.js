import React, { useEffect, useState } from 'react';
import './ProductComponent.css';

const ProductComponent = () => {
    const [categories, setCategories] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/api/products')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleBack = () => {
        setSelectedCategory(null);
    };

    return (
        <div className="AppContainer">
            {selectedCategory ? (
                <div className="ProductContainer">
                    <button className="BackButton" onClick={handleBack}>Back</button>
                    <h2 className="ProductTitle">{selectedCategory}</h2>
                    <ul className="ProductsList">
                        {categories[selectedCategory].map((product, index) => (
                            <li key={index} className="ProductItem">{product}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="CategoryContainer">
                    {Object.keys(categories).map((category) => (
                        <div key={category} className="CategoryCard" onClick={() => handleCategoryClick(category)}>
                            <h3 className="CategoryTitle">{category}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductComponent;