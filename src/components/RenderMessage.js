import React from "react";
import AvatarGroup from 'react-avatar-group';


const RenderMessage = (props, message, index) => {
    const { member, text } = message;
    const { currentMember } = props;

    const messageFromMe = member && member.id === currentMember.id;

    const msgClassName = messageFromMe
      ? "messages-message current_member"
      : "messages-message";

    const username = member ? member.clientData.username : "Chatbot messages";

    if (username === "Chatbot messages") {
      return (
        <li key={index} className={msgClassName}>
          <div className="message-content_chatbot">
            <div className="chatbot-text">{text}</div>
          </div>
        </li>
      );
    }

    return (
      <li key={index} className={msgClassName}>
        <AvatarGroup avatars={[`${username}`]} initialCharacters={1} max={3} size={30} displayAllOnHover shadow={2}/>
        <div className="message-content">
          <div className="username">{username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

export default RenderMessage;

