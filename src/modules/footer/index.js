import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';

// Define the modules and their corresponding paths
const modules = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/portfolio', name: 'Portfolio' },
  { path: '/contact', name: 'Contact' },
];

const Footer = () => {
  // Initialize React Router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // State to keep track of the current module index
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  // Effect to update the current module index based on the current path
  useEffect(() => {
    const index = modules.findIndex(module => module.path === location.pathname);
    if (index !== -1) {
      setCurrentModuleIndex(index);
    }
  }, [location.pathname]);

  // Handler for the "Prev" button
  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      navigate(modules[currentModuleIndex - 1].path);
    }
  };

  // Handler for the "Next" button
  const handleNext = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      navigate(modules[currentModuleIndex + 1].path);
    }
  };

  return (
    <footer className="footer">

    </footer>
  );
};

export default Footer;
