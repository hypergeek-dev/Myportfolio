// Footer.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../modules.css'; 

const Footer = () => {
  const navigate = useNavigate();
  const modules = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/contact', name: 'Contact' },
  ];
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      navigate(modules[currentModuleIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      navigate(modules[currentModuleIndex + 1].path);
    }
  };

  return (
    <footer className="footer d-flex justify-content-center align-items-center">
      <Button variant="secondary" onClick={handlePrev} disabled={currentModuleIndex === 0}>
        <i className="fas fa-arrow-left"></i> Prev
      </Button>
      <span className="mx-3">{modules[currentModuleIndex].name}</span>
      <Button variant="secondary" onClick={handleNext} disabled={currentModuleIndex === modules.length - 1}>
        Next <i className="fas fa-arrow-right"></i>
      </Button>
    </footer>
  );
};

export default Footer;
