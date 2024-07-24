import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Working-env.css'; // Assuming the CSS file exists

import YouTube from 'react-youtube';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

function TabletX({ userName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePlayPause = (event) => {
    const player = event.target;
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Request fullscreen when the video starts to play
      const iframe = player.getIframe();
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
      }
    }
  };

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
      <YouTube
        videoId="VJwrZsiYzVE"
        opts={opts}
        onReady={handlePlayPause}
        onEnd={handleVideoEnd}
      />
    </div>
  );
}

export default TabletX;
