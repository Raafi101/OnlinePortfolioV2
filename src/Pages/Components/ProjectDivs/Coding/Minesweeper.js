import React, {Fragment} from 'react';
import './ProjectOdd.css';

function Minesweeper() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle'>Minesweeper</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText'>
                        A remake of the retro classic, Minesweeper, 
                        with a graphical twist. I used Python to write 
                        this program and used Python libraries such as 
                        Pygame and Numpy to create this game.
                        <br></br><br></br>
                        What I Learned: Learned how to implement linear algebra (transformations and powers of transformations) into a program, 
                        learned about exporting Python file to executables, 
                        learned how to play Minesweeper.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddVid' preload="metadata" controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/MineVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/Minesweeper' target='_blank'>
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

export default Minesweeper