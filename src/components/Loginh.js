import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Signuph.css';

function Loginh() {
    const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate('/login');
  };

  const handleAssociativeClick = () => {
    navigate('/Alogin');
  };
  const handleownerClick = () => {
    navigate('/owner');
  };
  return (
    <div className="login-pager">
      <h1 className="signup-title"> Login </h1>
      <button className="signup-button customer" onClick={handleCustomerClick}>
        Customer
      </button>
      <button className="signup-button associative" onClick={handleAssociativeClick}>
        Associative
      </button>
      <button className="signup-button associative" onClick={handleownerClick}>
        Owner
      </button>
    </div>
  );
}

export default Loginh;
