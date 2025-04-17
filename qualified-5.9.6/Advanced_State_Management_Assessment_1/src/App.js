import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import CurrentStats from "./components/CurrentStats";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/common/NoMatch";

import { TasksContextProvider } from "./contexts/TasksContext";
import { SalesContextProvider } from "./contexts/SalesContext";
import { CallsContextProvider } from "./contexts/CallsContext";
import { ContactsContextProvider } from "./contexts/ContactsContext";

import contactsData from "./data/contacts.json";
import tasksData from "./data/tasks.json";
import salesData from "./data/sales.json";
import callsData from "./data/calls.json";



function App() {
  return (
    <>
      <Header />
      <TasksContextProvider initialData={tasksData}>
        <SalesContextProvider initialData={salesData}>
          
            <CallsContextProvider initialData={callsData}>
              <ContactsContextProvider initialData={contactsData}>
              <CurrentStats />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
            </ContactsContextProvider>
          </CallsContextProvider>
        </SalesContextProvider>
      </TasksContextProvider>
    </>
  );
}

export default App;
