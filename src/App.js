import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Notestate from './context/notes/Notestate';
import Welcomepage from './components/Welcomepage';
import Hhome from './components/Hhome';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Signuph from './components/Signuph';
import CustomerPage from './components/CustomerPage';
import AssociativePage from './components/AssociativePage';
import Loginh from './components/Loginh';
import Alogin from './components/Alogin';
import Ahome from './components/Ahome';
import Visualizations from './components/Visualization';
import Branches from './components/Branches';
import Categories from './components/Categories';
// import Anavbar from './components/Anavbar';
import Streamlitapp from './components/Streamlitapp';
// import Owner from './components/Ownerlogin';
import Ownerlogin from './components/Ownerlogin';
import Ownerpage from './components/Ownerpage';
import Chabot from './components/Chatbot';
import Branches1 from './components/Branches1';
import Categories1 from './components/Categories1';
import Visualizations1 from './components/Visualization1';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import ProductComponent from './components/ProductComponent';
import Footer from './components/Footer';
// import LandingPage from './components/LandingPage';
// import Appjs2 from './components/Appjs2';


function App() {
  const [alert, setalert] = useState(null);
  const showalert = (mess, type) => {
    setalert({
      mess: mess,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }  
  return (
    <>
      <Notestate>
        <Navbar showalert={showalert} />
        <div className='container'>
          <Alert alert={alert} />
            {/* sendd this to the appjs2 it will work */}

           <Routes>
           {/* <Route exact path='/app' element={<Appjs2 />} />
             <Route exact path='/' element={<LandingPage />} /> */}
            <Route exact path='/' element={<Welcomepage />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/home' element={<Hhome showalert={showalert} />} />
            <Route exact path='/Ahome' element={<Ahome showalert={showalert} />} />

            <Route exact path='/login' element={<Login showalert={showalert} />} />
            <Route exact path='/Alogin' element={<Alogin showalert={showalert} />} />

            <Route exact path='/signup' element={<Signup showalert={showalert} />} />
            <Route exact path='/signup1' element={<Signuph />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route exact path='/login1' element={<Loginh />} />
            <Route path="/AssociativePage" element={<AssociativePage showalert={showalert} />} />
            <Route path="/Visualizations" element={<Visualizations showalert={showalert} />} />
            <Route path="/Visualizations1" element={<Visualizations1 showalert={showalert} />} />

            <Route exact path='/Branches' element={<Branches />} />
            <Route exact path='/Categories' element={<Categories />} />
            <Route exact path='/Streamlitapp' element={<Streamlitapp />} />
            <Route exact path='/chabot' element={<Chabot />} />
            <Route exact path='/owner' element={<Ownerlogin showalert={showalert} />} />
          
            <Route exact path='/ownerpage' element={<Ownerpage/>} />
            <Route exact path='/Branches1' element={<Branches1/>} />
            <Route exact path='/Categories1' element={<Categories1/>} />
            <Route exact path='/Visualizations1' element={<Visualizations1/>} />
            <Route exact path='/Feedback' element={<FeedbackForm/>} />
            <Route exact path='/feedback-list' element={<FeedbackList/>} />
            <Route exact path='/Hhome' element={<Hhome/>} />
            <Route exact path='/Produts' element={<ProductComponent/>} />

          </Routes> 
        </div>
        <Footer/>
      </Notestate>
    </>
  );
}

export default App;
