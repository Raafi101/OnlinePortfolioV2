import React, {Fragment} from 'react';
import './ProjectOdd.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function SACCFlyers() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle' data-aos='zoom-in'>South Asian Culture Club (SACC) Flyers</h1>
                <div id='ProjectOddSummary'>
                    <div id='SACCFlyerDiv'>
                        <img id='ProjectEvenPic' src='./Images/OpenHouse.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                        <img id='ProjectEvenPic' src='./Images/OpenMicNightSACCfinal.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                        <img id='ProjectEvenPic' src='./Images/SACCPicnic.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                        <img id='ProjectEvenPic' src='./Images/ChaiTime.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                        <img id='ProjectEvenPic' src='./Images/DanceWorkshop.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                        <img id='ProjectEvenPic' src='./Images/GameNightSACCDraft2.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                        <img id='ProjectEvenPic' src='./Images/SACCChaiTimeXOpenMic.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                        <img id='ProjectEvenPic' src='./Images/SACCElectionsSpring2021Flyer.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SACCFlyers