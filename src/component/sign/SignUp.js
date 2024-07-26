import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username already exists
    const userExists = existingUsers.some(user => user.username === username);

    if (userExists) {
      setMessage('An account already exists with this username. Please choose another.');
    } else if (!username || !password) {
      setMessage('Please enter both username and password.');
    } else {
      // Add new user
      existingUsers.push({ username, password });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      localStorage.setItem('loggedInUser', username); // Store logged-in user
      navigate('/training-home'); // Replace with your actual training home route
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
  );
}

export default SignUp;
