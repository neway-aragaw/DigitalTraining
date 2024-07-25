import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TrainingHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function TrainingHome({ userName }) {
  const [completedTrainings, setCompletedTrainings] = useState(0);

  const handleButtonClick = () => {
    setCompletedTrainings((prev) => prev + 1);
  };

  const totalTrainings = 4;
  const percentageScore = (completedTrainings / totalTrainings) * 100;

  return (
    <div className="training-home to-middle">
      <div className="user-icon-container">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="user-name"><u>{userName ? userName : "PSA-User"}</u></span>
      </div>
      
      <p>Welcome <i className='username'>{userName ? userName : "PSA"} ,</i> please select the trainings:</p>
      <div className="button-group">
        <div className="button-item">
          <p>1) Understanding the Security Checkpoint</p>
          <Link to="/working-environment">
            <button onClick={handleButtonClick}>Start</button>
          </Link>
        </div>
        <div className="button-item">
          <p>2) Working at the Gate</p>
          <Link to="/gates">
            <button onClick={handleButtonClick}>Start</button>
          </Link>
        </div>
        <div className="button-item">
          <p>3) Working in the Baggage Claim and Lobby</p>
          <Link to="/working-lobby">
            <button onClick={handleButtonClick}>Start</button>
          </Link>
        </div>
        <div className="button-item">
          <p>4) Understanding How to Use the Tablet</p>
          <Link to="/understanding-tablet">
            <button onClick={handleButtonClick}>Start</button>
          </Link>
        </div>
      </div>
      
    
    </div>
  );
}

export default TrainingHome;
