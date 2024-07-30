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

  const handleSeeSummaryClick = () => {
    navigate('/summary', { state: { checklistItems } }); // Pass checklist items to summary page
  };

  return (
    <div className="trainer-checklist">
      <p className="trainer-title">Welcome !!</p>
      <p className="intro-text">
        Please go through each task and check the boxes once you have observed or completed them with your trainees.
      </p>
      <table className="checklist-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {checklistItems.map((item) => (
            <tr key={item.id} className={item.completed ? 'completed' : ''}>
              <td>{item.title}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
       
        <button onClick={handleSeeSummaryClick}>See Progress</button>
      </div>
    </div>
  );
}

export default TrainerChecklist;
