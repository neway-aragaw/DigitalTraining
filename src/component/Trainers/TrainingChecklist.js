import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaEdit, FaSave, FaSignOutAlt, FaHome } from 'react-icons/fa'; // Import icons
import './TrainingChecklist.css'; // Assuming the CSS file exists

function TrainerChecklist() {
  const [checklistItems, setChecklistItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [trainerName, setTrainerName] = useState('');
  const [traineeName, setTraineeName] = useState('');
  const [note, setNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);
  const [showNoteSection, setShowNoteSection] = useState(false); // State to control note section visibility

  const navigate = useNavigate();

  useEffect(() => {
    const storedTrainerName = localStorage.getItem('trainerName');
    const storedTraineeName = localStorage.getItem('traineeName');
    const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
    const storedNote = localStorage.getItem('trainingNote') || ''; // Retrieve saved note
    const storedChecklistItems = JSON.parse(localStorage.getItem('checklistItems')) || [
      { id: 1, title: '1. Security Checkpoint Training', completed: false },
      { id: 2, title: '2. Gate Identification & Navigation Training', completed: false },
      { id: 3, title: '3. Connecting Flight Assistance', completed: false },
      { id: 4, title: '4. Tablet Usage Training', completed: false },
      { id: 5, title: '5. Baggage Claim Procedures Training', completed: false },
      { id: 6, title: '6. Working from the Lobby and Collecting Chairs', completed: false },
    ];

    if (storedAuth && storedTrainerName && storedTraineeName) {
      setIsAuthenticated(true);
      setTrainerName(storedTrainerName);
      setTraineeName(storedTraineeName);
    } else {
      navigate('/login');
    }

    setNote(storedNote); // Set the note from localStorage
    setChecklistItems(storedChecklistItems); // Set the checklist items from localStorage
  }, [navigate]);

  const handleCheckboxChange = (id) => {
    const updatedChecklistItems = checklistItems.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setChecklistItems(updatedChecklistItems);
    localStorage.setItem('checklistItems', JSON.stringify(updatedChecklistItems)); // Save updated checklist items to localStorage
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
    setNoteSaved(false); // Mark note as not saved
  };

  const handleSaveNote = () => {
    localStorage.setItem('trainingNote', note); // Save note to localStorage
    setNoteSaved(true); // Mark note as saved
  };

  const handleSignOut = () => {
    localStorage.removeItem('trainerName');
    localStorage.removeItem('traineeName');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('trainingNote'); // Remove note from localStorage
    localStorage.removeItem('checklistItems'); // Remove checklist items from localStorage
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="trainer-checklist">
      {isAuthenticated ? (
        <>
          <div className="profile-table-container">
            <table className="profile-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trainer</td>
                  <td>{trainerName}</td>
                </tr>
                <tr>
                  <td>Trainee</td>
                  <td>{traineeName}</td>
                </tr>
              </tbody>
            </table>
            <div className="button-container">
              <button onClick={handleSignOut}>
                <FaSignOutAlt /> Sign Out
              </button>
            </div>
          </div>
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
                    {item.completed} {/* Display a checkmark icon if completed */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-container">
            <button onClick={() => setShowNoteSection(!showNoteSection)}>
              {showNoteSection ? <FaEdit /> : <FaEdit />} {showNoteSection ? 'Hide Note' : 'Add Note'}
            </button>
          </div>
          {showNoteSection && (
            <div className="note-section">
              <textarea
                placeholder="Add a note about the training progress..."
                value={note}
                onChange={handleNoteChange}
              />
              <button onClick={handleSaveNote}>
                {noteSaved ? <FaSave /> : <FaSave />} {noteSaved ? 'Note Saved' : 'Save Note'}
              </button>
            </div>
          )}
          <div className="button-container">
            <button onClick={() => navigate('/finish')}>
              <FaHome /> Finish
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TrainerChecklist;
