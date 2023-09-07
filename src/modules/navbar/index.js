import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (

    <div className="container-fluid navDiv">
          <h1><span className="letter_large">D</span>ennis Jensen</h1>
      {/* Bootstrap Navbar */}
      <Navbar variant="dark">
     
        {/* Navigation links using React Router's Link component */}
        <Nav>
          {/* Link to Home page */}
          <Nav.Link className="glow-on-hover" as={Link} to="/"><p>Home</p></Nav.Link>
          {/* Link to About page */}
          <Nav.Link className="glow-on-hover" as={Link} to="/about"><p>About</p></Nav.Link>
          {/* Link to Portfolio page */}
          <Nav.Link className="glow-on-hover" as={Link} to="/portfolio"><p>Portfolio</p></Nav.Link>
          {/* Link to Contact page */}
          <Nav.Link className="glow-on-hover" as={Link} to="/contact"><p>Contact</p></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
