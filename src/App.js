import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const[state, setState] = useState({
    data: 0
  })
  const increase = (number) => {
    setState(prev => {
      return { data: prev.data + number }
    });
  }
  const random = Math.round(Math.random() * 10) + 1;
  return (
    <div>
      <button onClick={() => increase(random)}>increase {random}</button>
      <div>{state.data}</div>
    </div>
  )
}

export default App;