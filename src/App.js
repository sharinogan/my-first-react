import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Voragun';
  const num1 = 5;
  const num2 = 10;
  const randomNumber = Math.random();
  return (
    <div className="App">
      <p>ชื่อของผมคือ { name }</p>
      <p>Score {num1} + {num2} = {num1 + num2}</p>
      <p>{randomNumber}</p>
      <p>
        {
          randomNumber < 0.5 ?
          <div>Lost</div> :
          <div>Win</div>
        }
      </p>
    </div>
  );
}

export default App;
