import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function ShortestPathFinder() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>Shortest Path Finder</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        A small path finding app that uses Dijkstra's 
                        path finding algorithm made in C++.
                        <br></br><br></br>
                        What I Learned: App creating techniques within C++, 
                        how to implement Dijkstra's Algorithm, 
                        how to implement Bubble Sort.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectEvenCSVid' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/PathFindingVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/ShortestPathFinder' target='_blank'>
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

export default ShortestPathFinder