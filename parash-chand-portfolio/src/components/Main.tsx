import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
// @ts-ignore: allow side-effect import of SCSS without type declarations
import '../assets/styles/Main.scss';
import avatarImage from '../assets/images/image.png';

function Main() {
  return (
    <div className="container" id="home">
      <section className="about-section home">
        <div className="image-wrapper home-img">
          <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="content home-content">
          <h1>Hi, <span>Parash Chand</span></h1>
          <h3 className="typing-text">I'm a Aspiring<span></span></h3>
          <p>
            Specializing in Python, Deep Learning, Django, and modern app & NLP solutions.
          </p>
          <div className="social_icons social-icons">
            <a href="https://github.com/parashchand10" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/parash-chand-321b23290/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.kaggle.com/parashchand" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faKaggle} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;