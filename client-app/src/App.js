import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/values').then((resonse) => {
      setValues(resonse.data);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {values.map(value => <ul><li>{value.name}</li></ul>)}
        </a>
      </header>
    </div>
  );
}

export default App;
