import React, {Fragment} from 'react';
import './HomeHeader.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function HomeHeader() {

    return (
        <div id='animation'>
            <div id='header'>
                <h1 id='name' data-aos='fade-right' data-aos-duration='500'>Raafi Rahman</h1>
                <h1 id='title' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>Data Scientist, Applied Scientist, ML/AI Researcher</h1>
                <h1 id='quote' data-aos='fade-right' data-aos-delay='200' data-aos-duration='500'>“Mathematics is the language in which God has written the universe”</h1>        
                <h1 id='author' data-aos='fade-left' data-aos-delay='300' data-aos-duration='500'>― Galileo Galilei</h1>
            </div>
        </div>
    )
}

export default HomeHeader