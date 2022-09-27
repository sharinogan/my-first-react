import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    user: "Voragun",
    password: "thisIsAbook",
    address: {
      houseNo: "123",
      province: "Bangkok"
    }
  };
  userClick = () => {
    this.setState({
      user: "Ronaldo",
      password: "IloveyouMoreToday123"
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 mx-auto mt-5">
            <div className="card ml-5 mr-5">
              <div className="card-header text-right">
                <button className="btn btn-success btn-sm" 
                  onClick={this.userClick}>
                    Click me</button>
              </div>
              <div className="card-body">
                user: <span className="ml-2">
                  {this.state.user}</span> <br />
                password: <span className="ml-2">
                  {this.state.password}</span> <br />
                address: <span className="ml-2">
                  {this.state.address.houseNo}
                  </span>
                  <span className="ml-1">{this.
                  state.address.province}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
