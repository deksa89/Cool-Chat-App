import React from "react";
import RenderMessage from "./RenderMessage";

const Messages = (props) => {
  
  const { messages } = props;

  // console.log("messages: ", messages)

  return (
      <ul className="messages-list">{messages.map((message, index) => RenderMessage(props, message, index))}</ul>
  );
}

export default Messages;