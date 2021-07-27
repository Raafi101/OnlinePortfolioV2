import React, {Fragment} from 'react';
import './ProjectOdd.css';

function HAL9000() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle'>HAL9000</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText'>
                        My earliest project. 
                        A text-based mish mash of basic Python techniques for practice. 
                        Name inspired by antagonist from 
                        (My favorite movie of all time) "2001: A Space Odyssey".
                        <br></br><br></br>
                        What I Learned: Importing libraries, 
                        basic logic statements, and basic loops.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddVid' preload="metadata" controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/HALVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/HAL9000' target='_blank'>
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

export default HAL9000