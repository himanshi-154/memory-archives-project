import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './header.css';
// function Header() {
//   return (
    
//     <header className="p-4 border-b border-gray-300 flex justify-between items-center">
//       <h1  className="text-4xl">MEMORY & ARCHIVES PROJECT</h1>
//       <nav className="space-x-4">
//           <a className="pop-text"><Link to="/">Home</Link></a>
//           <a><Link to="/women">Women</Link></a>
//           <a><Link to="/tawaiffs">Tawaiffs</Link></a>
//           <a><Link to="/spies">Spies</Link></a>
//           <a><Link to="/tribals">Tribals</Link></a>
//           <a><Link to="/about-us">About Us</Link></a>
//       </nav>
//     </header>
//   );
// }

// function Header() {
//   return (
//     <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-gray-100">
//       {/* Title */}
//       <h1 className="text-3xl font-bold text-gray-800">
//         MEMORY & ARCHIVES PROJECT
//       </h1>

//       {/* Navigation */}
//       <nav className="flex space-x-6">
//         {/* Home Link with Icon */}
//         <Link
//           to="/"
//           className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-600 transition"
//         >
//           <FaHome />
//           {/* <span>Home</span> */}
//         </Link>
        
//         {/* Other Links */}
//         <Link
//           to="/women"
//           className="text-lg text-gray-700 hover:text-blue-600 transition"
//         >
//           Women
//         </Link>
//         <Link
//           to="/tawaiffs"
//           className="text-lg text-gray-700 hover:text-blue-600 transition"
//         >
//           Tawaiffs
//         </Link>
//         <Link
//           to="/spies"
//           className="text-lg text-gray-700 hover:text-blue-600 transition"
//         >
//           Spies
//         </Link>
//         <Link
//           to="/tribals"
//           className="text-lg text-gray-700 hover:text-blue-600 transition"
//         >
//           Tribals
//         </Link>
//         <Link
//           to="/about-us"
//           className="text-lg text-gray-700 hover:text-blue-600 transition"
//         >
//           About Us
//         </Link>
//       </nav>
//     </header>
//   );
// }

// function Header() {
//   return (
//     <header className="header">
//       {/* Title */}
//       <h1 className="title">MEMORY & ARCHIVES PROJECT</h1>

//       {/* Navigation */}
//       <nav className="nav">
//         <div className="nav-left">
//           {/* Home Link with Icon */}
//           <Link to="/" className="nav-link">
//             <FaHome />
//             <span>Home</span>
//           </Link>
//         </div>

//         <div className="nav-right">
//           {/* Other Links */}
//           <Link to="/women" className="nav-link">
//             Women
//           </Link>
//           <Link to="/tawaiffs" className="nav-link">
//             Tawaiffs
//           </Link>
//           <Link to="/spies" className="nav-link">
//             Spies
//           </Link>
//           <Link to="/tribals" className="nav-link">
//             Tribals
//           </Link>
//           <Link to="/about-us" className="nav-link">
//             About Us
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }
function Header() {
  return (
    <header className="p-4 border-b border-gray-300 flex justify-between items-center">

      <h1 className="text-4xl">MEMORY & ARCHIVES PROJECT</h1>
      <nav className="nav">
        <Link to="/" className="nav-link-0">
          <FaHome className="icon" />
        </Link>
        
        <Link to="/women" className="nav-link">WOMEN</Link>
        <Link to="/tawaiffs" className="nav-link">TAWAIFFS</Link>
        <Link to="/spies" className="nav-link">SPIES</Link>
        <Link to="/tribals" className="nav-link">TRIBALS</Link>
        <Link to="/about-us" className="nav-link">ABOUT US</Link>

      <h1  className="text-4xl">MEMORY & ARCHIVES PROJECT</h1>
      <nav className="space-x-4">
          <a className="pop-text"><Link to="/">Home</Link></a>
          <a><Link to="/women">Women</Link></a>
          <a><Link to="/tawaiffs">Tawaiffs</Link></a>
          <a><Link to="/spies">Spies</Link></a>
          <a><Link to="/about-us">About Us</Link></a>

        
      </nav>
    </header>
  );
}

export default Header;
