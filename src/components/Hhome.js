import React from 'react'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './Branches.css';
import Notes from './Notes'

const Hhome = (props) => {
  const location = useLocation();
  const { showalert } = props
  return (
    <>
      <nav className="Categories-navbar">
        <div className="Categories-container">
          <Link className={`Categories-navbar-brand ${location.pathname === '/Visualizations1' ? 'active' : ''}`} to='/Produts'>Products</Link>
          <button className="Categories-navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="Categories-navbar-toggler-icon"></span>
          </button>
          <div className="Categories-navbar-collapse">
            <ul className="Categories-navbar-nav">
              <li className="Categories-nav-item">
                <Link className={`Categories-nav-link ${location.pathname === '/Branches1' ? 'active' : ''}`} to="/Streamlitapp">search</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Hhome
