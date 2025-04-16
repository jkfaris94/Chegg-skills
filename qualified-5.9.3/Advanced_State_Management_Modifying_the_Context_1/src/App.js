import { Routes, Route } from "react-router-dom";
import { TasksContextProvider } from "./contexts/TasksContext";
import Header from "./components/common/Header";
import CurrentStats from "./components/CurrentStats";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/common/NoMatch";

import { TasksContext } from "./contexts/TasksContext";

import tasksData from "./data/tasks.json";

function App() {
  return (
    <>
      <Header />
      <TasksContextProvider initialData={tasksData}>
        <CurrentStats />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </TasksContextProvider>
    </>
  );
}

export default App;
