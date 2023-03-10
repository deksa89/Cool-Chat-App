import React from "react";


const RenderMessage = (props, message, index) => {
    const { member, text } = message;
    const { currentMember } = props;
  
    const messageFromMe = member.id === currentMember.id;
  
    const msgClassName = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
  
    return (
      <li key={index} className={msgClassName}>
        <span className="avatar" style={{ backgroundColor: member.clientData.color }} />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

export default RenderMessage;