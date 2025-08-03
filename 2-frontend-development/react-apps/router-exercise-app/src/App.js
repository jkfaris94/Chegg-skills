import React from "react"
import './App.css';
import { BrowserRouter as Router,
   Link,
   Routes,
   Route,
   useLocation,
  } from "react-router-dom";

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function NoMatch() {
  const location = useLocation();

  return (
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
