import React from 'react'
import Notestate from '../context/notes/Notestate';
import Navbar from './Navbar';
import Alert from './Alert';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
// import LandingPage from './LandingPage';
import Welcomepage from './Welcomepage';
import About from './About';
import Hhome from './Hhome';
import Ahome from './Ahome';
import Login from './Login';
import Alogin from './Alogin';
import Signup from './Signup';
import Signuph from './Signuph';
import CustomerPage from './CustomerPage';
import Loginh from './Loginh';
import AssociativePage from './AssociativePage';
import Visualizations from './Visualization';
import Branches from './Two';
import Categories from './Categories';
import Streamlitapp from './Streamlitapp';

function Appjs2() {


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

        <Notestate>
            <Navbar showalert={showalert} />
            <div className='container'> 
                <Alert alert={alert} />

                <Routes>
                    {/* <Route exact path='/' element={<LandingPage />} /> */}
                    <Route exact path='/welcome' element={<Welcomepage />} />
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


                    <Route exact path='/Branches' element={<Branches />} />
                    <Route exact path='/Categories' element={<Categories />} />
                    <Route exact path='/Streamlitapp' element={<Streamlitapp />} />




                </Routes>

            </div>

        </Notestate>


    )
}

export default Appjs2
