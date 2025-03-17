// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Categories = () => {
//   const [images, setImages] = useState([]);
//   const [csvFetched, setCsvFetched] = useState(false);

//   const handleOnClick = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem('user_id'); // Replace with actual user ID if available
//       await axios.get(`http://localhost:4000/api/Aauth/csv/${userId}`);
//       setCsvFetched(true); // Update state to indicate CSV fetch is complete
//     } catch (error) {
//       console.error('Error fetching CSV document:', error);
//     }
//   };

//   useEffect(() => {
//     const imageNames = [
//       //   'sales_trends_over_time.png',
//       //   'sales_performance_by_product_line.png',
//       //   'sales_distribution_by_gender.png',
//       //   'sales_performance_by_payment_method.png',
//       'sales_distribution_by_product_line.png'
//     ];
//     setImages(imageNames);
//   }, []);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//         <Link className="nav-link active" aria-current="page" to='/Visualizations' >Overview</Link>

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

//       <div>
//         <button onClick={handleOnClick}>Categories</button>
//         {csvFetched && (
//           <div>
//             <h1>Visualizations</h1>
//             {images.map(image => (
//               <div key={image}>
//                 <img src={`http://localhost:4000/api/image/${image}`} alt={image} style={{ width: '100%', height: 'auto' }} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Categories;



import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Categories.css';

const Categories = () => {
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
          <Link className={`Categories-navbar-brand ${location.pathname === '/Visualizations' ? 'active' : ''}`} to='/Visualizations'>Overview</Link>
          <button className="Categories-navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="Categories-navbar-toggler-icon"></span>
          </button>
          <div className="Categories-navbar-collapse">
            <ul className="Categories-navbar-nav">
              <li className="Categories-nav-item">
                <Link className={`Categories-nav-link ${location.pathname === '/Branches' ? 'active' : ''}`} to="/Branches">Branches</Link>
              </li>
              <li className="Categories-nav-item">
                <Link className={`Categories-nav-link ${location.pathname === '/Categories' ? 'active' : ''}`} to="/Categories">Categories</Link>
              </li>

             
            </ul>
          </div>
        </div>
      </nav>
      <div className="Categories-content">
        <button className="Categories-button" onClick={handleOnClick}>Fetch CSV</button>
        {csvFetched && (
          <div>
            <h1 className="Categories-title">Categories</h1>
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

export default Categories;
