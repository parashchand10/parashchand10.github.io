import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faBrain, faChartBar, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
// @ts-ignore: allow side-effect import of SCSS without type declarations https://github.com/yujisatojr/react-portfolio-template
import '../assets/styles/Expertise.scss';

const programmingDatabaseLabels = [
    "Python", "Flask API", "PostgreSQL", "SQL", "Data Structures and Algorithms"
];

const dataScienceLabels = [
    "Scikit-learn", "NumPy", "Pandas", "Machine Learning", "Deep Learning", "Statistical Analysis", "Hyperparameter Tuning", "Ensemble Learning"
];

const dataVizLabels = [
    "Data Cleaning", "Data Visualization", "Matplotlib", "Seaborn", "Exploratory Data Analysis"
];

const toolsAutomationLabels = [
    "Git", "GitHub", "n8n Automation", "Streamlit / Flask Deployment"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                {/* 1. Programming & Databases */}
                <div className="skill">
                    <FontAwesomeIcon icon={faTerminal} size="3x"/>
                    <h3>Programming & Databases</h3>
                    <p>Developing backend logic, building APIs, and managing relational databases efficiently.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {programmingDatabaseLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 2. Data Science & Machine Learning */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Data Science & Machine Learning</h3>
                    <p>Building predictive models, training deep learning algorithms, and tuning performance metrics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {dataScienceLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 3. Data Visualization & EDA */}
                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Data Visualization & EDA</h3>
                    <p>Uncovering patterns, cleaning datasets, and designing informative visual plots.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {dataVizLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 4. Tools & Automation */}
                <div className="skill">
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    <h3>Tools & Automation</h3>
                    <p>Streamlining version control, workflow automation, and application deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {toolsAutomationLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;