import React, {Fragment} from 'react';
import './ProjectOdd.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function DigitClassifier() {

    return (
        <div id='wholeProjectOdd'>
            <div id='ProjectOdd'>
                <h1 id='ProjectOddTitle' data-aos='zoom-in'>Digit Classifier</h1>
                <div id='ProjectOddSummary'>
                    <h2 id='ProjectOddText' data-aos='zoom-in'>
                        Model created and trained using Tensorflow. 
                        The dataset used is the MNIST handwritten 
                        digits dataset. The GUI was created using tkinter. 
                        User is able to “handwrite” a digit and 
                        then the model will return its best guess 
                        at which digit it is. Since this is a 
                        categorical problem, I decided to use a 
                        sigmoid activation function and the sparse 
                        categorical cross entropy loss function. 
                        Achieved an accuracy of 99.9% among the test data.
                        <br></br><br></br>
                        What I Learned: Proper data formatting and processing techniques, 
                        how to efficiently train models for optimal results, 
                        how to save a model for future use.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectOddVid' controls data-aos='zoom-in' data-aos-delay='100'>
                            <source src='./Images/DigitVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/DigitClassifier' target='_blank'>
                        <button id='projectBTN' class="button" data-aos='zoom-in' data-aos-delay='150'>
                            <span>
                                <i class="fab fa-github"/>
                                &nbsp;Project Repository
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DigitClassifier