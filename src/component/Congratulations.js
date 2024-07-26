import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Congratulations.css'; // Import your CSS file

function Congratulations({ userName }) {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/'); // Redirect to home page or another page after finishing
  };

  return (
    <div className="congratulations-container">
      <div className="congratulations-content">
        <h1>🎉 Congratulations, {userName ? userName : 'Trainee'}! 🎉</h1>
        <p>You have successfully completed all the training modules.</p>
        <p>We appreciate your hard work and dedication. Keep up the great work!</p>
        <button onClick={handleFinish} className="finish-button">Return to Home</button>
      </div>
      <div className="congratulations-image">
        <img src="https://via.placeholder.com/600x400?text=Congratulations" alt="Congratulations" />
      </div>
    </div>
  );
}

export default Congratulations;
