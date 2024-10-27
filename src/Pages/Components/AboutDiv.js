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
                    <img id='aboutPic' data-aos='fade-right' data-aos-duration='500' src='./Images/washingtonDC.jpg'/>
                    <h2 id='aboutText' data-aos='fade-left' data-aos-duration='500'>
                        Raafi's ultimate goal in life is to push the limits of humanity.
                        He is currently working as a Data Scientist at&nbsp;
                        <a id='fiserv' href='https://www.fiserv.com' target='_blank'>fiserv.</a> He 
                        leverages his machine learning and technical knowledge to automate the capture and filtering of
                        merchants commiting fraud and those with high credit risk.
                        Raafi possesses a Master's in Statistics & Applied Mathematics from Hunter College, where 
                        he also completed his Bachelor's in Mathematics with a minor in Computer Science.
                        His interests include math, physics, space and aviation, technology, investing, philosophy, etymology, and history.
                        In his free time he is either at the gym, consuming Sci-Fi media, playing chess, or playing the trombone, baritone, or guitar.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default AboutDiv