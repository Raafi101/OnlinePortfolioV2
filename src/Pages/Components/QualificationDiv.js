import React, {Fragment} from 'react';
import './QualificationDiv.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function QualificationDiv() {

    return (
        <div id='wholeQualDiv'>
            <div id='QualificationDiv'>
                <h1 id='qualificationTitle' data-aos='fade-down' data-aos-duration='500'>Raafi's Qualifications</h1>
                <div id='qualificationSummary'>
                    <h2 id='qualificationText' data-aos='fade-right' data-aos-delay='200' data-aos-duration='500'>
                        Raafi is an A+ student, currently holding a 3.663 GPA.
                        He understands a variety of programming languages such as Python, 
                        JavaScript/HTML/CSS, C++, and SQL.
                        Raafi has experience with many useful Python libraries 
                        and toolkits like TensorFlow, NumPy, Matplotlib, Pandas, OpenCV, 
                        NLTK, and more! Raafi can convey ideas in English, Urdu, Hindi, and Russian. 
                        He possesses knowledge about computer hardware with hands-on computer building 
                        experience. Artistic when it comes to music, design, and film making.
                    </h2>
                    <div id='qualBTNs'>
                        <button class="button" data-aos='fade-left'><span>Read More </span></button>
                        <button class="button" data-aos='fade-left'><span>Resume </span></button>
                        <button class="button" data-aos='fade-left'><span>Transcript </span></button>
                        <button class="button" data-aos='fade-left'><span>GitHub </span></button>
                        <button class="button" data-aos='fade-left'><span>LinkedIn </span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QualificationDiv