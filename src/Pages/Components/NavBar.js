import React, {Fragment} from 'react';
import './NavBar.css';

function Navbar() {

    function burgerSwitch() {
        if (document.getElementById('dropMenu').style.visibility==='visible') {
            document.getElementById('dropMenu').style.visibility='hidden'; /* hides sub-menu */
            document.getElementById('dropMenu').style.opacity='0';
            document.getElementById('dropMenu').style.position='fixed';
            document.getElementById('dropMenu').style.top='100';
            document.getElementById('dropMenu').style.left='0';
            document.getElementById('dropMenu').style.width='100%';
            document.getElementById('dropMenu').style.transform='translateY(-2em)';
            document.getElementById('dropMenu').style.zIndex='1';
            document.getElementById('dropMenu').style.transition='all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s';
        }

        else {
            document.getElementById('dropMenu').style.visibility='visible';
            document.getElementById('dropMenu').style.opacity='1';
            document.getElementById('dropMenu').style.zIndex='2';
            document.getElementById('dropMenu').style.transform='translateY(0%)';
            document.getElementById('dropMenu').style.transitionDelay='0s, 0s, 0.3s';
        }
    }

    return (
        <Fragment>
            <div className="nav-container">
                <nav className='navbar'>
                    <div className='navLogoDiv'>
                        <img id='websiteLogo' src='./Images/rSquaredLogoFinal.png' />
                        <a id='logoText' className='gradient-text' href='/'>Overview</a>
                        <a id='logoText' className='gradient-text' href='/'>About Me</a>
                        <a id='logoText' className='gradient-text' href='/'>Experience</a>
                        <a id='logoText' className='gradient-text' href='/'>Portfolio</a>
                        <a id='logoText' className='gradient-text' href='/'>Contact Me</a>
                    </div>
                    <button onClick={burgerSwitch} id='burgerBTN'><i id='burgerIcon' class="icofont-navigation-menu" /></button>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar