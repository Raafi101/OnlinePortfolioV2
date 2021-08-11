import React, {Fragment} from 'react';
import './ProjectOddCS.css';

function HAL9001() {

    return (
        <div id='wholeProjectOddCS'>
            <div id='ProjectOddCS'>
                <h1 id='ProjectOddCSTitle'>HAL9001</h1>
                <div id='ProjectOddCSSummary'>
                    <h2 id='ProjectOddCSText'>
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
                    
                    <br></br><br></br><br></br>
                    <h1 id='ProjectOddCSTitle'>Video Coming Soon!</h1>
                    <br></br><br></br><br></br>

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

export default HAL9001