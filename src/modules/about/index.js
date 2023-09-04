import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  // eslint-disable-next-line
  {/* Define an array of skills with their corresponding icons */}
  const skills = [
    { title: 'HTML', icon: 'icons8-html-100.png' },
    { title: 'CSS', icon: 'icons8-css-100.png' },
    { title: 'JavaScript', icon: 'icons8-javascript-100.png' },
    { title: 'React', icon: 'icons8-react-100.png' },
    { title: 'Bootstrap', icon: 'icons8-bootstrap-100.png' },
    { title: 'Django', icon: 'icons8-django-100.png' },
    { title: 'Python', icon: 'icons8-python-100.png' },
    { title: 'SQL', icon: 'icons8-sql-100.png' },
    { title: '.NET Framework', icon: 'icons8-.net-framework-100.png' },
    { title: 'ASP', icon: 'icons8-asp-100.png' },
    { title: 'Azure', icon: 'icons8-azure-100.png' },
    { title: 'C++', icon: 'icons8-c++-100.png' },
    { title: 'Git', icon: 'icons8-merge-git-100.png' },
  ];

  return (
    <Container className="about_container">
      <Row className="Row">
        {/* Left column for About Me and Education */}
        <Col xs={12} md={6} className="Col">
          <div className="about_card">
            <h2>About Me</h2>
            <p>
              {/* About Me content */}
            </p>
          </div>
          <div className="about_card">
            <h2>Education</h2>
            <p>
              {/* Education details */}
            </p>
          </div>
        </Col>
        {/* Right column for Volunteer Work and Skills */}
        <Col xs={12} md={6} className="Col">
          <div className="about_card">
            <h2>Volunteer Work</h2>
            <p>
              {/* Volunteer work details */}
            </p>
          </div>
          <div className="about_card">
            <h2>Skills</h2>
            <div className="skills_container">
              {/* Map through the skills array and display each skill */}
              {skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <img src={`./icons/${skill.icon}`} alt={skill.title} />
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
