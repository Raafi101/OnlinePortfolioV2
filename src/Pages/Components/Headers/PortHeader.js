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
                <h1 id='namePort'>Portfolio</h1>
                <h1 id='titlePort'>Coding, CAD, and Photoshop Projects</h1>
                <h1 id='quotePort'>“Ideas without action aren’t ideas. They’re regrets.”</h1>        
                <h1 id='authorPort'>― Steve Jobs</h1>
            </div>
        </div>
    )
}

export default PortHeader