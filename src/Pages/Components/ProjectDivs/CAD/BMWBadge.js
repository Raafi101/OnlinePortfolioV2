import React, {Fragment} from 'react';
import './ProjectOdd.css';

function BMWBadge() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle'>BMW Badge</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText'>
                        A fun personal project where I modeled the 
                        BMW badge in AutoCAD. Serves no purpose 
                        except for obtaining joy in modeling it.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddVid' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/BMWVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BMWBadge