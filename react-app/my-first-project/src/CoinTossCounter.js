import React, { useState } from "react";

function CoinTossCounter() {
    const [results, setResults] = useState([]);
    const [counts, setCounts] = useState({ H: 0, T: 0 });
    const handleClick = (value) => {
      setResults([...results, value]);
      setCounts({
        ...counts,
        [value]: counts[value] + 1,
      });
    };


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
          <ul>
            <li>Heads: {counts["H"]}</li>
            <li>Tails: {counts["T"]}</li>
          </ul>
        </div>
        <ul>{lis}</ul>
      </section>
    );
  }

  export default CoinTossCounter;