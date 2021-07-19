import React, {Fragment} from 'react';
import './ProjectEven.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function ShortestPathFinder() {

    return (
        <div id='wholeProjectEven'>
            <div id='ProjectEven'>
                <h1 id='ProjectEvenTitle' data-aos='zoom-in' data-aos-duration='500'>Shortest Path Finder</h1>
                <div id='ProjectEvenSummary'>
                    <h2 id='ProjectEvenText' data-aos='zoom-in' data-aos-delay='200' data-aos-duration='500'>
                        A small path finding app that uses Dijkstra's 
                        path finding algorithm made in C++.
                        <br></br><br></br>
                        What I Learned: App creating techniques within C++, 
                        how to implement Dijkstra's Algorithm, 
                        how to implement Bubble Sort.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectEvenVid' controls data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500'>
                            <source src='./Images/PathFindingVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/ShortestPathFinder' target='_blank'>
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

export default ShortestPathFinder