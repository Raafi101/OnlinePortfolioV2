import React from 'react';
import './ResumePage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';

function Resume() {
  return (
    <body>
      <div id='masterDiv'>

        <Navbar />
        <DropDown />
        <iframe src="./Images/Resume08_21_21.pdf" width="100%" />
        <Footer />

      </div>
    </body>
  );
}

export default Resume;