import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./Counter";
import Navbar  from './Navbar';

const App = () => {
  return (
    <div>
       <Navbar />
      <Counter />
    </div>  
  );
}

export default App;