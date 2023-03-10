import React from "react";
import RenderMessage from "./RenderMessage";

const Messages = (props) => {
  
  const { messages } = props;

  return (
      <ul className="Messages-list">{messages.map((message, index) => RenderMessage(props, message, index))}</ul>
  );
}

export default Messages;