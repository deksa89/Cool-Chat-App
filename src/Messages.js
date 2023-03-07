// import { Component } from 'react';
// import React from 'react';

// class Messages extends Component {
//   render() {
//     const { messages } = this.props;

//     return (
//       <ul className='Messages-list'>
//         {messages.map(m => this.renderMessage(m))}
//       </ul>
//     );
//   }

//   renderMessage(message) {
//     const { member, text } = message;
//     const { currentMember } = this.props;
//     const messageFromMe = member.id === currentMember.id;

//     const msgClassName = messageFromMe ?
//       'Messages-message currentMember' : 'Messages-message';
    
//     return (
//       <li className={msgClassName}>
//         <span
//           className='avatar'
//           style={{backgroundColor: member.color}}
//         />
//         <div className='Message-content'>
//           <div className='username'>
//             {member.username}
//           </div>
//           <div className='text'>{text}</div>
//         </div>
//       </li>
//     )
//   }
// }

// export default Messages;

import React from "react";

const Messages = (props) => {
  const renderMessage = (message) => {
    const { member, text } = message;
    const { currentMember } = props;
    const messageFromMe = member.id === currentMember.id;

    const msgClassName = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li className={msgClassName}>
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
    <ul className="Messages-list">{messages.map((m) => renderMessage(m))}</ul>
  );
}

export default Messages;
