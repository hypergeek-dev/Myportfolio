import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about_container">
      <Row className="Row">
        <Col xs={12} md={6} className="Col">
          <div className="about_card">
            <h2>About Me</h2>
            <p>
              Hi, there!<br />I am a highly motivated Software Developer with a postgraduate degree in Pedagogics. I have a passion for IT and a strong desire to transition into a software development career. I am seeking a challenging position where I can leverage my educational background, teamwork skills, and problem-solving abilities to deliver innovative solutions to customers.
            </p>
          </div>
          <div className="about_card">
            <h2>Education</h2>
            <p>
              <strong>Code Institute, Dublin, Ireland (Remote)</strong><br />
              Dec 2022 - Present<br />
              Diploma in Fullstack Software Development
            </p>
            <p>
              <strong>Lexicon – Malmö</strong><br />
              July 2023 - Present<br />
              .NET Developer
            </p>
            <p>
              <strong>University of Campus Kolding, Denmark</strong><br />
              Sept 2012 - March 2016<br />
              Postgraduate in Pedagogics
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} className="Col">
          <div className="about_card">
            <h2>Volunteer Work</h2>
            <p>
              <strong>Solidarity worker in Mozambique</strong><br />
              2003<br />
              Organizing and training volunteer teachers to educate families on topics such as hygiene, diseases, sanitation, and AIDS.
            </p>
            <p>
              <strong>Special needs teacher in Ghana</strong><br />
              2015<br />
              Inclusive Learning Support: Assist students with special needs in an inclusive classroom setting, adapting lessons and providing personalized help.
            </p>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default About;
