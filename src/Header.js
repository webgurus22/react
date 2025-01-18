import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importing the CSS for styling

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Hamburger Menu - Visible on mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div
          className={`bar ${isMobileMenuOpen ? 'bar-open' : ''}`}
        ></div>
        <div
          className={`bar ${isMobileMenuOpen ? 'bar-open' : ''}`}
        ></div>
        <div
          className={`bar ${isMobileMenuOpen ? 'bar-open' : ''}`}
        ></div>
      </div>

      {/* Logo - Centered on mobile */}
      <div className={`logo-container ${isMobileMenuOpen ? 'logo-center' : ''}`}>
        <img
          src="/logo.png" // Reference logo directly from the public folder
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Navigation - Mobile and Desktop */}
      <nav className={`nav ${isMobileMenuOpen ? 'nav-active' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/faq" className="nav-link" onClick={closeMenu}>FAQ</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
