import { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Clean the house", completed: false },
    { id: 3, text: "Study React", completed: false },
  ]);

  function toggleTodo(id) {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  setTodos(updatedTodos);
}

  return (
    <div >
      {todos.map((todo) => (
        <div >
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo}/>
        </div>
      ))}
    </div>
  );
}



export default App;
