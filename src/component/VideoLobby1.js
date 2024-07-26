import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Working-env.css'; // Assuming the CSS file exists
import { faUser, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tumbnail from './assets/tumb-baggae.jpg'; // Correct relative path

function LobbyT({ userName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/M-C-L'); // Navigate to the multiple choice page
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
        Video 1<br />(Understanding the Security Checkpoint)
      </p>
      <p>
        Summary <br />
        <FontAwesomeIcon icon={faClock} className="icon" /> Video length: 1 minutes<br />
        <FontAwesomeIcon icon={faCheck} className="icon" /> Assessment included <br />
        <i>(Please click play button when you get ready)</i>
      </p>
      <video
        width="640"
        height="390"
        controls
        onEnded={handleVideoEnd}
        poster={tumbnail}  // Use the imported thumbnail
      >
        <source src="https://dwwjecsvmbno7.cloudfront.net/invideo-ai-720 Mastering Wheelchair Assistance at BWI A 2024-07-26.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        {/*         <source src="https://d12ju51ift25w7.cloudfront.net/gates_final2.mp4" type="video/mp4" />
 */}
      </video>
    </div>
  );
}

export default LobbyT;
