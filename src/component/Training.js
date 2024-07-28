import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Training.css'; // Assuming the CSS file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser, faInfoCircle, faPhoneAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

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
            <li><Link to="/directory"><FontAwesomeIcon icon={faSearch} /> Quick Directory</Link></li>
            <li><Link to="/contact"><FontAwesomeIcon icon={faPhoneAlt} /> Contact</Link></li>
            <li><Link to="/trainers"><FontAwesomeIcon icon={faChalkboardTeacher} /> For Trainers</Link></li>
            <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link></li>
          </ul>
        </div>
        <h2>Interactive PSA Training</h2>
        <div className="training_header">
          <Link to="/training-home" className="start-link"><FontAwesomeIcon icon={faUser} /> Start</Link>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Training;
