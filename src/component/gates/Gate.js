import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Working-env.css'; // Ensure this CSS file exists and has correct styles
import { faUser, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tumbnail_gate from '../../component/assets/tumb-gates.jpg'; // Correct relative path

function WorkingEnvironment({ userName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/M-C-G'); // Navigate to the multiple choice page
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
        Video 1<br />(Working at the gate)
      </p>
      <p className="video-summary">
        Summary <br />
        <FontAwesomeIcon icon={faClock} className="icon" /> Video length: 4 minute<br />
        <FontAwesomeIcon icon={faCheck} className="icon" /> Assessment included <br />
        <i>(Please click the play button when you are ready)</i>
      </p>
      <video
        width="640"
        height="390"
        controls
        onEnded={handleVideoEnd}
        poster={tumbnail_gate}  // Use the imported thumbnail
      >
        <source src="https://dwwjecsvmbno7.cloudfront.net/gates_final2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default WorkingEnvironment;
