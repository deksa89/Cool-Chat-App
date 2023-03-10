import React, { useState } from 'react';

import './NameInput.css'

const NameInput = (props) => {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    props.onSubmit(username)
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
              placeholder='Put your username...'
            />
            <button type="submit">Submit</button>
          </label>
        </form>
      )}
    </div>
  );
};

export default NameInput;