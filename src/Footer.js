import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 My Company. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  background: '#333',
  padding: '10px 0',
  color: '#fff',
  textAlign: 'center',
};

export default Footer;
