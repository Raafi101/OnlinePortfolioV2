import React, {Fragment} from 'react';
import './ProjectOddCS.css';

function HAL9000() {

    return (
        <div id='wholeProjectOddCS'>
            <div id='ProjectOddCS'>
                <h1 id='ProjectOddCSTitle'>HAL9000</h1>
                <div id='ProjectOddCSSummary'>
                    <h2 id='ProjectOddCSText'>
                        My earliest project. 
                        A text-based mish mash of basic Python techniques for practice. 
                        Name inspired by antagonist from 
                        (My favorite movie of all time) "2001: A Space Odyssey".
                        <br></br><br></br>
                        What I Learned: Importing libraries, 
                        basic logic statements, and basic loops.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddCSVid' height='200px' controls>
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