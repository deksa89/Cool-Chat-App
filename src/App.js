import React, { useState, useEffect } from 'react';
import Messages from './components/Messages';
import Input from './components/Input';
import LoginScreen from './components/LoginScreen';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({});
  const [showChat, setShowChat] = useState(false);
  const [drone, setDrone] = useState(null);
  //const [users, setUsers] = useState(false); // postaviti da ispisuje novu poruku kad se novi korisnik pojavi

  //const [showMessage, setShowMessage] = useState(true);

  // useEffect(() => {
  //   if (showChat && showMessage && messages.length > 0) {
  //     console.log("This message will appear only once when the component renders for the first time.");
  //     setShowMessage(false); // Set showMessage to false after the message is shown
  //   }
  // }, [showChat, messages.length, showMessage]);

  
  // useEffect(() => {
    //   if (showChat) {
      //     setUsers(true);
      //     console.log('new user!!!')
      
      //     let novi = 'new user has entered chat'
      //   }
      // }, [showChat]);
      

  // console.log('showchat: ', showChat)
  // console.log('showMessage: ', showMessage)
  // console.log('messages: ', messages)
  // console.log('users: ', users)

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
      <Messages messages={messages} currentMember={member} showChat={showChat} />
      <Input onSendChatMessage={onSendMessage} />
    </div>
  );
}

export default App;
