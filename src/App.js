import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 20
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.speed} km/h</h1>
      </div>
    );
  }
}

export default App;
