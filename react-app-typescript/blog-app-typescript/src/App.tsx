import './App.css';
import Person from './Person';

function App() {
  const headshotUrl = "example.com/jpg"
  return (
    <div className="App">
      <Person name={"Dwayne 'The Rock' Johnson"} age={51} headshot={headshotUrl} />
    </div>
  );
}

export default App;
