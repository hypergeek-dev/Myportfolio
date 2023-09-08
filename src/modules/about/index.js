import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'react-bootstrap';

// SkillCard Component for rendering individual skills
const SkillCard = ({ skill }) => (
  <div className="d-flex flex-column align-items-center text-center mb-3">
    <img src={`./icons/${skill.icon}`} alt={skill.title} className="mb-2" />
    <p className="mb-0">{skill.title}</p>
  </div>
);

SkillCard.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

const About = () => {
  // List of skills and corresponding icons
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
    { title: 'C#', icon: 'icons8-c-sharp-64.png' },
    { title: 'Git', icon: 'icons8-merge-git-100.png' },
  ];

  return (
    <section className="d-flex flex-column custom-top-padding align-items-center min-vh-100">
      <Row className="justify-content-center">
        <Col xs={10} md={4}>
          <Card className="bg-dark text-white mb-2 mt-5 p-3 shadow">
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              Hi, there!<br />I am a highly motivated Software Developer with a postgraduate degree in Pedagogics. I am a nerd at heart, therefore I decided to transition into a software development career. I am seeking a challenging position where I can both use my pedagogical background for teamwork skills and understanding customer needs. I love being creative with concepts and thinking outside the box.
            </Card.Text>
          </Card>
          <Card className="bg-dark text-white mb-2 p-3 shadow">
            <Card.Title>Education</Card.Title>
            <Card.Text>
              <strong>Code Institute, Dublin, Ireland (Remote)</strong><br />
              Dec 2022 - Present<br />
              Diploma in Fullstack Software Development
            </Card.Text>
            <Card.Text>
              <strong>Lexicon – Malmö</strong><br />
              July 2023 - Present<br />
              .NET Developer
            </Card.Text>
            <Card.Text>
              <strong>University of Campus Kolding, Denmark</strong><br />
              Sept 2012 - March 2016<br />
              Postgraduate in Pedagogics
            </Card.Text>
          </Card>
        </Col>
        <Col xs={10} md={6}>
          <Card className="bg-dark text-white mb-2 mt-5 p-3 shadow">
            <Card.Title>Volunteer Work</Card.Title>
            <Card.Text>
              <strong>Solidarity worker in Mozambique</strong><br />
              2003<br />
              Organizing and training volunteer teachers to educate families on topics such as hygiene, diseases, sanitation, and AIDS.
            </Card.Text>
            <Card.Text>
              <strong>Special needs teacher in Ghana</strong><br />
              2015<br />
              Inclusive Learning Support: Assist students with special needs in an inclusive classroom setting, adapting lessons and providing personalized help.
            </Card.Text>
          </Card>
          <Card className="bg-dark text-white mb-4 p-3 shadow">
            <Card.Title>Skills</Card.Title>
            <Card.Body className="d-flex flex-wrap justify-content-around">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default About;
