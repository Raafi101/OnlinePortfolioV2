import React, {Fragment} from 'react';
import './DropDown.css';

function DropDown() {

    return (
        <Fragment id='dropBackground'>
            <div id='dropMenu'>
                <a id='dropText' className='gradient-text1' href='/'>Overview</a>
                <a id='dropText' className='gradient-text1' href='/qualifications'>Qualifications</a>
                <a id='dropText' className='gradient-text1' href='/portfolio'>Portfolio</a>
                <a id='dropText' className='gradient-text1' href='/contact'>Contact Me</a>
            </div>
        </Fragment>
    )
}

export default DropDown