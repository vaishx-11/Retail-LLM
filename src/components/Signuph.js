import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Signuph.css';

function Signuph() {
    const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate('/signup');
  };

  const handleAssociativeClick = () => {
    navigate('/AssociativePage');
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <button className="signup-button customer" onClick={handleCustomerClick}>
        Customer
      </button>
      <button className="signup-button associative" onClick={handleAssociativeClick}>
        Associative
      </button>
    </div>
  );
}

export default Signuph;
