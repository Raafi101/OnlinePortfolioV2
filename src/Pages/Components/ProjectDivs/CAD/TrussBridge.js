import React, {Fragment} from 'react';
import './ProjectEven.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function TrussBridge() {

    return (
        <div id='wholeProjectEven'>
            <div id='ProjectEven'>
                <h1 id='ProjectEvenTitle' data-aos='zoom-in' data-aos-duration='500'>Truss Bridge</h1>
                <div id='ProjectEvenSummary'>
                    <h2 id='ProjectEvenText' data-aos='zoom-in' data-aos-delay='200' data-aos-duration='500'>
                        A simple truss bridge I made to learn the basics of 
                        modeling using Fusion 360. Project idea inspired by 
                        my Intro to Engineering class from high school 
                        where we made bridges out of wood and glue. We 
                        would then compete against eachother to achieve 
                        the highest load to weight ratio. I simulate a test 
                        load of 50 newtons on my bridge along the main bottom 
                        panel with structural locks placed at each end.
                        <br></br><br></br>
                        What I Learned: The basics of Fusion 360 modeling and
                        basic Fusion 360 simulations
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectEvenVid' controls data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500'>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/TrussVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrussBridge