import React, {Fragment} from 'react';
import './NavBar.css';

function Navbar() {

    function changeDir() {
        window.history.back()
    }

    return (
        <Fragment>
            <div className="nav-container">
                <nav className='navbar'>
                    <div className='navLogoDiv'>
                        <a id='logoText' className='gradient-text' href='/'>Overview</a>
                        <a id='logoText' className='gradient-text' href='/'>About Me</a>
                        <a id='logoText' className='gradient-text' href='/'>Experience</a>
                        <a id='logoText' className='gradient-text' href='/'>Portfolio</a>
                        <a id='logoText' className='gradient-text' href='/'>Contact Me</a>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar