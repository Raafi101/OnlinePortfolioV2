import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function CarClassification() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>Deep Learning Methods for Classifying Images of Automobiles by Body Style</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        Used a gradient based constrained optimization algorithm to find the optimal portfolio 
                        allocation given n stocks. Descent direction determined using “generalized gradients”. 
                        Constraints were 1) the sum of allocations must equal total capital available and 
                        2) only long positions are allowed.
                        <br></br><br></br>
                        What I Learned: How to generalize gradient descent when a function isn't known
                        and only noisy observations are available, how to calculate generalized gradients.
                    </h2>

                    <br></br>

                    <a href='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/DeepLearningMethodsForAutomobiles.pdf' target='_blank'>
                        <button id='projectBTN' class="button">
                            <span>
                                <i class="fas fa-file"/>
                                &nbsp;Report
                            </span>
                        </button>
                    </a>

                    <a href='https://github.com/Raafi101/Deep-Learning-Methods-for-Classifying-Automobiles/blob/main/DeepLearningMethodsAutomobiles.ipynb' target='_blank'>
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

export default CarClassification