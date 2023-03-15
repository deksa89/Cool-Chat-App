import React from "react";
import AvatarGroup from 'react-avatar-group';
//import NewUserMessage from "./NewUserMessage";

const RenderMessage = (props, message, index) => {
    const { member, text } = message;
    const { currentMember } = props;

    const messageFromMe = member.id === currentMember.id;

    const msgClassName = messageFromMe  // ako je messageFromMe: true onda ce se prikazati poruka od mene na desnoj strani dok ce od drugih korisnika biti na lijevoj
      ? "messages-message current_member" // to da ispisuje lijevo/desno ovisi o korsiniku je rijeseno u css-u s messages-message current_member/messages-message
      : "messages-message";

    
      // console.log("messages: ", messages)
      // console.log("text: ", messages)

    //console.log("member.id: ", member.id)
    // console.log("showChat2: ", showChat)
    // console.log('messages.length', messages.length)


    return (
      <li key={index} className={msgClassName}>
        {/* <AvatarGroup avatars={[`${member.clientData.username}`]} initialCharacters={1} max={3} size={30} displayAllOnHover shadow={2}/> */}
        <div className="message-content">
          {/* <div className="username">{member.clientData.username}</div> */}
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

export default RenderMessage;