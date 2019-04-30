import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Background from './components/Background';
import ball from './img/ball_tras_640_i.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <img className="App-logo" src={ball} alt="basketball" />
      </header>
      <p className="is-white">Some works on:</p>
      <a
        className="link1"
        href="http://nicolag.it"
        target="_blank"
        rel="noopener noreferrer"
        title="nicolag"
      >
        nicolag.it
        </a>
      <Background />
    </div>
  );
}

export default App;
