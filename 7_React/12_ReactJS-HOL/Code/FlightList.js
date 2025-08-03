import React from 'react';

const FlightList = ({ isLoggedIn }) => {
  const flights = [
    { id: 1, name: 'IndiGo 6E-203', from: 'Chennai', to: 'Delhi', price: 4500 },
    { id: 2, name: 'Air India AI-101', from: 'Mumbai', to: 'Kolkata', price: 5200 },
    { id: 3, name: 'SpiceJet SG-456', from: 'Hyderabad', to: 'Bengaluru', price: 3200 },
  ];

  return (
    <div>
      <h2>Available Flights</h2>
      {flights.map((flight) => (
        <div key={flight.id} className="flight-card">
          <p><strong>{flight.name}</strong></p>
          <p>From: {flight.from} → To: {flight.to}</p>
          <p>Price: ₹{flight.price}</p>
          {isLoggedIn ? (
            <button onClick={() => alert(`Ticket booked for ${flight.name}`)}>Book Ticket</button>
          ) : (
            <p style={{ color: 'gray' }}><em>Login to book</em></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightList;
