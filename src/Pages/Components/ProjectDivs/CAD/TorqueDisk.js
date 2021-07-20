import React, {Fragment} from 'react';
import './ProjectOdd.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function TorqueDisk() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle' data-aos='zoom-in'>Torque Disk</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText' data-aos='zoom-in'>
                        A school project where I had to design a torque disk.
                    </h2>
                    <div id='vidDiv'>
                        <img id='ProjectEvenVid' src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/Torque_disk.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TorqueDisk