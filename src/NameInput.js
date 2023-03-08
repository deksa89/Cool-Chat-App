import React, { useState } from 'react';

const NameInput = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameInput;
