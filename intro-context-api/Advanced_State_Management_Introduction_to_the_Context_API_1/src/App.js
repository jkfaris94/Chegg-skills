import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import CurrentStats from "./components/CurrentStats";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/common/NoMatch";

import tasksData from "./data/tasks.json";

function App() {
  return (
    <>
      <Header />
      <CurrentStats tasks={tasksData} />
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasksData} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
