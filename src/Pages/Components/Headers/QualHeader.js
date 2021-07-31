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
                <h1 id='nameQual'>Qualifications</h1>
                <h1 id='titleQual'>Education, Work Experience, and Skills</h1>
                <h1 id='quoteQual'>“If I have seen further than others, it is by standing upon the shoulders of giants”</h1>        
                <h1 id='authorQual'>― Isaac Newton</h1>
            </div>
        </div>
    )
}

export default QualHeader