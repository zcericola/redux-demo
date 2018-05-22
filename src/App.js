import React, { Component } from 'react';
import './App.css';
import Films from './components/Films';
import People from './components/People';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Films/>
        <People />
      </div>
    );
  }
}

export default App;
