import React, { useState, useEffect } from 'react';

const Home = () => {
  // State to manage the source of the profile image
  const [imageSrc, setImageSrc] = useState("https://www.binarymonk.online/profil.webp");
  // Hover image URL
  const hoverImage = "https://www.binarymonk.online/profil_bw.png";
  // State to manage the text being typed
  const [typedText, setTypedText] = useState('');
  // State to manage the current line being typed
  const [currentLine, setCurrentLine] = useState(0);

  // Effect to handle typing animation
  useEffect(() => {
    const lines = [
      'I\'m a coder!',  
      'JavaScript Ninja',
      'CSS Wizard',
      'Lifelong Learner'
    ];

    let index = 0;
    let timeoutId;

    // Function to type a line
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

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentLine]);

  return (
    <div className="flex-container">
            <div className="imgWrapper">
        <img 
          src={imageSrc} 
          alt="My profile"
          onMouseEnter={() => setImageSrc(hoverImage)} 
          onMouseLeave={() => setImageSrc("https://www.binarymonk.online/profil.webp")}/>
      </div>
      {/* Name and typed text */}
      <div className="animated_text">
         
          <h1>{typedText}</h1>
          </div>
          {/* Social media icons */}
          <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/dennis-mariegaard-jensen-a974a8287/" className="social-icon mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/hypergeek-dev/" className="social-icon mx-2">
              <i className="fab fa-github"></i>
            </a>
          </div>


</div>

  );
};

export default Home;
