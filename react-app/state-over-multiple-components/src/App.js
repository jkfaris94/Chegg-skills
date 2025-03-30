import React, {useState} from 'react';
import Header from './Header.js'
import Content from './Content.js'
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const [fontSize, setFontSize] = useState(12)

  const handleFontSizeIncrease = () => {
    setFontSize(prevSize => prevSize + 2);
  };
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeIncrease={handleFontSizeIncrease}/>
      <Content loggedIn={loggedIn} fontSize={fontSize}/>
    </div>
  );
}

export default App;
