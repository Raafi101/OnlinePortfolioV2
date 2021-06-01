import React, {Fragment} from 'react';
import './DropDown.css';

function DropDown() {

    return (
        <Fragment id='dropBackground'>
            <div id='dropMenu'>
                <a id='dropText' className='gradient-text1' href='/'>Overview</a>
                <a id='dropText' className='gradient-text1' href='/'>About Me</a>
                <a id='dropText' className='gradient-text1' href='/'>Experience</a>
                <a id='dropText' className='gradient-text1' href='/'>Portfolio</a>
                <a id='dropText' className='gradient-text1' href='/'>Contact Me</a>
            </div>
        </Fragment>
    )
}

export default DropDown