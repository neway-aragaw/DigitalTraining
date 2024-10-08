// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CreateUserAccount.css';

// function CreateUser({ setUserName }) {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const navigate = useNavigate();

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (firstName.trim() === '' || lastName.trim() === '') {
//       setErrorMessage('Both first name and last name are required.');
//       return;
//     }

//     const createdUsername = `${firstName} ${lastName}`;
//     setUserName(createdUsername);
//     navigate('/training-home'); // Redirect to /training-home
//   };

//   return (
//     <div className="create-container">
//       <h2>Create User Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="firstName">First Name</label>
//           <input
//             id="firstName"
//             type="text"
//             placeholder="First Name"
//             value={firstName}
//             onChange={handleFirstNameChange}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             id="lastName"
//             type="text"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={handleLastNameChange}
//           />
//         </div>
//         {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
//         <button type="submit">Create Account</button>
//       </form>
//     </div>
//   );
// }

// export default CreateUser;
