import React from 'react';
import './PortfolioPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';

function Portfolio() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <Footer />

    </div>
  );
}

export default Portfolio;