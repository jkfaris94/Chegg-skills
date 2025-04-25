import { Routes, Route } from "react-router-dom";
import Deck from "./components/Deck";
import Header from "./common/Header"

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={"App"} name="home Page"/> //displays decks and description
        <Route path="/decks/:deckId" element={<Deck />}>
          </Route>
    


        <Route path="*" element={<p>Not found...</p>} />
      </Routes>
    </>
  );
}

export default App;

