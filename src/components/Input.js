import React, { useState } from "react";

const Input = (props) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    props.onSendMessage(text);
  }

  return (
    <div className="input">
      <form className="message-form" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Start chatting ..."
          autoFocus={true}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Input;