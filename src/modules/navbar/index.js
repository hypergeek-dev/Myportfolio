import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div className="container-fluid navDiv">
      {/* Bootstrap Navbar */}
      <Navbar variant="dark">
        {/* Navigation links using React Router's Link component */}
        <Nav>
          {/* Link to Home page */}
          <Nav.Link as={Link} to="/"><p>Home</p></Nav.Link>
          {/* Link to About page */}
          <Nav.Link as={Link} to="/about"><p>About</p></Nav.Link>
          {/* Link to Portfolio page */}
          <Nav.Link as={Link} to="/portfolio"><p>Portfolio</p></Nav.Link>
          {/* Link to Contact page */}
          <Nav.Link as={Link} to="/contact"><p>Contact</p></Nav.Link>
        </Nav>
      </Navbar>
      {/* Additional div for styling, possibly for a transition effect */}
      <div className="smokey_transition"></div>
    </div>
  );
}

export default NavigationBar;
