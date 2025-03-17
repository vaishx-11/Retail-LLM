// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// const AssociativePage = (props) => {
//   const [details, setDetails] = useState({ name: "", email: "", password: "", csvDocument: null });
//   let history = useNavigate();

//   const handleOnClick = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', details.name);
//     formData.append('email', details.email);
//     formData.append('password', details.password);
//     formData.append('csvDocument', details.csvDocument);
    
//     const response = await fetch("http://localhost:4000/api/Aauth/a", {
//       method: "POST",
//       headers: {
//         // "Content-Type": "application/json", // Note: Do not set Content-Type for FormData
//         "Authorization": `Bearer ${localStorage.getItem('token')}`
//       },
//       body: formData
//     });

//     const json = await response.json();
//     console.log(json);
//     if (json.success) {
//       localStorage.setItem('token', json.authtoken);


     
//       props.showalert("Account created", "success : ")

//       history("/login");
//     } else {
//       props.showalert("user already exists ", "danger : ")

//     }
//   };

//   const onChange = (e) => {
//     if (e.target.name === "csvDocument") {
//       setDetails({ ...details, [e.target.name]: e.target.files[0] });
//     } else {
//       setDetails({ ...details, [e.target.name]: e.target.value });
//     }
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleOnClick} encType="multipart/form-data">
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input type="text" className="form-control" name="name" value={details.name} onChange={onChange} minLength={5} id="name" required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="email" name="email" value={details.email} onChange={onChange} aria-describedby="emailHelp" minLength={5} required />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" name="password" value={details.password} onChange={onChange} minLength={5} id="password" required />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="csvDocument" className="form-label">Upload PDF Document</label>
//             <input type="file" className="form-control" name="csvDocument" onChange={onChange} id="csvDocument" required />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AssociativePage;
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './AssociativePage.css';

const AssociativePage = (props) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "", csvDocument: null });
  let history = useNavigate();

  const handleOnClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', details.name);
    formData.append('email', details.email);
    formData.append('password', details.password);
    formData.append('csvDocument', details.csvDocument);
    
    const response = await fetch("http://localhost:4000/api/Aauth/a", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: formData
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      props.showalert("Account created", "success");
      history("/login");
    } else {
      props.showalert("User already exists", "danger");
    }
  };

  const onChange = (e) => {
    if (e.target.name === "csvDocument") {
      setDetails({ ...details, [e.target.name]: e.target.files[0] });
    } else {
      setDetails({ ...details, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleOnClick} encType="multipart/form-data">
        <h1 className="form-title">Associative Signup</h1>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-input" name="name" value={details.name} onChange={onChange} minLength={5} id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-input" id="email" name="email" value={details.email} onChange={onChange} aria-describedby="emailHelp" minLength={5} required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-input" name="password" value={details.password} onChange={onChange} minLength={5} id="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="csvDocument" className="form-label">Upload PDF Document</label>
          <input type="file" className="form-input" name="csvDocument" onChange={onChange} id="csvDocument" required />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default AssociativePage;
