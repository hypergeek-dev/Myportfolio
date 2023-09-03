
// index.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../modules.css';
const Footer = () => {
  return (
    <footer className="mt-5 footer-container">  
      <div className="d-flex justify-content-center">
        <a href="#" className="social-icon mx-2">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="social-icon mx-2">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="social-icon mx-2">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};



export default Footer;