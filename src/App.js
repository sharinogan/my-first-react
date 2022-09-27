import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const myPic = 'https://placekitten.com/640/360';
  return (
    <div className="container">
      <img className="img-thubnail" src={myPic} alt="kitten" />
    </div>
  );
}

export default App;
