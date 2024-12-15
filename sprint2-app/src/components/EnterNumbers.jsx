import React from "react";
import { useState } from "react";
import axios from "axios";

const EnterNumbers = ({ onTreeCreated }) => {
  const [numbers, setNumbers] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/processNumbers",
        numbers.split(",").map(Number)
      );
      setResponse(res.data);
      setError(null);
      onTreeCreated(res.data);
    } catch (error) {
      console.error("Error processing numbers:", error);
      setError("Error processing numbers. Please try again.");
      setResponse(null);
    }
  };

  return (
    <div class="numberBox">
      <h2>Enter Numbers</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="Enter numbers separated by commas"
        />
        <button type="submit">Process</button>
      </form>
      {response && (
        <div>
          <h3>Success!</h3>
          <p>Numbers entered: {response.inputNumbers}</p>
          <p>Tree Structure: {response.treeStructure}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default EnterNumbers;
