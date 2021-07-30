import React, {Fragment} from 'react';
import './ProjectEven.css';

function Pong() {

    return (
        <div id='wholeProjectEven'>
            <div id='ProjectEven'>
                <h1 id='ProjectEvenTitle'>Pong</h1>
                <div id='ProjectEvenSummary'>
                    <h2 id='ProjectEvenText'>
                        A small adaptation of yet another retro classic, Pong! 
                        Grab a friend a try it out! 
                        <br></br><br></br>
                        What I Learned: Python tkinter module, 
                        how to implement kinematic equations into programming.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectEvenVid' controls>
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