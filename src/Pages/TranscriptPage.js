import React from 'react';
import './TranscriptPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';

function Transcript() {
  return (
    <body>
      <div id='masterDiv'>

        <Navbar />
        <DropDown />
        <iframe src="./Images/Transcript08_19_21.pdf" width="100%" />
        <Footer />

      </div>
    </body>
  );
}

export default Transcript;