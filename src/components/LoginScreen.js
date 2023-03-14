import React, { useState } from 'react';

import './LoginScreen.css'

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(username.length < 3) {
      setShowWarning(true)
    } else {
      setSubmitted(true);
      props.onUsernameSubmit(capitalizeFirstLetter(username))
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div>
      {submitted ? null : (
        <form className="login__form" onSubmit={handleSubmit}>
          <h3 className='login__username'>Username:</h3>
          <label className='login__label'>
            <input className='login__input'
              type="text"
              value={username}
              onChange={handleInputChange}
              placeholder='Write your username...'
            />
            <button type="submit">Submit</button>
          </label>
        </form>
      )}
      {showWarning && <p>Please enter a username with at least 3 characters.</p>}
    </div>
  );
};

export default LoginScreen;