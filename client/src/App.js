import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Login to Spotify
        </p>
        <a
          className="Login-link"
          href="https://spotify-spot.herokuapp.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to login
        </a>
      </header>
    </div>
  );
}

export default App;
