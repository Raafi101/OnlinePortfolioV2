import React, {Fragment} from 'react';
import './ProjectEven.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function StockPricePredictor() {

    return (
        <div id='wholeProjectEven'>
            <div id='ProjectEven'>
                <h1 id='ProjectEvenTitle' data-aos='zoom-in' data-aos-duration='500'>Stock Price Predictor</h1>
                <div id='ProjectEvenSummary'>
                    <h2 id='ProjectEvenText' data-aos='zoom-in' data-aos-delay='200' data-aos-duration='500'>
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
                        <video id='ProjectEvenVid' controls data-aos='zoom-in' data-aos-delay='100' data-aos-duration='500'>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/StockVid.mp4' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://github.com/Raafi101/StockPricePredictor' target='_blank'>
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

export default StockPricePredictor