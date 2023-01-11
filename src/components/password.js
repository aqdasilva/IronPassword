import React, { useState } from 'react';



function CreatePassword() {
  const [password, setPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const validatePassword = (password) => {
    const strongRegex = new RegExp("^(?=.*[a-z]{4})(?=.*[A-Z]{3})(?=.*[0-9]{2})(?=.*[!@#\$%\^&\*]{2})(?=.{18,})");
    if(strongRegex.test(password)) {
      setValidationMessage('Password is strong');
    } else {
      setValidationMessage('Password must contain at least 18 characters, 4 lowercase, 3 uppercase, 2 numbers and 2 special characters');
  }
}

  return (
    <div>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
      <button onClick={() => validatePassword(password)}>Validate Password</button>
      <p>{validationMessage}</p>
    </div>
  );
}

export default CreatePassword;