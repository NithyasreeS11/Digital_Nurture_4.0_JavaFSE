// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Kohli', 'Rahul', 'Jadeja', 'Pant', 'Iyer'];
  const evenTeam = ['Rohit', 'Gill', 'Hardik', 'Bumrah', 'Siraj', 'Suryakumar'];

  const [player1, player2, player3, ...others] = oddTeam;

  const T20players = ['Virat', 'Rohit', 'Hardik'];
  const RanjiTrophy = ['Pujara', 'Rahane', 'Mayank'];

  const allPlayers = [...T20players, ...RanjiTrophy]; // Merging using ES6

  return (
    <div>
      <h2>Odd Team Players (Destructuring)</h2>
      <ul>
        <li>{player1}</li>
        <li>{player2}</li>
        <li>{player3}</li>
        {others.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players List</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
