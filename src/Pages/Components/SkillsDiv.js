import React, {Fragment} from 'react';
import './SkillsDiv.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function SkillsDiv() {

    return (
        <div id='wholeSkillsDiv'>
            <div id='SkillsDiv'>
                <h1 id='SkillsTitle'>Technical Skills</h1>
                <div id='SkillsSummary'>

                    <h1 id='SkillsSub'>Programming Languages</h1>

                    <div id='bloc'>
                        <div id='langName' data-aos='fade-right'>
                            <h2 id='SkillsText'><i class="fab fa-python"></i> Python</h2>
                        </div>
                        <div id='Rating' data-aos='fade-left'>
                            <h4>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                            </h4>
                        </div>
                    </div>

                    <div id='bloc'>
                        <div id='langName' data-aos='fade-right'>
                            <h2 id='SkillsText'><i class="fas fa-database"></i> SQL</h2>
                        </div>
                        <div id='Rating' data-aos='fade-left'>
                            <h4>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i>
                            </h4>
                        </div>
                    </div>

                    <div id='bloc'>
                        <div id='langName' data-aos='fade-right'>
                            <h2 id='SkillsText'><i class="fab fa-js"></i> JavaScript/<i class="fab fa-html5"></i> HTML/<i class="fab fa-css3-alt"></i> CSS</h2>
                        </div>
                        <div id='Rating' data-aos='fade-left'>
                            <h4>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i>
                            </h4>
                        </div>
                    </div>

                    <div id='bloc'>
                        <div id='langName' data-aos='fade-right'>
                            <h2 id='SkillsText'><i class="fas fa-code"></i> C++</h2>
                        </div>
                        <div id='Rating' data-aos='fade-left'>
                            <h4>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i>
                            </h4>
                        </div>
                    </div>

                    <h1 id='SkillsSub'>Spoken Languages</h1>

                    <div id='bloc'>
                        <div id='langName' data-aos='fade-right'>
                            <h2 id='SkillsText'>English</h2>
                        </div>
                        <div id='Rating' data-aos='fade-left'>
                            <h4>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                            </h4>
                        </div>
                    </div>

                    <div id='bloc'>
                        <div id='langName' data-aos='fade-right'>
                            <h2 id='SkillsText'>Urdu/Hindi</h2>
                        </div>
                        <div id='Rating' data-aos='fade-left'>
                            <h4>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i>
                            </h4>
                        </div>
                    </div>
                    
                    <div id='bloc'>
                        <div id='langName' data-aos='fade-right'>
                            <h2 id='SkillsText'>Russian</h2>
                        </div>
                        <div id='Rating' data-aos='fade-left'>
                            <h4>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='Y' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i> <n/>
                                <i id='N' class="fas fa-square"></i>
                            </h4>
                        </div>
                    </div>

                    <h1 id='SkillsSub'>Technologies</h1>

                    <div id='bloc'>
                        <div id='techList'>
                            <h2 id='TechText' data-aos='fade-right'>Tensorflow,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Anaconda,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Jupyter,</h2>
                            <h2 id='TechText' data-aos='fade-right'>Pandas,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Scikit-Learn,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Optuna,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>SciPy,</h2>
                            <h2 id='TechText' data-aos='fade-right'>OpenCV,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>NLTK,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>PyMC3,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Tableau,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>MySQL,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>PostgreSQL,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Vertica,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Firebase,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>DbVisualizer,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>React.js,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Node.js,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Express.js,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>AWS SageMaker,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>AWS Lambda,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>AWS EC2,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>AWS Amplify,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>AWS RDS,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>AWS S3,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>GCP AutoML Vison,</h2>
                            <h2 id='TechText' data-aos='fade-right'>GCP Tables,</h2>
                            <h2 id='TechText' data-aos='fade-right'>GCP BigQuery,</h2>
                            <h2 id='TechText' data-aos='fade-right'>GCP Vertex AI,</h2>
                            <h2 id='TechText' data-aos='fade-right'>GCP Cloud Storage,</h2>
                            <h2 id='TechText' data-aos='fade-right'>Snowflake,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Palantir Foundry,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Linux,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Jira,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Confluence,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Asana,</h2> 
                            <h2 id='TechText' data-aos='fade-right'>Visual Studio Code</h2>
                        </div>
                    </div>

                    <div id='bloc'>
                        <h1 id='SkillsSub'>Other Skills</h1>
                        <div id='miscList'>
                            <h2 id='MiscText' data-aos='fade-left'>AutoCAD Certified with training in Revit and Fusion360.</h2>
                            <h2 id='MiscText' data-aos='fade-left'>Experienced computer builder.</h2>
                            <h2 id='MiscText' data-aos='fade-left'>Plays the trombone, baritone, and guitar.</h2>
                            <h2 id='MiscText' data-aos='fade-left'>Well-versed in Photoshop.</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SkillsDiv