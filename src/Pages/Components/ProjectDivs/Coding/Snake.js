import React, {Fragment} from 'react';
import './ProjectOdd.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Snake() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle' data-aos='zoom-in' data-aos-duration='500'>Snake</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText' data-aos='zoom-in' data-aos-delay='200' data-aos-duration='500'>
                        Another remake of a fan favorite game.
                        <br></br><br></br>
                        What I Learned: How to detect keystrokes, 
                        how to create custom graphics and display them, 
                        how to use Pygame.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddVid' controls data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500'>
                            <source src='./Images/SnakeVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/Snake' target='_blank'>
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

export default Snake