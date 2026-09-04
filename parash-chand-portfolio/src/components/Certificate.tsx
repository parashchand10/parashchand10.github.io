import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// @ts-ignore: allow side-effect import of SCSS without type declarations
import 'react-vertical-timeline-component/style.min.css';
// @ts-ignore: allow side-effect import of SCSS without type declarations
import '../assets/styles/Timeline.scss';

function Certificate() {
  
  // Define your 6 certifications as an array of objects
  const certifications = [
    {
      title: "TCS iON Career Edge",
      subtitle: "Tata Consultancy Services",
      description: "Professional development program covering soft skills, communication, and IT fundamentals.",
      date: "2022"
    },
    {
      title: "Data Science Using Python",
      subtitle: "Online Certification",
      description: "Comprehensive course covering data science and machine learning fundamentals with Python.",
      date: "2022"
    },
    {
      title: "Microsoft AI Classroom Series",
      subtitle: "Microsoft Learn",
      description: "AI and machine learning fundamentals with Microsoft technologies and Azure.",
      date: "2021"
    },
    {
      title: "Python Programming & SQL",
      subtitle: "Coding Certification",
      description: "Core programming skills in Python and database management using SQL.",
      date: "2021"
    },
    {
      title: "Data Analytics with Power BI & Tableau",
      subtitle: "Business Intelligence",
      description: "Data visualization and business intelligence tools for actionable insights.",
      date: "2020"
    },
    {
      title: "Sinhgad Technico",
      subtitle: "Cyber Security & IT Quiz",
      description: "Participated in a cyber security seminar and an IT quiz competition organized by college.",
      date: "2019"
    }
  ];

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Certifications</h1>
        <VerticalTimeline>
          
          {/* Loop through each certification and create a separate element */}
          {certifications.map((cert, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              date={cert.date} // <--- This property is what displays the date
              iconStyle={{ background: '#5000ca', color: 'white' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{cert.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{cert.subtitle}</h4>
              <p>
                {cert.description}
              </p>
            </VerticalTimelineElement>
          ))}

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Certificate;