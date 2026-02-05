
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './sections/Home.jsx';
import Services from './sections/Services.jsx';
import Products from './sections/Products.jsx';
import Contact from './sections/Contact.jsx';
import Portfolio from './sections/Portfolio.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-[#a67c52]/30 selection:text-[#3D2B1F]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/trabajos" element={<Portfolio />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
