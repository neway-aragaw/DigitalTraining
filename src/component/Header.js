import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome({ userName }) {


  return (
    <div className="container">
      <h2>user {userName}</h2>
      
    </div>
  );
}

export default Welcome;
// function TrainingHome({ userName }) {
//   return (
//     <div className="training-home">
//       <h2>Welcome <i className='username'>{userName?userName:"PSA"} ,</i> 
//     please select the Trainings</h2>
