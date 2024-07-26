import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Training.css'; // Assuming the CSS file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Training() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="training">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`menu ${menuVisible ? 'show' : ''}`}>
        <ul>
          <li><Link to="/directory">Quick Directory</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/trainers">For Trainers</Link></li> {/* New list item */}
        </ul>
      </div>
      <h2>Interactive PSA Training</h2>
      <div className="training_header">
        <Link to="/signup">Start</Link>
      </div>
    </div>
  );
}

export default Training;
