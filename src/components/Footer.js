import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-home-link">
        <Link to="/home">Home</Link> {/* Link to the Home page */}
      </div>
      <div className="footer-rights">
        © {new Date().getFullYear()} All Rights Reserved {/* Dynamic year */}
      </div>
    </footer>
  );
};

export default Footer;


