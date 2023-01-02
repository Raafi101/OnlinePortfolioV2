import React, {Fragment} from 'react';
import './QualificationDiv.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function QualificationDiv() {

    // When the user clicks on the button, open the modal
    function openRes() {
        document.getElementById('resModal').style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    function closeRes() {
        document.getElementById('resModal').style.display = "none";
    }

    // When the user clicks on the button, open the modal
    function openTran() {
        document.getElementById('tranModal').style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    function closeTran() {
        document.getElementById('tranModal').style.display = "none";
    }

    return (
        <div id='wholeQualDiv'>
            <div id='QualificationDiv'>
                <h1 id='qualificationTitle'>Raafi's Qualifications</h1>
                <div id='qualificationSummary'>
                    <h2 id='qualificationText' data-aos='fade-right' data-aos-delay='200' data-aos-duration='500'>
                        Raafi graduated with a major GPA of 3.75 and a cumulative GPA of 3.696.
                        He understands a variety of programming languages such as Python, 
                        JavaScript/HTML/CSS, C++, and SQL.
                        Raafi has experience with many useful Python libraries 
                        and toolkits like TensorFlow, NumPy, Matplotlib, Pandas, OpenCV, 
                        NLTK, and more! Raafi can convey ideas in English, Urdu, Hindi, and Russian. 
                        He possesses knowledge about computer hardware with hands-on computer building 
                        experience. He is artistic when it comes to music, design, and film making.
                        See LinkedIn for resume and transcript.
                    </h2>
                    <div id='qualBTNs'>
                        <a href='/qualifications'><button class="button" data-aos='fade-left'><span>Read More </span></button></a>
                        <a href='https://github.com/Raafi101' target='_blank'><button class="button" data-aos='fade-left' data-aos-delay='150'><span><i class="fab fa-github"></i> GitHub </span></button></a>
                        <a href='https://www.linkedin.com/in/raafi101/' target='_blank'><button class="button" data-aos='fade-left' data-aos-delay='200'><span><i class="fab fa-linkedin"></i> LinkedIn </span></button></a>
                        <button onClick={openRes} id="myBtn" class="button" data-aos='fade-left' data-aos-delay='200'><span> Resume </span></button>
                        <div id="resModal" class="modal">
                            <div class="modal-content">
                                <span onClick={closeRes} class="close">&times;</span>
                                <embed src="./Images/Resume123122.pdf" width="100%" height="100%" type="application/pdf"/>
                            </div>
                        </div>
                        <button onClick={openTran} id="myBtn" class="button" data-aos='fade-left' data-aos-delay='200'><span> Transcript </span></button>
                        <div id="tranModal" class="modal">
                            <div class="modal-content">
                                <span onClick={closeTran} class="close">&times;</span>
                                <embed src="./Images/Transcript122722.pdf" width="100%" height="100%" type="application/pdf"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QualificationDiv