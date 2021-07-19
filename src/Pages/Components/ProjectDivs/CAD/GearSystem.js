import React, {Fragment} from 'react';
import './ProjectOdd.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function GearSystem() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle' data-aos='zoom-in'>3 Gear System</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText' data-aos='zoom-in'>
                        A system of 3 spur gears that work together. 
                        Gears designed to fit together perfectly. 
                        The largest gear has 48 teeth, the next largest 
                        has 24, and the smallest has 12. The system is 
                        designed to move naturally when any of the gears 
                        are spun. Spinning the largest gear will spin the 
                        medium and small gear respectively. The whole 
                        system is designed with a steel material.
                        <br></br><br></br>
                        What I Learned: The basics of gear ratios, 
                        basic Fusion360 animation, and 
                        how to create dynamic models.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddVid' controls data-aos='zoom-in' data-aos-delay='100'>
                            <source src='./Images/GearsVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GearSystem