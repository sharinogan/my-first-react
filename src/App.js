import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    value: 1
  };
  render() {
    return (
      <div>
        <input
          type="button"
          onClick={this.increase}
          value="INCREASE" />
      </div>
    )
  }
  increase = () => {
    this.setState(
      (prevState) => {
        return { value: prevState.value + 1 }
      },
      () => {
        console.log(this.state.value);
      }
    );
  }
}