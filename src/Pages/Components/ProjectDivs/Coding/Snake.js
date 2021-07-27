import React, {Fragment} from 'react';
import './ProjectOdd.css';

function Snake() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle'>Snake</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText'>
                        Another remake of a fan favorite game.
                        <br></br><br></br>
                        What I Learned: How to detect keystrokes, 
                        how to create custom graphics and display them, 
                        how to use Pygame.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddVid' preload="metadata" controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/SnakeVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/Snake' target='_blank'>
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

export default Snake