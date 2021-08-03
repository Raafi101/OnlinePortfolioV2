import React, {Fragment} from 'react';
import './ProjectOddCS.css';

function DigitClassifier() {

    return (
        <div id='wholeProjectOddCS'>
            <div id='ProjectOddCS'>
                <h1 id='ProjectOddCSTitle'>Digit Classifier</h1>
                <div id='ProjectOddCSSummary'>
                    <h2 id='ProjectOddCSText'>
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
                        <video id='ProjectOddCSVid' width='300px' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/DigitVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/DigitClassifier' target='_blank'>
                        <button id='projectBTN' class="button">
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