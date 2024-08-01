import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [trainerName, setTrainerName] = useState('');
  const [traineeName, setTraineeName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (trainerName && traineeName) {
      setIsLoading(true);
      localStorage.setItem('trainerName', trainerName);
      localStorage.setItem('traineeName', traineeName);
      localStorage.setItem('isAuthenticated', 'true');

      // Simulate a delay for loading
      setTimeout(() => {
        setIsLoading(false);
        navigate('/checklist');
      }, 1000); // Adjust the delay as needed

      // Clear input fields
      setTrainerName('');
      setTraineeName('');
      setError('');
    } else {
      setError('Please enter both trainer and trainee names');
    }
  };

  return (
    <div className="login">
      <h2>Training Profile</h2>
      <p>Please enter the profile details:</p>
      <div className="form-group">
        <label htmlFor="trainerName">Trainer Name</label>
        <input
          id="trainerName"
          type="text"
          placeholder="Trainer Name"
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="traineeName">Trainee Name</label>
        <input
          id="traineeName"
          type="text"
          placeholder="Trainee Name"
          value={traineeName}
          onChange={(e) => setTraineeName(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Go'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
