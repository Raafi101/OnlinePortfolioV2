import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function FaceID() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>Face Recognition with Siamese Neural Networks</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        Took a one-shot learning approach to create a model trained off of more than 
                        10,000 pairs of images that can determine whether a pair of images contain the 
                        face of the same person or not. Used a Siamese network architecture to create 
                        embedding vectors in representation space for 2 images at a time. Minimized 
                        cost from contrastive loss using stochastic gradient descent. Optimized for 
                        precision to reduce false positives and achieved 85% precision on testing data.
                        <br></br><br></br>
                        What I Learned: Traditional mathematical models used for face recognition such
                        as Eigenfaces, how to create custom loss functions, how to create neural networks 
                        in a siamese network achitecture, how to imbed Tensorflow model in web apps.
                    </h2>

                    <br></br>

                    <a href='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/Siamese+Neural+Networks+for+Face+Recognition.pdf' target='_blank'>
                        <button id='projectBTN' class="button">
                            <span>
                                <i class="fas fa-file"/>
                                &nbsp;Report
                            </span>
                        </button>
                    </a>

                    <a href='https://github.com/Raafi101/FaceIDWithSiameseNetworks' target='_blank'>
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

export default FaceID