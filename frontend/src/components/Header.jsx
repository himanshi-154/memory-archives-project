import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <header className="p-4 border-b border-gray-300 flex justify-between items-center">
      <h1  className="text-4xl">MEMORY & ARCHIVES PROJECT</h1>
      <nav className="space-x-4">
          <a className="pop-text"><Link to="/">Home</Link></a>
          <a><Link to="/women">Women</Link></a>
          <a><Link to="/tawaiffs">Tawaiffs</Link></a>
          <a><Link to="/spies">Spies</Link></a>
          <a><Link to="/tribals">Tribals</Link></a>
          <Link to="/about-us">About Us</Link>
        
      </nav>
    </header>
  );
}

export default Header;
