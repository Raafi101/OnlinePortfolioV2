import React from 'react';
import './QualificationsPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';
import Timeline2 from './Components/Timeline2.js';
import QualHeader from './Components/Headers/QualHeader.js';
import SkillsDiv from './Components/SkillsDiv.js';
import AddInfoDiv from './Components/AddInfoDiv';

function Qualifications() {
  return (
    <div id='qualMasterDiv'>

      <Navbar />
      <DropDown />
      <QualHeader />
      <Timeline2 />
      <SkillsDiv />
      <AddInfoDiv />
      <Footer />

    </div>
  );
}

export default Qualifications;