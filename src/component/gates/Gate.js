import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Working-env.css'; // Assuming the CSS file exists
import { faUser, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Gates({ userName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/multiple-choice'); // Navigate to the multiple choice page
  };

  return (
    <div className="video-player">
      <div className="user-icon-container">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="user-name">
          <u>{userName ? userName : 'PSA-User'}</u>
        </span>
      </div>
      <p className="video-title">
        Video 1<br />(Understanding the Work Environment)
      </p>
      <p>
        Summary <br />
        <FontAwesomeIcon icon={faClock} className="icon" /> Video length: 3 minutes<br />
        <FontAwesomeIcon icon={faCheck} className="icon" /> Assessment included <br />
        <i>(Please click play button when you get ready)</i>
      </p>
      <video
        width="640"
        height="390"
        controls
        onEnded={handleVideoEnd}
      >
        <source src="https://d12ju51ift25w7.cloudfront.net/gates_final2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Gates;
