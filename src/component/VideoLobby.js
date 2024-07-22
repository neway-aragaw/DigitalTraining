// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./Working-env.css"; // Assuming the CSS file exists
// import LobbyV from "../asset/Lobby_video.mp4"
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

// function Tablet({userName}) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
//   const navigate = useNavigate();

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleVideoEnd = () => {
//     navigate('/M-C-T'); // Navigate to the multiple choice page
//   };

//   return (
//     <div className="video-player">
//       <div className="user-icon-container">
// <FontAwesomeIcon icon={faUser} className="user-icon" />
//           <span className="user-name"><u>{userName ? userName : "PSA-User"}</u></span>
//         </div>
//        <p className="video-title">Video 3<br />(Understanding The Tablet)</p>
       
//        <p>
//         Summary <br></br>
//         <FontAwesomeIcon icon={faClock} className="icon" /> Video length: 3 minutes<br />
//         <FontAwesomeIcon icon={faCheck} className="icon" /> Assessment included <br/>
//         <i>(Please click play button when you get ready)</i>
//       </p>
//       <video
//         ref={videoRef}
//         src={LobbyV} // Replace with the actual path to your video
//         controls
//         onEnded={handleVideoEnd}
//         width="120%" // Set video width to 80%
//       />
//       <button onClick={handlePlayPause}>
//         {isPlaying ? "Pause" : "Play"}
//       </button>
//     </div>
//   );
// }




// export default Tablet;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Working-env.css'; // Assuming the CSS file exists

import YouTube from 'react-youtube';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

function Three({ userName }) {
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
        <FontAwesomeIcon icon={faClock} className="icon" /> Video length: 3 minutes<br />
        <FontAwesomeIcon icon={faCheck} className="icon" /> Assessment included <br />
        <i>(Please click play button when you get ready)</i>
      </p>
      <YouTube videoId="jFLj1eIRT3s" opts={opts} onEnd={handleVideoEnd} /> {/* Use onEnd for video completion */}
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default Three;
