// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// // import './Branches.css'; // Ensure this file contains only general styles

// // Create a new CSS module file for feedback-specific styles
// import styles from './FeedbackList.module.css';

// const FeedbackList = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     fetch('http://localhost:4000/api/all/feedback')
//       .then(response => response.json())
//       .then(data => setFeedbacks(data))
//       .catch(error => console.error('Error fetching feedbacks:', error));
//   }, []);

//   return (
//     <>
//       <nav className="Visualizations-navbar">
//         <div className="Visualizations-container">
//           <Link className="Visualizations-navbar-brand" to='/Visualizations1'>Overview</Link>
//           <button className="Visualizations-navbar-toggler" type="button" aria-label="Toggle navigation">
//             <span className="Visualizations-navbar-toggler-icon"></span>
//           </button>
//           <div className="Visualizations-navbar-collapse">
//             <ul className="Visualizations-navbar-nav">
//               <li className="Visualizations-nav-item">
//                 <Link className="Visualizations-nav-link" to="/Branches1">Branches</Link>
//               </li>
//               <li className="Visualizations-nav-item">
//                 <Link className="Visualizations-nav-link" to="/Categories1">Categories</Link>
//               </li>
//               <li className="Branches-nav-item">
//                 <Link className={`Branches-nav-link ${location.pathname === '/chatbot' ? 'active' : ''}`} to="/chatbot">Chatbot</Link>
//               </li>
//               <li className="Branches-nav-item">
//                 <Link className={`Branches-nav-link ${location.pathname === '/feedback-list' ? 'active' : ''}`} to="/feedback-list">Feedback</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className={styles.formContainer}>
//         <h2 className={styles.header}>Feedback List</h2>
//         {feedbacks.length > 0 ? (
//           <ul>
//             {feedbacks.map((feedback, index) => (
//               <li key={index}>{feedback.message}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No feedbacks found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default FeedbackList;



import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './FeedbackList.module.css';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:4000/api/all/feedback')
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.error('Error fetching feedbacks:', error));
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
      <div className={styles.formContainer}>
        <h2 className={styles.header}>Feedback List</h2>
        {feedbacks.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No feedbacks found.</p>
        )}
      </div>
    </>
  );
};

export default FeedbackList;
