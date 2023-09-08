import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Array of solo projects with their details
const soloProjects = [
  { imageUrl: 'https://binarymonk.online/screenshots/mindful_zensations.webp', description: 'This is my first project since I started my journey into webdesign. My goal was to keep it pure HTML and CSS, but also adapt my past skills in pedagogics and focus on accesibility in terms of using simple english and a colorpalette aimed at colorblindness plus a font created to aid people with dyslexia.', repository:'https://github.com/hypergeek-dev/Mindful-Zensations', liveSite:'https://hypergeek-dev.github.io/Mindful-Zensations/' },
  { imageUrl: 'https://binarymonk.online/screenshots/speakers_timer.webp', description: 'My first Javascript project. As such, it is just a timer with virtual meetings in mind. The way this became interesting for me was in the testing, where I added safeguarding against breaking of the code', repository:'https://github.com/hypergeek-dev/Speakers-timer', liveSite:'https://hypergeek-dev.github.io/Speakers-timer/' },
  { imageUrl: 'https://binarymonk.online/screenshots/cipher_forge.webp', description: 'I created a Python-based password generator using a modified pseudo-random formula. It adds randomly generated words from a web-scraped list to the beginning and end of each password. I also tested the passwords against a list of popular ones for added security.', repository:'https://github.com/hypergeek-dev/cipher-forge', liveSite:'https://cipher-forge.herokuapp.com/' },
  { imageUrl: 'https://binarymonk.online/screenshots/my_cakery_shop.webp', description: 'This is again HTML and CSS but shows where I am at after 8 months of studying code. It is basically a webshop. The responsiveness of this website made this project interesting. Going from showing one product on smaller phones to several the bigger the screen. ', repository:'https://github.com/hypergeek-dev/cakery-webshop', liveSite:'https://hypergeek-dev.github.io/cakery-webshop/index.html' },


];
// Array of colloquial projects with their details
const colloquialProjects = [
  { imageUrl: 'https://binarymonk.online/screenshots/jingle_bingle.webp', description: 'After 10 days of studying webdesign I participated in a hackaton. I was predominantly occupied with the conceptual side of it but we ended up winning amongst all students participating. I liked this project because it made me feel at home in this career and found that one of my strengths is UX.', repository:'https://github.com/hypergeek-dev/DynastyOne', liveSite:'https://vasi012.github.io/DynastyOne/' },
  { imageUrl: 'https://binarymonk.online/screenshots/the_leafblowers.webp', description: 'This project is very special to me, because the quality of the teamwork could be seen in the final result. ' , repository:'https://github.com/hypergeek-dev/The-Woke-Implementation-Association', liveSite:'https://hypergeek-dev.github.io/The-Woke-Implementation-Association/' },
  { imageUrl: 'https://binarymonk.online/screenshots/dara_planner.webp', description: 'This product also has a special side to it being the functionality is useful and on the conceptual side especially title and background. ', repository:'https://github.com/ibuttimer/in-for-a-penny', liveSite:'https://dara-planner.onrender.com/' },

];const Portfolio = () => {
  return (
    <>
      <div className="container full-height">
        <div className="text-center custom-top-padding">
          <h1 className="display-4 py-2 ">Solo projects</h1>
        </div>
        <div className="row justify-content-center m-2">
          {soloProjects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 m-2 p-2">
              <div className="card bg-dark text-white box_shadow rounded">
                <img src={project.imageUrl} alt={`Solo Project ${index + 1}`} className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-evenly col row-2">
                <button className="btn text-white btn btn-dark">
                  <a href={project.repository} className="mx-2 portfolio_icons row justify-content-center"><FontAwesomeIcon icon={faGithub} size="2x" />Code</a>
                  </button>
                  <button className="btn text-white btn btn-dark">
                  <a href={project.liveSite} className="mx-2 portfolio_icons row justify-content-center"><FontAwesomeIcon icon={faLink} size="2x" />Live Link</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-2">
          <h1 className="display-4">Colloquial projects</h1>
        </div>
        <div className="row justify-content-center">
          {colloquialProjects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 m-2 p-2">
              <div className="card bg-dark text-white box_shadow rounded">
                <img src={project.imageUrl} alt={`Colloquial Project ${index + 1}`} className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-evenly col row-2">
                <button className="btn text-white btn btn-dark">
                  <a href={project.repository} className="mx-2 portfolio_icons row justify-content-center"><FontAwesomeIcon icon={faGithub} size="2x" />Code</a>
                  </button>
                  <button className="btn text-white btn btn-dark">
                  <a href={project.liveSite} className="mx-2 portfolio_icons row justify-content-center"><FontAwesomeIcon icon={faLink} size="2x" />Live Link</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;