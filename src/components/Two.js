// import React from 'react';
// import { Link } from 'react-router-dom';

// const Two = () => {

//   // const response = await fetch(`http://localhost:4000/api/Aauth/csv/66804cbb0f7ed3116c548e22`, {
//   //   method: "GET",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     "auth-token": localStorage.getItem("token")
//   //   },
//   // });
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="nav-link active" aria-current="page" to='/Visualizations' >Overview</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/Branches">Branches</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Categories">Categories</Link>
//               </li>
//             </ul>
            
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Two;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './Branches.css';

const Branches = () => {
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
          <Link className={`Branches-navbar-brand ${location.pathname === '/Visualizations' ? 'active' : ''}`} to='/Visualizations'>Overview</Link>
          <button className="Branches-navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="Branches-navbar-toggler-icon"></span>
          </button>
          <div className="Branches-navbar-collapse">
            <ul className="Branches-navbar-nav">
              <li className="Branches-nav-item">
                <Link className={`Branches-nav-link ${location.pathname === '/Branches' ? 'active' : ''}`} to="/Branches">Branches</Link>
              </li>
              <li className="Branches-nav-item">
                <Link className={`Branches-nav-link ${location.pathname === '/Categories' ? 'active' : ''}`} to="/Categories">Categories</Link>
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

export default Branches;

