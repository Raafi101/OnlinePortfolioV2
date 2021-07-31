import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function StockPricePredictor() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>Stock Price Predictor</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        Model created and trained using Tensorflow. 
                        The dataset used is Yahoo!'s stock price dataset. 
                        This is a very crude program that is Not accurate. 
                        Although the program is not very accurate, 
                        I do not consider this a failure. The main purpose 
                        of this project was to be an intro into Tensorflow 
                        and for me to learn the basics of Tensorflow. 
                        With this goal in mind, this project was a complete success!
                        <br></br><br></br>
                        What I Learned: How neural networks are structured, 
                        how to gather and structure datasets, 
                        how to build and train a model, 
                        the syntax of Tensorflow, 
                        and learned that Machine Learning is a very deep and 
                        intersting field with a ton of potential!
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectEvenCSVid' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/StockVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/StockPricePredictor' target='_blank'>
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

export default StockPricePredictor