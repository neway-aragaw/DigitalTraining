
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Working-env.css'; // Assuming the CSS file exists

import YouTube from 'react-youtube';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

function LobbyT({ userName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying); // Update state directly here
  };

  const handleVideoEnd = () => {
    navigate('/M-C-T'); // Navigate to the multiple choice page
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
        Video 2<br />(Understanding PSA's Tablet)
      </p>
      <p>
        Summary <br />
        <FontAwesomeIcon icon={faClock} className="icon" /> Video length: 4:19 minutes<br />
        <FontAwesomeIcon icon={faCheck} className="icon" /> Assessment included <br />
        <i>(Please click play button when you get ready)</i>
      </p>
      <YouTube videoId="jFLj1eIRT3s" opts={opts} onEnd={handleVideoEnd} /> {/* Use onEnd for video completion */}

    </div>
  );
}

export default LobbyT;
