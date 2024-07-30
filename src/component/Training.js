import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Training.css'; // Assuming the CSS file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser, faInfoCircle, faPhoneAlt, faChalkboardTeacher, faGlobe } from '@fortawesome/free-solid-svg-icons';

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

  const handleInternationalClick = () => {
    const isSenior = window.confirm("This section is for senior employees who receive a custom seal. Do you want to proceed?");
    if (isSenior) {
      navigate('/international'); // Adjust the route as needed
    }
  };

  return (
    <div className="training-container">
      {/* Mobile/Tablet Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Desktop Header */}
      <div className="desktop-header">
        <ul>
          <li><Link to="/directory"><FontAwesomeIcon icon={faSearch} /> Quick Directory</Link></li>
          <li><Link to="/contact"><FontAwesomeIcon icon={faPhoneAlt} /> Contact</Link></li>
          <li><Link to="/trainers"><FontAwesomeIcon icon={faChalkboardTeacher} /> For Trainers</Link></li>
          <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link></li>
          <li><a href="#" onClick={handleInternationalClick}><FontAwesomeIcon icon={faGlobe} /> International</a></li>
        </ul>
      </div>

      {/* Mobile/Tablet Menu */}
      <div className={`menu ${menuVisible ? 'show' : ''}`}>
        <ul>
          <li><Link to="/directory"><FontAwesomeIcon icon={faSearch} /> Quick Directory</Link></li>
          <li><Link to="/contact"><FontAwesomeIcon icon={faPhoneAlt} /> Contact</Link></li>
          <li><Link to="/trainers"><FontAwesomeIcon icon={faChalkboardTeacher} /> For Trainers</Link></li>
          <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link></li>
          <li><a href="#" onClick={handleInternationalClick}><FontAwesomeIcon icon={faGlobe} /> International</a></li>
        </ul>
      </div>

      <div className='interactive_heading'>
        <h2 className='heading_home'>Interactive PSA Training</h2>
        <div className="training_header">
          <Link to="/training-home" className="start-link"><FontAwesomeIcon icon={faUser} /> Start</Link>
        </div>
      </div>
    </div>
  );
}

export default Training;
