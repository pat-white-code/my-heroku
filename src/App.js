import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App () {
  const test = async () => {
    let response = await axios.get('/test');
    console.log(response);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={test}> TEST SERVER </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
