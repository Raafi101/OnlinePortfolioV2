import React, {Fragment} from 'react';
import './ProjectOdd.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Minesweeper() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle' data-aos='zoom-in' data-aos-duration='500'>Minesweeper</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText' data-aos='zoom-in' data-aos-delay='200' data-aos-duration='500'>
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
                        <video id='ProjectOddVid' controls data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500'>
                            <source src='./Images/MineVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/Minesweeper' target='_blank'>
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

export default Minesweeper