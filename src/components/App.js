
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [billAmount, setBillAmount] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  // Function to calculate the tip per person
  const calculateTipPerPerson = () => {
    const totalTip = (billAmount * tipPercentage) / 100;
    return (totalTip / numberOfPeople).toFixed(2);
  };
  return (
    <div className="tip-calculator">
      <div className="input-container">
        <label htmlFor="billInput">Bill:</label>
        <input
          id="billInput"
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="tipPercentageInput">Tip Percentage:</label>
        <input
          id="tipPercentageInput"
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="numberOfPeopleInput">Number of People:</label>
        <input
          id="numberOfPeopleInput"
          type="number"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
        />
      </div>
      <p>Tip Per Person: ${calculateTipPerPerson()}</p>
    </div>
  )
}

export default App
