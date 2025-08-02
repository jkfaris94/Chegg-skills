import { Routes, Route } from "react-router-dom";
// import { useContext } from "react";
import Header from "./components/common/Header";
import CurrentStats from "./components/CurrentStats";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/common/NoMatch";
import { TasksContext } from "./contexts/TasksContext";
import tasksData from "./data/tasks.json";



function App() {
  const complete = tasksData.filter((task) => task.complete);
  const contextValue = {tasks: tasksData, complete};

  return (
    <>
    <TasksContext.Provider value={contextValue}>
      <Header />
      <CurrentStats />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </TasksContext.Provider>
    </>
  );
}

export default App;
