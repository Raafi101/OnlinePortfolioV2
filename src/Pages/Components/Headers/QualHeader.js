import React, {Fragment} from 'react';
import './QualHeader.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function QualHeader() {

    return (
        <div id='wholeQualHead'>
            <div id='header'>
                <h1 id='nameQual' data-aos='fade-right' data-aos-duration='500'>Qualifications</h1>
                <h1 id='titleQual' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>Education, Work Experience, and Skills</h1>
                <h1 id='quoteQual' data-aos='fade-right' data-aos-delay='200' data-aos-duration='500'>“If I have seen further than others, it is by standing upon the shoulders of giants”</h1>        
                <h1 id='authorQual' data-aos='fade-left' data-aos-delay='300' data-aos-duration='500'>― Isaac Newton</h1>
            </div>
        </div>
    )
}

export default QualHeader