import React from 'react';


const Home = () => {
  return (
    <div style={pageStyle}>
      <h1>Welcome to Our Website</h1>
      <p>This is the Home page of our static React website.</p>
    </div>
  );
};

const pageStyle = {
  textAlign: 'center',
  padding: '20px',
};

export default Home;
