import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function CarClassification() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>Deep Learning Methods for Classifying Images of Automobiles by Body Style</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        Used standard machine learning algorithms such as logistic regression and random forest, followed by many
                        deep learning models such as a fully connected network, convolusional neural network, and transfer learning using ResNet50.
                        Compared all of the models and concluded the ResNet50 model performed best with a test accuracy of 76.3%. Data set included
                        6 types of vehicle body styles: multi-purpose vehicles, sports utility vehicles, convertibles, pickups, sedans, and station wagons.
                        <br></br><br></br>
                        What I Learned: Computer vision best practices, such as the preprocessing of images, how to use trained models
                        through the use of transfer learning.
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

                    <a href='https://github.com/Raafi101/DeepLearningMethodsforClassifyingAutomobiles' target='_blank'>
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