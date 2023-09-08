import React, { useState, useEffect } from 'react';


const Home = () => {
  const [imageSrc, setImageSrc] = useState("https://www.binarymonk.online/profil.webp");
  const hoverImage = "https://www.binarymonk.online/profil_bw.png";
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const lines = [
      'I\'m a coder!',  
      'JavaScript Ninja',
      'CSS Wizard',
      'Lifelong Learner'
    ];

    let index = 0;
    let timeoutId;

    const typeLine = () => {
      const line = lines[currentLine];
      if (index <= line.length) {
        setTypedText(line.substring(0, index + 1));
        index++;
        timeoutId = setTimeout(typeLine, 100);
      } else {
        timeoutId = setTimeout(() => {
          setTypedText('');
          index = 0;
          setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
          typeLine();
        }, 1000); 
      }
    };

    typeLine();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentLine]);

  return (
    <div className="container-fluid full-height">
      <div className="row justify-content-center align-items-center full-height">
        
        {/* Textbox Container */}
        <div className="col-md-6">
          <div className="flex-container d-flex flex-column justify-content-center align-items-center">
            <div className="img_wrapper d-flex flex-column justify-content-center align-self-center">
              <img
                src={imageSrc} 
                alt="My profile"
                onMouseEnter={() => setImageSrc(hoverImage)} 
                onMouseLeave={() => setImageSrc("https://www.binarymonk.online/profil.webp")}
              />
            </div>
            <div className="animated_text d-flex flex-column justify-content-center align-items-center text-center">
              <h1>{typedText}</h1>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/dennis-mariegaard-jensen-a974a8287/" className="social-icon mx-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/hypergeek-dev/" className="social-icon mx-2">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="col-md-6">
          <div className="content-container">
            <h1>Hi, I'm Dennis, a Full Stack Developer where creativity meets clean code.</h1>
            <p>I love crafting innovative solutions from front to back, using a diverse tech stack.</p>
            <p>My code is not just functional; it's an art form.</p>
            <p>Efficient, maintainable, and elegant.</p>
            <p>Let's turn your next big idea into reality.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
