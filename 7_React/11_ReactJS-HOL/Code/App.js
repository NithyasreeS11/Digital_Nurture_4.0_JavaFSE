import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // Multiple method for "Increment"
  const incrementValue = () => {
    setCounter(prev => prev + 1);
  };

  const sayHello = () => {
    console.log("Hello! You clicked Increment!");
    alert("Hello! You clicked the Increment button.");
  };

  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  // Decrement handler
  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  // Function with argument
  const sayMessage = (msg) => {
    alert(msg);
  };

  // Synthetic event handler
  const handleSyntheticEvent = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>🧪 Event Examples App</h1>

      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayMessage("Welcome!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handleSyntheticEvent}>Synthetic Event (OnPress)</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
