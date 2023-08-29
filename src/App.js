import React from 'react';
import { BrowserRouter as Router, Route, Routes } from '../node_modules/react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './modules/navbar/';
import Home from './modules/home/';
import Footer from './modules/footer/';
import About from './modules/about/';
import Portfolio from './modules/portfolio/';
import Contact from './modules/contact/';


function App() {
  return (
    <Router>
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
<Footer />
    </Router>
  );
}

export default App;
