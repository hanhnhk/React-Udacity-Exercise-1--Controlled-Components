import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
    inputValue: ''
  }

  handleChange= (event) =>{
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const {inputValue}= this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={inputValue} onChange={this.handleChange}/>
          <p className="echo">Echo:</p>
          <p>{inputValue}</p>
        </div>
      </div>
    );
  }
}

export default App;
