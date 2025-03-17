import React, { useEffect, useState } from 'react';
import './footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        setIsVisible(true); // Reached the bottom
      } else {
        setIsVisible(false); // Not at the bottom
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <span className="text-muted">© 2024 Retail llm<br/> 
        </span>
      </div>
    </footer>
  );
}

export default Footer;

