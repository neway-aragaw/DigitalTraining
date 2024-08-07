import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Working-env.css'; // Import your CSS file

const video = "https://dkcqllqa78ii.cloudfront.net/part+1.mp4"; // URL for the video

function Tablet2({ userName }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  const handleNext = () => {
    navigate('/understanding-tablet/understanding-tablet2'); // Redirect to the new page
  };

  return (
    <div className="video-player">
      <div className="user-icon-container">
        <span className="user-name"><u>{userName ? userName : 'PSA-User'}</u></span>
      </div>
      <p className="video-title">
        Understanding AvTech Tablet<br />
        Video 1
      </p>
      <video
        width="640"
        height="390"
        controls
        autoPlay
        onEnded={handleVideoEnd}
        poster="./assets/communicate.jpg" // Placeholder thumbnail
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isVideoEnded && (
        <div className="button-container">
          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Tablet2;
