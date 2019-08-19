import React from 'react';
import './App.css';
import image from './assets/react-logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image}></img>
        <p>
          Hello world!
        </p>
      </header>
    </div>
  );
}

export default App;
