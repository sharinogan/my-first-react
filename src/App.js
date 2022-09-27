import React from 'react';
import './App.css';
import Post from './Post';
import Comment from './Comment';

const App = () => {
  return (
    <div>
      <Post id="2">
        <Comment userId="1" data="5 stars" />
        <Comment userId="8" data="4 stars" />
      </Post>
    </div>
  );
}

export default App;
