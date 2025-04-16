import { createContext, useState } from "react";
export const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
  toggleTaskCompletion: () => {},
});


export function TasksContextProvider({ initialData, children }) {
  const [tasks, setTasks] = useState(initialData);
  
    const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };
  
  return (
  <TasksContext.Provider value={{ tasks, setTasks, toggleTaskCompletion }}>
      {children} 
      </TasksContext.Provider>
  );
}