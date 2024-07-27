import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Training.css'; // Assuming the CSS file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Training() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate(); // Use navigate for routing

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      navigate(`/${selectedLanguage}`);
    }
  };

  return (
    <div className="training-container">
      <div className="training">
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`menu ${menuVisible ? 'show' : ''}`}>
          <ul>
            <li><Link to="/directory">Quick Directory</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/trainers">For Trainers</Link></li>
          </ul>
        </div>
        <h2>Interactive PSA Training</h2>
        <div className="training_header">
          <Link to="/user" className="start-link">Start</Link>
        </div>
      </div><br></br>
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
  );
}

export default Training;
