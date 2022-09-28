import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state ={
    data: 0
  }

  increase(number){
    this.setState(prev => {
      return { data: prev.data + number }
    });
  }

  render() {
    const random = Math.round(Math.random() * 10) + 1;
    return (
      <div>
        <button onClick={this.increase.bind(this, random)}>increase {random}</button>
        <div>{this.state.data}</div>
      </div>
    )
  }
}

export default App;