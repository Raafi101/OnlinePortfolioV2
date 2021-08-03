import React, {Fragment} from 'react';
import './ProjectEvenCAD.css';

function TrussBridge() {

    return (
        <div id='wholeProjectEvenCAD'>
            <div id='ProjectEvenCAD'>
                <h1 id='ProjectEvenCADTitle'>Truss Bridge</h1>
                <div id='ProjectEvenCADSummary'>
                    <h2 id='ProjectEvenCADText'>
                        A simple truss bridge I made to learn the basics of 
                        modeling using Fusion 360. Project idea inspired by 
                        my Intro to Engineering class from high school 
                        where we made bridges out of wood and glue. We 
                        would then compete against eachother to achieve 
                        the highest load to weight ratio. I simulate a test 
                        load of 50 newtons on my bridge along the main bottom 
                        panel with structural locks placed at each end.
                        <br></br><br></br>
                        What I Learned: The basics of Fusion 360 modeling and
                        basic Fusion 360 simulations
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectEvenCADVid' height='168px' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/TrussVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrussBridge