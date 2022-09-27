import React from 'react';
import Post from './Post';
import Comment from './Comment';

const App = () => {
  return (
    <div className="App">
      <div style={{color:'white', backgroundColor:'blue',
          fontSize:30}}>Hello Inline Style CSS</div>
      <p style={
        {
          color:'red',
          fontSize: 14,
          textAlign: 'center'
        }
      }>This is the another inline style css</p>
    </div>
  );
}

export default App;
