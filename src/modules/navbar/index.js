import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div className="container-fluid d-flex justify-content-between align-items-end bg-dark opacity-70 position-fixed">
      <h1 className="text-white"><span className="letter_large">D</span>ennis Jensen</h1>
      {/* Bootstrap Navbar */}
      <Navbar variant="dark">
        {/* Navigation links using React Router's Link component */}
        <Nav>
          {/* Link to Home page */}
          <Nav.Link as={Link} to="/"><button type="button" class="glow-on-hover text-white btn btn-dark">Home</button></Nav.Link>
          {/* Link to About page */}
          <Nav.Link as={Link} to="/about"><button type="button" class="glow-on-hover text-white btn btn-dark">About</button></Nav.Link>
          {/* Link to Portfolio page */}
          <Nav.Link as={Link} to="/portfolio"><button type="button" class="glow-on-hover text-white btn btn-dark">Portfolio</button></Nav.Link>
          {/* Link to Contact page */}
          <Nav.Link as={Link} to="/contact"><button type="button" class="glow-on-hover text-white btn btn-dark">Contact</button></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
