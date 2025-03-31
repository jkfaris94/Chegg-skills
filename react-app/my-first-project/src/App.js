import "./App.css";
import WelcomeBack from "./WelcomeBack";
import CoinTossCounter from "./CoinTossCounter";


function EncouragingWords() {
  return <p>Believe it</p>;
}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
}

function App() {
  return (
    <>
      <WelcomeBack />
      <EncouragingWords />
      <DailyTip />
      <CoinTossCounter />
    </>
  );
}

export default App;
