import React from 'react';
import './OverviewPage.css';
import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import HomeHeader from './Components/HomeHeader';

function Overview() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <HomeHeader />

      <div id='header'>

        <h1 id='name'>Raafi Rahman</h1>

        <h1 id='title'>Musician, Metaphysician, Mathematician</h1>

        <h1 id='quote'>“Mathematics is the language in which God has written the universe”</h1>
        
        <h1 id='author'>― Galileo Galilei</h1>

      </div>

    </div>
  );
}

export default Overview;