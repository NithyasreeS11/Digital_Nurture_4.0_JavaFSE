import React from 'react';
import FlightList from './FlightList';

const GuestPage = () => {
  return (
    <div>
      <h1>Welcome, Guest ✈️</h1>
      <p>Please login to book your flight tickets.</p>
      <FlightList isLoggedIn={false} />
    </div>
  );
};

export default GuestPage;
