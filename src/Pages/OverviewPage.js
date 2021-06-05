import React from 'react';
import './OverviewPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import HomeHeader from './Components/HomeHeader';
import AboutDiv from './Components/AboutDiv';
import QualificationDiv from './Components/QualificationDiv';
import PortfolioDiv from './Components/PortfolioDiv';
import Footer from './Components/Footer';

function Overview() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <HomeHeader />
      <AboutDiv />
      <QualificationDiv />
      <PortfolioDiv />
      <Footer />

    </div>
  );
}

export default Overview;