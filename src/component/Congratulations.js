import React from 'react';
import './Congratulations.css';
// / Make sure to add your winning image in the src folder

const Congratulations = () => {
  return (
    <div className="congratulations-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sb2BXF89JvPYC1Lkv8uTdStfwVAPkH5L4Q&s" alt="Winning" className="winning-image" />
      
      <p>You have successfully completed your training.</p>
      <p>We wish you the best of luck in your work ahead!</p>
    </div>
  );
};

export default Congratulations;
