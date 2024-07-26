import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Working-env.css'; // Import your CSS file

// Array with only the video you want to play
const videos = [
  "https://d2vfkfmtobdw95.cloudfront.net/part2.mp4", // Updated video URL
];

function Tablet2({ userName }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  const handleNext = () => {
    // Navigate to the '/final' page when the video ends and 'Next' is clicked
    navigate('/final');
  };

  return (
    <div className="video-player">
      <div className="user-icon-container">
        <span className="user-name"><u>{userName ? userName : 'PSA-User'}</u></span>
      </div>
      <p className="video-title">
        Understanding AvTech Tablet<br />
        Video 2
      </p>
      <video
        width="640"
        height="390"
        controls
        autoPlay
        onEnded={handleVideoEnd}
        poster="./assets/communicate.jpg" // Placeholder thumbnail
      >
        <source src={videos[0]} type="video/mp4" />
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
