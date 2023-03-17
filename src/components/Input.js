import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const Input = (props) => {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");

    props.onSendChatMessage(text);
  };

  const handleEmojiClick = (emojiObject) => {
    setText((prevMsg)=> prevMsg + emojiObject.emoji)
  };

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
        <img
          className="emoji-icon"
          alt='emoji'
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker(val => !val)} />
        <button>Send</button>
      </form>
      <div className='pop-up'>
        {showPicker && (<Picker onEmojiClick={handleEmojiClick} />)}
      </div>
    </div>
  );
};

export default Input;