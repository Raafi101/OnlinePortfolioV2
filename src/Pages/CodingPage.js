import React from 'react';

import './CodingPage.css';

import Navbar from './Components/NavBar.js';
import DropDown from './Components/DropDown.js';
import Footer from './Components/Footer.js';
import CodeHeader from './Components/Headers/CodeHeader.js';

import HAL9001 from './Components/ProjectDivs/Coding/HAL9001.js';
import PlanetariumArcadium from './Components/ProjectDivs/Coding/PlanetariumArcadium.js';
import DigitClassifier from './Components/ProjectDivs/Coding/DigitClassifier.js';
import StockPricePredictor from './Components/ProjectDivs/Coding/StockPricePredictor.js';
import Minesweeper from './Components/ProjectDivs/Coding/Minesweeper.js';
import ShortestPathFinder from './Components/ProjectDivs/Coding/ShortestPathFinder.js';
import Snake from './Components/ProjectDivs/Coding/Snake.js';
import Pong from './Components/ProjectDivs/Coding/Pong.js';
import HAL9000 from './Components/ProjectDivs/Coding/HAL9000.js';
import PortfolioOptimization from './Components/ProjectDivs/Coding/PotfolioOptimization';
import FaceID from './Components/ProjectDivs/Coding/FaceID';

function Coding() {
  return (
    <div id='masterDiv'>

      <Navbar />
      <DropDown />
      <CodeHeader />
      <FaceID />
      <PortfolioOptimization />
      <HAL9001 />
      <PlanetariumArcadium />
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