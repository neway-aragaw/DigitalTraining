import React from 'react';
import { Link } from 'react-router-dom';
import './TrainingHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function TrainingHome({ userName }) {
  return (
    <div className="training-home">
<div className="user-icon-container">
<FontAwesomeIcon icon={faUser} className="user-icon" />
          <span className="user-name"><u>{userName ? userName : "PSA-User"}</u></span>
        </div>
        <br></br><br></br>
        <br></br><br></br>
      <p>Welcome <i className='username'>{userName?userName:"PSA"} ,</i> 
    please select the Trainings</p>
      <div className="button-group">
        <div className="button-item">
          <p>1) Understand the Working Environment</p>
          <Link to="/working-environment"><button>Start</button></Link>
        </div>
        <div className="button-item">
          <p>2) Working from the Gate</p>
          <Link to="/working-gate"><button>Start</button></Link>
        </div>
        <div className="button-item">
          <p>3) Working from the Lobby</p>
          <Link to="/working-lobby"><button>Start</button></Link>
        </div>
        <div className="button-item">
          <p>4) Understanding the Tablet</p>
          <Link to="/understanding-tablet"><button>Start</button></Link>
        </div>

      </div>
    </div>
  );
}

export default TrainingHome;
