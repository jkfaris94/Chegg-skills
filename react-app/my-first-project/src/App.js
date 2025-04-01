import "./App.css";
import WelcomeBack from "./WelcomeBack";
import CoinTossCounter from "./CoinTossCounter";
import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";
import SubscribeForm from "./SubscribeForm";
import SubscriberList from "./SubscriberList"
import SubscriberForm2 from "./SubscriberForm2";


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

  const [subscribers, setSubscribers] = useState([]);

  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      newSubscriber,
      ...currentSubscribers,
    ]);

  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) =>
      currentSubscribers.filter((post, index) => index !== indexToDelete)
    );

  return (
    <>
      <WelcomeBack />
      <EncouragingWords />
      <DailyTip />
      <CoinTossCounter />
      <ClickTimes onClick={handleClick} />
      <TimestampsDisplay timestamps={timestamps} />
      <SubscribeForm createSubscriber={createSubscriber} />
      <SubscriberList
        subscribers={subscribers}
        deleteSubscriber={deleteSubscriber}
      />
      <SubscriberForm2 />
    </>
  );
}

export default App;
