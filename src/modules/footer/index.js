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
        <div className="row">
          {/* Left Div */}
          <div className="left-div col-6">
            {/* Pagination */}
            <div className="pagination">
              <Button variant="secondary pagination-btn" onClick={handlePrev} disabled={currentModuleIndex === 0}>
                <i className="fas fa-arrow-left"></i> Prev
              </Button>
              {/* Display the name of the current module */}
              <span className="mx-3">{modules[currentModuleIndex].name}</span>
              {/* "Next" button */}
              <Button variant="secondary" onClick={handleNext} disabled={currentModuleIndex === modules.length - 1}>
                Next <i className="fas fa-arrow-right"></i>
              </Button>
            </div>
          </div>
          {/* Right Div */}
          <div className="right-div col-6">
            {/* "Hire Me" section */}
            <div className="hire_me"><p>HIRE ME!</p></div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
