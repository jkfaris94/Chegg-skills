import "./App.css";
import WelcomeBack from "./WelcomeBack";
import CoinTossCounter from "./CoinTossCounter";
import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";
import SubscribeForm from "./SubscribeForm";
import SubscriberList from "./SubscriberList"
import SubscriberForm2 from "./SubscriberForm2";
import ProfileEdit from "./ProfileEdit"

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

    //cleanup example
    const [userId, setUserID] = useState(1);

    const userIds = [1, 2, 3, 4];
  

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
      <div className="App">
        {userIds.map((id) => (
          <button key={id} onClick={() => setUserID(id)}>
            User ID {id}
          </button>
        ))}
        <h2>User ID {userId}</h2>
        <ProfileEdit userID={userId} />
      </div>
    </>
  );
}

export default App;
