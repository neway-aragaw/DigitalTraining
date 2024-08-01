import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SummaryPage.css'; // Create this CSS file for styling

const TrainingSummary = () => {
  const [trainerName, setTrainerName] = useState('');
  const [traineeName, setTraineeName] = useState('');
  const [note, setNote] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedTrainerName = localStorage.getItem('trainerName');
    const storedTraineeName = localStorage.getItem('traineeName');
    const storedNote = localStorage.getItem('trainingNote') || '';

    if (storedTrainerName && storedTraineeName) {
      setTrainerName(storedTrainerName);
      setTraineeName(storedTraineeName);
      setNote(storedNote);
      
      // Set current date and time in EST
      const now = new Date();
      const estTime = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
      setCurrentDateTime(estTime);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="training-summary">
      <div className="profile-summary">
        <h2>Training Summary</h2>
        <p><strong>Trainer:</strong> {trainerName}</p>
        <p><strong>Trainee:</strong> {traineeName}</p>
        <p><strong>Date and Time (EST):</strong> {currentDateTime}</p>
      </div>
      <div className="summary-content">
        <h3>Summary of Training:</h3>
        <p>Your training is complete. Below is a summary of your session:</p>
        <ul>
          <li>1. Security Checkpoint Training - Completed</li>
          <li>2. Gate Identification & Navigation Training - Completed</li>
          <li>3. Connecting Flight Assistance - Completed</li>
          <li>4. Tablet Usage Training - Completed</li>
          <li>5. Baggage Claim Procedures Training - Completed</li>
          <li>6. Working from the Lobby and Collecting Chairs - Completed</li>
        </ul>
        <div className="note-section">
          <h3>Notes:</h3>
          <p>{note}</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default TrainingSummary;
