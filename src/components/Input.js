import React, { useState } from "react";

const Input = (props) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    //console.log(e.target.value) // mjenja se na svaku promjenu/za svako slovo u inputu za unos poruke 
  }

  const onSubmit = (e) => {
    e.preventDefault(); // sprijecava defaultno ponasanje form submissiona (neophodno kad se radi s single-page aplikacijom)
    setText("");  // svrha setText je da vrati text da ocisti input field nakon sto je forma submittana
    // console.log("text: ", text) // setText postaje text na onSubmit

    props.onSendChatMessage(text); // zove funkciju onSendChatMessage koja je proslijedena kao props ovoj komponenti, a text varijabla salje chat poruku serveru
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