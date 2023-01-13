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
                <h1 id='AddInfoTitle'>Additional Information</h1>
                <div id='AddInfoSummary'>
                    
                    <h1 id='SkillsSub'>Certifications and Honors</h1>
                    <div id='bloc'>
                        <div id='miscList'>
                            <h2 id='MiscText1' data-aos='fade-right'>Yalow Honors Student</h2>
                            <h2 id='MiscText1' data-aos='fade-right'>AutoCAD Certified (Certiport)</h2>
                            <h2 id='MiscText1' data-aos='fade-right'>National Honor Society Member (NHS)</h2>
                            <h2 id='MiscText1' data-aos='fade-right'>Tri-M Music Honor Society Member (Tri-M)</h2>
                        </div>
                    </div>

                    <h1 id='AddInfoSub'>Soft Skills</h1>

                    <div id='bloc'>
                        <div id='InterestList'>
                            <h2 id='InterestText' data-aos='fade-left'>Natural leader,</h2>
                            <h2 id='InterestText' data-aos='fade-left'>Calculated,</h2> 
                            <h2 id='InterestText' data-aos='fade-left'>Particular,</h2> 
                            <h2 id='InterestText' data-aos='fade-left'>Deep thinker,</h2>
                            <h2 id='InterestText' data-aos='fade-left'>Socially adept,</h2>
                            <h2 id='InterestText' data-aos='fade-left'>Motivated,</h2> 
                            <h2 id='InterestText' data-aos='fade-left'>Determined,</h2> 
                            <h2 id='InterestText' data-aos='fade-left'>Creative,</h2> 
                            <h2 id='InterestText' data-aos='fade-left'>Understanding</h2>
                        </div>
                    </div>

                    <h1 id='AddInfoSub'>Interests</h1>

                    <div id='bloc'>
                        <div id='InterestList'>
                            <h2 id='InterestText' data-aos='fade-right'>Chess,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Math,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Physics,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Music,</h2>
                            <h2 id='InterestText' data-aos='fade-right'>Space and Aviation,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Technology,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Investing,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Exercising,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Philosophy,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>Etymology,</h2>
                            <h2 id='InterestText' data-aos='fade-right'>Sci-Fi,</h2> 
                            <h2 id='InterestText' data-aos='fade-right'>WWII/Cold War era history</h2> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInfoDiv