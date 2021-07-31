import React, {Fragment} from 'react';
import './ProjectOddCAD.css';

function BMWBadge() {

    return (
        <div id='wholeProjectOddCAD'>
            <div id='ProjectOddCAD'>
                <h1 id='ProjectOddCADTitle'>BMW Badge</h1>
                <div id='ProjectOddCADSummary'>
                    <h2 id='ProjectOddCADText'>
                        A fun personal project where I modeled the 
                        BMW badge in AutoCAD. Serves no purpose 
                        except for obtaining joy in modeling it.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddCADVid' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/BMWVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BMWBadge