import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    inputValue: 'Origin Value'
  };
  render() {
    return (
      <div>
        <button onClick={this.myFunction}>Click</button>
      </div>
    )
  }
  myFunction = () => {
    this.setState (
      { inputValue: 'New Updated Value'},
      () => {
        console.log('After setState Complete');
        console.log(this.state.inputValue);
      });
    console.log('Before setState complete');
    console.log(this.state.inputValue);
  }
}