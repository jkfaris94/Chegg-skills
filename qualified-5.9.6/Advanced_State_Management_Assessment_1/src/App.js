import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import CurrentStats from "./components/CurrentStats";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/common/NoMatch";

import { TasksContextProvider } from "./contexts/TasksContext";
import { SalesContextProvider } from "./contexts/SalesContext";
import { CallsContextProvider } from "./contexts/CallsContext";

import contactsData from "./data/contacts.json";
import tasksData from "./data/tasks.json";
import salesData from "./data/sales.json";
import callsData from "./data/calls.json";


function App() {
  const [calls, setCalls] = useState(callsData);
  return (
    <>
      <Header />
      <TasksContextProvider initialData={tasksData}>
        <SalesContextProvider initialData={salesData}>
          <CurrentStats contacts={contactsData} calls={calls} />
            <CallsContextProvider initialData={callsData}>
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    contacts={contactsData}
                    calls={calls}
                    setCalls={setCalls}
                  />
                }
              />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </CallsContextProvider>
        </SalesContextProvider>
      </TasksContextProvider>
    </>
  );
}

export default App;
