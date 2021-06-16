import React from 'react';
import './QualificationsPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';
import Timeline from './Components/Timeline.js';
import QualHeader from './Components/QualHeader.js';
import SkillsDiv from './Components/SkillsDiv.js';

function Qualifications() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <QualHeader />
      <Timeline />
      <SkillsDiv />
      <Footer />

    </div>
  );
}

export default Qualifications;