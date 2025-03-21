import "./App.css";
import WelcomeBack from "./WelcomeBack";


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
    </>
  );
}

export default App;
