import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TrainingHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function TrainingHome() {
  const [username, setUsername] = useState('');
  const [completedTrainings, setCompletedTrainings] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate('/signin'); // Redirect to sign-in if no username is stored
    }
  }, [navigate]);

  const handleButtonClick = () => {
    setCompletedTrainings((prev) => prev + 1);
  };

  const totalTrainings = 4;
  const percentageScore = (completedTrainings / totalTrainings) * 100;

  const handleExitTraining = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password'); // Remove password on sign out
    navigate('/signin'); // Redirect to sign-in page after logging out
  };

  return (
    <div className="training-home to-middle">
      <div className="user-icon-container">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="user-name"><u>{username ? username : "PSA-User"}</u></span>
      </div>

      <h2>Welcome, {username}!</h2>
      
      <p>Welcome <i className='username'>{username ? username : "PSA"} ,</i> please select the trainings:</p>
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
        <div className="button-item">
          <p>Exit Training</p>
          <button onClick={handleExitTraining}>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default TrainingHome;
