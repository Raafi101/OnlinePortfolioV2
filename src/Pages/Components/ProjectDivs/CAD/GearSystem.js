import React, {Fragment} from 'react';
import './ProjectOddCAD.css';

function GearSystem() {

    return (
        <div id='wholeProjectOddCAD'>
            <div id='ProjectOddCAD'>
                <h1 id='ProjectOddCADTitle'>3 Gear System</h1>
                <div id='ProjectOddCADSummary'>
                    <h2 id='ProjectOddCADText'>
                        A system of 3 spur gears that work together. 
                        Gears designed to fit together perfectly. 
                        The largest gear has 48 teeth, the next largest 
                        has 24, and the smallest has 12. The system is 
                        designed to move naturally when any of the gears 
                        are spun. Spinning the largest gear will spin the 
                        medium and small gear respectively. The whole 
                        system is designed with a steel material.
                        <br></br><br></br>
                        What I Learned: The basics of gear ratios, 
                        basic Fusion360 animation, and 
                        how to create dynamic models.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddCADVid' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/GearsVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GearSystem