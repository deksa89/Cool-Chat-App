import React, { useState } from 'react';
import Messages from './components/Messages';
import Input from './components/Input';
import LoginScreen from './components/LoginScreen';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({});
  const [showChat, setShowChat] = useState(false);
  const [drone, setDrone] = useState(null);


///////////////// STARI KOD BEZ POZDRAVNE PORUKE ////////////////////////////

  const handleFormSubmit = (name) => {
    const memberCopy = { ...member };
    memberCopy.username = name;
    
    setMember(memberCopy);
    setShowChat(true);


    const CHANNEL_ID = 'qqxtR1YAPcD40c4W';
    const drone = new window.ScaleDrone(CHANNEL_ID, {
      data: memberCopy,
    });

    drone.on('open', (error) => {
      if (error) return console.error(error);

      const memberCopy = { ...member };
    
      memberCopy.id = drone.clientId;
      setMember(memberCopy);
    });

    const room = drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { member, text: data },
      ]);
    });

    setDrone(drone);
  };

////////////////////NOVI KOD ZA PRIKAZ NOVOG USERA///////////////////////////////



//////////////////////////////////////////////////////////////////////////////////

  const onSendMessage = (message) => {
    drone.publish({
      room: 'observable-room',
      message,
    });
  };
  
  if (showChat === false) {
    return (
      <div className="login__app">
        <div className="login__app-header">
          <h1>Login to Best Chat App Ever</h1>
          <LoginScreen onUsernameSubmit={handleFormSubmit} />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>Chat App</h1>
      </div>
      <Messages messages={messages} currentMember={member} />
      <Input onSendChatMessage={onSendMessage} />
    </div>
  );
}

export default App;
