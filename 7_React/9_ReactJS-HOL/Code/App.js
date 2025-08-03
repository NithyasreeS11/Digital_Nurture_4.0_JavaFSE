// src/App.js
import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const flag = false; // Change to false to toggle component

  return (
    <div className="App">
      <h1>🏏 Welcome to CricketApp</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
