import React from 'react';
import './portfolio.css';


const soloProjects = [
  { imageUrl: 'https://binarymonk.online/screenshots/mindful_zensations.webp', description: 'This is my first project since I started my journey into webdesign. My goal was to keep it pure HTML and CSS, but also adapt my past skills in pedagogics and focus on accesibility in terms of using simple english and a colorpalette aimed at colorblindness plus a font created to aid people with dyslexia.' },
  { imageUrl: 'https://binarymonk.online/screenshots/speakers_timer.webp', description: 'My first Javascript project. As such, it is just a timer with virtual meetings in mind. The way this became interesting for me was in the testing, where I added safeguarding against breaking of the code' },
  { imageUrl: 'https://binarymonk.online/screenshots/cipher_forge.webp', description: 'Here I had fun with python and my password generator. I took a formular on a popular pseudo-random math formular and changed it into algorithm. I then added random generated words at the beginning and end of each password based on a predetermined list. The words from the list is scraped from websites. I also added lists of most popular passwords to test the security of the users password.' },
  { imageUrl: 'https://binarymonk.online/screenshots/my_cakery_shop.webp', description: 'This is again HTML and CSS but shows where I am at after 8 months of studying code. It is basically a webshop. The responsiveness of this website made this project interesting. Going from showing one product on smaller phones to several the bigger the screen. ' },


];

const colloquialProjects = [
  { imageUrl: 'https://binarymonk.online/screenshots/jingle_bingle.webp', description: 'After 10 days of studying webdesign I participated in a hackaton. I was predominantly occupied with the conceptual side of it but we ended up winning amongst all students participating. I liked this project because it made me feel at home in this career and found that one of my strengths is UX.' },
  { imageUrl: 'https://binarymonk.online/screenshots/the_leafblowers.webp', description: 'This project is very special to me, because the quality of the teamwork could be seen in the final result. ' },
  { imageUrl: 'https://binarymonk.online/screenshots/dara_planner.webp', description: 'This product also has a special side to it being the functionality is useful and on the conceptual side especially title and background. ' },

];


const Portfolio = () => {
  return (
    <>
      <div className="d-flex p-2">
        <h1>Solo projects</h1>
      </div>
      {soloProjects.map((project, index) => (
        <div key={index} className="project-container">
          <div className="image-wrapper">
            <img src={project.imageUrl} alt={`Solo Project ${index + 1}`} className="project-img" />
          </div>
          <div className="project-description">{project.description}</div>
        </div>
      ))}

      <div className="d-flex p-2">
        <h1>Colloquial projects</h1>
      </div>
      {colloquialProjects.map((project, index) => (
        <div key={index} className="project-container">
          <div className="image-wrapper">
            <img src={project.imageUrl} alt={`Colloquial Project ${index + 1}`} className="project-img" />
          </div>
          <div className="project-description">{project.description}</div>
        </div>
      ))}
    </>
  );
};

export default Portfolio;