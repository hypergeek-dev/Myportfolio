
// index.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center">
        <a href="#" className="social-icon mx-2">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon mx-2">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};


export default Footer;