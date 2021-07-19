import React from 'react';
import './PhotoshopPage.css';

import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';
import PhotoshopHeader from './Components/Headers/PhotoshopHeader.js';

import SACCFlyers from './Components/ProjectDivs/Photoshop/SACCFlyers.js';

function Photoshop() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <PhotoshopHeader />
      <SACCFlyers />
      <Footer />

    </div>
  );
}

export default Photoshop;