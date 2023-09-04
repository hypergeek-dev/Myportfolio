import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="Container">
      <Row className="Row">
        <Col xs={12} md={6} className="Col">
          <div className="about_card">
            <h2>About Me</h2>
            <p>Hi, there! I am a highly motivated Software Developer. Coming from a postgraduate in Pedagogics and a passion for IT and a strong desire to transition into a software development career. Seeking a challenging position as a Software Developer where I can leverage my educational background, teamwork skills, and problem-solving abilities to deliver innovative solutions to customers.</p>          </div>
          <div className="about_card">
            <h2>Education</h2>
            <p>Dec 2022 -  PresentCode Institute 	Dublin, Ireland (Remote) - Diploma in Fullstack Software Development</p>
            <p>July 2023 - Present</p><p>Lexicon – Malmö .NET Developer.</p>
            <p>Sept 2012 - March 2016</p><p>	University of Campus Kolding, Denmark – Postgraduate in pedagogics</p>
          </div>
        </Col>
        <Col xs={12} md={6} className="Col">
          <div className="about_card">
            <h2>Volunteer Work</h2>
            <p>Solidarity worker in Mozambique 2003</p>
            <p> Organizing and training volunteer teachers to educate families in Mozambique on topics such as hygiene, diseases, sanitation, and AIDS.</p>
            <p>Special needs teacher in Ghana 2015.</p>
            <p>Inclusive Learning Support: Assist students with special needs in an inclusive classroom setting, adapting lessons and providing personalized help.</p>
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default About;
