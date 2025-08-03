import React from 'react';
import './App.css';

function App() {
  // Single office object
  const singleOffice = {
    name: 'Skyline Workspace',
    rent: 55000,
    address: '123 Business Street, Bengaluru',
    image: 'https://via.placeholder.com/300x200?text=Office+Image'
  };

  // List of office spaces
  const officeList = [
    {
      name: 'CityView Suites',
      rent: 75000,
      address: '21 Tech Park, Hyderabad',
      image: 'https://via.placeholder.com/300x200?text=Office+1'
    },
    {
      name: 'TechNova Hubs',
      rent: 45000,
      address: '88 Startup Lane, Chennai',
      image: 'https://via.placeholder.com/300x200?text=Office+2'
    },
    {
      name: 'PrimeSpaces',
      rent: 62000,
      address: '45 Executive Blvd, Mumbai',
      image: 'https://via.placeholder.com/300x200?text=Office+3'
    }
  ];

  return (
    <div className="App">
      <h1>🏢 Office Space Rental App</h1>

      {/* Single Office Info */}
      <h2>Featured Office</h2>
      <img src={singleOffice.image} alt="Office" />
      <p><strong>Name:</strong> {singleOffice.name}</p>
      <p><strong>Address:</strong> {singleOffice.address}</p>
      <p style={{ color: singleOffice.rent < 60000 ? 'red' : 'green' }}>
        <strong>Rent:</strong> ₹{singleOffice.rent}
      </p>

      {/* List of Offices */}
      <h2>Available Office Spaces</h2>
      {officeList.map((office, index) => (
        <div key={index} className="office-card">
          <img src={office.image} alt={`Office ${index + 1}`} />
          <p><strong>Name:</strong> {office.name}</p>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
