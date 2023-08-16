import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [imageSrc, setImageSrc] = useState("https://www.binarymonk.online/profil.webp");
  const hoverImage = "https://www.binarymonk.online/profil_bw.png"; 
  return (
    <div className="position-absolute rounded start-0 custom-top-center flex-container">
    
            <div className="nameWrapper">
                <h1>Dennis Jensen</h1>
                <h5>Junior Full Stack Developer</h5>
            </div>
            <div className="imgWrapper">
            <img 
            
                src={imageSrc} 
                alt="My profile"
                onMouseEnter={() => setImageSrc(hoverImage)}
                onMouseLeave={() => setImageSrc("https://www.binarymonk.online/profil.png")}
            />
        </div>
    </div>
  );
};

export default Home;
