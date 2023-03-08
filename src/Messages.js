import React from "react";

const Messages = (props) => {
  const renderMessage = (message, index) => {
    const { member, text } = message;
    const { currentMember } = props;
    const messageFromMe = member.id === currentMember.id;

    const msgClassName = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li key={index} className={msgClassName}>
        <span className="avatar" style={{ backgroundColor: member.color }} />
        <div className="Message-content">
          <div className="username">{member.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  const { messages } = props;

  return (
    <ul className="Messages-list">{messages.map((message, index) => renderMessage(message, index))}</ul>
  );
}

export default Messages;