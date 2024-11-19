import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Women from './pages/Women';
import Tawaiffs from './pages/Tawaiffs';
import Spies from './pages/Spies';
import Tribals from './pages/Tribals';
import AboutUs from './pages/AboutUs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
    <div className="text-gray-800 font-sans">
      <Header />
      <MainContent/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/tawaiffs" element={<Tawaiffs />} />
          <Route path="/spies" element={<Spies />} />
          <Route path="/tribals" element={<Tribals />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
