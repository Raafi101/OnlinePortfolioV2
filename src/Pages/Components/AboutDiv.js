import React, {Fragment} from 'react';
import './AboutDiv.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function AboutDiv() {

    return (
        <div id='wholeAboutDiv'>
            <div id='aboutDiv'>
                <h1 id='aboutTitle'>Meet Raafi</h1>
                <div id='aboutSummary'>
                    <img id='aboutPic' data-aos='fade-right' data-aos-duration='500' src='./Images/WebsitePFP4.png' />
                    <h2 id='aboutText' data-aos='fade-left' data-aos-duration='500'>
                        Raafi is a native New Yorker. He attended Staten Island Technical High School 
                        and is now a fourth year Yalow Honors student at 
                        Hunter College. As part of the mathematics BA/MA program, 
                        he is pursuing a Bachelor's in mathematics and 
                        a minor in computer science. His Master's is in 
                        applied mathematics. His interests include math, physics, 
                        space, technology, chess, and music. Raafi plays three 
                        instruments: trombone, baritone, and guitar.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default AboutDiv