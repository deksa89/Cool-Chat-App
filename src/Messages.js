import React from "react";

const Messages = (props) => {
  const renderMessage = (message, index) => {
    const { member, text } = message;
    const { currentMember } = props;

    // console.log("member: ", member) // {username: 'springpaper', color: '#549c50'}
    // console.log("text: ", text)
    // console.log("currentMember: ", currentMember)
    //console.log("props: ", props)

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

  //const { currentMember } = props;
  // console.log("currentMember2:", typeof(currentMember))
  
  
  const { messages, currentMember } = props;
  console.log("messages: ", messages)

  return (
    <>
      {/* <p>{currentMember.map((mb) => (mb.username))}</p> */}
      <ul className="Messages-list">{messages.map((message, index) => renderMessage(message, index))}</ul>
    </>
  );
}

export default Messages;