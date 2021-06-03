import React, {Fragment} from 'react';
import './PortfolioDiv.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function PortfolioDiv() {

    return (
        <div id='wholePortfolioDiv'>
            <div id='PortfolioDiv'>
                <h1 id='PortfolioTitle' data-aos='fade-down' data-aos-duration='500'>Raafi's Portfolio</h1>
                <div id='PortfolioSummary'>
                    <h2 id='PortfolioText' data-aos='fade-right' data-aos-delay='200' data-aos-duration='500'>
                        Raafi works on many projects that have to do with programming, 
                        engineering design, and visual design. A notable project 
                        is his Personal Assistant that can recognize human voice and perform tasks 
                        such as controlling music on spotify, playing a video on youtube, searching things up, 
                        and looking up something on Wikipedia. This project uses natural language processing 
                        to accurately understand the users intention, and then performs that task. 
                        Another notable project is Planetarium Arcadium, an online orrery where the user can 
                        search up planets stored in a PostgreSQL database and visualize them 
                        on the screen.
                    </h2>
                    <div id='carousel'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDiv