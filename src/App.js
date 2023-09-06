// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavigationBar from './modules/navbar/';
import Home from './modules/home/';
import Footer from './modules/footer/';
import About from './modules/about/';
import Portfolio from './modules/portfolio/';
import Contact from './modules/contact/';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container"> 
        <NavigationBar />
        <div className="content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
