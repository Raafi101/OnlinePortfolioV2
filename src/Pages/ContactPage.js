import React from 'react';
import './ContactPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';

function Contact() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <Footer />

    </div>
  );
}

export default Contact;