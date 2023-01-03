import React, {Fragment} from 'react';
import './ProjectOddCS.css';

function BayesianLinearRegression() {

    return (
        <div id='wholeProjectOddCS'>
            <div id='ProjectOddCS'>
                <h1 id='ProjectOddCSTitle'>Ford Price Prediction using Bayesian Linear Regression</h1>
                <div id='ProjectOddCSSummary'>
                    <h2 id='ProjectOddCSText'>
                        Used Bayesian Linear Regression to create a model that predicts Ford car prices.
                        Utilized Hamiltonian Monte Carlo algorithm to accept or reject random samples. Used Confidence intervals
                        to show accuracy of model.
                        <br></br><br></br>
                        What I Learned: How to use sampling methods and efficients accept or reject samples,
                        how to use Bayes theorem to create linear models.
                    </h2>

                    <br></br>

                    <a href='https://github.com/Raafi101/FordPricePredictionBayesianLinReg/blob/main/FordPricePrediction.ipynb' target='_blank'>
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

export default BayesianLinearRegression