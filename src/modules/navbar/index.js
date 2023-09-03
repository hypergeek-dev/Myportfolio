import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Collapse } from 'react-bootstrap';
import '../modules.css';
function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container-fluid">
      {windowWidth < 768 ? (
        <Navbar variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggle} />
          <Collapse in={isOpen}>
            <Nav id="responsive-navbar-nav">
              <Nav.Link className="custom-nav-link" as={Link} to="/"><p>Home</p></Nav.Link>
              <Nav.Link className="custom-nav-link" as={Link} to="/about"><p>About</p></Nav.Link>
              <Nav.Link className="custom-nav-link" as={Link} to="/portfolio"><p>Portfolio</p></Nav.Link>
              <Nav.Link className="custom-nav-link" as={Link} to="/contact"><p>Contact</p></Nav.Link>
            </Nav>
          </Collapse>
        </Navbar>
      ) : (
        <Navbar variant="dark">
          <Nav>
            <Nav.Link as={Link} to="/"><p>Home</p></Nav.Link>
            <Nav.Link as={Link} to="/about"><p>About</p></Nav.Link>
            <Nav.Link as={Link} to="/portfolio"><p>Portfolio</p></Nav.Link>
            <Nav.Link as={Link} to="/contact"><p>Contact</p></Nav.Link>
          </Nav>
        </Navbar>
      )}
    </div>
  );
}

export default NavigationBar;
