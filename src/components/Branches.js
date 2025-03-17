// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Branches = () => {
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
//       'sales_trends_over_time.png',
//     //   'sales_performance_by_product_line.png',
//     //   'sales_distribution_by_gender.png',
//     //   'sales_performance_by_payment_method.png',
//     //   'sales_distribution_by_product_line.png'
//     ];
//     setImages(imageNames);
//   }, []);

//   return (
//     <>
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//       <Link className="nav-link active" aria-current="page" to='/Visualizations' >Overview</Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/Branches">Branches</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Categories">Categories</Link>
//             </li>
//           </ul>

//         </div>
//       </div>
//     </nav>
//     <div>
//       <button onClick={handleOnClick}>Branches</button>
//       {csvFetched && (
//         <div>
//           <h1>Visualizations</h1>
//           {images.map(image => (
//             <div key={image}>
//               <img src={`http://localhost:4000/api/image/${image}`} alt={image} style={{ width: '100%', height: 'auto' }} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   </>

//   );
// };

// export default Branches;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Branches.css';

const Branches = () => {
  const [images, setImages] = useState([]);
  const [csvFetched, setCsvFetched] = useState(false);

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
      // 'sales_performance_by_product_line.png',
      // 'sales_distribution_by_gender.png',
      // 'sales_performance_by_payment_method.png',
      // 'sales_distribution_by_product_line.png'
    ];
    setImages(imageNames);
  }, []);

  return (
    <>
      <nav className="Branches-navbar">
        <div className="Branches-container">
          <Link className="Branches-navbar-brand" to='/Visualizations'>Overview</Link>
          <button className="Branches-navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="Branches-navbar-toggler-icon"></span>
          </button>
          <div className="Branches-navbar-collapse">
            <ul className="Branches-navbar-nav">
              <li className="Branches-nav-item">
                <Link className="Branches-nav-link" to="/Branches">Branches</Link>
              </li>
              <li className="Branches-nav-item">
                <Link className="Branches-nav-link" to="/Categories">Categories</Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
      <div className="Branches-content">
        <button className="Branches-button" onClick={handleOnClick}>Fetch CSV</button>
        {csvFetched && (
          <div>
            <h1 className="Branches-title">Branches</h1>
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
