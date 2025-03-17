import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/app'); // Change '/nextPage' to your desired route
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.landingContent}>
        <h1>Welcome to Our Site</h1>
        <p>Your journey to excellence begins here</p>
      </div>
      <button className={styles.enterButton} onClick={handleEnterClick}>Enter</button>
    </div>
  );
};

export default LandingPage;
