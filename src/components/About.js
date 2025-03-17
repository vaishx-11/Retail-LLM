// AboutPage.js
// About.js

// About.js

import React from 'react';
import './About.css'; // Import the CSS file for styles
import aboutImage from './image.jpg'; // Ensure the correct path to your image

const About = () => {
    return (
        <div className="about-container">
            <section className="section-about">
            <h1>Transforming Retail through Innovative Solutions</h1>
            <p>Retail LLM is revolutionizing the retail industry with cutting-edge solutions designed to enhance customer engagement and optimize operational efficiency. We specialize in leveraging advanced technology to empower retailers of all sizes, offering bespoke strategies that drive growth and foster lasting customer relationships.</p>
                <img src={aboutImage} alt="Illustration" className="about-image"/>
            </section>
        </div>
    );
}

export default About;





