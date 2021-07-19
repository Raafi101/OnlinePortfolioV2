import React, {Fragment} from 'react';
import './CodeHeader.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function CodeHeader() {

    return (
        <div id='wholeCodeHead'>
            <div id='header'>
                <h1 id='namePort' data-aos='fade-right' data-aos-duration='500'>Coding Projects</h1>
                <h1 id='titlePort' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>Tools, Games, and Demonstrations</h1>
            </div>
        </div>
    )
}

export default CodeHeader