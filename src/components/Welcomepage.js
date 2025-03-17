import React from 'react';
import './Welcomepage.css'; // Import the CSS file for styling

import imagee1 from './imagee1.jpg';
import retail2 from './retail2.jpg';
import imagee from './imagee.jpg';

const Welcomepage = () => {
  return (
    <div className="landing-page">
      <div className="slideshow">
        <div className="slides-container">
          <div className="slide">
            <img src={imagee1} alt="Background 1" />
          </div>
          <div className="slide">
            <img src={retail2} alt="Background 2" />
          </div>
          <div className="slide">
            <img src={imagee} alt="Background 3" />
          </div>
          <div className="slide">
            <img src={imagee1} alt="Background 1" />
          </div>
          <div className="slide">
            <img src={retail2} alt="Background 2" />
          </div>
          <div className="slide">
            <img src={imagee} alt="Background 3" />
          </div>
        </div>
      </div>
      <div className="welcome-text">
        <h1>Welcome To Retail</h1>
        <p>Discover the latest trends and shop with confidence!</p>
      </div>
    </div>
  );
};

export default Welcomepage;

