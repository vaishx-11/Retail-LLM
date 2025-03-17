import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './Branches.css';

const Two2 = () => {
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
      'sales_trends_over_time.png',
    ];
    setImages(imageNames);
  }, []);

  return (
    <>
      <nav className="Branches-navbar">
        <div className="Branches-container">
          <Link className={`Branches-navbar-brand ${location.pathname === '/Visualizations1' ? 'active' : ''}`} to='/Visualizations1'>Overview</Link>
          <button className="Branches-navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="Branches-navbar-toggler-icon"></span>
          </button>
          <div className="Branches-navbar-collapse">
            <ul className="Branches-navbar-nav">
              <li className="Branches-nav-item">
                <Link className={`Branches-nav-link ${location.pathname === '/Branches1' ? 'active' : ''}`} to="/Branches1">Branches</Link>
              </li>
              <li className="Branches-nav-item">
                <Link className={`Branches-nav-link ${location.pathname === '/Categories1' ? 'active' : ''}`} to="/Categories1">Categories</Link>
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
      <div className="Branches-content">
        <button className="Branches-button" onClick={handleOnClick}>Fetch CSV</button>
        {csvFetched && (
          <div>
            <h1 className="Branches-title">Visualizations</h1>
            {images.map(image => (
              <div className="Branches-image-container" key={image}>
                <img src={`http://localhost:4000/api/image/${image}`} alt={image} className="Branches-image" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Two2;


