import React from 'react';
import './CADPage.css';

import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';
import CADHeader from './Components/Headers/CADHeader.js';

import GearSystem from './Components/ProjectDivs/CAD/GearSystem.js';
import TrussBridge from './Components/ProjectDivs/CAD/TrussBridge.js';
import BMWBadge from './Components/ProjectDivs/CAD/BMWBadge.js';
import Gasket from './Components/ProjectDivs/CAD/Gasket.js';
import TorqueDisk from './Components/ProjectDivs/CAD/TorqueDisk.js';

function CAD() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <CADHeader />
      <GearSystem />
      <TrussBridge />
      <BMWBadge />
      <Gasket />
      <TorqueDisk />
      <Footer />

    </div>
  );
}

export default CAD;