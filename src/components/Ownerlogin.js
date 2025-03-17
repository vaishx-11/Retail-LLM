// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import styles from './Ownerlogin.module.css';

// const Ownerlogin = () => {
//   const navigate = useNavigate();

//   const initialValues = { email: '', password: '' };
//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Required'),
//     password: Yup.string().required('Required')
//   });

//   const onSubmit = (values) => {
//     const { email, password } = values;
//     const ownerEmail = 'dineshjulakanti007@gmail.com';
//     const ownerPassword = 'dineshjulakanti007@gmail.com';

//     if (email === ownerEmail && password === ownerPassword) {
//       navigate('/ownerpage');
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div className={styles['form-container']}>
//       <h2 className={styles['form-title']}>Login</h2>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//         <Form>
//           <div className={styles['form-group']}>
//             <label>Email</label>
//             <Field type="email" name="email" className={styles['form-control']} />
//             <ErrorMessage name="email" component="div" className={styles.error} />
//           </div>
//           <div className={styles['form-group']}>
//             <label>Password</label>
//             <Field type="password" name="password" className={styles['form-control']} />
//             <ErrorMessage name="password" component="div" className={styles.error} />
//           </div>
//           <button type="submit" className={styles.btn}>Login</button>
//         </Form>
//       </Formik>
     
//     </div>
//   );
// };

// export default Ownerlogin;


import React, { useState } from 'react';
import { useNavigate } from "react-router";
import './Login.css';

const Ownerlogin = (props) => {
  const [details, setdetails] = useState({ email: "", password: "" });
  let history = useNavigate();

  const handleonclick = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:4000/api/auth/ownerlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: details.email, password: details.password }),
    });
    const json = await response.json();
    console.log(json);
    console.log(json.success);
    if (json.success) {
      localStorage.setItem('token', json.jwtdata);
      localStorage.setItem('owner', 77);


      history("/ownerpage");
      console.log("working");
      props.showalert("Account logged in", "success");
    } else {
      props.showalert("Invalid details", "danger");
    }
  };

  const onchange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleonclick}>
        <h1 className="login-title">Login</h1>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={details.email}
            onChange={onchange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            name="password"
            value={details.password}
            onChange={onchange}
            id="password"
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
}

export default Ownerlogin;
