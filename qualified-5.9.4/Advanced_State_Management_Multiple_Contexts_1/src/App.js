import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import CurrentStats from "./components/CurrentStats";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/common/NoMatch";

import { TasksContextProvider } from "./contexts/TasksContext";

import tasksData from "./data/tasks.json";
import salesData from "./data/sales.json";

function App() {
  return (
    <>
      <Header />
      <TasksContextProvider initialData={tasksData}>
        <CurrentStats sales={salesData} />
        <Routes>
          <Route path="/" element={<Dashboard sales={salesData} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </TasksContextProvider>
    </>
  );
}

export default App;
