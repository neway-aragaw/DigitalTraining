import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Working-env.css'; // Assuming the CSS file exists
import { faUser, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tumbnail from './assets/tumbnail.jpg'; // Correct relative path

function WorkingEnvironment({ userName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/multiple-choice'); // Navigate to the multiple choice page
  };

  return (
    <div className="video-player">
    
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
        <source src="https://d6mf3z9i340i9.cloudfront.net/secirity_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        {/*         <source src="https://d12ju51ift25w7.cloudfront.net/gates_final2.mp4" type="video/mp4" />
 */}
      </video>
    </div>
  );
}

export default WorkingEnvironment;
