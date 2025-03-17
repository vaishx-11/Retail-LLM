// import React, { useState } from 'react';
// import axios from 'axios';
// import './FeedbackForm.css';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [responseMessage, setResponseMessage] = useState('');
//   const [alertType, setAlertType] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/feedback', formData);
//       setResponseMessage(response.data.message);
//       setAlertType('success');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       setResponseMessage(error.response?.data?.message || 'Error submitting feedback');
//       setAlertType('error');
//     }
//   };

//   return (
//     <div className="feedback-container">
//       <div className="feedback-form">
//         <h2>Feedback Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         {responseMessage && (
//           <div className={`alert ${alertType}`}>
//             {responseMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;


import React, { useState } from 'react';
import axios from 'axios';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/feedback', formData);
      setResponseMessage(response.data.message);
      setAlertType('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage(error.response?.data?.message || 'Error submitting feedback');
      setAlertType('error');
    }
  };

  return (
    <div >
      <div className={styles.feedbackForm}>
        <div className={styles.feedbackHeader}>
          <h2>Request a feature</h2>
          {/* <button className={styles.closeBtn}>&times;</button> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What feature are you missing?"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more, including the problem it solves"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>
          
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
        {responseMessage && (
          <div className={`${styles.alert} ${styles[alertType]}`}>
            {responseMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
