import React from 'react';
import { Link } from 'react-router-dom';
import './Training.css'; // Assuming the CSS file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Training() {
  return (
    <div className="training">
      <h2>Interactive PSA Training</h2>
      <div className="training_header">
        <Link to="/create-user">Start</Link>
      </div>
      <br></br>
      <br></br>
      <p className="quick-directory">
        <Link to="/directory">
          <FontAwesomeIcon icon={faLocationDot} /> Quick Directory
        </Link>
      </p>
    </div>
  );
}

export default Training;
