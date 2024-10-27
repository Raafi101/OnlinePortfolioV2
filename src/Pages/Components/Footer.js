import React, {Fragment} from 'react';
import './Footer.css';

function Footer() {

    return (
        <div id='wholeFooterDiv'>

            <div id='FooterDiv'>

                <div id='footerTitleDiv'>
                    <img id='footerLogo' src='./Images/rSquaredLogoFinal.png' />
                    <h1 id='FooterTitle'>Raafi Rahman</h1>
                </div>

                <div id='footerBody'>

                    <div id='inlineFooter'>
                        <h2 id='FooterText'>
                            <i class="fas fa-envelope"></i> : rahmanraafi00@gmail.com
                        </h2>
                        <a id='footerLink' className='gradient-text1' href='/'>Overview</a>
                    </div>

                    <div id='inlineFooter'>
                        <h2 id='FooterText'>
                        <i class="fas fa-phone-alt"></i> : Contact for more details
                        </h2>
                        <a id='footerLink' className='gradient-text1' href='/qualifications'>Qualifications</a>
                    </div>

                    <div id='inlineFooter'>
                        <h2 id='FooterText'>
                            <i class="fab fa-github"></i> : <a id='footerExLink' href='https://github.com/Raafi101' target='_blank'>github.com/Raafi101</a>
                        </h2>
                        <a id='footerLink' className='gradient-text1' href='/portfolio'>Portfolio</a>
                    </div>

                    <div id='inlineFooter'>
                        <h2 id='FooterText'>
                            <i class="fab fa-linkedin"></i> : <a id='footerExLink' href='https://www.linkedin.com/in/raafi101/' target='_blank'>www.linkedin.com/in/raafi101</a>
                        </h2>
                        <a id='footerLink' className='gradient-text1' href='/contact'>Contact Me</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer