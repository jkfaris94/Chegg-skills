import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const timestamps = [timestamp, setTimestamps] = useState([]);

  const handleClick = () => {
    setTimestamps([...timestamps, Date.now()]);
  };

  return (
    <>
      <ClickTimes onClick={handleClick} />
      <TimestampsDisplay timestamps={timestamps} />
    </>
  );
}

export default App;
