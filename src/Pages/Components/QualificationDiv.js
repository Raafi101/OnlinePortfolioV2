import React, {Fragment} from 'react';
import './QualificationDiv.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function QualificationDiv() {

    return (
        <div id='wholeQualDiv'>
            <div id='QualificationDiv'>
                <h1 id='qualificationTitle'>Raafi's Qualifications</h1>
                <div id='qualificationSummary'>
                    <h2 id='qualificationText' data-aos='fade-right' data-aos-delay='200' data-aos-duration='500'>
                        Raafi is well versed in utilizing his technical knowledge to create effective AI tools. He follows best practices and is able to work within
                        the constraints of industry regulations, especially when it comes to sensitive data and personally identifiable information (PII). 
                        He remained HIPAA compliant during his time at WebMD. At Fiserv, he adhered to banking and government regulations
                        when it comes to the credit card and banking industry. Raafi understands what is required from and what questions might come from model validators.
                        <br></br><br></br>
                        Raafi has a Master's in Statistics & Applied Mathematics and a Bachelor's in Mathematics with a minor in Computer Science. He graduated with a GPA of 3.75.
                        He is highly skilled in Python and SQL, and is very familiar with the most useful and most commonly used python packages such as:
                         Scikit-Learn, XGBoost, TensorFlow, Optuna, Matplotlib, Pandas, OpenCV, NLTK, and more! 
                        Amazon Web Services is Raafi's favorite cloud provider. He has extensive work and personal experience with AWS and the tools within it.
                        His Computer Science knowledge extends into the world of software engineering with his abilty to use 
                        JavaScript and C++. This website was made using Javascript and React!
                        <br></br><br></br>
                        Raafi can convey ideas in English, Urdu, Hindi, and Russian. 
                        He possesses knowledge on computer hardware with hands-on computer building 
                        experience. He is artistic when it comes to music, design, and film making.
                        See his LinkedIn, GitHub, resume, and transcript below.
                    </h2>
                    <div id='qualBTNs'>
                        <a href='/qualifications'><button class="button" data-aos='fade-left'><span>Read More </span></button></a>
                        <a href='https://github.com/Raafi101' target='_blank'><button class="button" data-aos='fade-left' data-aos-delay='150'><span><i class="fab fa-github"></i> GitHub </span></button></a>
                        <a href='https://www.linkedin.com/in/raafi101/' target='_blank'><button class="button" data-aos='fade-left' data-aos-delay='200'><span><i class="fab fa-linkedin"></i> LinkedIn </span></button></a>
                        <a href='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/Resume102724.pdf' target='_blank'><button class="button" data-aos='fade-left' data-aos-delay='200'><span><i class="fas fa-id-card"></i> Resume </span></button></a>
                        <a href='https://portfoliostorage.s3.us-east-2.amazonaws.com/Images/transcript122722.pdf' target='_blank'><button class="button" data-aos='fade-left' data-aos-delay='200'><span><i class="fas fa-file"></i> Transcript </span></button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QualificationDiv