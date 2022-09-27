import React from 'react';
import './App.css';
import Post from './Post';

const App = () => {
 
  return (
    <div className="ui container comments">
      <Post studentName="Tom" score="63" />
      <Post studentName="Jerry" score="78" />
    </div>
  );
}

export default App;
