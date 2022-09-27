import React from 'react';
import './App.css';
import Post from './Post';

const App = () => {
  return (
    <div className="App">
      <Post myId="1">Apollo 11 has arrive to Earth complete.</Post>
      <Post myId="2">It can take a picture. Amazing!!!</Post>
    </div>
  );
}

export default App;
