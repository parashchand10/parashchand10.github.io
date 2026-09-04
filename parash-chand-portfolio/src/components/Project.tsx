import React from "react";
// You will need to add these images to src/assets/images/
import mock01 from '../assets/images/mock01.png'; // Smart Inventory
import mock02 from '../assets/images/mock02.png'; // Unemployment Analysis
import mock03 from '../assets/images/mock03.png'; // Lead Classification
import mock04 from '../assets/images/mock04.png'; // Heart Disease (from your previous code)
import mock05 from '../assets/images/mock05.png'; // Cat-Dog CNN
import mock06 from '../assets/images/mock06.png'; // Titanic
// @ts-ignore: allow side-effect import of SCSS without type declarations
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <a href="https://github.com/parashchand10" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="Smart Inventory" width="100%"/></a>
                <a href="https://github.com/parashchand10" target="_blank" rel="noreferrer"><h2>Smart Inventory Demand Prediction</h2></a>
                <p>Built an end-to-end ML pipeline for retail demand forecasting. Trained 7+ regression models (Linear, SVR, XGBoost) using GridSearchCV, achieving an R² score of 0.70 and deploying a Bagging Decision Tree model.</p>
            </div>

            <div className="project">
                <a href="https://github.com/parashchand10" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="Unemployment Analysis" width="100%"/></a>
                <a href="https://github.com/parashchand10" target="_blank" rel="noreferrer"><h2>Unemployment Analysis in India</h2></a>
                <p>Analyzed 40,000+ unemployment records using Python and statistical analysis. Applied trend detection and modeling to generate labor market growth insights and created visual reports using Matplotlib and Seaborn.</p>
            </div>

            <div className="project">
                <a href="https://github.com/parashchand10" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="Lead Classification" width="100%"/></a>
                <a href="https://github.com/parashchand10" target="_blank" rel="noreferrer"><h2>Intelligent Lead Classification System</h2></a>
                <p>Developed an AI-driven lead classification system using n8n automation. Built classification logic to categorize leads (Hot, Warm, Cold) and automated follow-up communication workflows to improve response time.</p>
            </div>

            <div className="project">
                <a href="https://huggingface.co/spaces/jray10/Heart-Disease-Prediction" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="Heart Disease" width="100%"/></a>
                <a href="https://huggingface.co/spaces/jray10/Heart-Disease-Prediction" target="_blank" rel="noreferrer"><h2>Heart Disease Prediction</h2></a>
                <p>Developed a machine learning web application to predict heart disease risk using patient health parameters. Built with Python and Scikit-Learn, and deployed on Hugging Face Spaces.</p>
            </div>
            
            <div className="project">
                <a href="https://github.com/parashchand10/CNN-Cat-and-Dog-Classification" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="Cat Dog CNN" width="100%"/></a>
                <a href="https://github.com/parashchand10/CNN-Cat-and-Dog-Classification" target="_blank" rel="noreferrer"><h2>CNN Cat and Dog Classification</h2></a>
                <p>Implemented a Convolutional Neural Network (CNN) from scratch using TensorFlow/Keras to accurately classify images of cats and dogs.</p>
            </div>

            <div className="project">
                <a href="https://titanicsurvivalmlapp-skkndwtrym34w6h8tzftey.streamlit.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="Titanic Survival" width="100%"/></a>
                <a href="https://titanicsurvivalmlapp-skkndwtrym34w6h8tzftey.streamlit.app/" target="_blank" rel="noreferrer"><h2>Titanic Survival ML App</h2></a>
                <p>Built and deployed an interactive machine learning application using Streamlit and Python to predict passenger survival outcomes from the Titanic dataset.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;