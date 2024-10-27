import React, {Fragment} from 'react';
import './Timeline2.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Timeline2() {

    const start_fiserv = new Date("2023-06-01");
    const curr_dt = new Date();
    const date_diff = curr_dt.getTime() - start_fiserv.getTime();
    const years = Math.floor(date_diff / (1000 * 60 * 60 * 24 * 365))
    const months = Math.floor(date_diff / (1000 * 60 * 60 * 24 * 30)) % 12
    let year_string = 'year'
    let month_string = 'month'

    if (years > 1) {
        year_string = 'years';
    };

    if (months > 1) {
        month_string = 'months';
    };

    console.log(date_diff);

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
                        <p>● Designed lesson plans tailored to students needs<br></br>
                        ● Taught Math, English, and Science to students of grades 3-8<br></br>
                        ● Prepared middle schoolers for the Specialized High School Admissions Test (SHSAT)<br></br>
                            <br></br>Ended: June 2017 
                            <br></br>Time Spent: 1 year and 10 months</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Jun. 2017</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Sales Associate @ Five Eleven Deli and Grocery</h3>
                        <p>● Managed the cash register and customer interactions<br></br>
                        ● Entrusted to mediate business-bank transactions<br></br>
                            <br></br>Ended: August 2021
                            <br></br>Time Spent: 4 years and 3 months</p>
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
                        <p><b>Tech Stack: React, Node, Express, GraphQL, TypeScript</b><br></br><br></br>
                        Within this job role, I implemented a meticulous approach to creating and maintaining product sales 
                        and views NoSQL Firebase databases.<br></br><br></br>
                        
                        I was also responsible for allowing users to track conversions and sales by designing merchant-facing 
                        data analytics panels through best engineering practices.<br></br><br></br>

                        Here are a few highlighted contributions:<br></br>
                        ● Succeeded in increasing and tracking customer conversion rate by producing Shopify apps.
                        ● Developed database schemas to illustrate data flow, usage, and acquisition in a clear manner<br></br>
                            <br></br>Ended: May 2022
                            <br></br>Time Spent: 7 months</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Jun. 2022</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Data Science Intern @ WebMD</h3>
                        <p><b>Tech Stack: Vertica, GCP Big Query, GCP AutoML, Scikit-Learn, JupyterLab, Tableau</b><br></br><br></br>
                        As an Intern, I provided insights for clients by determining the best doctors for drug advertisement through 
                        linear regression, exploratory data analysis, and k-nearest neighbors regression.<br></br><br></br>

                        My abilities comprised developing lookalike audiences using k-means clustering and the elbow curve method to 
                        find an optimal number of clusters as well as visualizing the results in Tableau in order to clearly explain 
                        findings to team members. Adhered to HIPAA privacy standards while handling data.<br></br><br></br>

                        One of my key achievements:<br></br>
                        ● Devised a medical doctor and nurse verification system by utilizing Google Cloud Platform and more than 
                        30,000 data points provided by data scraping contractors.<br></br>
                            <br></br>Ended: August 2022
                            <br></br>Time Spent: 3 months</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Dec. 2022</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Graduated CUNY Hunter College</h3>
                        <p>Major GPA: 3.75, Cumulative GPA: 3.7<br></br>
                            Yalow Honors Scholar, Dean's List<br></br>
                            Master’s: Statistics & Applied Mathematics<br></br>
                            Bachelor’s: Mathematics<br></br>
                            Minor: Computer Science</p>
                    </div>
                </li>

                <li>
                    <div class="date">
                        <h4>Jun. 2023</h4>
                    </div>
                    <div class="point"></div>
                    <div class="content">
                        <h3>Data Scientist @ Fiserv</h3>
                        <p><b>Tech Stack: AWS SageMaker, AWS S3, AWS Lambda, Palantir Foundry, FICO Blaze Advisor, JupyterLab, Snowflake, Scikit-Learn, SAS, Excel, Power BI</b><br></br>
                            ● Led the development of an XGBoost model used to prioritize and automate the decisioning of fraud and credit alerts. Significantly reduced analyst alert queue volume (more than $100,000 worth of work annually)<br></br>
                            ● Supported the migration from legacy systems (FICO Blaze Advisor) to modern machine learning environments (AWS)<br></br>
                            ● Created and maintained industry based statistics on merchant processing<br></br>
                            ● Crafted new rule based alerts to increase alert coverage<br></br>
                            ● Augmented the standing merchant transaction limit assigning logic to decrease alert volume and increase bad capture rate<br></br>
                            <br></br>Ongoing
                            <br></br>Time Spent to Date:&nbsp;
                            {years} {year_string} and {months} {month_string}
                            </p>
                    </div>
                </li>

            </ul>
        </div>
      
    )
}

export default Timeline2