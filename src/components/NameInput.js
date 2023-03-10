import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NameInput;