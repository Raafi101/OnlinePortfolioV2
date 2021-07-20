import React, {Fragment} from 'react';
import './ProjectEven.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Gasket() {

    return (
        <div id='wholeProjectEven'>
            <div id='ProjectEven'>
                <h1 id='ProjectEvenTitle' data-aos='zoom-in' data-aos-duration='500'>Gasket</h1>
                <div id='ProjectEvenSummary'>
                    <h2 id='ProjectEvenText' data-aos='zoom-in' data-aos-delay='200' data-aos-duration='500'>
                        A school project where I had 
                        to design a gasket that could be used in pipes
                    </h2>
                    <div id='vidDiv'>
                        <img id='ProjectEvenVid' src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/Gasket.png' data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gasket