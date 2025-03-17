
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Categories.css';

const Categories1 = () => {
  const [images, setImages] = useState([]);
  const [csvFetched, setCsvFetched] = useState(false);
  const location = useLocation();

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('user_id'); // Replace with actual user ID if available
      await axios.get(`http://localhost:4000/api/Aauth/csv/${userId}`);
      setCsvFetched(true); // Update state to indicate CSV fetch is complete
    } catch (error) {
      console.error('Error fetching CSV document:', error);
    }
  };

  useEffect(() => {
    const imageNames = [
      'sales_distribution_by_product_line.png'
    ];
    setImages(imageNames);
  }, []);

  return (
    <>
      <nav className="Categories-navbar">
        <div className="Categories-container">
          <Link className={`Categories-navbar-brand ${location.pathname === '/Visualizations1' ? 'active' : ''}`} to='/Visualizations1'>Overview</Link>
          <button className="Categories-navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="Categories-navbar-toggler-icon"></span>
          </button>
          <div className="Categories-navbar-collapse">
            <ul className="Categories-navbar-nav">
              <li className="Categories-nav-item">
                <Link className={`Categories-nav-link ${location.pathname === '/Branches1' ? 'active' : ''}`} to="/Branches1">Branches</Link>
              </li>
              <li className="Categories-nav-item">
                <Link className={`Categories-nav-link ${location.pathname === '/Categories1' ? 'active' : ''}`} to="/Categories1">Categories</Link>
              </li>
              <li className="Branches-nav-item">
                <Link className={`Branches-nav-link ${location.pathname === '/chatbot' ? 'active' : ''}`} to="/chabot">chabot</Link>
              </li>
              <li className="Branches-nav-item">
                <Link className={`Branches-nav-link ${location.pathname === '/feedback-list' ? 'active' : ''}`} to="/feedback-list">feedback</Link>
              </li>

             
            </ul>
          </div>
        </div>
      </nav>
      <div className="Categories-content">
        <button className="Categories-button" onClick={handleOnClick}>Fetch CSV</button>
        {csvFetched && (
          <div>
            <h1 className="Categories-title">Visualizations</h1>
            {images.map(image => (
              <div className="Categories-image-container" key={image}>
                <img src={`http://localhost:4000/api/image/${image}`} alt={image} className="Categories-image" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Categories1;
