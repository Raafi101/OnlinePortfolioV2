import React from 'react';
import './PortfolioPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';
import PortHeader from './Components/PortHeader';

function Portfolio() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <PortHeader />
      <Footer />

    </div>
  );
}

export default Portfolio;