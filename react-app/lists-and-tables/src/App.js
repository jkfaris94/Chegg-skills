import logo from './logo.svg';
import './App.css';

const todos = [
  "finish coding lesson",
  "clean my desk",
  "make lunch"
];

function App() {
  const listItems = todos.map((todo, index) => <li key={index}>{todo}</li>);
  return <ul>{listItems}</ul>;
}

export default App;
