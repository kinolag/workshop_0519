import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Background from './components/Background';
import Embed01 from './components/Embed01';
import Player from './components/ReactPlayer01'
import ball from './img/ball_tras_640_i.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <Player />
      </header>
      <Background />
      <Embed01 />
      {/* <div className="column-c">
        <img className="App-logo opacity-0-75" src={ball} alt="basketball" />

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
      </div> */}
    </div>
  );
}

export default App;