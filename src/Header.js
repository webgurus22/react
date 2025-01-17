import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainer}>
        <img
          src="/logo.png"  // Reference logo directly from the public folder
          alt="Logo"
          style={logoStyle}
        />
      </div>
      <nav style={navContainer}>
        <ul style={navStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/services" style={linkStyle}>Services</Link></li>
          <li><Link to="/faq" style={linkStyle}>FAQ</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',  // This makes sure that the logo and nav are spaced apart
  alignItems: 'center',  // Vertically aligns the items (logo and nav)
  background: '#ffffff',
  padding: '20px 65px',
  border: '1px solid black',
};

const logoContainer = {
  display: 'flex',
  alignItems: 'center', // Centers the logo vertically
};

const logoStyle = {
  height: '40px',  // You can adjust the height based on your logo's actual size
  width: 'auto',
};

const navContainer = {
  display: 'flex',
  justifyContent: 'flex-end',  // Align the navigation items to the right
  flex: 1, // Takes up remaining space on the right
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  margin: 0, // To remove default margins
  padding: 0, // To remove default padding
  gap: 30,
};

const linkStyle = {
  textDecoration: 'none',  // Removes underline
  color: '#000',  // Optional: Set the color to black or any other color
};

export default Header;
