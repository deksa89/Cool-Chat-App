import React from "react";
import AvatarGroup from 'react-avatar-group';

const RenderMessage = (props, message, index) => {
    const { member, text } = message;
    const { currentMember } = props;
  
    const messageFromMe = member.id === currentMember.id;
  
    const msgClassName = messageFromMe
      ? "messages-message current_member"
      : "messages-message";
 
    return (
      <li key={index} className={msgClassName}>
        <AvatarGroup avatars={[`${member.clientData.username}`]} initialCharacters={1} max={3} size={30} displayAllOnHover shadow={2}/>
        <div className="message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

export default RenderMessage;