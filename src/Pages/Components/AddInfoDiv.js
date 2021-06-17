import React, {Fragment} from 'react';
import './AddInfoDiv.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function AddInfoDiv() {

    return (
        <div id='wholeAddInfoDiv'>
            <div id='AddInfoDiv'>
                <h1 id='AddInfoTitle' data-aos='fade-down' data-aos-duration='500'>Additional Information</h1>
                <div id='AddInfoSummary'>
                    
                    <h1 id='SkillsSub' data-aos='fade-down'>Certifications and Honors</h1>
                    <div id='bloc'>
                        <div id='miscList'>
                            <h2 id='MiscText1' data-aos='fade-right'>Yalow Honors Student</h2>
                            <h2 id='MiscText1' data-aos='fade-right'>AutoCAD Certified (Certiport)</h2>
                            <h2 id='MiscText1' data-aos='fade-right'>National Honor Society Member (NHS)</h2>
                            <h2 id='MiscText1' data-aos='fade-right'>Tri-M Music Honor Society Member (Tri-M)</h2>
                        </div>
                    </div>

                    <h1 id='AddInfoSub' data-aos='fade-down'>Soft Skills</h1>

                    <div id='bloc'>
                        <div id='InterestList'>
                            <h2 id='InterestText' data-aos='fade-right'>Natural leader,</h2>
                            <h2 id='InterestText' data-aos='fade-right'>Calculated,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Particular,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Deep thinker,</h2>
                            <h2 id='InterestText' data-aos='fade-right'>Socially adept,</h2>
                            <h2 id='InterestText' data-aos='fade-right'>Motivated,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Determined,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Creative,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Understanding</h2>
                        </div>
                    </div>

                    <h1 id='AddInfoSub' data-aos='fade-down'>Interests</h1>

                    <div id='bloc'>
                        <div id='InterestList'>
                            <h2 id='InterestText' data-aos='fade-right'>Chess,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Math,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Music,</h2>
                            <h2 id='InterestText' data-aos='fade-right'>Space,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Futurology,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Investing,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Exercising,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Philosophy,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Metaphysics,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Etymology</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInfoDiv