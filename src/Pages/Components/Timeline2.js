import React, {Fragment} from 'react';
import './Timeline2.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Timeline2() {

    return (
        <div class="timeline">
            <ul>

                <li>
                    <div class="date">
                        <h4>Jan. 2014</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Started Staten Island Technical High School</h3>
                        <p>Staten Island Technical High School is one of the nine specialialized high schools in New York City. Admission is based on the Specialized High School Admissions Test. Staten Island Tech is one of the most prestegious high schools in the country with a strong emphasis on STEM fields with required Science, Technology, Engineering, and Math classes <br></br><br></br> <h4>Extracurriculurs</h4>Wind Ensemble, Marching Band, Jazz Band, S!NG Band, Spring Musical Band, Spring Musical Stage Crew, Science Olympiad, Sustainability Club</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Sep. 2015</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Tutor @ Bright Leadership Academy</h3>
                        <p>Designed lesson plans and taught Math, English, and Science to students of grades 3-8.
                            Prepared middle schoolers for the Specialized High Schools Admissions Test (SHSAT). Ended June 2017 and spent a total of 1 year and 10 months.</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Jun. 2017</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Sales Associate @ Five Eleven Deli and Grocery</h3>
                        <p>Entrusted to mediate business-bank transactions. Ended August 2021 and spent a total of 4 years and 3 months.</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Jul. 2018</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Graduated Staten Island Technical High School</h3>
                        <p>Graduated with an Advanced Regents Diploma</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Aug. 2018</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Started CUNY Hunter College</h3>
                        <p>Major GPA: 3.75, Cumulative GPA: 3.696<br></br>
                            Yalow Honors Scholar, Dean's List<br></br>
                            BA/MA Mathematics Degree<br></br>
                            Master’s: Statistics & Applied Mathematics<br></br>
                            Bachelor’s: Mathematics<br></br>
                            Minor: Computer Science<br></br>
                            <br></br> <h4>Coursework</h4>
                            Data Science & Machine Learning, Adv. Machine Learning/Deep Learning/NLP, Numerical Methods, 
                            Stochastic Optimization, Modeling & Visualization, Adv. Probability Theory, Measure Theory, Linear Algebra, 
                            Real Analysis, Ordinary Differential Equations, Calculus 1-3, Topology, Abstract Algebra, Software Analysis, 
                            SQL Programming, Discrete Probability, Applied Statistics, etc.<br></br>
                            <br></br> <h4>Extracurriculurs</h4>
                            South Asian Culture Club President (2021-2022)<br></br>
                            South Asian Culture Club E-Board Member (2020-2021)<br></br>
                            Hunter Symphony Trombonist (2018-2019)</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Nov. 2021</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Software Engineer @ Convertli</h3>
                        <p><b>Tech Stack: React, Node, Express, GraphQL, TypeScript</b><br></br>
                            ● Produced Shopify apps aimed at increasing and tracking customer conversion rate<br></br>
                            ● Created and maintained product sales and views NoSQL Firebase databases<br></br>
                            ● Designed the data analytics portions of the merchant facing admin panel<br></br><br></br>
                            Ended May 2022 and spent a total of 7 months.</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Jun. 2022</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Data Science Intern @ WebMD</h3>
                        <p><b>Tech Stack: Vertica, GCP Big Query, GCP AutoML, Scikit-Learn, JupyterLab, Tableau</b><br></br>
                            ● Developed a medical doctor verification system and a nurse verification system using Google Cloud Provider AutoML Vision and more than 30,000 data points provided by data scraping contractors<br></br>
                            ● Provided insights for clients by determining which doctors were the best candidates for drug advertisement through exploratory data analysis, linear regression, and k-nearest neighbors regression<br></br>
                            ● Created lookalike audiences using k-means clustering using the elbow curve method to find the optimal number of clusters, visualized results in Tableau to clearly explain findings to team members<br></br><br></br>
                            Ended August 2022 and spent a total of 3 months.</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Dec. 2022</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Graduated CUNY Hunter College</h3>
                        <p>Major GPA: 3.75, Cumulative GPA: 3.696<br></br>
                            Yalow Honors Scholar, Dean's List<br></br>
                            BA/MA Mathematics Degree<br></br>
                            Master’s: Statistics & Applied Mathematics<br></br>
                            Bachelor’s: Mathematics<br></br>
                            Minor: Computer Science</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Near Future</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3><select name="position" id="position" required>
                                <option value="" disabled selected hidden>Position</option>
                                <option value="ML Engineer">ML Engineer</option>
                                <option value="Data Scientist">Data Scientist</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="AI Researcher">AI Researcher</option>
                            </select> @ <input type="text" id="company" name="company" placeholder='your company'/></h3>
                        <p>High achiever<br></br>
                            Natural leader<br></br>
                            Frequent contributer<br></br>
                            Efficient worker</p>
                    </div>
                </li>

            </ul>
        </div>
      
    )
}

export default Timeline2