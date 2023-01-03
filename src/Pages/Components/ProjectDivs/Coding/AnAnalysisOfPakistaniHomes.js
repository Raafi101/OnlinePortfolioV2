import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function AnAnalysisOfPakistaniHomes() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>An Analysis of Pakistani Homes</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        Analyzed the Pakistani housing market using exploratory data analysis and machine 
                        learning to predict home prices. Built and compared models using linear regression, 
                        polynomial regression, k-nearest neighbors regression, decision tree regression, 
                        and random forest regression. Models were ranked based on their coefficient of determination.
                        <br></br><br></br>
                        What I Learned: How to generalize gradient descent when a function isn't known
                        and only noisy observations are available, how to calculate generalized gradients.
                    </h2>

                    <br></br>

                    <a href='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/An_Analysis_of_Pakistani_Homes.pdf' target='_blank'>
                        <button id='projectBTN' class="button">
                            <span>
                                <i class="fas fa-file"/>
                                &nbsp;Report
                            </span>
                        </button>
                    </a>

                    <a href='https://github.com/Raafi101/An_Analysis_of_Pakistani_Homes' target='_blank'>
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

export default AnAnalysisOfPakistaniHomes