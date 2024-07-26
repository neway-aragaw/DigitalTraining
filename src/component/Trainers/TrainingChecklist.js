import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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

  return (
    <div className="trainer-checklist">
      <p className="trainer-title">
        Welcome !!
      </p>
      <p className="intro-text">
        Please go through each task and check the boxes once you have observed or completed them with your trainees.
      </p>
      <div className="checklist-container">
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
        <div className="summary">
          <p className={`summary-title ${allCompleted ? 'complete' : ''}`}>
            Checklist Summary
          </p>
          <div className="progress-container">
          <CircularProgressbar
            value={percentage}
            text={`${Math.round(percentage)}%`}
            styles={{
              path: {
                stroke: `#4db8fd`,
                fill:"none",
                strokeLinecap: 'round',
                transition: 'stroke-dashoffset 0.5s ease',r:"20",
              },
              text: {
                fill: '#4db8ff',
                fontSize: '16px',
                
                dominantBaseline: 'middle',
              },
              trail: {
                stroke: '#d6d6d6',
                strokeLinecap: 'round',
              },
            }}
          />
        </div>
          <p className={`summary-text ${allCompleted ? 'complete' : ''}`}>
            Completed: {completedCount} out of {checklistItems.length}
          </p>
        </div>
        <div className="button-container">
          <p>Finish the Checklist:</p>
          <button onClick={handleCompleteClick}>Complete</button>
        </div>

      </div>
    </div>
  );
}

export default TrainerChecklist;
