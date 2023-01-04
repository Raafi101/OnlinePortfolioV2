import React, {Fragment} from 'react';
import './PortfolioDiv.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function PortfolioDiv() {

    return (
        <div id='wholePortfolioDiv'>
            <div id='PortfolioDiv'>
                <h1 id='PortfolioTitle'>Raafi's Portfolio</h1>
                <div id='PortfolioSummary'>
                    <h2 id='PortfolioText' data-aos='zoom-in'>
                        Raafi is constantly learning, experimenting, and making new projects.
                        Most of his recent projects are related to machine learning and artificial 
                        intelligence. A notable project of his is the recreation of FaceID. 
                        By using a one-shot learning approach, he created a model trained off 
                        of more than 10,000 pairs of images that can determine whether a pair 
                        of images contain the face of the same person or not. 
                        <br></br><br></br>
                        Raafi also has experience in NLP as seen in his Personal Assistant that can recognize 
                        human voice and perform tasks such as controlling music on spotify, playing 
                        a video on youtube, searching things up, and looking up something on Wikipedia. 
                        <br></br><br></br>
                        Another notable project is Planetarium Arcadium, an online orrery, built using the
                        PERN stack, where users can search up planets stored in a PostgreSQL database and 
                        visualize them on the screen.
                        <br></br><br></br>
                        Raafi's love of finance and investing has also led him to explore financial models. 
                        In one project, he explores portfolio allocation through the means of stochastic optimization.
                        This is built on the works of optimization, portfolio theory, and the Markowitz mean-variance model.
                    </h2>
                    <div class="gallery-image">
                        <a href='/codingProjects'>
                            <div class="img-box" data-aos='zoom-in'>
                                <img src='./Images/codingLogoPic.png' alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                    <p>Coding</p>
                                    <p>Tools, Games, and Demonstrations</p>
                                    </div>
                                </div> 
                            </div>
                        </a>
                        <a href='/CADProjects'>
                            <div class="img-box" data-aos='zoom-in' data-aos-delay='100'>
                                <img src='./Images/CADLogo.png' alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                    <p>CAD</p>
                                    <p>AutoCAD and <br></br> Fusion 360</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href='/PhotoshopProjects'>
                            <div class="img-box" data-aos='zoom-in' data-aos-delay='200'>
                                <img src='./Images/PSLogo.png' alt="" />
                                <div class="transparent-box">
                                    <div class="caption">
                                    <p>Photoshop</p>
                                    <p>Photoshop Creations <br></br> and Flyers</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDiv