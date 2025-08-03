// src/components/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 89 },
    { name: 'Rohit Sharma', score: 45 },
    { name: 'Jasprit Bumrah', score: 73 },
    { name: 'KL Rahul', score: 60 },
    { name: 'Shubman Gill', score: 88 },
    { name: 'Hardik Pandya', score: 49 },
    { name: 'Suryakumar Yadav', score: 75 },
    { name: 'Ravindra Jadeja', score: 64 },
    { name: 'Mohammed Siraj', score: 82 },
    { name: 'Rishabh Pant', score: 52 },
    { name: 'Shreyas Iyer', score: 92 },
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>All Players with Scores</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score >= 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
