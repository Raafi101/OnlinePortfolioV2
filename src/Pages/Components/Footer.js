import React, {Fragment} from 'react';
import './Footer.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Footer() {

    return (
        <div id='wholeFooterDiv'>

            <div id='FooterDiv'>

                <div id='footerTitleDiv' data-aos='fade-down'>
                    <img id='footerLogo' src='./Images/rSquaredLogoFinal.png' />
                    <h1 id='FooterTitle'>Raafi Rahman</h1>
                </div>

                <div id='footerBody'>

                    <div id='inlineFooter'>
                        <h2 id='FooterText' data-aos='fade-right'>
                            Email: rahmanraafi00@gmail.com
                        </h2>
                        <a id='footerLink' data-aos='fade-left' className='gradient-text1' href='/'>Overview</a>
                    </div>

                    <div id='inlineFooter'>
                        <h2 id='FooterText' data-aos='fade-right' data-aos-delay='50'>
                            Cell number: 1 (646) 334-1690
                        </h2>
                        <a id='footerLink' data-aos='fade-left' data-aos-delay='50' className='gradient-text1' href='/qualifications'>Qualifications</a>
                    </div>

                    <div id='inlineFooter'>
                        <h2 id='FooterText' data-aos='fade-right' data-aos-delay='100'>
                            Github: github.com/Raafi101
                        </h2>
                        <a id='footerLink' data-aos='fade-left' data-aos-delay='100' className='gradient-text1' href='/portfolio'>Portfolio</a>
                    </div>

                    <div id='inlineFooter'>
                        <h2 id='FooterText' data-aos='fade-right' data-aos-delay='150'>
                            Linkedin www.linkedin.com/in/raafi101
                        </h2>
                        <a id='footerLink' data-aos='fade-left' data-aos-delay='150' className='gradient-text1' href='/contact'>Contact Me</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer