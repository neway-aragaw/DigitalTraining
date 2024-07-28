import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrainingChecklist.css'; // Assuming the CSS file exists

function TrainerChecklist({ trainerName }) {
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, title: '1. Security Checkpoint Training', completed: false },
    { id: 2, title: '2. Gate Identification & Navigation Training', completed: false },
    { id: 3, title: '3. Connecting Flight Assistance', completed: false },
    { id: 4, title: '4. Tablet Usage Training', completed: false },
    { id: 5, title: '5. Baggage Claim Procedures Training', completed: false },
    { id: 6, title: '6. Working from the Lobby and Collecting Chairs', completed: false },
  ]);

  const handleCheckboxChange = (id) => {
    setChecklistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const navigate = useNavigate();

  const handleCompleteClick = () => {
    navigate('/'); // Redirects to the homepage
  };

  const allCompleted = checklistItems.every(item => item.completed);
  const completedCount = checklistItems.filter(item => item.completed).length;
  const percentage = (completedCount / checklistItems.length) * 100;

  // Determine the background color based on the percentage
  let progressBarColor;
  if (percentage >= 100) {
    progressBarColor = '#28a745'; // Green
  } else if (percentage >= 67) {
    progressBarColor = '#f1c40f'; // Yellow
  } else {
    progressBarColor = '#e74c3c'; // Light Red
  }

  return (
    <div className="trainer-checklist">
      <p className="trainer-title">Welcome !!</p>
      <p className="intro-text">
        Please go through each task and check the boxes once you have observed or completed them with your trainees.
      </p>
      <div className="checklist-container">
      <div className="">
          <p >
            Checklist Summary
          </p>
         
        </div>
        <div className="progress-container">
          <div
            className="linear-progress-bar"
            style={{ 
              width: `${percentage}%`, 
              backgroundColor: progressBarColor 
            }}
          >
            <span className="progress-text">{`${Math.round(percentage)}%`}</span>
          </div>
        </div>
      <br></br>
      <br></br>
        <ul className="checklist-items">
          {checklistItems.map((item) => (
            <li key={item.id} className="checklist-item">
              <p className='item'>{item.title}</p>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </li>
          ))}
        </ul>
        <div className="button-container">
          <p>Finish the Checklist:</p>
          <button onClick={handleCompleteClick}>Complete</button>
        </div>
      </div>
    </div>
  );
}

export default TrainerChecklist;
