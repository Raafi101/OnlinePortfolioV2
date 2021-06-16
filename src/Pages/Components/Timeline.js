import React, {Fragment} from 'react';
import './Timeline.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Timeline() {

    return (
        <div id='wholeTimelineDiv'>

            <meta name="viewport" content="width=device-width, initial-scale = 1.0,maximum-scale=1.0, user-scalable=no" /> 

            <div class='Timeline'>

                <ul>
                    <li class='Entry'>
                        <div class="content" data-aos='zoom-in'>
                            <h3>Started at Staten Island Technical High School</h3>
                            <p>Staten Island Technical High School is one of the 
                                nine specialialized high schools in New York City. 
                                Admission is based on the Specialized High School 
                                Admissions Test. Staten Island Tech is one of the 
                                most prestegious high schools in the country with 
                                a strong emphasis on STEM fields with required 
                                Science, Technology, Engineering, and Math classes</p>
                            <h3>Extracurriculurs</h3>
                            <p>Wind Ensemble, Marching Band, Jazz Band, 
                                S!NG Band, Spring Musical Band, Spring 
                                Musical Stage Crew, Science Olympiad, 
                                Sustainability Club</p>
                        </div>
                        <div class='time' data-aos='zoom-in'>
                            <h4>September 2014</h4>
                        </div>
                    </li>

                    <li class='Entry'>
                        <div class="content" data-aos='zoom-in'>
                            <h3>Started tutoring at Bright Leadership 
                                Academy</h3>
                            <p>Designed lesson plans and taught Math, 
                                English, and Science to students of 
                                grades 3-8. <br/>
                                Prepared middle schoolers for 
                                the Specialized High Schools Admissions 
                                Test (SHSAT)</p>
                        </div>
                        <div class='time' data-aos='zoom-in'>
                            <h4>September 2015</h4>
                        </div>
                    </li>

                    <li class='Entry'>
                        <div class="content" data-aos='zoom-in'>
                            <h3>Started working as a Sales Associate 
                                as Five Eleven Deli and Grocery</h3>
                            <p>Entrusted to mediate business-bank 
                                transactions</p>
                        </div>
                        <div id='dumbO' class='time' data-aos='zoom-in'>
                            <h4>June 2017</h4>
                        </div>
                    </li>

                    <li class='Entry'>
                        <div class="content" data-aos='zoom-in'>
                            <h3>Graduated Staten Island Technical High School</h3>
                            <p>Graduated with an Advanced Regents Diploma
                            </p>
                        </div>
                        <div id='dumbE' class='time' data-aos='zoom-in'>
                            <h4>July 2018</h4>
                        </div>
                    </li>

                    <li class='Entry'>
                        <div class="content" data-aos='zoom-in'>
                            <h3>Started CUNY Hunter College</h3>
                            <p>GPA: 3.667 <br/>
                                Yalow Honors Scholar <br/>
                                BA/MA Mathematics Degree <br/>
                                Bachelor’s: Mathematics <br/>
                                Minor: Computer Science <br/>
                                Master’s: Applied Mathematics <br/>
                                Coursework: Calculus 1-3, Linear Algebra, Abstract Algebra, Numerical Methods, Real Analysis, Functional Analysis, Software Analysis, Statistics, etc.
                            </p>
                            <h3>Extracurriculurs</h3>
                            <p>South Asian Culture Club (SACC) <br/>
                                E-Board Member (2020-Current) <br/>
                                Hunter Symphony <br/>
                                Trombonist (2018-2019)</p>
                        </div>
                        <div id='dumbO' class='time' data-aos='zoom-in'>
                            <h4>August 2018</h4>
                        </div>
                    </li>

                    <li class='Entry'>
                        <div class="content" data-aos='zoom-in'>
                            <h3>Graduated CUNY Hunter College</h3>
                            <p>BA/MA Mathematics Degree.
                            </p>
                        </div>
                        <div id='dumbO' class='time' data-aos='zoom-in'>
                            <h4>~06/22 - 01/23</h4>
                        </div>
                    </li>

                    <li class='Entry'>
                        <div class="content" data-aos='zoom-in'>
                            <h3>Started Career at *Insert your company here*</h3>
                            <p>Data Scientist <br/> Artificial Intelligence Reasercher <br/> Software Engineer <br/>
                                High achiever <br/>
                                Contributed towards the company <br/>
                                Brought success to the company
                            </p>
                        </div>
                        <div id='dumbO' class='time' data-aos='zoom-in'>
                            <h4>Post Graduation</h4>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Timeline