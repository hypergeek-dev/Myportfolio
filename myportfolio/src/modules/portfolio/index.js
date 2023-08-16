import React from 'react';

const soloProjects = [
  { imageUrl: 'path/to/screenshot1.jpg', description: 'Description 1' },
  { imageUrl: 'path/to/screenshot2.jpg', description: 'Description 2' },
  // ... other projects ...
];

const colloquialProjects = [
  { imageUrl: 'path/to/screenshotA.jpg', description: 'Description A' },
  // ... other projects ...
];

const Portfolio = () => {
  return (
    <>
      <div className="d-flex p-2">
        <h1>Solo projects</h1>
      </div>
      {soloProjects.map((project, index) => (
        <div key={index} className="d-inline-flex p-2">
          <img src={project.imageUrl} alt={`Solo Project ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          <div className="d-flex p-2">{project.description}</div>
        </div>
      ))}

      <div className="d-flex p-2">
        <h1>Colloquial projects</h1>
      </div>
      {colloquialProjects.map((project, index) => (
        <div key={index} className="d-inline-flex p-2">
          <img src={project.imageUrl} alt={`Colloquial Project ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          <div className="d-flex p-2">{project.description}</div>
        </div>
      ))}
    </>
  );
};

export default Portfolio;
