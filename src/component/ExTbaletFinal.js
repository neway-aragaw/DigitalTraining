import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Working-env.css'; // Import your CSS file

const videoUrl = "https://d2vfkfmtobdw95.cloudfront.net/0721.mp4";

function ExTabletFinal({ userName }) {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/M-C-T'); // Navigate to the Multiple Choice Test page when the video ends
  };

  return (
    <div className="video-player">
      <div className="user-icon-container">
        <span className="user-name"><u>{userName ? userName : 'PSA-User'}</u></span>
      </div>
      <p className="video-title">
        Final Video<br />
        (Overview and Conclusion)
      </p>
      <video
        width="640"
        height="390"
        controls
        autoPlay
        onEnded={handleVideoEnd}
        poster="./assets/communicate.jpg" // Placeholder thumbnail
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ExTabletFinal;
