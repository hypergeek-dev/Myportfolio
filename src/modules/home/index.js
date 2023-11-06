import React, { useState, useEffect } from 'react';

const Home = () => {
  const [imageSrc, setImageSrc] = useState("https://raw.githubusercontent.com/hypergeek-dev/Myportfolio/main/src/assets/graphic/profil.webp");
  const hoverImage = "https://raw.githubusercontent.com/hypergeek-dev/Myportfolio/main/src/assets/graphic/profil.webp";
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const lines = [
      'I\'m a coder!',  
      'JavaScript Wizard',
      'CSS passionate',
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
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center full-height">
        
        {/* Textbox Container */}
        <div className="col-md-6">
          <div className="flex-container d-flex flex-column">
            <div className="img_wrapper d-flex flex-column justify-content-center align-self-center custom-top-padding">
              <img
                src={imageSrc} 
                alt="My profile"
                onMouseEnter={() => setImageSrc(hoverImage)} 
                onMouseLeave={() => setImageSrc("https://raw.githubusercontent.com/hypergeek-dev/Myportfolio/main/src/assets/graphic/profil.webp")}
              />
            </div>
            <div className="animated_text d-flex flex-column justify-content-center align-items-center text-center">
              <h1>{typedText}</h1>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/dennis-mariegaard-jensen-a974a8287/" className="social-icon mx-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/hypergeek-dev/" className="social-icon mx-2 mb-2">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Content Container */}
   
        <div className="col-md-6 col-lg-4 row">
          <div className="container d-flex flex-column">
            <h1 className="text-center mb-4 h1">I'm a Full Stack <span>Dev</span>eloper</h1>
            <p className="text-center">Crafting solutions.</p>
            <p className="text-center">Form and function balance.</p>
            <p className="text-center">Elegant and neat.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-dark glow-on-hover download_btn">
                <a href="https://binarymonk.online/CV.pdf" download>Download my resume</a>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
