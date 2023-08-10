import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './modules/navbar/';
import Home from './modules/home/';
import About from './modules/about/';
import Projects from './modules/projects/';
import Contact from './modules/contact/';


function App() {
  return (
    <Router>
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

    </Router>
  );
}

export default App;
