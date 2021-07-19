import React from 'react';

import './CodingPage.css';

import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';
import CodeHeader from './Components/Headers/CodeHeader.js';

import DigitClassifier from './Components/ProjectDivs/Coding/DigitClassifier.js';
import StockPricePredictor from './Components/ProjectDivs/Coding/StockPricePredictor.js';
import Minesweeper from './Components/ProjectDivs/Coding/Minesweeper.js';
import ShortestPathFinder from './Components/ProjectDivs/Coding/ShortestPathFinder.js';
import Snake from './Components/ProjectDivs/Coding/Snake.js';
import Pong from './Components/ProjectDivs/Coding/Pong.js';
import HAL9000 from './Components/ProjectDivs/Coding/HAL9000.js';

function Coding() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <CodeHeader />
      <DigitClassifier />
      <StockPricePredictor />
      <Minesweeper />
      <ShortestPathFinder />
      <Snake />
      <Pong />
      <HAL9000 />
      <Footer />

    </div>
  );
}

export default Coding;