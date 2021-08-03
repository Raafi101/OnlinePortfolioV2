import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function Pong() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>Pong</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        A small adaptation of yet another retro classic, Pong! 
                        Grab a friend a try it out! 
                        <br></br><br></br>
                        What I Learned: Python tkinter module, 
                        how to implement kinematic equations into programming.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectEvenCSVid' height='168px' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/PongVid2.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/Pong' target='_blank'>
                        <button id='projectBTN' class="button">
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

export default Pong