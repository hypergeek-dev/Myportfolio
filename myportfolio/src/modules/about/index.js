import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1>About Dennis Jensen</h1>
          <p>Hello! I'm Dennis Jensen, a Junior Full Stack Developer with an intriguing blend of experience and passion. My dedication to software development is fortified by my background in pedagogics, having completed a postgraduate degree in the field. This unique combination of education and technology fuels my drive, enabling me to approach software challenges with an educator's perspective. While my expertise lies in HTML, CSS, and Javascript, I've also dabbled in Python and have hands-on experience with frameworks like Bootstrap. My version control skills include both Git and Github.</p>

          <p>Beyond my professional endeavors, my life has been dotted with diverse experiences. I've been a care assistant, ensuring the emotional and physical well-being of clients. Presently, I am expanding my knowledge horizons at the Code Institute, Dublin, mastering the intricacies of Fullstack Software Development. On a personal note, I'm licensed to drive, am an active contributor to church audio/visuals, and am adept in English, Danish, and Swedish. As I look forward to further intertwining my educational insights with the dynamic world of software development, I am eager to connect and explore how we can create meaningful digital experiences together.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
