import React from 'react';
import FlightList from './FlightList';

const UserPage = () => {
  return (
    <div>
      <h1>Welcome, User 👤</h1>
      <p>You are now logged in. Feel free to book your flight!</p>
      <FlightList isLoggedIn={true} />
    </div>
  );
};

export default UserPage;
