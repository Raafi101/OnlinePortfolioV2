import React, {Fragment} from 'react';
import './PortHeader.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function PortHeader() {

    return (
        <div id='wholePortHead'>
            <div id='header'>
                <h1 id='namePort' data-aos='fade-right' data-aos-duration='500'>Portfolio</h1>
                <h1 id='titlePort' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>Coding, CAD, and Photoshop Projects</h1>
                <h1 id='quotePort' data-aos='fade-right' data-aos-delay='200' data-aos-duration='500'>“Ideas without action aren’t ideas. They’re regrets.”</h1>        
                <h1 id='authorPort' data-aos='fade-left' data-aos-delay='300' data-aos-duration='500'>― Steve Jobs</h1>
            </div>
        </div>
    )
}

export default PortHeader