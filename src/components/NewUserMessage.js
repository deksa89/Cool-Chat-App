import React from 'react';

const NewUserMessage = ({ user }) => {

  console.log('user: ', user)

  return (
    <div className="new-user-message">
      <span className="new-user-message__username">{user} has joined the chatroom</span>
    </div>
  );
};

export default NewUserMessage;
