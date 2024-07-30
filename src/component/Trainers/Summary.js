import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SummaryPage.css'; // Create this CSS file as needed

function SummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { checklistItems } = location.state || { checklistItems: [] };

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
    <div className="summary-page">
      <p className="summary-title">Checklist Summary</p>
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
      <ul className="summary-items">
        {checklistItems.map((item) => (
          <li key={item.id} className={`summary-item ${item.completed ? 'completed' : ''}`}>
            {item.title}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Back to Checklist</button>
    </div>
  );
}

export default SummaryPage;
