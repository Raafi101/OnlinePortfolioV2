import React, {Fragment} from 'react';
import './ProjectEvenCS.css';

function PlanetariumArcadium() {

    return (
        <div id='wholeProjectEvenCS'>
            <div id='ProjectEvenCS'>
                <h1 id='ProjectEvenCSTitle'>Planetarium Arcadium</h1>
                <div id='ProjectEvenCSSummary'>
                    <h2 id='ProjectEvenCSText'>
                        A full (PERN) stack planetary system visualizer web 
                        app created by the "AstroNerds", a team of 4 people 
                        in their CS minor capstone class. The data was obtained 
                        from the NASA Exoplanet Archive and stored in a PostgreSQL 
                        database served through an Express server with more than 
                        3000 items. Front end built using JavaScript, React.js, 
                        and Node.js. The project is hosted in an AWS EC2 instance 
                        on a Ubuntu server. Users are able to search up, visualize, 
                        and learn about distant stars and orbiting planets.
                        <br></br><br></br>
                        What I Learned: How to connect to PostgreSQL databases, 
                        how to deploy using Amazon Web Services (AWS) Elastic Compute 
                        Cloud (EC2), 
                        how to build a full-stack project,
                        how to preprocess data, 
                        and the basics of Ubuntu.
                    </h2>
                    <div id='vidDiv'>
                        <video id='ProjectEvenCSVid' height='168px' controls>
                            <source src='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/PlanetVid.mp4#t=0.1' type='video/mp4'/>
                        </video>
                    </div>
                    <a href='https://planetariumarcadium.com/' target='_blank'>
                        <button id='projectBTN' class="button">
                            <span>
                                <i class="fas fa-rocket"/>
                                &nbsp;Planetarium Arcadium
                            </span>
                        </button>
                    </a>
                    <a href='https://github.com/Raafi101/PlanetariumArcadium' target='_blank'>
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

export default PlanetariumArcadium