import "./App.css";
import WelcomeBack from "./WelcomeBack";
import CoinTossCounter from "./CoinTossCounter";
import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";


function EncouragingWords() {
  return <p>Believe it</p>;
}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
}

function App() {
  const [timestamps, setTimestamps] = useState([]);

  const handleClick = () => {
    setTimestamps([...timestamps, Date.now()]);
  };

  return (
    <>
      <WelcomeBack />
      <EncouragingWords />
      <DailyTip />
      <CoinTossCounter />
      <ClickTimes onClick={handleClick} />
      <TimestampsDisplay timestamps={timestamps} />
    </>
  );
}

export default App;
