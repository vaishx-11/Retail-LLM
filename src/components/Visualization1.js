

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link ,useLocation} from 'react-router-dom';
import './Visualizations.css';

const Visualizations1 = () => {
    const [images, setImages] = useState([]);
    const [csvFetched, setCsvFetched] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const location = useLocation();
    const handleOnClick = async (e) => {
        e.preventDefault();
        try {
            const userId = localStorage.getItem('user_id'); 
            await axios.get(`http://localhost:4000/api/Aauth/csv/${userId}`);
            setCsvFetched(true); 
        } catch (error) {
            console.error('Error fetching CSV document:', error);
        }
    };

    useEffect(() => {
        const imageNames = [
            'sales_trends_over_time.png',
            'sales_performance_by_product_line.png',
            'sales_distribution_by_gender.png',
            'sales_distribution_by_product_line.png',
            'sales_performance_by_payment_method.png'
        ];
        setImages(imageNames);
    }, []);

    const handleImageClick = (image) => {
        setActiveImage(image);
    };

    const handleClose = () => {
        setActiveImage(null);
    };

    return (
        <>
            <nav className="Visualizations-navbar">
                <div className="Visualizations-container">
                    <Link className="Visualizations-navbar-brand" to='/Visualizations1'>Overview</Link>
                    <button className="Visualizations-navbar-toggler" type="button" aria-label="Toggle navigation">
                        <span className="Visualizations-navbar-toggler-icon"></span>
                    </button>
                    <div className="Visualizations-navbar-collapse">
                        <ul className="Visualizations-navbar-nav">
                            <li className="Visualizations-nav-item">
                                <Link className="Visualizations-nav-link" to="/Branches1">Branches</Link>
                            </li>
                            <li className="Visualizations-nav-item">
                                <Link className="Visualizations-nav-link" to="/Categories1">Categories</Link>
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
            <div className="Visualizations-content">
                <button className="Visualizations-button" onClick={handleOnClick}>Fetch CSV</button>
                {csvFetched && (
                    <div className="Visualizations-grid">
                        {images.map(image => (
                            <div
                                className="Visualizations-image-container"
                                key={image}
                                onClick={() => handleImageClick(image)}
                            >
                                <img
                                    src={`http://localhost:4000/api/image/${image}`}
                                    alt={image}
                                    className={`Visualizations-image ${activeImage === image ? 'active' : ''}`}
                                />
                            </div>
                        ))}
                    </div>
                )}
                {activeImage && (
                    <div className="Visualizations-modal" onClick={handleClose}>
                        <div className="Visualizations-modal-content">
                            <img
                                src={`http://localhost:4000/api/image/${activeImage}`}
                                alt={activeImage}
                                className="Visualizations-modal-image"
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};




export default Visualizations1;
