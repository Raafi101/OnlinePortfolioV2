import React, {Fragment} from 'react';
import './ProjectOdd.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function HAL9000() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle' data-aos='zoom-in' data-aos-duration='500'>HAL9000</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText' data-aos='zoom-in' data-aos-delay='200' data-aos-duration='500'>
                        My earliest project. 
                        A text-based mish mash of basic Python techniques for practice. 
                        Name inspired by antagonist from 
                        (My favorite movie of all time) "2001: A Space Odyssey".
                        <br></br><br></br>
                        What I Learned: Importing libraries, 
                        basic logic statements, and basic loops.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddVid' controls data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500'>
                            <source src='./Images/HALVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/HAL9000' target='_blank'>
                        <button id='projectBTN' class="button" data-aos='zoom-in' data-aos-delay='150'>
                            <span>
                                <i class="fab fa-github"/>
                                &nbsp;Project Repository
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HAL9000