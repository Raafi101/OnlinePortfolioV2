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
                    <img id='aboutPic' data-aos='fade-right' data-aos-duration='500' src='./Images/BlackSuit1Cropped.jpg' />
                    <h2 id='aboutText' data-aos='fade-left' data-aos-duration='500'>
                        Raafi's ultimate goal in life is to push the limits of humanity.
                        He is a Native New Yorker who recently completed his Master's in Statistics & Applied Mathematics from Hunter College.
                        He was a part of the BA/MA program where he also completed his Bachelor's in Mathematics with a minor in Computer Science.
                        His interests include math, physics, space and aviation, technology, investing, philosophy, etymology, and WWII/Cold War era history.
                        In his free time he is either consuming Sci-Fi media, playing chess, or playing the trombone, baritone, or guitar.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default AboutDiv