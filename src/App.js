import React, { Component } from 'react';
import Messages from './components/Messages';
import Input from './components/Input';
import NameInput from './components/NameInput';
import './App.css';


function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16); 
}


class App extends Component {
  
  state = {
    messages: [],
    member: {
      color: randomColor()
    },
    showChat: false
  }

  handleFormSubmit = (name) => {
    const member = {...this.state.member}
    // console.log('member: ', member) // member:  {color: '#727cf6'}

    member.username = name;
    // console.log('member.username: ', member.username) // member.username:  dean

    this.setState({member, showChat: true})


    const CHANNEL_ID = 'qqxtR1YAPcD40c4W';
    this.drone = new window.ScaleDrone(CHANNEL_ID, {
      data: member
    });

    this.drone.on('open', error => {
      if (error) return console.error(error);

      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message
    });
  }

  render() {
    if (!this.state.showChat) {
      return (
        <div className="login__app">
          <div className='login__app-header'>
            <h1>Login to Best Chat App Ever</h1>
            <NameInput onSubmit={this.handleFormSubmit} />
          </div>
        </div>
      );
    }
  
    return (
      <div className="app">
        <div className='app-header'>
          <h1>Chat App</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }
}

export default App;