import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state ={
    data: 0
  }

  increase = () => {
    this.setState(prev => {
      return { data: prev.data + 1 }
    });
  }
  decrease() {
    this.setState(prev => {
      return { data: prev.data - 1 }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increase}>increase</button>
        <button onClick={this.decrease}>decrease</button>
        <div>{this.state.data}</div>
      </div>
    )
  }
}

export default App;