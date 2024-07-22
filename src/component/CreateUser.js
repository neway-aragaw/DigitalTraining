import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateUserAccount.css';

function CreateUser({ setUserName }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const createdUsername = `${firstName} ${lastName}`;
    setUserName(createdUsername);
    navigate('/training-home');
  };

  return (
    <div className="create_container">
      <h2>Create User Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateUser;
