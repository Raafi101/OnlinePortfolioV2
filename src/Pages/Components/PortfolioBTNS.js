import React, {Fragment} from 'react';
import './PortfolioBTNS.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function PortfolioDiv() {

    return (
        <div id='wholePortBTNS'>
            <div class="gallery-image">
                <a href='/codingProjects'>
                    <div class="img-box" data-aos='fade-left'>
                        <img src='./Images/codingLogoPic.png' alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                            <p>Coding</p>
                            <p>Tools, Games, and Demonstrations</p>
                            </div>
                        </div> 
                    </div>
                </a>
                <a href='/CADProjects'>
                    <div class="img-box" data-aos='fade-left' data-aos-delay='100'>
                        <img src='./Images/CADLogo.png' alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                            <p>CAD</p>
                            <p>AutoCAD and <br></br> Fusion 360</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='/PhotoshopProjects'>
                    <div class="img-box" data-aos='fade-left' data-aos-delay='200'>
                        <img src='./Images/PSLogo.png' alt="" />
                        <div class="transparent-box">
                            <div class="caption">
                            <p>Photoshop</p>
                            <p>Photoshop Creations <br></br> and Flyers</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default PortfolioDiv