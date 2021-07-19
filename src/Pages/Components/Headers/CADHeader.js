import React, {Fragment} from 'react';
import './CADHeader.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function CADHeader() {

    return (
        <div id='wholeCADHead'>
            <div id='header'>
                <h1 id='namePort' data-aos='fade-right' data-aos-duration='500'>CAD Projects</h1>
                <h1 id='titlePort' data-aos='fade-left' data-aos-delay='100' data-aos-duration='500'>AutoCAD and Fusion 360</h1>
            </div>
        </div>
    )
}

export default CADHeader