import React, { useState } from 'react';

function FibonacciSeries() {
  const [series, setSeries] = useState([]);
  const [count, setCount] = useState(0);

  const generateSeries = () => {
    const fibonacci = [0, 1];
    for (let i = 2; i < count; i++) {
      fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    setSeries(fibonacci);
  };

  return (
    <div>
      <h2>Fibonacci Series Generator</h2>
      <label>
        Enter count:
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </label>
      <button onClick={generateSeries}>Generate Series</button>
      <ul>
        {series.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default FibonacciSeries;