import React, {Fragment} from 'react';
import './PhotoshopHeader.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function PhotoshopHeader() {

    return (
        <div id='wholePhotoshopHead'>
            <div id='header'>
                <h1 id='namePort' data-aos='fade-right' data-aos-duration='500'>Photoshop Projects</h1>
                <h1 id='titlePort' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>Flyers and Other Creations</h1>
            </div>
        </div>
    )
}

export default PhotoshopHeader