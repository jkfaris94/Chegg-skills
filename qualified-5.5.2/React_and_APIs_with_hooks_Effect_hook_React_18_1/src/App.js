import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=2

  useEffect(() => { async function loadToDos() {
    try { 
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=2");
      const data = await response.json();
      setToDos(data);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  loadToDos();
  }, []);
  return (
    <div className="App">
      <h1>To Do List </h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
