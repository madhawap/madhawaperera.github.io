import React from 'react';
import profilePicture from './img/myAvatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi! I am Madhawa</h1>
      <img src={profilePicture} alt="profile-picture"/>
    </div>
  );
}

export default App;
