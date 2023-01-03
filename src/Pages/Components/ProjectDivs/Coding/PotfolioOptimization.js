import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function PortfolioOptimization() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>HAL9001</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        Not to be confused with my silly take on HAL9000 found below. A 
                        personal assistant and chatbot created using TensorFlow. The model 
                        utilizes the “bag-of-words” NLP technique to decipher the command 
                        of the user. Model created using TensorFlow. Data manipulation is 
                        done through the Natural Language Toolkit (NLTK). Incorporates the 
                        Spotify API to allow Spotify control and the OpenWeather API for 
                        real-time weather retrieval. HAL9001 is able to search Google, 
                        YouTube, and Wikipedia. Other tasks include retrieving the time 
                        and date. Light conversation is also possible.
                        <br></br><br></br>
                        What I Learned: The bag-of-words natural language processing technique, 
                        how to make use of APIs of different service providers, 
                        how to make a basic personal assistant that follows spoken commands.
                    </h2>

                    <br></br>

                    <a href='https://github.com/Raafi101/HAL9001' target='_blank'>
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

export default PortfolioOptimization