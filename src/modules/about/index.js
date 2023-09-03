import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../modules.css';

const About = () => {
  return (
    <Container className="Container">
      <Row className="Row">
        <Col xs={12} md={6} className="Col">
          <div className="text_wrapper">
            <h1>About me</h1>
            <p>Hey there! I'm Dennis Jensen, and I'm a Junior Full Stack Developer who's really into both tech and teaching. I've got a postgrad degree in education, which gives me a unique way of tackling coding challenges. I'm good with HTML, CSS, and Javascript, but I've also played around with Python and know my way around Bootstrap. I'm familiar with Git and Github for version control too.</p>
            <p>Outside of work, I've done a bunch of different things. I've worked as a care assistant, looking after people's well-being. Right now, I'm leveling up my coding skills at the Code Institute in Dublin. Just so you know, I can drive, I help out with the tech stuff at my church, and I can speak English, Danish, and Swedish. I'm excited about blending my background in education with my love for coding, and I'd love to chat about how we can make some really cool digital stuff together.</p>
            </div>
        </Col>
        <Col xs={12} md={6} className="Col">
          <div className="img_wrapper">
            <img src="https://binarymonk.online/aboutme.webp" alt="Dennis Jensen" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;





