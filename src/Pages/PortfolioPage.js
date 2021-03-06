import React from 'react';
import './PortfolioPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';
import PortHeader from './Components/Headers/PortHeader.js';
import PortfolioBTNS from './Components/PortfolioBTNS.js';

function Portfolio() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <PortHeader />
      <PortfolioBTNS />
      <Footer />

    </div>
  );
}

export default Portfolio;