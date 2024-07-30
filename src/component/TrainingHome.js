import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TrainingHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faGlobe } from '@fortawesome/free-solid-svg-icons';

function TrainingHome() {
  const [username, setUsername] = useState('');
  const [completedTrainings, setCompletedTrainings] = useState(0);
  const [isPinDialogVisible, setPinDialogVisible] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
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
    navigate('/'); // Redirect to home page after logging out
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      navigate(`/${selectedLanguage}`);
    }
  };

  const handleInternationalClick = () => {
    const isSenior = window.confirm("This section is for senior employees who receive a custom seal. Do you want to proceed?");
    if (isSenior) {
      setPinDialogVisible(true); // Show PIN input dialog
    }
  };

  const handlePinSubmit = () => {
    if (pinCode === '1234') {
      navigate('/international'); // Navigate to the international page
      setPinDialogVisible(false); // Hide PIN dialog
      setPinCode(''); // Clear PIN code
    } else {
      alert('Invalid PIN code. Please try again.'); // Alert for incorrect PIN
    }
  };

  const handlePinChange = (event) => {
    setPinCode(event.target.value); // Update PIN code state
  };

  return (
    <div className={`training-home ${isPinDialogVisible ? 'hidden' : 'to-middle'}`}>
      {!isPinDialogVisible && (
        <>
          <p>Please select the trainings:</p>
          <div className="button-group">
            <div className="button-item">
              <p>1) Understanding the Security Checkpoint</p>
              <Link to="/working-environment">
                <button onClick={handleButtonClick}>
                  <FontAwesomeIcon icon={faPlay} className="button-icon" /> Start
                </button>
              </Link>
            </div>
            <div className="button-item">
              <p>2) Working at the Gate</p>
              <Link to="/gates">
                <button onClick={handleButtonClick}>
                  <FontAwesomeIcon icon={faPlay} className="button-icon" /> Start
                </button>
              </Link>
            </div>
            <div className="button-item">
              <p>3) Working in the Baggage Claim and Lobby</p>
              <Link to="/working-lobby">
                <button onClick={handleButtonClick}>
                  <FontAwesomeIcon icon={faPlay} className="button-icon" /> Start
                </button>
              </Link>
            </div>
            <div className="button-item">
              <p>4) Understanding How to Use the Tablet</p>
              <Link to="/understanding-tablet">
                <button onClick={handleButtonClick}>
                  <FontAwesomeIcon icon={faPlay} className="button-icon" /> Start
                </button>
              </Link>
            </div>
            <div className="button-item">
              <p>5) International<br /><i>(selective)</i></p>
              <button onClick={handleInternationalClick}>
                <FontAwesomeIcon icon={faGlobe} className="button-icon" /> Start
              </button>
            </div>
            <div className="language-menu">
              <select id="language-select" className="language-select" onChange={handleLanguageChange}>
                <option value="">Select Language</option>
                <option value="spanish">Español</option>
                <option value="amharic">አማርኛ</option>
                <option value="nepali">हिन्दी</option>
                <option value="philippine">Tagalog</option>
                <option value="arabic">العربية</option>
                {/* Add more languages here */}
              </select>
            </div>
          </div>
        </>
      )}

      {isPinDialogVisible && (
        <div className="pin-dialog">
          <h2>Enter PIN Code</h2>
          <input
            type="password"
            value={pinCode}
            onChange={handlePinChange}
            placeholder="Enter PIN"
          />
          <button onClick={handlePinSubmit}>Submit</button>
          <button onClick={() => setPinDialogVisible(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default TrainingHome;
