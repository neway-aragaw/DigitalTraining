import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate('/signin'); // Redirect to sign-in if no username is stored
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={() => {
        localStorage.removeItem('username');
        localStorage.removeItem('password'); // Remove password on sign out
        navigate('/signin'); // Redirect to sign-in page after logging out
      }}>Sign Out</button>
    </div>
  );
}

export default Home;
