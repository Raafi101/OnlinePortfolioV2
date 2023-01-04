import React, {Fragment} from 'react';
import './ProjectOddCS.css';

function PortfolioOptimization() {

    return (
        <div id='wholeProjectOddCS'>
            <div id='ProjectOddCS'>
                <h1 id='ProjectOddCSTitle'>Optimization in Portfolio Allocation for an Arbitrary Number of Assets</h1>
                <div id='ProjectOddCSSummary'>
                    <h2 id='ProjectOddCSText'>
                        Worked with a team of 4 people total to find methods to optimize a portfolio with an arbitrary number
                        of assets. Used a gradient based constrained optimization algorithm to find the optimal portfolio 
                        allocation given n stocks. Descent direction determined using “generalized gradients”. 
                        Constraints were 1) the sum of allocations must equal total capital available and 
                        2) only long positions are allowed.
                        <br></br><br></br>
                        What I Learned: Learned about the Markowitz mean-variance model and the effiecient frontier curve,
                        how to generalize gradient descent when a function isn't known
                        and only noisy observations are available, how to calculate generalized gradients.
                    </h2>

                    <br></br>

                    <a href='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/PortfolioOptimization.pdf' target='_blank'>
                        <button id='projectBTN' class="button">
                            <span>
                                <i class="fas fa-file"/>
                                &nbsp;Report
                            </span>
                        </button>
                    </a>

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