import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';


function NavigationBar() {
  return (
    <div className="container-fluid">
      <Navbar variant="dark">
        <Nav>
          <Nav.Link as={Link} to="/"><p>Home</p></Nav.Link>
          <Nav.Link as={Link} to="/about"><p>About</p></Nav.Link>
          <Nav.Link as={Link} to="/portfolio"><p>Portfolio</p></Nav.Link>
          <Nav.Link as={Link} to="/contact"><p>Contact</p></Nav.Link>
        </Nav>
      </Navbar>
</div>
  );
}

export default NavigationBar;
