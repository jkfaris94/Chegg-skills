import React, { useState } from "react";

function CoinTossCounter() {
    const [results, setResults] = useState([]);
    const handleClick = (value) => setResults([...results, value]);

    const lis = results.map((result, index) => (
        <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
    ));

    const handleDeleteLast = () => {
      const filteredList = results.filter(
        (result, index) => index !== results.length - 1
      );
      setResults(filteredList);
    };
    
    return (
      <section>
        <div>
          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
          <button onClick={handleDeleteLast}>Delete Last</button>
        </div>
        <ul>{lis}</ul>
      </section>
    );
  }

  export default CoinTossCounter;