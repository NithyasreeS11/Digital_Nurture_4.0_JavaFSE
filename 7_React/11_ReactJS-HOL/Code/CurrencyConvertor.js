import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    const conversionRate = 0.011; // Approx: 1 INR = 0.011 EUR
    const result = parseFloat(rupees) * conversionRate;
    setEuro(result.toFixed(2));
  };

  return (
    <div className="converter">
      <h2>💱 Currency Converter (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in ₹ INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>€ Euro: {euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
